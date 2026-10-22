import sys
import json
import urllib.request
import re

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.routing import Route
import uvicorn

LLAMA_SERVER_URL = "http://127.0.0.1:8080/v1/chat/completions"

# Knowledge base for Retrieval-Augmented Generation (RAG)
KNOWLEDGE_CORPUS = {
    "stevia": "Cỏ ngọt (Stevia rebaudiana) chứa Stevioside và Rebaudioside A. Chỉ số đường huyết GI = 0, Calorie = 0. Không làm tăng đường huyết, không kích thích insulin, tuyệt đối không gây tích mỡ đêm. Rất an toàn cho người ăn kiêng, tiểu đường và giảm cân.",
    "cam thao": "Cam thảo chứa Glycyrrhizin, có vị ngọt sâu và bám dính thụ thể gai lưỡi rất lâu.",
    "bac ha": "Bạc hà chứa tinh dầu Menthol, kích hoạt thụ thể lạnh TRPM8 tạo cảm giác the mát bùng nổ tức thì.",
    "phoi vi": "Khi kết hợp Cam thảo và Bạc hà: Glycyrrhizin tạo vị ngọt sâu kéo dài kết hợp cùng Menthol kích hoạt thụ thể làm lạnh TRPM8 tạo hiệu ứng hiệp đồng đa giác quan (flavor synergy), mang lại hậu vị ngọt mát thanh khiết kéo dài hơn 15 phút và khử hoàn toàn vị đắng nồng.",
    "tam sen": "Tâm sen (Liên tâm) chứa các alkaloid Liensinine, Isoliensinine có tác dụng thanh tâm, an thần, hạ huyết áp. Lưu ý: Không dùng liên tục quá 2-3 tuần vì gây tụt huyết áp và lạnh tỳ vị (tiêu chảy, khó tiêu). Người có tiền sử huyết áp thấp: Phải sao vàng trước khi dùng, uống loãng hoặc phối hợp Cam thảo/Táo đỏ để điều hòa, không uống liều cao khi đói.",
    "lac tien": "Lạc tiên (Passiflora foetida) chứa Vitexin giúp an thần, nhưng cũng chứa vết Harman alkaloids kích thích co bóp cơ trơn tử cung. Chống chỉ định: Phụ nữ mang thai 3 tháng đầu tuyệt đối không dùng liều cao vì có nguy cơ sảy thai hoặc động thai.",
    "da day": "Vỏ quất và Chanh dây chứa hàm lượng Acid citric và Acid malic rất cao (pH 2.3 - 3.2). Người bị viêm loét dạ dày, đau bao tử hoặc trào ngược thực quản (GERD) không nên uống nước chua khi đói vì acid sẽ bào mòn lớp nhầy niêm mạc gây đau quặn và ợ chua. Nên dùng Hoa cúc + Cam thảo để kháng viêm và bao vết loét.",
    "apigenin": "Apigenin là flavonoid quý trong Hoa cúc. Cơ chế: Apigenin gắn chọn lọc vào vị trí benzodiazepine trên thụ thể GABA-A trong não, làm giảm hưng phấn thần kinh, ức chế trục HPA (Dưới đồi - Tuyến yên - Thượng thận), từ đó hạ nồng độ hormone stress Cortisol 28-35%, giúp xoa dịu lo âu và ngủ sâu.",
    "deadline": "Công thức thảo mộc thức khuya chạy deadline tỉnh táo không ép tim: Trà xanh Thái Nguyên (chứa L-Theanine kích hoạt sóng não Alpha, tạo trạng thái tỉnh táo điềm tĩnh 'calm alertness' kết hợp lượng caffein phóng thích chậm, không gây hồi hộp run tay ép tim như cà phê) + Đinh lăng (chứa Saponin triterpenoid tăng tuần hoàn máu não và oxy thùy trán) + Cỏ ngọt (vị ngọt tự nhiên không calo, GI=0 giúp ổn định năng lượng đường huyết).",
    "mat ngu": "Thảo mộc trị mất ngủ và stress thi cử an toàn: Hoa cúc La Mã/Cúc tiến vua (chứa Apigenin gắn thụ thể GABA-A hạ hormone stress Cortisol) + Lạc tiên (chứa Vitexin làm dịu căng thẳng thần kinh thực vật) + Lá vông nem/Tâm sen liều nhẹ (thanh tâm, an thần giúp đi vào giấc ngủ tự nhiên mà không gây mệt mỏi đờ đẫn khi thức dậy làm bài thi).",
    "intro": "VinaVita là dự án Dược liệu Thông minh & Trà Thảo mộc Xoa dịu Stress dành cho Gen-Z, tranh tài tại RMIT Business Plan Competition 2026 với chủ đề 'AI for Good'. Tôi có thể tư vấn hoạt chất dược liệu (Flavonoid, Alkaloid, Saponin, L-Theanine), phân tích rào cản sức khỏe (dạ dày, huyết áp, phụ nữ mang thai) và gợi ý phối thức trà thảo mộc 0.0% cồn lành mạnh."
}

def retrieve_rag_context(query: str) -> str:
    q_low = query.lower()
    retrieved = []
    
    if any(k in q_low for k in ["cỏ ngọt", "stevia", "đường huyết", "mỡ", "tích mỡ"]):
        retrieved.append(KNOWLEDGE_CORPUS["stevia"])
    if "cam thảo" in q_low and "bạc hà" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["phoi vi"])
    elif "cam thảo" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["cam thao"])
    elif "bạc hà" in q_low:
        retrieved.append(KNOWLEDGE_CORPUS["bac ha"])
        
    if any(k in q_low for k in ["tâm sen", "tim sen", "huyết áp"]):
        retrieved.append(KNOWLEDGE_CORPUS["tam sen"])
    if any(k in q_low for k in ["lạc tiên", "mang thai", "bầu", "thai kỳ"]):
        retrieved.append(KNOWLEDGE_CORPUS["lac tien"])
    if any(k in q_low for k in ["dạ dày", "bao tử", "trào ngược", "quất", "chanh dây"]):
        retrieved.append(KNOWLEDGE_CORPUS["da day"])
    if any(k in q_low for k in ["apigenin", "hoa cúc", "cortisol", "gaba"]):
        retrieved.append(KNOWLEDGE_CORPUS["apigenin"])
    if any(k in q_low for k in ["deadline", "thức khuya", "tỉnh táo", "ép tim", "đinh lăng", "trà xanh"]):
        retrieved.append(KNOWLEDGE_CORPUS["deadline"])
    if any(k in q_low for k in ["mất ngủ", "stress", "thi cử", "căng thẳng", "khó ngủ"]):
        retrieved.append(KNOWLEDGE_CORPUS["mat ngu"])
    if any(k in q_low for k in ["what can you do", "bạn là ai", "làm được gì", "giới thiệu", "who are you", "chức năng"]):
        retrieved.append(KNOWLEDGE_CORPUS["intro"])
        
    if not retrieved:
        retrieved.append(KNOWLEDGE_CORPUS["intro"])
    return "\n- " + "\n- ".join(retrieved)

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
    # Loại bỏ triệt để dải Unicode chữ Hán (CJK Unified Ideographs)
    text = re.sub(r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]', '', text)
    # Dọn dẹp khoảng trắng thừa
    text = re.sub(r' +', ' ', text)
    return text.strip()

def generate_with_slm(query: str) -> str:
    context = retrieve_rag_context(query)
    
    system_instruction = (
        "Bạn là VinaVita AI Pharmacist — Trợ lý Dược sĩ Trí tuệ Nhân tạo thông minh, nhiệt thành, chuẩn y khoa dành cho học sinh Gen-Z.\n"
        "QUY TẮC BẮT BUỘC:\n"
        "1. Trả lời 100% bằng tiếng Việt thuần túy, tuyệt đối KHÔNG viết bất kỳ chữ Hán / tiếng Trung nào.\n"
        "2. Dựa chắc chắn vào Tài liệu Dược điển VinaVita dưới đây để trả lời chính xác, khoa học, không bịa đặt:\n"
        f"Tài liệu tham khảo:\n{context}\n"
        "3. Nếu là câu hỏi thông thường hoặc chào hỏi/tính toán (như 'hello', 'whats 2+2'), hãy trả lời ngắn gọn, thân thiện rồi liên hệ vui vẻ đến vai trò dược sĩ.\n"
        "4. Nếu hỏi về bệnh lý/công thức thảo mộc, hãy giải thích rõ cơ chế hoạt chất và đưa ra hướng dẫn sử dụng an toàn, thiết thực."
    )
    
    payload = {
        "messages": [
            {"role": "system", "content": system_instruction},
            {"role": "user", "content": query}
        ],
        "temperature": 0.25,
        "top_p": 0.85,
        "repeat_penalty": 1.25,
        "presence_penalty": 0.5,
        "max_tokens": 400,
        "stop": ["<|im_end|>", "<|im_start|>"]
    }
    
    try:
        req = urllib.request.Request(
            LLAMA_SERVER_URL,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        res = urllib.request.urlopen(req, timeout=30)
        result = json.loads(res.read().decode("utf-8"))
        generated_text = result["choices"][0]["message"]["content"].strip()
        
        # Làm sạch hoàn toàn chữ Hán rò rỉ
        clean_text = sanitize_chinese_text(generated_text)
        
        # Convert newlines to HTML paragraphs/breaks for smooth rendering in chat UI
        formatted = clean_text.replace("\n\n", "<br><br>").replace("\n", "<br>")
        return formatted
    except Exception as e:
        return f"Lỗi kết nối SLM Neural Engine (llama-server:8080): {str(e)}"

async def chat_endpoint(request):
    try:
        data = await request.json()
        query = data.get("query") or data.get("message") or ""
        response_text = generate_with_slm(query)
        return JSONResponse({
            "status": "success",
            "model": "Qwen2.5-1.5B-Instruct (GGUF Neural SLM)",
            "query": query,
            "response": response_text
        })
    except Exception as e:
        return JSONResponse({"status": "error", "message": str(e)}, status_code=500)

routes = [
    Route("/api/chat", chat_endpoint, methods=["POST", "GET"]),
    Route("/chat", chat_endpoint, methods=["POST", "GET"]),
    Route("/health", lambda req: JSONResponse({"status": "healthy", "service": "VinaVita Real SLM Engine", "engine": "llama.cpp + Qwen2.5-1.5B-GGUF"}), methods=["GET"])
]

middleware = [
    Middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
]

app = Starlette(debug=True, routes=routes, middleware=middleware)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
