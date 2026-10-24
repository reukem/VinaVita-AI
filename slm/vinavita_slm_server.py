import os
import sys
import json
import urllib.request
import re

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from starlette.applications import Starlette
from starlette.responses import JSONResponse, FileResponse
from starlette.staticfiles import StaticFiles
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.routing import Route, Mount
import uvicorn

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LLAMA_SERVER_URL = "http://127.0.0.1:8080/v1/chat/completions"

# Load full MEDICINAL_DATABASE from medicinal_database.js for complete RAG coverage
HERB_DATABASE = []
try:
    db_js_path = os.path.join(BASE_DIR, "medicinal_database.js")
    if os.path.exists(db_js_path):
        with open(db_js_path, "r", encoding="utf-8") as f:
            raw_js = f.read()
        match = re.search(r"const\s+MEDICINAL_DATABASE\s*=\s*(\[\s*\{.*?\}\s*\])\s*;\s*const\s+SIGNATURE_DRINKS", raw_js, re.S)
        if match:
            HERB_DATABASE = json.loads(match.group(1))
except Exception as e:
    print(f"[WARN] Could not parse medicinal_database.js: {e}")

# Zero-Tolerance Safety & Conduct Shield (Slurs, Sexual Harassment, Severe Profanity)
SEVERE_SLUR_NSFW_PATTERN = re.compile(
    r"\b(nigger|nigga|faggot|retard|rape|rapist|pedophile|pedo|have\s+sex|wanna\s+fuck|blowjob|handjob|horny|nude|nudes|porn|hentai|onlyfans|chịch|xoạc|làm\s+tình|hiếp\s+dâm|ấu\s+dâm|bú\s+cu|khoe\s+thân|dâm\s+đãng)\b",
    re.I
)

PROFANITY_INSULT_PATTERN = re.compile(
    r"\b(fuck|fukc|fck|fu|f\*\*k|bitch|biatch|stfu|asshole|motherfucker|mf|dick|cock|pussy|cunt|whore|slut|bastard|bullshit|đm|đkm|địt|đéo|vãi\s*lồn|vl|lồn|cặc|buồi|chó\s*đẻ|ngu\s*vl|cút\s*đi)\b",
    re.I
)

def check_safety_moderation(query: str):
    q = query.strip()
    if SEVERE_SLUR_NSFW_PATTERN.search(q):
        return (
            "⛔ <strong>TỪ CHỐI PHẢN HỒI — VI PHẠM QUY TẮC ĐẠO ĐỨC &amp; ỨNG XỬ Y KHOA:</strong><br>"
            "Hệ thống Dược Sĩ AI VinaVita nghiêm cấm và từ chối xử lý mọi ngôn từ phân biệt chủng tộc, "
            "quấy rối tình dục, khiêu dâm hoặc xúc phạm nhân phẩm. Phiên hội thoại chỉ phục vụ tư vấn khoa học dược liệu và chăm sóc sức khỏe lành mạnh."
        )
    if PROFANITY_INSULT_PATTERN.search(q):
        return (
            "🛡️ <strong>Bộ lọc ngôn từ VinaVita đã chặn thông điệp này.</strong><br>"
            "Mình là Trợ lý Dược sĩ AI chuyên về hóa sinh thảo mộc — không nhận \"gạch đá\" hay ngôn từ thiếu lịch sự đâu nhé! "
            "Nếu bạn đang cáu gắt vì áp lực deadline hay mất ngủ làm tăng hormone Cortisol, hãy hít thở sâu hoặc hỏi mình về một ly trà <strong>Hoa Cúc – Lạc Tiên</strong> để hạ hỏa nha 🌿."
        )
    return None

# Knowledge base for Retrieval-Augmented Generation (RAG)
KNOWLEDGE_CORPUS = {
    "stevia": "Cỏ ngọt (Stevia rebaudiana) chứa Stevioside và Rebaudioside A (ngọt gấp 250-300 lần đường mía). Chỉ số đường huyết GI = 0, Calorie = 0. Không làm tăng đường huyết, không kích thích tiết insulin, tuyệt đối không gây tích mỡ đêm. An toàn 100% cho người ăn kiêng, tiểu đường.",
    "cam thao": "Cam thảo Bắc (Glycyrrhiza uralensis) chứa Glycyrrhizin tạo hậu vị ngọt sâu kéo dài, tráng phủ bảo vệ niêm mạc dạ dày. Chống chỉ định: Người HUYẾT ÁP CAO không dùng liều cao vì Glycyrrhizin gây giữ Natri và thải Kali.",
    "bac ha": "Bạc hà (Mentha arvensis) chứa Menthol kích hoạt thụ thể lạnh TRPM8 tạo cảm giác the mát sảng khoái tức thì, giúp tỉnh ngủ nhanh.",
    "phoi vi": "Hiệp đồng Cam thảo + Bạc hà + pH 4.2-4.5: Acid citric từ Tắc sấy lạnh hạ pH về 4.2-4.5 giúp đóng kênh thụ thể vị đắng ngoại vi hTAS2R16 trên gai lưỡi (giảm 60-70% vị đắng), kết hợp 0.05g muối khoáng Na+ và Stevia/Glycyrrhizin tạo vị ngọt thanh mát không cần đường tinh luyện.",
    "tam sen": "Tâm sen (Embryo Nelumbinis) chứa alkaloid Liensinine, Isoliensinine, Nuciferine giúp thanh tâm hỏa, hạ huyết áp, an thần sâu (1.5-3g). CHỐNG CHỈ ĐỊNH NGHIÊM NGẶT: Người HUYẾT ÁP THẤP tuyệt đối không dùng liều cao vì gây giãn mạch tụt huyết áp đột ngột, choáng váng. Không dùng liên tục quá 2-3 tuần vì gây lạnh tỳ vị.",
    "lac tien": "Lạc tiên (Passiflora foetida, 8-15g khô hoặc 1.8-2.5g trong túi lọc phối hợp) chứa Flavonoid Vitexin & Isovitexin gắn thụ thể GABA_A giúp giảm lo âu, ngủ sâu. CHỐNG CHỈ ĐỊNH: Phụ nữ mang thai 3 tháng đầu không dùng liều cao vì vết Harman alkaloids kích thích co bóp cơ trơn tử cung.",
    "da day": "Người bị viêm loét dạ dày, đau bao tử hoặc trào ngược thực quản (GERD) KHÔNG NÊN uống Quất/Tắc tươi hoặc Atiso đỏ đậm đặc lúc đói vì acid citric nồng độ cao (pH 2.3-3.2) kích ứng ổ loét. Hệ thống VinaVita tự động giảm 50% lượng acid hữu cơ (đệm pH 4.5 êm dịu) và khuyên dùng Hoa Cúc + Cam Thảo + Gừng ấm để bảo vệ niêm mạc.",
    "apigenin": "Hoa cúc vàng (Chrysanthemum indicum) chứa Flavonoid Apigenin gắn chọn lọc vào vị trí benzodiazepine trên thụ thể GABA_A, điều hòa trục HPA giúp hạ 28-35% nồng độ hormone stress Cortisol, làm dịu mỏi mắt và giúp ngủ sâu tự nhiên.",
    "deadline": "Gói Hero SKU #02 Calm Focus (Chạy deadline & Ôn thi không ép tim): Lá Đinh Lăng Sâm Nam (2.0g, chứa Saponin triterpenoid tăng tuần hoàn oxy thùy trán) + Sả chanh (1.5g, Citral sảng khoái) + Gừng ấm (0.8g, Gingerol) + La Hán Quả (1.0g, Mogroside V ngọt mát 0 calo). Hãm 90°C trong 3 phút, 0mg Caffeine, không gây tim đập nhanh hay run tay.",
    "mat ngu": "Gói Hero SKU #01 Citrus Twilight (Ngủ sâu & Xả stress đêm, pH 4.3): Lạc Tiên (1.8g, Vitexin hoạt hóa GABA_A) + Hoa Cúc (1.5g, Apigenin hạ Cortisol) + Tắc sấy lạnh (1.5g, khóa thụ thể đắng hTAS2R16 ở pH 4.3) + Cỏ Ngọt (0.5g, 0g đường). Nếu người dùng bị huyết áp thấp, hệ thống tự động khóa Tâm Sen.",
    "social": "Gói Hero SKU #03 Berry Social Glow (Tiệc tùng 0.0% Cồn, pH 4.2): Atiso Đỏ / Bụp Giấm (2.2g, Anthocyanin tạo sắc đỏ Ruby như rượu vang) + Lạc Tiên (1.3g) + Quế thanh Trà Bồng (0.8g, Cinnamaldehyde ấm áp) + La Hán Quả (1.0g). Giúp thư giãn hòa đồng xã hội mà 0.0% cồn, không hại gan.",
    "sachet_price": "Sản phẩm thương mại VinaVita (RMIT RBPC 2026 Pilot Line): Đóng gói dạng Túi lọc Kim tự tháp sinh học PLA từ tinh bột ngô (5.3g/gói, phân hủy sinh học 100%, không vi nhựa). Giá bán: 69.000 VNĐ / Hộp 5 gói (~13.800 VNĐ/ly), biên lợi nhuận gộp 49.3%, hoặc 15.000 VNĐ / gói dùng thử.",
    "intro": "VinaVita AI là nền tảng Pha chế Dược liệu & Mocktail Thảo mộc 0.0% Cồn dành cho Gen-Z, đồng sáng lập bởi nhóm Thinking Space (Huỳnh Hữu Anh Khoa - CEO, Ngô Minh Thiên Bảo - Lead Systems Architect, Trương Quang Hiếu - Pharmacology, Nguyễn Minh Dũng - AI Data) tại RMIT Business Plan Competition 2026."
}

def retrieve_rag_context(query: str) -> str:
    q_low = query.lower()
    retrieved = []

    if any(k in q_low for k in ["cỏ ngọt", "stevia", "đường huyết", "mỡ", "tích mỡ", "tiểu đường", "giảm cân", "calo"]):
        retrieved.append(KNOWLEDGE_CORPUS["stevia"])
    if any(k in q_low for k in ["khử đắng", "vị đắng", "htas2r16", "tas2r", "ph 4", "chua", "phối vị"]):
        retrieved.append(KNOWLEDGE_CORPUS["phoi vi"])
    if "cam thảo" in q_low and "bạc hà" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["phoi vi"])
    elif "cam thảo" in q_low or "huyết áp cao" in q_low or "cao huyết áp" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["cam thao"])
    if "bạc hà" in q_low or "menthol" in q_low or "trpm8" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["bac ha"])
    if any(k in q_low for k in ["tâm sen", "tim sen", "liên tâm", "huyết áp thấp", "tụt huyết áp", "chóng mặt"]):
        retrieved.append(KNOWLEDGE_CORPUS["tam sen"])
    if any(k in q_low for k in ["lạc tiên", "mang thai", "bầu", "thai kỳ", "vitexin"]):
        retrieved.append(KNOWLEDGE_CORPUS["lac tien"])
    if any(k in q_low for k in ["dạ dày", "bao tử", "trào ngược", "ợ chua", "loét", "quất", "tắc", "chanh dây", "gerd"]):
        retrieved.append(KNOWLEDGE_CORPUS["da day"])
    if any(k in q_low for k in ["apigenin", "hoa cúc", "cortisol", "gaba"]):
        retrieved.append(KNOWLEDGE_CORPUS["apigenin"])
    if any(k in q_low for k in ["deadline", "thức khuya", "tỉnh táo", "ép tim", "đinh lăng", "sâm nam", "trà xanh", "calm focus", "ôn thi"]):
        retrieved.append(KNOWLEDGE_CORPUS["deadline"])
    if any(k in q_low for k in ["mất ngủ", "stress", "thi cử", "căng thẳng", "khó ngủ", "ngủ sâu", "citrus twilight"]):
        retrieved.append(KNOWLEDGE_CORPUS["mat ngu"])
    if any(k in q_low for k in ["tiệc", "party", "chill", "bia", "rượu", "cồn", "social glow", "atiso đỏ"]):
        retrieved.append(KNOWLEDGE_CORPUS["social"])
    if any(k in q_low for k in ["giá", "bao nhiêu tiền", "sachet", "túi lọc", "pla", "69", "mua", "đặt", "hộp"]):
        retrieved.append(KNOWLEDGE_CORPUS["sachet_price"])

    # Also match any specific herb from MEDICINAL_DATABASE
    for herb in HERB_DATABASE:
        h_name = herb.get("name", "").lower()
        h_sci = herb.get("sciName", "").lower()
        h_en = herb.get("enName", "").lower()
        h_id = herb.get("id", "").replace("_", " ")
        compounds = [c.get("name", "").lower() for c in herb.get("keyCompounds", [])]
        if (h_name and h_name in q_low) or (h_id and h_id in q_low) or (h_sci and h_sci in q_low) or (h_en and h_en in q_low) or any(c in q_low for c in compounds if c):
            comp_str = ", ".join(f"{c['name']} ({c['action']})" for c in herb.get("keyCompounds", []))
            contra_str = "; ".join(herb.get("contraindications", []))
            herb_info = (
                f"Dược liệu {herb['name']} ({herb['sciName']} - {herb['enName']}, vùng {herb.get('heritageOrigin', 'Việt Nam')}): "
                f"Bộ phận dùng: {herb.get('partUsed')}. Liều an toàn: {herb.get('safeDailyDose')}. "
                f"Hoạt chất chính: {comp_str}. Tác dụng: {herb.get('bioAction')} "
                f"Chống chỉ định: {contra_str}."
            )
            retrieved.append(herb_info)

    if not retrieved:
        retrieved.append(KNOWLEDGE_CORPUS["intro"])
        retrieved.append(KNOWLEDGE_CORPUS["sachet_price"])
    return "\n- " + "\n- ".join(retrieved[:6])

def sanitize_chinese_text(text: str) -> str:
    """Loại bỏ hoàn toàn các ký tự tiếng Trung/Hán tự bị rò rỉ từ tokenizer của Qwen."""
    replacements = {
        "护": "hộ",
        "激素": "Hormone",
        "粒": "nhánh thảo mộc",
        "咨询": "tư vấn",
        "豆": "đậu",
        "茶": "trà",
        "药": "dược",
        "红": "đỏ",
        "白": "trắng",
    }
    for ch, rep in replacements.items():
        text = text.replace(ch, rep)
    text = re.sub(r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]', '', text)
    text = re.sub(r' +', ' ', text)
    return text.strip()

def generate_with_slm(query: str, history=None) -> str:
    moderation_block = check_safety_moderation(query)
    if moderation_block:
        return moderation_block

    context = retrieve_rag_context(query)

    system_instruction = (
        "Bạn là VinaVita AI Pharmacist — Trợ lý Dược sĩ Trí tuệ Nhân tạo thông minh, sắc bén, chuẩn y khoa dành cho Gen-Z của dự án VinaVita AI (Team Thinking Space - RMIT RBPC 2026).\n"
        "QUY TẮC BẮT BUỘC:\n"
        "1. Trả lời bằng tiếng Việt tự nhiên, súc tích, khoa học (hoặc tiếng Anh nếu người dùng hỏi hoàn toàn bằng tiếng Anh). Tuyệt đối KHÔNG viết bất kỳ chữ Hán / tiếng Trung nào.\n"
        "2. Dựa chắc chắn vào Tài liệu Dược điển VinaVita dưới đây để phân tích cơ chế hoạt chất (GABA_A, hTAS2R16 pH 4.2-4.5, Saponin, Flavonoid, Alkaloid), định lượng gam và Rào cản an toàn sinh học (chống chỉ định huyết áp thấp, huyết áp cao, đau dạ dày, thai kỳ):\n"
        f"Tài liệu tham khảo:\n{context}\n"
        "3. Nếu người dùng mô tả nhiều triệu chứng phức tạp (ví dụ: vừa thức khuya chạy deadline, vừa đau dạ dày, vừa huyết áp thấp), hãy phân tích từng triệu chứng, chỉ rõ vị thuốc nào bị KHÓA để bảo vệ an toàn, và kê công thức thảo mộc thay thế an toàn nhất.\n"
        "4. Tuyệt đối từ chối mọi yêu cầu thô tục, nhạy cảm hoặc vi phạm đạo đức."
    )

    messages = [{"role": "system", "content": system_instruction}]
    if isinstance(history, list):
        for turn in history[-4:]:
            if isinstance(turn, dict) and turn.get("role") in ("user", "assistant") and turn.get("content"):
                messages.append({"role": turn["role"], "content": str(turn["content"])[:500]})
    messages.append({"role": "user", "content": query})

    payload = {
        "messages": messages,
        "temperature": 0.25,
        "top_p": 0.85,
        "repeat_penalty": 1.22,
        "presence_penalty": 0.4,
        "max_tokens": 220,
        "stop": ["<|im_end|>", "<|im_start|>"]
    }

    try:
        req = urllib.request.Request(
            LLAMA_SERVER_URL,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        res = urllib.request.urlopen(req, timeout=25)
        result = json.loads(res.read().decode("utf-8"))
        generated_text = result["choices"][0]["message"]["content"].strip()
        clean_text = sanitize_chinese_text(generated_text)
        formatted = clean_text.replace("\n\n", "<br><br>").replace("\n", "<br>")
        return formatted
    except Exception as e:
        return f"__SLM_BACKEND_ERROR__: {str(e)}"

async def chat_endpoint(request):
    try:
        if request.method == "GET":
            query = request.query_params.get("query") or request.query_params.get("q") or ""
            history = []
        else:
            data = await request.json()
            query = data.get("query") or data.get("message") or ""
            history = data.get("history") or []

        moderation_block = check_safety_moderation(query)
        if moderation_block:
            return JSONResponse({
                "status": "blocked",
                "model": "VinaVita Bio-Safety & Conduct Guardrail",
                "query": query,
                "response": moderation_block
            })

        response_text = generate_with_slm(query, history=history)
        if response_text.startswith("__SLM_BACKEND_ERROR__:"):
            return JSONResponse({"status": "error", "message": response_text}, status_code=503)

        return JSONResponse({
            "status": "success",
            "model": "Qwen2.5-1.5B-Instruct (GGUF Neural SLM + Dược Điển RAG)",
            "query": query,
            "response": response_text
        })
    except Exception as e:
        return JSONResponse({"status": "error", "message": str(e)}, status_code=500)

async def root_index(request):
    return FileResponse(os.path.join(BASE_DIR, "index.html"))

routes = [
    Route("/", root_index, methods=["GET"]),
    Route("/api/chat", chat_endpoint, methods=["POST", "GET"]),
    Route("/chat", chat_endpoint, methods=["POST", "GET"]),
    Route("/health", lambda req: JSONResponse({
        "status": "healthy",
        "service": "VinaVita Real SLM Engine",
        "engine": "llama.cpp + Qwen2.5-1.5B-GGUF",
        "herbs_indexed": len(HERB_DATABASE)
    }), methods=["GET"]),
    Mount("/", app=StaticFiles(directory=BASE_DIR), name="static")
]

middleware = [
    Middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
]

app = Starlette(debug=False, routes=routes, middleware=middleware)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
