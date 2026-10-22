import sys

sys.stdout.reconfigure(encoding='utf-8')

APP_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\app.js"

with open(APP_PATH, "r", encoding="utf-8") as f:
    app_code = f.read()

# 1. Update brand in header comments
app_code = app_code.replace(
    "AnThảo AI - AI Herbal Mixologist Engine & UI Controller",
    "VinaVita AI - AI Herbal Mixologist & Pharmacist Engine (RBPC 2026)"
)

# 2. Add escapeHtml helper and full Chatbot logic before the DOMContentLoaded close
chatbot_logic = """
  // ==============================================================================
  // VinaVita AI PHARMACIST CHATBOT (INTELLIGENT BOTANICAL CONSULTANT)
  // Direct Access to Master Phytochemical Database & Pharmacological Guardrails
  // ==============================================================================
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  const btnChatSend = document.getElementById("btnChatSend");
  const promptChips = document.querySelectorAll(".chat-prompt-chip");

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function scrollToBottom() {
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  function appendUserMessage(text) {
    if (!chatMessages) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-msg user";
    msgDiv.innerHTML = `
      <div class="msg-avatar">👤</div>
      <div class="msg-bubble">
        <div class="msg-author">Bạn (Gen-Z)</div>
        <p>${escapeHtml(text)}</p>
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
  }

  function appendBotMessage(htmlContent) {
    if (!chatMessages) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = "chat-msg bot";
    msgDiv.innerHTML = `
      <div class="msg-avatar">🌿</div>
      <div class="msg-bubble">
        <div class="msg-author">AI Dược Sĩ VinaVita</div>
        ${htmlContent}
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
  }

  function showTypingIndicator() {
    if (!chatMessages) return null;
    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-msg bot typing-msg";
    typingDiv.innerHTML = `
      <div class="msg-avatar">🌿</div>
      <div class="msg-bubble" style="padding:10px 16px;">
        <div class="typing-bubble">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span style="font-size:0.78rem; color:var(--emerald-light); margin-left:8px;">AI Dược Sĩ đang tra cứu cơ chế dược lý sinh học &amp; Dược điển Việt Nam...</span>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
    return typingDiv;
  }

  // Knowledge Matching Engine
  function generateBotResponse(rawQuery) {
    const query = rawQuery.toLowerCase().trim();

    // 1. Check for Tâm Sen / Huyết áp thấp
    if (query.includes("tâm sen") || query.includes("tim sen") || (query.includes("sen") && (query.includes("huyết áp") || query.includes("ngủ")))) {
      return `
        <p><strong>🌸 Dược liệu: Tâm Sen (Embryo Nelumbinis)</strong></p>
        <p style="margin-top:6px;"><strong>Hoạt chất sinh học chính:</strong> <span class="chat-herb-chip">Liensinine</span>, <span class="chat-herb-chip">Isoliensinine</span>, <span class="chat-herb-chip">Nuciferine</span> (Alkaloid).</p>
        <p style="margin-top:6px;"><strong>Cơ chế dược lý:</strong> Tâm Sen có tác dụng thanh nhiệt tâm hỏa, an thần sâu, hỗ trợ giải tỏa tình trạng bồn chồn, tim đập nhanh do căng thẳng thi cử hoặc áp lực deadline.</p>
        
        <div class="chat-warning-box">
          <strong>⚠️ CẢNH BÁO QUAN TRỌNG: NGƯỜI HUYẾT ÁP THẤP</strong><br>
          Hoạt chất Liensinine có cơ chế làm dãn cơ trơn mạch máu, khiến <strong>huyết áp hạ nhanh</strong>. Nếu bạn có tiền sử huyết áp thấp (&lt; 90/60 mmHg), tuyệt đối <strong>KHÔNG</strong> dùng Tâm Sen đơn độc liều cao (&gt; 2g/ngày) vì dễ gây hoa mắt, choáng váng.<br>
          👉 <em>Giải pháp:</em> VinaVita AI sẽ tự động thay thế Tâm Sen bằng <span class="chat-herb-chip">Hoa Cúc (Flavonoid Apigenin)</span> + <span class="chat-herb-chip">Lạc Tiên</span>, hoặc phối hợp cùng <span class="chat-herb-chip">Kỷ Tử</span> để cân bằng áp lực tuần hoàn!
        </div>

        <div class="chat-recipe-card">
          <strong style="color:var(--emerald-bright);">💡 Gợi ý công thức cho người mất ngủ nhẹ:</strong><br>
          • Tâm Sen (1g) + Hoa Cúc (3g) + Cam Thảo (1.5g) hãm nước sôi 90°C trong 5 phút.
        </div>
        <button class="chat-action-btn" onclick="applyMixParams('unwind', 'floral', ['hypotension'])">
          🧪 Thử phối công thức an thần không tụt áp
        </button>
      `;
    }

    // 2. Chạy deadline / Thức khuya / Cần tập trung không ép tim
    if (query.includes("deadline") || query.includes("thức khuya") || query.includes("tập trung") || query.includes("tỉnh táo") || query.includes("ép tim") || query.includes("mệt mỏi")) {
      return `
        <p><strong>⚡ Giải pháp Thảo Mộc Chạy Deadline Không Ép Tim (Thay thế Nước Tăng Lực &amp; Cà phê)</strong></p>
        <p style="margin-top:6px;">Khác với nước tăng lực công nghiệp (chứa 80-150mg Caffeine tự do và 30g đường hóa học gây nhịp tim nhanh và hạ đường huyết đột ngột "sugar crash"), VinaVita AI ứng dụng nguyên lý <strong>Sóng Não Alpha &amp; Adaptogen</strong>:</p>
        
        <div style="margin:10px 0; padding-left:10px; border-left:2px solid var(--emerald-bright); font-size:0.88rem; line-height:1.6;">
          • <span class="chat-herb-chip">Đinh Lăng (Polysaccharide &amp; Saponin)</span>: Được mệnh danh là "Sâm Việt Nam", tăng cường oxy lên vỏ não, tăng sức chịu đựng của tế bào thần kinh.<br>
          • <span class="chat-herb-chip">Trà Xanh Thái Nguyên (L-Theanine)</span>: Kích hoạt sóng não Alpha (8-12 Hz), đưa não vào trạng thái tập trung điềm tĩnh, sáng tạo và bền bỉ.<br>
          • <span class="chat-herb-chip">Bạc Hà (Menthol)</span>: Kích thích thụ thể the mát TRPM8, giải tỏa cơn buồn ngủ tức thì.<br>
          • <span class="chat-herb-chip">Cỏ Ngọt (Stevia)</span>: Cung cấp vị ngọt thanh 0-Calorie, không kích ứng đường huyết.
        </div>

        <div class="chat-recipe-card">
          <strong style="color:var(--gold-warm);">📦 Sản phẩm tương ứng: Gói Sachet "Chạy Deadline" (15.000 VNĐ / Gói)</strong><br>
          Duy trì sự tỉnh táo 4 tiếng liên tục. Hãm nước nóng 85°C trong 3 phút, có thể thêm đá và soda để thành ly Mocktail mát lạnh.
        </div>
        <button class="chat-action-btn" onclick="applyMixParams('focus', 'herbal', [])">
          🧪 Nạp công thức Calm Focus vào AI Mixologist
        </button>
      `;
    }

    // 3. Mất ngủ / Xoa dịu thần kinh / Giảm stress
    if (query.includes("mất ngủ") || query.includes("ngủ ngon") || query.includes("stress") || query.includes("căng thẳng") || query.includes("lo âu") || query.includes("gaba")) {
      return `
        <p><strong>🌙 Liệu Pháp Thảo Mộc Tái Tạo Thụ Thể GABA Cho Giấc Ngủ Sâu</strong></p>
        <p style="margin-top:6px;">Khi bạn thức khuya học bài hoặc căng thẳng kéo dài, nồng độ hormone Cortisol tăng vọt và chất dẫn truyền ức chế GABA bị suy kiệt. VinaVita kết hợp bộ 3 thảo dược hiệp đồng:</p>
        
        <div style="margin:10px 0; font-size:0.88rem; line-height:1.6;">
          1. <span class="chat-herb-chip">Lạc Tiên (Passiflora foetida)</span>: Chứa Vitexin gắn kết trực tiếp lên thụ thể GABA_A, giúp não bộ tự động tắt các suy nghĩ mông lung.<br>
          2. <span class="chat-herb-chip">Hoa Cúc (Chamomilla)</span>: Cung cấp Flavonoid Apigenin làm dịu hệ cơ, chống co thắt dạ dày do stress.<br>
          3. <span class="chat-herb-chip">Cam Thảo (Glycyrrhiza uralensis)</span>: Hòa hoãn tính dược, tạo hậu vị ngọt sâu thư thái.
        </div>

        <div class="chat-recipe-card">
          <strong style="color:var(--emerald-light);">⭐ Thức uống đề xuất: Saigon Sunset Tonic hoặc Lotus Twilight</strong><br>
          Uống trước khi đi ngủ 45–60 phút. Không gây cảm giác li bì, thức dậy sảng khoái và tỉnh táo.
        </div>
        <button class="chat-action-btn" onclick="applyMixParams('unwind', 'citrus', [])">
          🧪 Xem công thức Night Unwind
        </button>
      `;
    }

    // 4. Khử vị đắng TAS2R / Khoa học thực phẩm
    if (query.includes("đắng") || query.includes("khử vị") || query.includes("tas2r") || query.includes("ngọt") || query.includes("vị giác")) {
      return `
        <p><strong>🍵 Khoa Học Triệt Tiêu Vị Đắng Dược Liệu Bằng Thực Phẩm Học (Food Science)</strong></p>
        <p style="margin-top:6px;">Dược liệu cổ truyền (như Lạc Tiên, Tâm Sen, Atiso) chứa nhiều Alkaloid và Flavonoid kích thích mạnh mẽ lên <strong>thụ thể đắng TAS2R</strong> trên gai lưỡi người. Để Gen-Z dễ uống như trà đào / mocktail quán cafe mà <strong>KHÔNG DÙNG ĐƯỜNG TINH LUYỆN</strong>, VinaVita AI áp dụng 3 quy tắc vàng:</p>
        
        <div style="margin:10px 0; padding-left:12px; border-left:2px solid var(--gold-warm); font-size:0.88rem; line-height:1.65;">
          <strong>1. Khóa thụ thể bằng Acid hữu cơ:</strong> Acid citric và malic tự nhiên trong Quất / Chanh dây làm biến đổi điện thế màng tế bào vị giác, ức chế tín hiệu đắng truyền về não.<br>
          <strong>2. Tạo màng nhung hậu vị bằng Stevioside:</strong> Cỏ ngọt (Stevia rebaudiana) có vị ngọt gấp 300 lần đường mía nhưng phân tử không bị vi khuẩn khoang miệng lên men, tạo cảm giác thanh dịu kéo dài.<br>
          <strong>3. Đánh lừa khứu giác bằng Tinh dầu Citrus &amp; Bạc hà:</strong> Khứu giác chiếm 80% trải nghiệm hương vị; Limonene và Menthol bốc hơi tạo cảm giác tươi mát sảng khoái, triệt tiêu hoàn toàn mùi nồng của thuốc bắc.
        </div>
      `;
    }

    // 5. Giá cả / Combo 5 gói Sachet Gen-Z
    if (query.includes("combo") || query.includes("giá") || query.includes("bao nhiêu") || query.includes("sachet") || query.includes("mua") || query.includes("gói")) {
      return `
        <p><strong>📦 Bảng Giá &amp; Quy Cách Đóng Gói VinaVita Sachet (Gen-Z Botanical)</strong></p>
        <p style="margin-top:6px;">Dự án của Nhóm RChim thiết kế bao bì dạng túi Sachet màng nhôm bảo quản hoạt chất sinh học, định lượng chính xác theo gram:</p>
        
        <div style="margin:10px 0; background:rgba(255,255,255,0.04); border-radius:12px; padding:12px; font-size:0.88rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:6px;">
            <span>🌿 <strong>Hộp Combo 5 Gói Sachet Mix Vị:</strong></span>
            <strong style="color:var(--gold-warm);">68.000 VNĐ (~13.6k/ly)</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span>🍃 <strong>Gói Sachet Đơn (Mua lẻ):</strong></span>
            <span>15.000 – 18.000 VNĐ / gói</span>
          </div>
        </div>

        <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:10px;">
          <strong>5 Gói Chủ Lực Cho Học Sinh / Sinh Viên:</strong><br>
          1. ⚡ <em>Gói Chạy Deadline</em> (Đinh Lăng + Trà Xanh + Bạc Hà)<br>
          2. 🌙 <em>Gói An Thần Ngủ Sâu</em> (Lạc Tiên + Hoa Cúc + Cam Thảo)<br>
          3. 👁️ <em>Gói Thức Khuya Sáng Mắt</em> (Kỷ Tử + Cúc Hoa + Atiso)<br>
          4. 🧊 <em>Gói Thanh Nhiệt Thần Tốc</em> (Atiso + Vỏ Quất + Cỏ Ngọt)<br>
          5. 🌟 <em>Gói Social Glow Tiệc Tùng</em> (Mocktail 0.0% Cồn)
        </p>

        <button class="chat-action-btn" onclick="openOrderModal('Combo 5 Gói Sachet VinaVita (68.000 VNĐ)')">
          🛒 Mở Form Đặt Thử Nghiệm Combo 5 Gói (68.000 VNĐ)
        </button>
      `;
    }

    // 6. Đau dạ dày / Tiêu hóa
    if (query.includes("dạ dày") || query.includes("bao tử") || query.includes("trào ngược") || query.includes("tiêu hóa")) {
      return `
        <p><strong>🛡️ Khuyến Nghị Cho Người Bị Đau Dạ Dày &amp; Trào Ngược Thực Quản</strong></p>
        <p style="margin-top:6px;">Nếu bạn thường xuyên bị ợ chua, cồn cào hoặc viêm loét dạ dày tá tràng:</p>
        
        <div class="chat-warning-box">
          <strong>⚠️ Chống chỉ định:</strong> Không dùng Vỏ Quất / Chanh dây liều cao lúc đói, và hạn chế Trà xanh đậm đặc vì tanin kích thích tăng tiết acid dịch vị.
        </div>

        <div style="margin:10px 0; font-size:0.88rem; line-height:1.6;">
          <strong>Thảo mộc bảo vệ niêm mạc khuyên dùng:</strong><br>
          • <span class="chat-herb-chip">Cam Thảo</span>: Hoạt chất Glycyrrhizin tạo lớp bảo vệ nhầy trên niêm mạc, ức chế vi khuẩn HP.<br>
          • <span class="chat-herb-chip">Hoa Cúc</span>: Giảm co thắt cơ trơn dạ dày, chống viêm lành tính.<br>
          • <span class="chat-herb-chip">Gừng Tươi</span>: Làm ấm tỳ vị, giảm đầy hơi và buồn nôn.
        </div>
        <button class="chat-action-btn" onclick="applyMixParams('detox', 'floral', ['gastritis'])">
          🧪 Phối công thức êm dịu dạ dày
        </button>
      `;
    }

    // 7. Check specific single herb in database
    const matchedHerb = MEDICINAL_DATABASE.find(h => {
      const q = query;
      return q.includes(h.name.toLowerCase()) || 
             q.includes(h.id.replace("_", " ")) ||
             q.includes(h.enName.toLowerCase());
    });

    if (matchedHerb) {
      const compounds = matchedHerb.keyCompounds.map(c => `<code>${c.name}</code> (${c.action})`).join(", ");
      const warnings = matchedHerb.contraindications.join("; ");
      return `
        <p><strong>📚 Tra Cứu Dược Điển: ${matchedHerb.name}</strong> (<em>${matchedHerb.sciName}</em>)</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">Tên tiếng Anh: ${matchedHerb.enName} • Bộ phận dùng: ${matchedHerb.partUsed}</p>
        
        <div style="margin:8px 0; font-size:0.88rem; line-height:1.6;">
          • <strong>Hoạt chất sinh học:</strong> ${compounds}<br>
          • <strong>Cơ chế dược lý:</strong> ${matchedHerb.bioAction}<br>
          • <strong>Liều an toàn:</strong> ${matchedHerb.safeDailyDose}<br>
          • <strong>Vị giác:</strong> Độ đắng ${matchedHerb.tasteProfile.bitterness}/5 | ${matchedHerb.tasteProfile.aroma}
        </div>

        <div class="chat-warning-box">
          ⚠️ <strong>Lưu ý an toàn:</strong> ${warnings}
        </div>

        <button class="chat-action-btn" onclick="openDatabaseSearch('${matchedHerb.name}')">
          📖 Xem trong Bách Khoa Dược Liệu
        </button>
      `;
    }

    // Default Fallback
    return `
      <p>Cảm ơn câu hỏi của bạn! Với câu hỏi này, AI Dược Sĩ VinaVita xin gợi ý dựa trên kho tri thức Dược điển Việt Nam:</p>
      <p style="margin-top:6px; font-size:0.88rem; color:#cbd5e1;">Hệ thống hỗ trợ tra cứu chuyên sâu về các dược liệu: <em>Lạc Tiên, Tâm Sen, Đinh Lăng, Cúc Hoa, Kỷ Tử, Atiso, Bạc Hà, Cỏ Ngọt, Cam Thảo, Trà Xanh, Gừng</em> và các bài toán sức khỏe học đường (mất ngủ, ôn thi chạy deadline, huyết áp, dạ dày, vị đắng TAS2R).</p>
      <p style="margin-top:8px; font-size:0.85rem; color:var(--emerald-light);">Bạn có thể thử bấm vào các câu hỏi gợi ý ở thanh trên, hoặc nhập từ khóa như: <strong>"Đinh lăng có tác dụng gì?"</strong> hoặc <strong>"Uống gì cho đỡ mỏi mắt?"</strong> nhé!</p>
    `;
  }

  // Bind to window for global inline triggers
  window.applyMixParams = function(mood, flavor, conditions) {
    // Switch to Mixologist tab
    document.querySelectorAll(".tab-btn").forEach(b => {
      if (b.dataset.target === "viewMixologist") b.click();
    });

    // Set mood
    document.querySelectorAll(".opt-mood").forEach(c => {
      c.classList.toggle("selected", c.dataset.value === mood);
    });

    // Set flavor
    document.querySelectorAll(".opt-flavor").forEach(c => {
      c.classList.toggle("selected", c.dataset.value === flavor);
    });

    // Set guardrails
    document.querySelectorAll(".guardrail-input").forEach(input => {
      input.checked = conditions.includes(input.value);
    });

    // Trigger update
    if (typeof updateSafetyAlert === "function") updateSafetyAlert();

    // Trigger auto click generate
    const btnGen = document.getElementById("btnGenerate");
    if (btnGen) {
      btnGen.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => btnGen.click(), 300);
    }
  };

  window.openDatabaseSearch = function(herbName) {
    document.querySelectorAll(".tab-btn").forEach(b => {
      if (b.dataset.target === "viewDatabase") b.click();
    });
    const searchInput = document.getElementById("dbSearchInput");
    if (searchInput) {
      searchInput.value = herbName;
      searchInput.dispatchEvent(new Event("input"));
      searchInput.scrollIntoView({ behavior: "smooth" });
    }
  };

  window.openOrderModal = function(drinkName) {
    const modal = document.getElementById("orderModal");
    const modalItemName = document.getElementById("modalItemName");
    const modalPriceDisplay = document.getElementById("modalPriceDisplay");
    const orderFormState = document.getElementById("orderFormState");
    const orderSuccessState = document.getElementById("orderSuccessState");

    if (modalItemName) modalItemName.textContent = drinkName || "Combo 5 Gói Sachet VinaVita";
    if (modalPriceDisplay) {
      modalPriceDisplay.textContent = drinkName && drinkName.includes("Combo") ? "68.000 VNĐ (~13.6k/gói)" : "15.000 VNĐ / gói";
    }

    if (orderFormState) orderFormState.style.display = "block";
    if (orderSuccessState) orderSuccessState.style.display = "none";

    if (modal) modal.classList.add("active");
  };

  // Setup Chatbot listeners
  setupChatbot();

  // Enhanced Modal Listeners
  const modal = document.getElementById("orderModal");
  const modalClose = document.getElementById("modalClose");
  const btnConfirmOrder = document.getElementById("btnConfirmOrder");
  const btnDoneOrder = document.getElementById("btnDoneOrder");
  const orderFormState = document.getElementById("orderFormState");
  const orderSuccessState = document.getElementById("orderSuccessState");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-order-trigger")) {
      const drinkName = e.target.dataset.drink || "Gói Sachet VinaVita Tùy Chỉnh";
      window.openOrderModal(drinkName);
    }
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => modal.classList.remove("active"));
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  if (btnConfirmOrder) {
    btnConfirmOrder.addEventListener("click", () => {
      btnConfirmOrder.innerHTML = "⏳ Đang kết nối HTX Dược liệu OCOP...";
      btnConfirmOrder.disabled = true;

      setTimeout(() => {
        const orderId = "#VV-2026-" + Math.floor(1000 + Math.random() * 9000);
        const custName = document.getElementById("orderCustName") ? document.getElementById("orderCustName").value : "Khách hàng";
        const custAddress = document.getElementById("orderCustAddress") ? document.getElementById("orderCustAddress").value : "TP.HCM";
        const itemName = document.getElementById("modalItemName") ? document.getElementById("modalItemName").textContent : "Combo 5 Gói Sachet VinaVita";

        if (document.getElementById("receiptOrderId")) document.getElementById("receiptOrderId").textContent = orderId;
        if (document.getElementById("receiptCustName")) document.getElementById("receiptCustName").textContent = custName;
        if (document.getElementById("receiptCustAddress")) document.getElementById("receiptCustAddress").textContent = custAddress;
        if (document.getElementById("receiptItemName")) document.getElementById("receiptItemName").textContent = itemName;

        if (orderFormState) orderFormState.style.display = "none";
        if (orderSuccessState) orderSuccessState.style.display = "block";

        btnConfirmOrder.disabled = false;
        btnConfirmOrder.innerHTML = "🚀 Xác Nhận Đặt Thử Nghiệm (Combo 5 Gói)";
      }, 600);
    });
  }

  if (btnDoneOrder) {
    btnDoneOrder.addEventListener("click", () => {
      if (modal) modal.classList.remove("active");
    });
  }
"""

# Replace the old modal block in app_code with the new logic
old_modal_code_marker = "// Modal Ordering Simulation"
pos_marker = app_code.find(old_modal_code_marker)
if pos_marker != -1:
    app_code = app_code[:pos_marker] + chatbot_logic + "\n});\n"
    print("Successfully replaced modal code and inserted Chatbot into app.js!")
else:
    print("Warning: old_modal_code_marker not found, appending before end!")
    last_brace = app_code.rfind("});")
    app_code = app_code[:last_brace] + chatbot_logic + "\n});\n"

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(app_code)

print("Updated app.js successfully. Length:", len(app_code))
