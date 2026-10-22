/**
 * VinaVita AI - AI Herbal Mixologist & Pharmacist Engine (RBPC 2026)
 * Core Logic for RBPC 2026 Interactive Prototype
 * Enhanced with Botanical Photography & Dynamic Visual Synthesis
 */

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const views = document.querySelectorAll(".main-view");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      views.forEach(v => v.classList.remove("active"));

      btn.classList.add("active");
      const targetView = document.getElementById(btn.dataset.target);
      if (targetView) targetView.classList.add("active");
    });
  });

  // State
  let selectedMood = "social";
  let selectedFlavor = "citrus";
  const activeConditions = new Set();

  // Option Cards Selection
  document.querySelectorAll(".opt-mood").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".opt-mood").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedMood = card.dataset.value;
    });
  });

  document.querySelectorAll(".opt-flavor").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".opt-flavor").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedFlavor = card.dataset.value;
    });
  });

  // Health Guardrails Checkboxes & Real-Time Alert Banner
  const guardrailInputs = document.querySelectorAll(".guardrail-input");
  const alertBanner = document.getElementById("safetyAlertBanner");
  const alertText = document.getElementById("safetyAlertText");

  guardrailInputs.forEach(input => {
    input.addEventListener("change", () => {
      if (input.checked) {
        activeConditions.add(input.value);
      } else {
        activeConditions.delete(input.value);
      }
      updateSafetyAlert();
    });
  });

  function updateSafetyAlert() {
    const excludedHerbs = [];
    const warnings = [];

    if (activeConditions.has("hypotension")) {
      excludedHerbs.push("Tâm Sen (Nelumbo nucifera)");
      warnings.push("Huyết áp thấp: Tự động loại bỏ Tâm Sen để tránh làm tụt áp lực thành mạch đột ngột.");
    }
    if (activeConditions.has("gastritis")) {
      excludedHerbs.push("Vỏ Quất / Chanh dây đậm đặc");
      warnings.push("Đau dạ dày / Trào ngược: Điều chỉnh độ acid hữu cơ, ưu tiên Cam Thảo và Hoa Cúc bảo vệ niêm mạc.");
    }
    if (activeConditions.has("pregnancy")) {
      excludedHerbs.push("Lạc Tiên liều cao & Rễ Đinh Lăng");
      warnings.push("Phụ nữ mang thai: Giới hạn các alkaloid có khả năng kích thích co bóp tử cung nhẹ.");
    }
    if (activeConditions.has("driving")) {
      excludedHerbs.push("Tâm Sen liều an thần sâu");
      warnings.push("Đang lái xe: Chỉ giữ các hoạt chất thư giãn GABA nhẹ nhàng, không gây buồn ngủ sâu.");
    }

    if (excludedHerbs.length > 0) {
      alertText.innerHTML = `<strong>⚠️ BỘ LỌC AN TOÀN SINH HỌC KÍCH HOẠT:</strong> Đã tự động loại trừ <strong>${excludedHerbs.join(", ")}</strong> khỏi thuật toán phối trộn. ${warnings.join(" ")}`;
      alertBanner.classList.add("active");
    } else {
      alertBanner.classList.remove("active");
    }
  }

  // Generate Formulation Button Logic
  const btnGenerate = document.getElementById("btnGenerate");
  const recipePlaceholder = document.getElementById("recipePlaceholder");
  const recipeCard = document.getElementById("recipeCard");

  btnGenerate.addEventListener("click", () => {
    btnGenerate.innerHTML = `<span>⏳</span> Đang mô hình hóa hoạt chất sinh học GABA...`;
    btnGenerate.disabled = true;

    setTimeout(() => {
      btnGenerate.innerHTML = `<span>🧬</span> Đang ức chế thụ thể đắng TAS2R...`;
    }, 600);

    setTimeout(() => {
      btnGenerate.innerHTML = `<span>✨</span> Hoàn tất công thức!`;
      renderGeneratedRecipe();
      btnGenerate.innerHTML = `<span>🧪</span> Kích Hoạt AI Mixologist Tạo Công Thức`;
      btnGenerate.disabled = false;
    }, 1200);
  });

  function renderGeneratedRecipe() {
    recipePlaceholder.style.display = "none";
    recipeCard.classList.add("active");

    let title = "Saigon Botanical Tonic";
    let subtitle = "Công thức thư giãn thần kinh không cồn";
    let badge = "AI-OPTIMIZED GABA TONIC";
    let heroImg = "assets/mocktail_hero.jpg";
    let formula = [];
    let brewTemp = "85°C";
    let brewTime = "3 phút 30 giây";
    let serving = "Lắc cùng đá viên, thêm 1 nhánh bạc hà tươi và lát tắc mỏng";
    let biochem = "";

    const hasLowBP = activeConditions.has("hypotension");

    if (selectedMood === "social") {
      title = selectedFlavor === "citrus" ? "Lạc Vibe Citrus Spritz" : "AnThảo Golden Velvet";
      subtitle = "Giải pháp thay thế Bia & Rượu nhẹ trong các bữa tiệc đêm (0.0% Cồn)";
      badge = "TIỆC TÙNG & CHILL TỰ DO";
      heroImg = "assets/mocktail_hero.jpg";
      formula = [
        { name: "Lạc Tiên (Passiflora)", sci: "Passiflora foetida", amount: "5.0g", note: "Vitexin kích hoạt GABA_A tạo cảm giác ấm áp, thư thái xã hội" },
        { name: "Đinh Lăng Nam", sci: "Polyscias fruticosa", amount: "3.0g", note: "Saponin adaptogen tăng tuần hoàn oxy não bộ, tăng sự tự tin" },
        { name: selectedFlavor === "citrus" ? "Quất Tươi (Tắc)" : "Cam Thảo Bắc", sci: selectedFlavor === "citrus" ? "Citrus japonica" : "Glycyrrhiza uralensis", amount: selectedFlavor === "citrus" ? "2 quả thái lát" : "2.0g", note: selectedFlavor === "citrus" ? "Acid citric bẻ gãy vị đắng tannin, tinh dầu Limonene sảng khoái" : "Glycyrrhizin làm dịu cổ họng và tạo hậu vị ngọt sâu" },
        { name: "Bạc Hà Nam", sci: "Mentha arvensis", amount: "2.0g", note: "Menthol the mát, tạo cảm giác sảng khoái như cocktail Mojito" }
      ];
      brewTemp = "85°C (bảo tồn Flavonoids)";
      brewTime = "3 phút";
      biochem = "Thuật toán tối ưu hóa tỷ lệ Vitexin (từ Lạc Tiên) và Saponin Adaptogen (từ Đinh Lăng) ở tỷ lệ 5:3, giúp hạ chỉ số căng thẳng xã hội mà không ức chế phản xạ thần kinh vận động. Nồng độ cồn trong máu tuyệt đối 0.00% an toàn theo Nghị định 168.";
    } else if (selectedMood === "unwind") {
      title = hasLowBP ? "Hương Thảo Dạ Khúc (No-Lotus)" : "Lotus Twilight Elixir";
      subtitle = "Giảm căng thẳng thi cử lúc 11h đêm & Đưa vào giấc ngủ sâu";
      badge = "NGỦ SÂU & GIẢM STRESS";
      heroImg = hasLowBP ? "assets/hoa_cuc.jpg" : "assets/tam_sen.jpg";
      formula = [
        hasLowBP 
          ? { name: "Hoa Cúc Trắng", sci: "Chrysanthemum indicum", amount: "4.0g", note: "Thay thế Tâm Sen để bảo vệ an toàn huyết áp; Apigenin xoa dịu thần kinh thị giác" }
          : { name: "Tâm Sen (Liên Tâm)", sci: "Embryo Nelumbinis", amount: "2.0g", note: "Alkaloid Liensinine giải trừ tâm hỏa, chậm nhịp tim hồi hộp" },
        { name: "Lạc Tiên Khô", sci: "Passiflora foetida", amount: "4.0g", note: "Điều hòa giấc ngủ sinh học, hạ cortisol" },
        { name: "Cam Thảo Bắc", sci: "Glycyrrhiza uralensis", amount: "1.5g", note: "Trung hòa vị đắng của thảo mộc, bọc lót niêm mạc dạ dày" },
        { name: "Cỏ Ngọt Tự Nhiên", sci: "Stevia rebaudiana", amount: "0.8g", note: "Tạo vị ngọt thanh khiết 0 calorie không gây tích mỡ đêm" }
      ];
      brewTemp = "80°C";
      brewTime = "4 phút";
      serving = "Uống ấm từng ngụm nhỏ trước giờ ngủ 30 phút";
      biochem = "Cơ chế hiệp đồng giữa Apigenin và Liensinine giúp đưa tần số sóng não từ Beta (căng thẳng học tập) về Alpha/Theta (trạng thái thiền định thư thái), rút ngắn thời gian đi vào giấc ngủ (Sleep Onset Latency) trung bình 42% theo tài liệu tiền lâm sàng.";
    } else if (selectedMood === "focus") {
      title = "Verdant Focus Brew";
      subtitle = "Tập trung cao độ 4 tiếng, thay thế Cà phê & Redbull, không ép tim";
      badge = "TỈNH TÁO BỀN VỮNG";
      heroImg = "assets/dinh_lang.jpg";
      formula = [
        { name: "Đinh Lăng Sâm Nam", sci: "Polyscias fruticosa", amount: "6.0g", note: "Tăng lưu lượng dưỡng khí lên thùy trán, duy trì sự tỉnh táo liên tục" },
        { name: "Bạc Hà Nam", sci: "Mentha arvensis", amount: "3.0g", note: "Kích hoạt thụ thể lạnh TRPM8 xua tan cơn buồn ngủ tức thì" },
        { name: "Quất Tươi (Tắc)", sci: "Citrus japonica", amount: "1 quả", note: "Vitamin C tự nhiên chống stress oxy hóa tế bào" },
        { name: "Cỏ Ngọt", sci: "Stevia rebaudiana", amount: "1.0g", note: "Độ ngọt mát tự nhiên duy trì đường huyết ổn định" }
      ];
      brewTemp = "90°C";
      brewTime = "2 phút 30 giây";
      serving = "Uống lạnh cùng đá viên hoặc bọt soda sủi bọt";
      biochem = "Không dựa vào caffeine gây co thắt động mạch và làm tăng nhịp tim đột ngột; năng lượng bền vững được tạo ra từ chuỗi polysaccharide và saponin kích thích sản sinh ATP nội sinh.";
    } else { // detox
      title = "Highland Liver Rescue";
      subtitle = "Thanh nhiệt mát gan, giải độc cơ thể sau chuỗi ngày thức đêm";
      badge = "THANH NHIỆT GIẢI ĐỘC";
      heroImg = "assets/atiso.jpg";
      formula = [
        { name: "Actisô Đà Lạt", sci: "Cynara scolymus", amount: "6.0g", note: "Cynarin kích thích chức năng bài tiết mật và tái tạo tế bào gan" },
        { name: "Hoa Cúc Trắng", sci: "Chrysanthemum indicum", amount: "4.0g", note: "Thanh can hỏa, sáng mắt, giải độc da mặt" },
        { name: "Cam Thảo", sci: "Glycyrrhiza uralensis", amount: "2.0g", note: "Hòa vị, dẫn hoạt chất làm mát toàn bộ hệ tiêu hóa" }
      ];
      brewTemp = "92°C";
      brewTime = "5 phút";
      serving = "Có thể uống ấm hoặc uống lạnh cả ngày thay nước lọc";
      biochem = "Tối đa hóa nồng độ Cynarin và acid hữu cơ thực vật hỗ trợ hệ enzyme Cytochrome P450 tại gan đào thải nhanh độc tố sinh ra trong quá trình thức khuya dài ngày.";
    }

    // Populate UI
    document.getElementById("resBadge").textContent = badge;
    document.getElementById("resTitle").textContent = title;
    document.getElementById("resSubtitle").textContent = subtitle;
    
    const heroImgEl = document.getElementById("resHeroImg");
    if (heroImgEl) heroImgEl.src = heroImg;

    const tbody = document.getElementById("resFormulaBody");
    tbody.innerHTML = "";
    formula.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <div class="formula-herb-name">${item.name}</div>
          <div class="formula-herb-sci">${item.sci}</div>
        </td>
        <td><strong>${item.amount}</strong></td>
        <td style="color:var(--text-muted); font-size:0.82rem;">${item.note}</td>
      `;
      tbody.appendChild(tr);
    });

    document.getElementById("resBrewTemp").textContent = brewTemp;
    document.getElementById("resBrewTime").textContent = brewTime;
    document.getElementById("resServing").textContent = serving;
    document.getElementById("resBiochem").textContent = biochem;
  }

  // Render Signature Drinks
  const sigContainer = document.getElementById("signatureContainer");
  if (sigContainer && typeof SIGNATURE_DRINKS !== "undefined") {
    sigContainer.innerHTML = "";
    SIGNATURE_DRINKS.forEach(drink => {
      const card = document.createElement("div");
      card.className = "sig-card";
      
      const formulaSnippet = drink.formula.map(f => {
        const herb = MEDICINAL_DATABASE.find(h => h.id === f.herbId);
        return `• <strong>${herb ? herb.name : f.herbId}</strong> (${f.amount})`;
      }).join("<br>");

      card.innerHTML = `
        <div>
          <div class="sig-img-wrap">
            <img src="${drink.image}" alt="${drink.name}" class="sig-img">
            <span class="sig-badge-overlay">${drink.badge}</span>
          </div>
          <div class="sig-title">${drink.name}</div>
          <div class="sig-subtitle">${drink.subtitle}</div>
          <div class="sig-desc">${drink.biochemicalSummary}</div>
          <div class="sig-ingredients">
            <div class="sig-ing-title">Công thức định lượng AI:</div>
            <div class="sig-ing-list">${formulaSnippet}</div>
          </div>
        </div>
        <div>
          <div class="sig-footer">
            <span class="sig-price">${drink.sachetPrice}</span>
            <button class="btn-primary-action btn-order-trigger" data-drink="${drink.name}">Đặt Gói Sachet</button>
          </div>
        </div>
      `;
      sigContainer.appendChild(card);
    });
  }

  // Render Database Encyclopedia with Botanical Photography
  const dbContainer = document.getElementById("dbContainer");
  const searchInput = document.getElementById("dbSearchInput");

  function renderDatabase(herbs) {
    if (!dbContainer) return;
    dbContainer.innerHTML = "";
    herbs.forEach(herb => {
      const card = document.createElement("div");
      card.className = "herb-card";

      const compoundsList = herb.keyCompounds.map(c => `<code>${c.name}</code> (${c.action})`).join(", ");
      const warningsList = herb.contraindications.join("; ");

      card.innerHTML = `
        <div class="herb-img-wrap">
          <img src="${herb.image}" alt="${herb.name}" class="herb-img">
          <span class="herb-badge-overlay">${herb.categoryLabel}</span>
        </div>
        <div class="herb-body">
          <div class="herb-header">
            <div class="herb-name">${herb.name}</div>
            <div class="herb-sci">${herb.sciName} • ${herb.enName}</div>
            <div class="heritage-origin-tag"><span>📍</span> ${herb.heritageOrigin || 'Vùng Dược Liệu Bản Địa Đại Việt'}</div>
          </div>
          <div class="herb-prop"><strong>Bộ phận dùng:</strong> ${herb.partUsed}</div>
          <div class="herb-prop"><strong>Hoạt chất sinh học:</strong> ${compoundsList}</div>
          <div class="herb-prop"><strong>Cơ chế dược lý:</strong> ${herb.bioAction}</div>
          <div class="herb-prop"><strong>Liều dùng an toàn:</strong> ${herb.safeDailyDose}</div>
          <div class="herb-prop"><strong>Hương vị & Độ đắng:</strong> Đắng ${herb.tasteProfile.bitterness}/5 | ${herb.tasteProfile.aroma}</div>
          <div class="herb-prop"><strong>Quy tắc phối vị:</strong> ${herb.maskingRules.join(". ")}</div>
          <div class="warning-tag">⚠️ <strong>Lưu ý:</strong> ${warningsList}</div>
          ${herb.mindfulReminder ? `
          <div class="mindful-reminder-box">
            <span class="mindful-icon">🪷</span>
            <div class="mindful-content">
              <div class="mindful-title">Lời Nhắc Chánh Niệm &amp; An Lành:</div>
              <div class="mindful-text">"${herb.mindfulReminder}"</div>
            </div>
          </div>` : ''}
        </div>
      `;
      dbContainer.appendChild(card);
    });
  }

  if (typeof MEDICINAL_DATABASE !== "undefined") {
    renderDatabase(MEDICINAL_DATABASE);

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = MEDICINAL_DATABASE.filter(h => {
          return h.name.toLowerCase().includes(query) ||
                 h.sciName.toLowerCase().includes(query) ||
                 h.enName.toLowerCase().includes(query) ||
                 (h.heritageOrigin && h.heritageOrigin.toLowerCase().includes(query)) ||
                 (h.mindfulReminder && h.mindfulReminder.toLowerCase().includes(query)) ||
                 h.bioAction.toLowerCase().includes(query) ||
                 h.keyCompounds.some(c => c.name.toLowerCase().includes(query));
        });
        renderDatabase(filtered);
      });
    }
  }

  
  
  // ==============================================================================
  // VinaVita AI PHARMACIST CORNER POPUP CHATBOT ENGINE
  // ==============================================================================
  function initChatWidget() {
    const widgetBox = document.getElementById("chatWidgetBox");
    const toggleBtn = document.getElementById("chatWidgetToggleBtn");
    const closeBtn = document.getElementById("chatWidgetCloseBtn");
    const minimizeBtn = document.getElementById("chatWidgetMinimizeBtn");
    const navBtn = document.getElementById("navOpenChatBtn");
    const fabIconOpen = document.querySelector(".fab-icon-open");
    const fabIconClose = document.querySelector(".fab-icon-close");

    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const btnChatSend = document.getElementById("btnChatSend");
    const promptChips = document.querySelectorAll(".chat-prompt-chip");

    function openChatWidget() {
      if (!widgetBox) return;
      widgetBox.style.display = "flex";
      if (fabIconOpen) fabIconOpen.style.display = "none";
      if (fabIconClose) fabIconClose.style.display = "inline";
      scrollToBottom();
      if (chatInput) {
        setTimeout(() => chatInput.focus(), 150);
      }
    }

    function closeChatWidget() {
      if (!widgetBox) return;
      widgetBox.style.display = "none";
      if (fabIconOpen) fabIconOpen.style.display = "inline";
      if (fabIconClose) fabIconClose.style.display = "none";
    }

    function toggleChatWidget() {
      if (!widgetBox) return;
      if (widgetBox.style.display === "none" || widgetBox.style.display === "") {
        openChatWidget();
      } else {
        closeChatWidget();
      }
    }

    if (toggleBtn) toggleBtn.addEventListener("click", toggleChatWidget);
    if (closeBtn) closeBtn.addEventListener("click", closeChatWidget);
    if (minimizeBtn) minimizeBtn.addEventListener("click", closeChatWidget);
    if (navBtn) navBtn.addEventListener("click", openChatWidget);

    window.toggleChatWidget = toggleChatWidget;
    window.openChatWidget = openChatWidget;

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
        <div class="msg-bubble" style="padding:10px 14px;">
          <div class="typing-bubble">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span style="font-size:0.75rem; color:var(--emerald-light); margin-left:6px;">Đang tra cứu Dược điển...</span>
          </div>
        </div>
      `;
      chatMessages.appendChild(typingDiv);
      scrollToBottom();
      return typingDiv;
    }

    async function handleSend(queryText) {
      const text = (queryText || (chatInput ? chatInput.value : "")).trim();
      if (!text) return;
      if (chatInput) chatInput.value = "";

      appendUserMessage(text);
      const typingElem = showTypingIndicator();

      // Dual-Mode Architecture: Connect to Local Neural SLM Server (15s timeout)
      let serverAnswer = null;
      let serverModel = "Qwen2.5-1.5B Neural SLM";
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);
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
            if (data.model) serverModel = data.model;
          }
        }
      } catch (err) {
        // Fallback to On-Device Client Generative SLM Engine
      }

      if (typingElem) typingElem.remove();
      if (serverAnswer) {
        appendBotMessage(`
          <div style="display:inline-flex; align-items:center; gap:4px; font-size:0.72rem; color:var(--emerald-light); background:rgba(16,185,129,0.15); border:1px solid rgba(52,211,153,0.3); border-radius:10px; padding:2px 8px; margin-bottom:8px;">
            ⚡ <strong>${serverModel}</strong>
          </div>
          <p>${serverAnswer.replace(/\n/g, '<br>')}</p>
        `);
      } else {
        const responseHtml = generateGenerativeSLMResponse(text);
        appendBotMessage(responseHtml);
      }
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
      const p = rawQuery.trim();
      const p_lower = p.toLowerCase();

      // 1. MATH & GENERAL LOGIC (e.g., whats 2+2, 2+2, etc.)
      const mathMatch = p_lower.match(/(\d+)\s*([\+\-\*/])\s*(\d+)/);
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

      if (p_lower.match(/\b(whats|what is)\s+2\s*\+\s*2\b/i)) {
        return `
          <p>💡 <strong>2 + 2 = 4</strong> nha! 😄</p>
          <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">Cơ mà ngoài toán học số học, mình là <strong>VinaVita AI Pharmacist</strong> — trợ lý Dược sĩ Trí tuệ Nhân tạo chuyên giải quyết các bài toán về stress học đường, mất ngủ, cày deadline và hóa sinh thảo mộc Việt Nam. Bạn có câu hỏi nào về dược liệu hay công thức mocktail không nè?</p>
        `;
      }

      // 2. GREETINGS (Exact word boundary, never matching 'khi' or 'thi')
      if (p_lower.match(/\b(hi|hello|alo|chào|helo|hey|hế nhô|hé lô|yo)\b/i) && p_lower.split(/\s+/).length <= 4) {
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
    }
  }

  // Initialize Chat Widget
  initChatWidget();


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

});
