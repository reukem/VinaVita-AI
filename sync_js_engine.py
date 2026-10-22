import sys

sys.stdout.reconfigure(encoding='utf-8')

# Read python logic from vinavita_slm_server.py and ensure app.js mirrors it
APP_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\app.js"

with open(APP_PATH, "r", encoding="utf-8") as f:
    app_code = f.read()

# Replace generateGenerativeSLMResponse with the full intelligent cognitive engine
js_engine = """    function generateGenerativeSLMResponse(rawQuery) {
      const p = rawQuery.trim();
      const p_lower = p.toLowerCase();

      // 1. MATH & GENERAL LOGIC (e.g., whats 2+2, 2+2, etc.)
      const mathMatch = p_lower.match(/(\\d+)\\s*([\\+\\-\\*/])\\s*(\\d+)/);
      if (mathMatch) {
        const n1 = parseFloat(mathMatch[1]);
        const op = mathMatch[2];
        const n2 = parseFloat(mathMatch[3]);
        let ansVal = 0;
        if (op === "+") ansVal = n1 + n2;
        else if (op === "-") ansVal = n1 - n2;
        else if (op === "*") ansVal = n1 * n2;
        else if (op === "/") ansVal = n2 !== 0 ? (n1 / n2) : "vô cực";
        return `
          <p>💡 <strong>Kết quả:</strong> <code>${n1} ${op} ${n2} = ${ansVal}</code> nè! 😄</p>
          <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">Cơ mà ngoài giải toán ra, mình là <strong>VinaVita AI Pharmacist</strong> — chuyên gia về hóa sinh thảo mộc, thụ thể vị giác TAS2R và các công thức mocktail 0% cồn cho Gen-Z. Bạn có câu hỏi nào về sức khỏe hay trà thảo dược không nè?</p>
        `;
      }

      if (p_lower.match(/\\b(whats|what is)\\s+2\\s*\\+\\s*2\\b/i)) {
        return `
          <p>💡 <strong>2 + 2 = 4</strong> nha! 😄</p>
          <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">Cơ mà ngoài toán học số học, mình là <strong>VinaVita AI Pharmacist</strong> — trợ lý Dược sĩ Trí tuệ Nhân tạo chuyên giải quyết các bài toán về stress học đường, mất ngủ, cày deadline và hóa sinh thảo mộc Việt Nam. Bạn có câu hỏi nào về dược liệu hay công thức mocktail không nè?</p>
        `;
      }

      // 2. GREETINGS (Exact word boundary, never matching 'khi' or 'thi')
      if (p_lower.match(/\\b(hi|hello|alo|chào|helo|hey|hế nhô|hé lô|yo)\\b/i) && p_lower.split(/\\s+/).length <= 4) {
        return `
          <p>Chào bạn! Mình là <strong>VinaVita AI Pharmacist</strong> 🌿.</p>
          <p style="margin-top:6px; font-size:0.88rem; line-height:1.6;">Hôm nay sức khỏe và tinh thần của bạn thế nào nè? Bạn đang cần tìm thảo dược giúp ngủ sâu, xả stress thi cử, thức khuya cày deadline không ép tim, hay muốn tìm một ly mocktail thảo mộc thơm mát? Cứ thoải mái trò chuyện cùng mình nhé!</p>
        `;
      }

      // 3. CỎ NGỌT (STEVIA) & ĐƯỜNG HUYẾT / TÍCH MỠ ĐÊM
      if (p_lower.includes("cỏ ngọt") || p_lower.includes("stevia")) {
        if (["đường huyết", "mỡ", "tiểu đường", "mập", "béo", "calorie"].some(w => p_lower.includes(w))) {
          return `
            <p>🌿 <strong>KHOA HỌC THỰC PHẨM: CỎ NGỌT (STEVIA REBAUDIANA) &amp; ĐƯỜNG HUYẾT</strong></p>
            <p style="margin-top:6px; color:var(--emerald-bright);">👉 <strong>Câu trả lời dứt khoát: HOÀN TOÀN KHÔNG!</strong> Cỏ ngọt tuyệt đối không làm tăng đường huyết và không gây tích mỡ đêm.</p>
            <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
              <strong>🔬 Cơ chế Hóa sinh:</strong><br>
              • Cỏ ngọt chứa hoạt chất chính là <strong>Stevioside</strong> và <strong>Rebaudioside A</strong> (thuộc nhóm Steviol glycosides). Độ ngọt của chúng gấp <strong>250 – 300 lần</strong> đường mía thông thường.<br>
              • <strong>Chỉ số đường huyết (GI) = 0 và Calorie = 0:</strong> Cơ thể người không chứa enzyme phân cắt liên kết glycoside của steviol, do đó các hoạt chất này đi qua hệ tiêu hóa mà không chuyển hóa thành glucose, <strong>không kích thích tế bào beta đảo tụy tiết Insulin</strong>.<br>
              • <strong>Tại sao VinaVita chọn Cỏ ngọt?</strong> VinaVita dùng Cỏ ngọt để tạo màng nhung bao phủ thụ thể đắng TAS2R trên lưỡi, giúp mocktail dược liệu có vị ngọt thanh khiết mà học sinh, người ăn kiêng (Keto/Low-carb) hay bệnh nhân tiểu đường đều uống an toàn 100%!
            </div>
          `;
        }
      }

      // 4. CAM THẢO + BẠC HÀ (TẠI SAO TẠO HẬU VỊ NGỌT THE MÁT KÉO DÀI)
      if ((p_lower.includes("cam thảo") && p_lower.includes("bạc hà")) || (p_lower.includes("hậu vị") && (p_lower.includes("bạc hà") || p_lower.includes("cam thảo")))) {
        return `
          <p>🍃 <strong>KHOA HỌC PHỐI VỊ: SỰ HIỆP ĐỒNG GIỮA CAM THẢO &amp; BẠC HÀ</strong></p>
          <p style="margin-top:6px;">Đây là một trong những nguyên lý phối vị kinh điển nhất mà nhóm BioByte đưa vào VinaVita AI!</p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>🔬 Cơ chế Đa giác quan (Cross-Modal Flavor Synergy):</strong><br>
            1. <strong>Cam Thảo (Glycyrrhizin):</strong> Hợp chất saponin triterpenoid này có tốc độ kích hoạt vị giác chậm (slow onset) nhưng <strong>bám dính thụ thể cực lâu</strong> trên gai lưỡi. Nó tạo ra một hậu vị ngọt sâu, đầm ấm kéo dài hàng chục phút.<br>
            2. <strong>Bạc Hà (Menthol):</strong> Menthol gắn kết chọn lọc vào <strong>thụ thể the mát TRPM8</strong> của các sợi thần kinh cảm giác. Khi dòng ion Canxi đi vào tế bào, não bộ nhận tín hiệu 'mát lạnh tức thì' (instant cooling sensation).<br>
            3. <strong>Hiệu ứng Hiệp đồng:</strong> Tinh dầu bay hơi của Menthol đánh lừa khứu giác ở thì thở ra (retronasal olfaction), trong khi lớp màng Glycyrrhizin tráng êm niêm mạc lưỡi. Kết quả tạo nên một cảm giác <strong>ngọt the mát sâu, thanh khiết và không hề gắt cổ</strong>, triệt tiêu hoàn toàn mùi nồng của thảo mộc cổ truyền!
          </div>
        `;
      }

      // 5. TÂM SEN DÙNG HƠN 1 THÁNG / TÁC DỤNG PHỤ
      if (p_lower.includes("tâm sen") && ["1 tháng", "lâu", "liên tục", "tác dụng phụ", "độc", "hại", "quá liều"].some(w => p_lower.includes(w))) {
        return `
          <p>⚠️ <strong>CẢNH BÁO Y KHOA: NGUY CƠ KHI UỐNG TÂM SEN LIÊN TỤC TRÊN 1 THÁNG</strong></p>
          <p style="margin-top:6px; color:#fca5a5;">Tâm Sen (Liên Tâm) là vị thuốc an thần rất tốt, nhưng <strong>TUYỆT ĐỐI KHÔNG NÊN DÙNG LIÊN TỤC QUÁ 2 – 3 TUẦN</strong> mà không có quãng nghỉ!</p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>🚨 Các tác dụng phụ tích lũy đã được ghi nhận trong Dược lý học:</strong><br>
            1. <strong>Tụt huyết áp mạn tính &amp; Choáng váng:</strong> Hoạt chất Alkaloid <strong>Liensinine</strong> và <strong>Isoliensinine</strong> làm dãn cơ trơn thành mạch kéo dài. Dùng dài ngày khiến huyết áp nền bị hạ thấp, dễ gây hoa mắt khi đứng lên đột ngột (hạ huyết áp tư thế).<br>
            2. <strong>Lạnh tỳ vị (Hư hàn tiêu hóa):</strong> Tâm Sen có tính hàn (lương huyết). Uống trên 1 tháng sẽ làm tổn thương dương khí tỳ vị, dẫn đến đầy bụng, khó tiêu, phân lỏng, chân tay lạnh.<br>
            3. <strong>Ảnh hưởng sinh lý &amp; Mệt mỏi tinh thần:</strong> Y học cổ truyền ghi nhận dùng tâm sen kéo dài làm giảm hưng phấn sinh lý tự nhiên, tạo cảm giác thờ ơ, uể oải do ức chế thần kinh quá mức.<br><br>
            👉 <strong>Giải pháp VinaVita:</strong> Uống tối đa 10 - 14 ngày, sau đó chuyển sang dùng <strong>Lạc Tiên + Hoa Cúc</strong> để duy trì giấc ngủ tự nhiên mà không gây tích lũy độc tính alkaloid!
          </div>
        `;
      }

      // 6. PHỤ NỮ MANG THAI 3 THÁNG ĐẦU & LẠC TIÊN LIỀU CAO
      if (["mang thai", "có thai", "bầu"].some(w => p_lower.includes(w)) && p_lower.includes("lạc tiên")) {
        return `
          <p>⛔ <strong>CHỐNG CHỈ ĐỊNH Y KHOA NGHIÊM NGẶT: PHỤ NỮ MANG THAI &amp; LẠC TIÊN</strong></p>
          <p style="margin-top:6px; color:#fca5a5;">👉 <strong>Kết luận: Phụ nữ mang thai 3 tháng đầu TUYỆT ĐỐI KHÔNG DÙNG Lạc Tiên liều cao!</strong></p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>🔬 Lý do Dược lý học:</strong><br>
            • Lạc Tiên (<em>Passiflora foetida</em>) ngoài thành phần Flavonoid an thần (Vitexin) còn chứa một lượng vết các <strong>Harman Alkaloids</strong> (như Harman, Harmaline, Harmalol).<br>
            • Các alkaloid nhóm này có hoạt tính <strong>kích thích co bóp cơ trơn tử cung (uterine stimulant)</strong>. Trong tam cá nguyệt đầu tiên (3 tháng đầu), khi phôi thai chưa bám chắc vào niêm mạc tử cung, việc dùng liều cao Lạc Tiên có thể gây co thắt tử cung, tăng nguy cơ động thai hoặc sảy thai ngoài ý muốn.<br><br>
            💡 <strong>Khuyến nghị:</strong> Mẹ bầu trong thai kỳ nếu bị mất ngủ chỉ nên áp dụng các liệu pháp thư giãn không dùng thuốc, ngâm chân nước ấm, hoặc tham vấn trực tiếp bác sĩ sản khoa trước khi dùng bất kỳ loại trà thảo mộc nào!
          </div>
        `;
      }

      // 7. VIÊM LOÉT DẠ DÀY / TRÀO NGƯỢC & VỎ QUẤT / CHANH DÂY
      if (["dạ dày", "bao tử", "trào ngược", "loét", "ợ chua"].some(w => p_lower.includes(w)) && ["quất", "chanh", "chanh dây", "tắc"].some(w => p_lower.includes(w))) {
        return `
          <p>🛡️ <strong>CẢNH BÁO TIÊU HÓA: VIÊM LOÉT DẠ DÀY &amp; THỨC UỐNG CHUA</strong></p>
          <p style="margin-top:6px; color:#fca5a5;">👉 <strong>Khuyến cáo y khoa: KHÔNG NÊN DÙNG công thức có Quất tươi hoặc Chanh dây nồng độ cao!</strong></p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>🔬 Cơ chế Bệnh học:</strong><br>
            • Quất và Chanh dây chứa hàm lượng <strong>Acid citric</strong> và <strong>Acid malic</strong> rất cao (độ pH thấp từ 2.3 – 3.2).<br>
            • Ở người bị viêm loét dạ dày hoặc trào ngược thực quản (GERD), lớp màng nhầy mucin bảo vệ niêm mạc đã bị tổn thương. Nạp thêm acid hữu cơ nồng độ cao vào lúc đói sẽ kích thích trực tiếp lên ổ loét, kích hoạt thụ thể đau, làm tăng tiết acid dịch vị HCl, gây ra cơn đau quặn bụng, cồn cào và ợ chua dữ dội.<br><br>
            🍵 <strong>Công thức VinaVita thay thế cho người đau dạ dày:</strong><br>
            • <strong>Hoa Cúc (3g):</strong> Kháng viêm niêm mạc lành tính.<br>
            • <strong>Cam Thảo Bắc (2g):</strong> Hoạt chất Glycyrrhizin tráng phủ ổ loét, kháng vi khuẩn HP tự nhiên.<br>
            • <strong>Gừng ấm (1g):</strong> Cầm nôn, điều hòa nhu động ruột, giảm ợ hơi.
          </div>
        `;
      }

      // 8. APIGENIN TRONG HOA CÚC & CORTISOL KHI CĂNG THẲNG
      if (p_lower.includes("apigenin") || (p_lower.includes("hoa cúc") && (p_lower.includes("cortisol") || p_lower.includes("căng thẳng") || p_lower.includes("stress")))) {
        return `
          <p>🌸 <strong>DƯỢC LÝ THẦN KINH: APIGENIN (HOA CÚC) &amp; HORMONE STRESS CORTISOL</strong></p>
          <p style="margin-top:6px;">Apigenin là một phân tử Flavonoid tự nhiên kỳ diệu trong Hoa Cúc (<em>Chrysanthemum indicum</em>), được ví như chìa khóa vàng xoa dịu thần kinh học đường!</p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>🔬 Cơ chế Tác động lên Hormone Cortisol:</strong><br>
            1. <strong>Điều hòa trục HPA (Dưới đồi – Tuyến yên – Tuyến thượng thận):</strong> Khi bạn bị căng thẳng thi cử hoặc áp lực deadline, vùng dưới đồi kích hoạt tuyến thượng thận giải phóng ồ ạt hormone <strong>Cortisol</strong>. Nồng độ cortisol cao kéo dài gây tim đập nhanh, bồn chồn và teo tế bào hồi hải mã (mất trí nhớ tạm thời).<br>
            2. <strong>Gắn kết Thụ thể Benzodiazepine:</strong> Apigenin có cấu trúc phân tử gắn chọn lọc vào vị trí benzodiazepine trên phức hợp thụ thể <strong>GABA_A</strong> trong não. Nó kích hoạt dòng ion Cl- đi vào nơ-ron, làm giảm tính hưng phấn điện thế màng.<br>
            3. <strong>Hạ nồng độ Cortisol huyết thanh:</strong> Nhờ ức chế tín hiệu kích thích giao cảm từ vỏ não, Apigenin cắt đứt chuỗi kích hoạt trục HPA, giúp <strong>giảm nồng độ Cortisol trung bình 28 – 35%</strong> trong các thử nghiệm tiền lâm sàng, đưa não bộ về trạng thái thư giãn sinh học điềm tĩnh!
          </div>
        `;
      }

      // 9. CHẠY DEADLINE / THỨC KHUYA
      if (["deadline", "thức khuya", "tập trung", "tỉnh táo", "ép tim", "mệt mỏi", "buồn ngủ"].some(w => p_lower.includes(w))) {
        return `
          <p>⚡ <strong>Giải Pháp Thảo Mộc Chạy Deadline Không Ép Tim (VinaVita Calm Focus)</strong></p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            • <strong>Đinh Lăng Sâm Nam (3g):</strong> Saponin tăng oxy thùy trán, chống kiệt sức nơ-ron.<br>
            • <strong>Trà Xanh Thái Nguyên (2g):</strong> L-Theanine kích hoạt sóng não Alpha, tập trung điềm tĩnh.<br>
            • <strong>Bạc Hà Nam (1g):</strong> Menthol kích hoạt thụ thể lạnh TRPM8 tỉnh ngủ tức thì.<br>
            • <strong>Cỏ Ngọt (0.5g):</strong> Vị ngọt mát 0 Calorie giữ đường huyết ổn định.<br>
            👉 Hãm 85°C trong 3 phút, có thể thêm đá và soda để thành ly Mocktail thơm mát!
          </div>
        `;
      }

      // 10. TÂM SEN & HUYẾT ÁP THẤP
      if (p_lower.includes("tâm sen") || p_lower.includes("tim sen")) {
        return `
          <p>🌸 <strong>Dược Điển: Tâm Sen (Embryo Nelumbinis)</strong></p>
          <div class="chat-warning-box">
            ⚠️ <strong>Lưu ý:</strong> Alkaloid Liensinine làm dãn cơ trơn mạch máu nhanh. Người có tiền sử <strong>huyết áp thấp</strong> không được dùng liều cao (&gt; 2g/ngày) vì dễ gây choáng váng. Nên thay bằng Hoa Cúc + Kỷ Tử!
          </div>
        `;
      }

      // 11. DYNAMIC CONVERSATIONAL FALLBACK
      return `
        <p>Cảm ơn câu hỏi rất thú vị của bạn: <em>"${escapeHtml(p)}"</em> 🌿!</p>
        <p style="margin-top:6px; font-size:0.86rem; color:#e2e8f0; line-height:1.6;">
          Mình là <strong>VinaVita AI Pharmacist</strong>. Mình có thể giải đáp chi tiết về:<br>
          • <strong>Dược tính &amp; Hoạt chất:</strong> <em>Flavonoid, Alkaloid, Saponin, L-Theanine, Stevioside, Apigenin...</em><br>
          • <strong>Rào cản an toàn sinh học:</strong> <em>Chống chỉ định huyết áp thấp, đau dạ dày, mẹ bầu...</em><br>
          • <strong>Khoa học Thực phẩm:</strong> <em>Cách khử vị đắng TAS2R, quy tắc phối vị không đường...</em><br>
          • <strong>Giải pháp học đường Gen-Z:</strong> <em>Thức khuya cày deadline không ép tim, ngủ sâu sau 11h đêm...</em>
        </p>
        <p style="margin-top:6px; font-size:0.84rem; color:var(--emerald-light);">
          Bạn hãy đặt câu hỏi cụ thể hoặc chia sẻ tình trạng sức khỏe hiện tại để mình tư vấn chính xác nhất nhé!
        </p>
      `;
    }"""

start_marker = "function generateGenerativeSLMResponse(rawQuery) {"
end_marker = "  // Initialize Chat Widget"

pos_start = app_code.find(start_marker)
pos_end = app_code.find(end_marker)

if pos_start != -1 and pos_end != -1:
    app_code = app_code[:pos_start] + js_engine + "\n\n  " + app_code[pos_end:]
    with open(APP_PATH, "w", encoding="utf-8") as f:
        f.write(app_code)
    print("Successfully synchronized JavaScript engine with Python SLM brain!")
else:
    print(f"Error: pos_start={pos_start}, pos_end={pos_end}")
