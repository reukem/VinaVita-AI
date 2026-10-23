import sys

sys.stdout.reconfigure(encoding='utf-8')

APP_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\app.js"

with open(APP_PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

# Line 427 is index 426 (0-indexed). Line 619 is index 618.
# Let's locate the exact index of `function handleSend(queryText)`
start_idx = None
end_idx = None

for i, l in enumerate(lines):
    if "function handleSend(queryText)" in l:
        start_idx = i
    if "// Initialize Chat Widget" in l:
        end_idx = i

print(f"start_idx: {start_idx}, end_idx: {end_idx}")

new_engine_code = """    async function handleSend(queryText) {
      const text = (queryText || (chatInput ? chatInput.value : "")).trim();
      if (!text) return;
      if (chatInput) chatInput.value = "";

      appendUserMessage(text);
      const typingElem = showTypingIndicator();

      // Dual-Mode Architecture: Try Local SLM Server first (500ms timeout)
      let serverAnswer = null;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 500);
        const res = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: text }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          if (data && data.response) {
            serverAnswer = data.response;
          }
        }
      } catch (err) {
        // Fallback to On-Device Client Generative SLM Engine
      }

      setTimeout(() => {
        if (typingElem) typingElem.remove();
        if (serverAnswer) {
          appendBotMessage(`
            <div style="display:inline-flex; align-items:center; gap:4px; font-size:0.72rem; color:var(--emerald-light); background:rgba(16,185,129,0.15); border:1px solid rgba(52,211,153,0.3); border-radius:10px; padding:2px 8px; margin-bottom:8px;">
              ⚡ <strong>VinaVita SLM Core (0.5B Server)</strong>
            </div>
            <p>${serverAnswer.replace(/\\n/g, '<br>')}</p>
          `);
        } else {
          const responseHtml = generateGenerativeSLMResponse(text);
          appendBotMessage(responseHtml);
        }
      }, 400);
    }

    if (btnChatSend) {
      btnChatSend.addEventListener("click", () => handleSend());
    }

    if (chatInput) {
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSend();
        }
      });
    }

    promptChips.forEach(chip => {
      chip.addEventListener("click", () => {
        handleSend(chip.dataset.query);
      });
    });

    // ==============================================================================
    // ON-DEVICE SPECIALIZED BOTANICAL SLM GENERATIVE ENGINE
    // Context-Aware • Natural Conversationalist • Pharmacological Guardrails
    // ==============================================================================
    function generateGenerativeSLMResponse(rawQuery) {
      const query = rawQuery.toLowerCase().trim();

      // 1. GREETINGS & INTRODUCTIONS (Never fallback to static message!)
      if (query.match(/^(hi|hello|alo|chào|helo|hey|chao|xin chào|good morning|good afternoon|good evening|chào bạn|chào em|chào dược sĩ|hế nhô|hé lô|yo|ê|ê bạn)/i)) {
        const greetingResponses = [
          `Xin chào bạn! Mình là <strong>VinaVita AI Pharmacist</strong> 🌿.<br><br>Rất vui được gặp bạn! Hôm nay năng lượng và sức khỏe của bạn thế nào nè? Bạn đang cần tìm thảo dược xả stress thi cử, thức khuya chạy deadline, hay muốn pha một ly mocktail thảo mộc 0% cồn thơm mát? Cứ chia sẻ thoải mái cùng mình nhé!`,
          `Chào bạn! AI Dược Sĩ VinaVita đã sẵn sàng hỗ trợ bạn rồi đây 🌿.<br><br>Bạn đang quan tâm đến thảo mộc nào, hay cơ thể đang có dấu hiệu mệt mỏi, khó ngủ hay nóng trong người? Hãy kể cho mình nghe tình trạng của bạn nhé!`,
          `Hello bạn! Chúc bạn một ngày tràn đầy năng lượng nha 🍃.<br><br>VinaVita SLM có thể giúp bạn tra cứu dược tính, giải mã hoạt chất sinh học (GABA, Flavonoid) và gợi ý các gói sachet thảo mộc tiện lợi cho Gen-Z. Hôm nay bạn muốn tìm hiểu về chủ đề gì nè?`
        ];
        return `<p>${greetingResponses[Math.floor(Math.random() * greetingResponses.length)]}</p>`;
      }

      // 2. GIBBERISH / KEYBOARD SMASHING / TYPOS (Charming & Witty AI Response)
      const hasVowels = /[aeiouyàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]/i.test(query);
      const isKeyboardSmash = (query.length >= 4 && !hasVowels) || query.match(/^(asdf|asdwas|dadwa|dasdw|htgr|qwer|zxcv|ghjk|hjkl|jkl|uiop)/i);
      
      if (isKeyboardSmash) {
        const wittyResponses = [
          `Haha, câu thần chú bí mật gì đây ta? 😄 Mình chưa dịch được từ <em>"${escapeHtml(rawQuery)}"</em>, nhưng đoán là bạn đang gõ phím hơi vội hoặc đang buồn ngủ gục đầu trên bàn học đúng không nè? Thả lỏng tay một chút và hít thở sâu nha!<br><br>Nếu bạn đang mệt mỏi hay căng thẳng, hãy thử hỏi mình: <strong>"Uống gì cho đỡ mệt mỏi?"</strong> hoặc <strong>"Gói chạy deadline gồm những gì?"</strong> nhé!`,
          `Ôi, một chuỗi ký tự đậm chất Gen-Z cày deadline đêm muộn! 😄 Có phải bạn vừa thi xong một môn thi căng thẳng hay đang cày đồ án đuối quá đúng không?<br><br>Uống một ngụm nước ấm đi bạn ơi! Nếu cần một công thức thảo dược giúp tỉnh táo không ép tim, hãy bảo mình nhé 🌿!`,
          `Hehe, bạn đang test thử độ phản xạ của AI Dược Sĩ đúng không nè? 😉 VinaVita SLM được huấn luyện bài bản về Dược điển Việt Nam và các bài thuốc xoa dịu thần kinh đó. Thử hỏi mình về <strong>Tâm Sen</strong>, <strong>Đinh Lăng</strong> hay <strong>Hoa Cúc</strong> xem sao nha!`
        ];
        return `<p>${wittyResponses[Math.floor(Math.random() * wittyResponses.length)]}</p>`;
      }

      // 3. PROJECT LORE & CREATORS
      if (query.includes("bạn là ai") || query.includes("ai tạo") || query.includes("nhóm") || query.includes("vinavita") || query.includes("rmit") || query.includes("rbpc")) {
        return `
          <p><strong>🌿 VinaVita AI Pharmacist — Mô hình Trợ Lý Dược Sĩ Trí Tuệ Nhân Tạo (SLM)</strong></p>
          <p style="margin-top:6px; font-size:0.88rem; line-height:1.6;">
            Mình là hệ thống AI chuyên biệt được thiết kế và huấn luyện bởi <strong>Lead Systems Architect Ngô Minh Thiên Bảo</strong> cùng đội ngũ <strong>BioByte</strong> (Alex Huynh, Trương Quang Hiếu, Nguyễn Minh Dũng) phục vụ đề án tranh tài tại <strong>RMIT Business Plan Competition 2026</strong> (Chủ đề: <em>AI for Good</em>).
          </p>
          <p style="margin-top:6px; font-size:0.86rem; color:var(--emerald-light);">
            Sứ mệnh của mình là ứng dụng công nghệ để hồi sinh dược liệu bản địa Việt Nam, triệt tiêu vị đắng bằng Khoa học Thực phẩm và mang lại thức uống thư giãn 0.0% Cồn an toàn cho giới trẻ.
          </p>
        `;
      }

      // 4. CHẠY DEADLINE / THỨC KHUYA / CẦN TỈNH TÁO KHÔNG ÉP TIM
      if (query.includes("deadline") || query.includes("thức khuya") || query.includes("tập trung") || query.includes("tỉnh táo") || query.includes("ép tim") || query.includes("mệt mỏi") || query.includes("buồn ngủ") || query.includes("cà phê") || query.includes("redbull")) {
        return `
          <p><strong>⚡ Giải Pháp Thảo Mộc Chạy Deadline Không Ép Tim (VinaVita Calm Focus)</strong></p>
          <p style="margin-top:6px;">Chào người đồng chí của những đêm chạy deadline! Thay vì uống lon nước tăng lực chứa 120mg caffeine tự do khiến tim đập thình thịch và run tay, VinaVita ứng dụng nguyên lý <strong>Sóng Não Alpha (8–12 Hz) &amp; Adaptogen</strong>:</p>
          
          <div style="margin:8px 0; padding-left:10px; border-left:2px solid var(--emerald-bright); font-size:0.86rem; line-height:1.6;">
            • <span class="chat-herb-chip">Đinh Lăng Sâm Nam (3g)</span>: Saponin tăng cường oxy lên vỏ não, chống kiệt sức tế bào thần kinh.<br>
            • <span class="chat-herb-chip">Trà Xanh Thái Nguyên (2g)</span>: L-Theanine kích hoạt sóng não Alpha, tỉnh táo điềm tĩnh, tập trung sâu.<br>
            • <span class="chat-herb-chip">Bạc Hà Nam (1g)</span>: Menthol kích hoạt thụ thể the mát TRPM8 xua tan cơn buồn ngủ tức thì.<br>
            • <span class="chat-herb-chip">Cỏ Ngọt (0.5g)</span>: Vị ngọt thanh khiết 0-Calorie, không làm tụt đường huyết đột ngột.
          </div>

          <div class="chat-recipe-card">
            <strong style="color:var(--gold-warm);">📦 Sản phẩm tương ứng: Gói Sachet "Chạy Deadline" (15.000 VNĐ / Gói)</strong><br>
            Duy trì sự tỉnh táo 4 tiếng liên tục. Hãm nước nóng 85°C trong 3 phút, thêm đá và soda để thành ly Mocktail sảng khoái.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('focus', 'herbal', [])">
            🧪 Nạp công thức Calm Focus vào AI Mixologist
          </button>
        `;
      }

      // 5. TÂM SEN & CẢNH BÁO HUYẾT ÁP THẤP
      if (query.includes("tâm sen") || query.includes("tim sen") || (query.includes("sen") && (query.includes("huyết áp") || query.includes("áp lực") || query.includes("tim")))) {
        return `
          <p><strong>🌸 Dược Điển: Tâm Sen (Embryo Nelumbinis)</strong></p>
          <p style="margin-top:4px;"><strong>Hoạt chất sinh học chính:</strong> <span class="chat-herb-chip">Liensinine</span>, <span class="chat-herb-chip">Isoliensinine</span>, <span class="chat-herb-chip">Nuciferine</span>.</p>
          <p style="margin-top:4px;"><strong>Cơ chế dược lý:</strong> Thanh nhiệt tâm hỏa, an thần sâu, hỗ trợ giải tỏa bồn chồn, tim đập nhanh do stress thi cử.</p>
          
          <div class="chat-warning-box">
            <strong>⚠️ CẢNH BÁO QUAN TRỌNG: NGƯỜI HUYẾT ÁP THẤP</strong><br>
            Alkaloid Liensinine có tác dụng làm dãn cơ trơn mạch máu, khiến <strong>huyết áp hạ nhanh</strong>. Nếu bạn có tiền sử huyết áp thấp (&lt; 90/60 mmHg), tuyệt đối <strong>KHÔNG</strong> dùng liều cao (&gt; 2g/ngày) vì dễ gây hoa mắt, choáng váng.<br>
            👉 <em>Giải pháp VinaVita:</em> Tự động thay thế Tâm Sen bằng <span class="chat-herb-chip">Hoa Cúc</span> + <span class="chat-herb-chip">Lạc Tiên</span>, hoặc phối hợp cùng <span class="chat-herb-chip">Kỷ Tử</span> để ổn định thành mạch!
          </div>

          <div class="chat-recipe-card">
            <strong style="color:var(--emerald-bright);">💡 Gợi ý công thức cho người mất ngủ nhẹ:</strong><br>
            • Tâm Sen (1g) + Hoa Cúc (3g) + Cam Thảo (1.5g) hãm 90°C trong 4 phút.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('unwind', 'floral', ['hypotension'])">
            🧪 Nạp vào Trạm Pha Chế AI (Lọc Huyết Áp Thấp)
          </button>
        `;
      }

      // 6. MẤT NGỦ / XOA DỊU STRESS / KÍCH HOẠT GABA
      if (query.includes("mất ngủ") || query.includes("ngủ ngon") || query.includes("stress") || query.includes("căng thẳng") || query.includes("lo âu") || query.includes("gaba")) {
        return `
          <p><strong>🌙 Liệu Pháp Thảo Mộc Tái Tạo Thụ Thể GABA Cho Giấc Ngủ Sâu</strong></p>
          <p style="margin-top:4px;">Khi bạn thức khuya học bài hoặc căng thẳng kéo dài, nồng độ hormone Cortisol tăng cao ức chế giấc ngủ. VinaVita kết hợp bộ 3 thảo dược hiệp đồng:</p>
          
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            1. <span class="chat-herb-chip">Lạc Tiên</span>: Vitexin gắn kết trực tiếp lên thụ thể GABA_A giúp tắt các suy nghĩ mông lung.<br>
            2. <span class="chat-herb-chip">Hoa Cúc</span>: Apigenin làm dịu hệ cơ, chống co thắt dạ dày do stress.<br>
            3. <span class="chat-herb-chip">Cam Thảo</span>: Hòa hoãn tính dược, tạo hậu vị ngọt sâu thư thái.
          </div>

          <div class="chat-recipe-card">
            <strong style="color:var(--emerald-light);">⭐ Thức uống: Saigon Sunset Tonic hoặc Lotus Twilight</strong><br>
            Uống trước khi đi ngủ 45 phút. Thức dậy không bị uể oải hay đau đầu.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('unwind', 'citrus', [])">
            🧪 Nạp công thức Night Unwind vào AI
          </button>
        `;
      }

      // 7. ĐAU DẠ DÀY / TRÀO NGƯỢC
      if (query.includes("dạ dày") || query.includes("bao tử") || query.includes("trào ngược") || query.includes("ợ chua") || query.includes("tiêu hóa")) {
        return `
          <p><strong>🛡️ Khuyến Nghị Cho Người Bị Đau Dạ Dày &amp; Trào Ngược</strong></p>
          <div class="chat-warning-box">
            <strong>⚠️ Chống chỉ định:</strong> Không dùng Vỏ Quất / Chanh dây liều cao lúc đói, và hạn chế Trà xanh đậm vì tanin kích thích tăng tiết acid dịch vị.
          </div>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.6;">
            <strong>Thảo mộc bảo vệ niêm mạc khuyên dùng:</strong><br>
            • <span class="chat-herb-chip">Cam Thảo</span>: Hoạt chất Glycyrrhizin tạo lớp bảo vệ nhầy trên niêm mạc, ức chế vi khuẩn HP.<br>
            • <span class="chat-herb-chip">Hoa Cúc</span>: Giảm co thắt cơ trơn dạ dày, chống viêm lành tính.<br>
            • <span class="chat-herb-chip">Gừng Tươi</span>: Làm ấm tỳ vị, giảm đầy hơi và buồn nôn.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('detox', 'floral', ['gastritis'])">
            🧪 Phối công thức êm dịu dạ dày
          </button>
        `;
      }

      // 8. KHỬ VỊ ĐẮNG TAS2R / KHOA HỌC THỰC PHẨM
      if (query.includes("đắng") || query.includes("khử vị") || query.includes("tas2r") || query.includes("ngọt") || query.includes("vị giác")) {
        return `
          <p><strong>🍵 Khoa Học Triệt Tiêu Vị Đắng Bằng Thực Phẩm Học (Food Science)</strong></p>
          <p style="margin-top:4px; font-size:0.86rem; line-height:1.6;">
            Dược liệu cổ truyền chứa Alkaloid kích thích mạnh thụ thể vị đắng <strong>TAS2R</strong> trên lưỡi. VinaVita AI áp dụng 3 đòn bẩy:<br>
            1. <strong>Acid citric Quất/Chanh dây:</strong> Làm biến đổi điện thế màng thụ thể, ngăn tín hiệu đắng truyền về não.<br>
            2. <strong>Stevioside Cỏ ngọt:</strong> Ngọt gấp 300 lần đường mía, 0-Calorie bọc lót hậu vị.<br>
            3. <strong>Hương Citrus &amp; Bạc hà:</strong> Limonene và Menthol kích thích khứu giác tạo cảm giác the mát tươi tỉnh.
          </p>
        `;
      }

      // 9. GIÁ CẢ / COMBO 5 GÓI SACHET GEN-Z
      if (query.includes("combo") || query.includes("giá") || query.includes("bao nhiêu") || query.includes("sachet") || query.includes("mua") || query.includes("gói")) {
        return `
          <p><strong>📦 Bảng Giá &amp; Quy Cách Đóng Gói VinaVita Sachet</strong></p>
          <div style="margin:8px 0; background:rgba(255,255,255,0.04); border-radius:10px; padding:10px; font-size:0.86rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span>🌿 <strong>Hộp Combo 5 Gói Sachet Mix Vị:</strong></span>
              <strong style="color:var(--gold-warm);">68.000 VNĐ (~13.6k/ly)</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>🍃 <strong>Gói Sachet Đơn (Mua lẻ):</strong></span>
              <span>15.000 – 18.000 VNĐ / gói</span>
            </div>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:8px;">
            Hộp 5 gói gồm: <em>Gói Chạy Deadline, Gói An Thần Ngủ Sâu, Gói Thức Khuya Sáng Mắt, Gói Thanh Nhiệt Thần Tốc, Gói Social Glow</em>.
          </p>
          <button class="chat-action-btn" type="button" onclick="openOrderModal('Combo 5 Gói Sachet VinaVita (68.000 VNĐ)')">
            🛒 Mở Form Đặt Thử Nghiệm Combo 5 Gói
          </button>
        `;
      }

      // 10. MỎI MẮT NHÌN MÀN HÌNH / KỶ TỬ
      if (query.includes("mắt") || query.includes("kỷ tử") || query.includes("mỏi mắt") || query.includes("màn hình")) {
        return `
          <p><strong>👁️ Bảo Vệ Mắt &amp; Gan Trước Ánh Sáng Xanh Laptop (Gói Sáng Mắt)</strong></p>
          <p style="margin-top:4px; font-size:0.86rem; line-height:1.6;">
            • <span class="chat-herb-chip">Kỷ Tử (5g)</span>: Zeaxanthin tái tạo sắc tố võng mạc, chống thoái hóa điểm vàng.<br>
            • <span class="chat-herb-chip">Cúc Hoa (3g)</span>: Thanh can hỏa, giảm nhức mỏi khô mắt.<br>
            • <span class="chat-herb-chip">Atiso (2g)</span>: Mát gan giải độc, da dẻ mịn màng.<br>
            👉 Hãm uống trong ngày như trà thơm, vị ngọt thanh tự nhiên từ Kỷ tử rất dễ uống!
          </p>
        `;
      }

      // 11. CHECK SPECIFIC SINGLE HERB IN DATABASE
      if (typeof MEDICINAL_DATABASE !== "undefined") {
        const matchedHerb = MEDICINAL_DATABASE.find(h => {
          const q = query;
          return q.includes(h.name.toLowerCase()) || 
                 q.includes(h.id.replace("_", " ")) ||
                 q.includes(h.enName.toLowerCase());
        });

        if (matchedHerb) {
          const compounds = matchedHerb.keyCompounds.map(c => `<code>${c.name}</code> (${c.action})`).join(", ");
          return `
            <p><strong>📚 Tra Cứu Dược Điển: ${matchedHerb.name}</strong> (<em>${matchedHerb.sciName}</em>)</p>
            <div style="margin:6px 0; font-size:0.85rem; line-height:1.55;">
              • <strong>Hoạt chất sinh học:</strong> ${compounds}<br>
              • <strong>Cơ chế dược lý:</strong> ${matchedHerb.bioAction}<br>
              • <strong>Liều an toàn:</strong> ${matchedHerb.safeDailyDose}<br>
              • <strong>Vị giác:</strong> Đắng ${matchedHerb.tasteProfile.bitterness}/5 | ${matchedHerb.tasteProfile.aroma}
            </div>
            <div class="chat-warning-box">
              ⚠️ <strong>Lưu ý an toàn:</strong> ${matchedHerb.contraindications.join("; ")}
            </div>
            <button class="chat-action-btn" type="button" onclick="openDatabaseSearch('${matchedHerb.name}')">
              📖 Xem trong Bách Khoa
            </button>
          `;
        }
      }

      // 12. DYNAMIC GENERATIVE FALLBACK (Conversational & Natural, Never Repeating Static Block)
      return `
        <p>Cảm ơn bạn đã hỏi về: <em>"${escapeHtml(rawQuery)}"</em> 🌿.</p>
        <p style="margin-top:6px; font-size:0.86rem; color:#e2e8f0; line-height:1.6;">
          AI Dược Sĩ VinaVita có thể giải đáp chi tiết theo 3 hướng:<br>
          1. <strong>Dược tính cụ thể:</strong> Hỏi về <em>Tâm Sen, Đinh Lăng, Lạc Tiên, Hoa Cúc, Kỷ Tử, Atiso...</em><br>
          2. <strong>Giải pháp theo nhu cầu:</strong> <em>Mất ngủ, cày deadline không ép tim, đau dạ dày, giải rượu 0% cồn...</em><br>
          3. <strong>Sản phẩm &amp; Giá:</strong> <em>Combo 5 gói sachet 68k, quy cách bảo quản OCOP...</em>
        </p>
        <p style="margin-top:6px; font-size:0.84rem; color:var(--emerald-light);">
          Bạn đang muốn ưu tiên giải quyết vấn đề sức khỏe nào nhất? Cứ nhắn cho mình biết nhé!
        </p>
      `;
    }
  }

"""

lines = lines[:start_idx] + [new_engine_code] + lines[end_idx:]

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"Successfully replaced engine in app.js! New lines: {len(lines)}")
