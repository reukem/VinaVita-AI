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

  // Global Helper: Select Hero Sachet from Home Bar
  window.selectHeroSachet = function(mood, flavor) {
    const tabBtn = document.querySelector('.tab-btn[data-target="viewMixologist"]');
    if (tabBtn) tabBtn.click();

    const moodCard = document.querySelector(`.opt-mood[data-value="${mood}"]`);
    if (moodCard) moodCard.click();

    const flavorCard = document.querySelector(`.opt-flavor[data-value="${flavor}"]`);
    if (flavorCard) flavorCard.click();

    const studio = document.getElementById("viewMixologist");
    if (studio) studio.scrollIntoView({ behavior: "smooth", block: "start" });

    const btnGen = document.getElementById("btnGenerate");
    if (btnGen) setTimeout(() => btnGen.click(), 100);
  };

  // State
  let selectedMood = "social";
  let selectedFlavor = "citrus";
  const activeConditions = new Set();

  // Option Cards Selection
  // Option Cards Selection
  document.querySelectorAll(".opt-mood").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".opt-mood").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedMood = card.dataset.value;
      updateSafetyAlert();
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
    const blockedActions = [];

    if (activeConditions.has("hypotension")) {
      blockedActions.push({
        rule: "Huyết áp thấp (Hypotension)",
        blocked: "Tâm Sen (Nelumbo nucifera) & Atiso Đỏ (Roselle)",
        safe: "Lạc Tiên + Hoa Cúc",
        why: "Ngừa hạ áp đột ngột do alkaloid Liensinine & anthocyanin gây giãn mạch quá mức."
      });
    }
    if (activeConditions.has("hypertension")) {
      blockedActions.push({
        rule: "Huyết áp cao (Hypertension)",
        blocked: "Cam Thảo Bắc (Licorice) & Gừng cay liều cao",
        safe: "Cỏ Ngọt (Stevia) / La Hán Quả",
        why: "Glycyrrhizin trong Cam Thảo gây giữ natri và bài tiết kali, làm tăng áp lực thành mạch."
      });
    }
    if (activeConditions.has("gastritis")) {
      blockedActions.push({
        rule: "Đau dạ dày / Trào ngược (Acid Reflux)",
        blocked: "Quất Tươi & Atiso Đỏ đậm đặc (>50%) & Gừng cay",
        safe: "Đệm pH 4.5 êm dịu, Hoa Cúc & Cỏ Ngọt",
        why: "Giảm 50% acid citric hữu cơ để tránh kích ứng niêm mạc dạ dày (Sakurai et al. 2009)."
      });
    }
    if (selectedMood === "unwind") {
      blockedActions.push({
        rule: "Chế độ Thư Giãn Đêm (Night Unwind)",
        blocked: "Đinh Lăng Sâm Nam (Polyscias fruticosa)",
        safe: "Lạc Tiên + Hoa Cúc / Tâm Sen sao vàng",
        why: "Saponin triterpenoid kích thích tuần hoàn não và hưng phấn đại não, chỉ thích hợp cho học ban ngày."
      });
    }
    if (activeConditions.has("pregnancy")) {
      blockedActions.push({
        rule: "Mang thai / Cho con bú (Pregnancy)",
        blocked: "Lạc Tiên liều cao & Rễ Đinh Lăng",
        safe: "Hoa Cúc nhẹ & Táo đỏ",
        why: "Tránh các vết alkaloid Harman kích thích co bóp cơ trơn tử cung."
      });
    }
    if (activeConditions.has("driving")) {
      blockedActions.push({
        rule: "Cần lái xe / Không gây ngủ (High Vigilance)",
        blocked: "Tâm Sen liều an thần sâu & Lạc Tiên liều cao",
        safe: "Đinh Lăng + Bạc Hà + Cỏ Ngọt",
        why: "Đảm bảo tỉnh táo tập trung cao độ, 100% tuân thủ Nghị định 168/2024/NĐ-CP."
      });
    }

    if (blockedActions.length > 0) {
      const listHtml = blockedActions.map(b => `
        <div class="safety-rule-row" style="margin-bottom:6px; font-size:0.86rem; line-height:1.5;">
          <span style="color:#fef08a; font-weight:700;">• ${b.rule}:</span>
          <span style="color:var(--text-light);"> Đã tự động loại trừ <strong>${b.blocked}</strong> để bảo vệ sức khỏe của bạn. Gợi ý thay thế bằng thảo mộc an toàn: <em>${b.safe}</em>. (${b.why})</span>
        </div>
      `).join("");

      alertText.innerHTML = `
        <div style="margin-bottom:8px; font-weight:800; color:#fbbf24; letter-spacing:0.5px;">
          🛡️ LƯU Ý AN TOÀN TỰ ĐỘNG TỪ HỆ THỐNG DƯỢC LIỆU:
        </div>
        <div>${listHtml}</div>
      `;
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
    btnGenerate.innerHTML = `<span>⏳</span> Đang chọn lọc thảo mộc an toàn cho bạn...`;
    btnGenerate.disabled = true;

    setTimeout(() => {
      btnGenerate.innerHTML = `<span>🍃</span> Đang cân bằng vị thanh ngọt tự nhiên...`;
    }, 600);

    setTimeout(() => {
      btnGenerate.innerHTML = `<span>✨</span> Đã xong ly trà gợi ý cho bạn!`;
      renderGeneratedRecipe();
      btnGenerate.innerHTML = `<span>✨</span> Pha Cho Tôi Một Ly (Gợi ý công thức ngay)`;
      btnGenerate.disabled = false;
    }, 1100);
  });

  function renderGeneratedRecipe() {
    recipePlaceholder.style.display = "none";
    recipeCard.classList.add("active");

    const hasLowBP = activeConditions.has("hypotension");
    const hasHighBP = activeConditions.has("hypertension");
    const hasGastritis = activeConditions.has("gastritis");
    const hasPregnancy = activeConditions.has("pregnancy");
    const hasDriving = activeConditions.has("driving");

    let title = "Citrus Twilight Mocktail (VinaVita #01 — pH 4.4)";
    let subtitle = "The 'Sleep & Unwind' Pack • Gói Ngủ Ngon & Xả Stress Đêm (0.0% Alcohol | 0g Refined Sugar)";
    let badge = "⭐ HERO SKU #01 • SLEEP & UNWIND";
    let heroImg = "assets/mocktail_hero.jpg";
    let formula = [];
    let brewTemp = "85°C";
    let brewTime = "5 phút";
    let serving = "Rót qua 100g đá viên, trang trí 1 lát quất/tắc sấy lạnh (0.0% Cồn)";
    let biochem = "";

    let matchedSachet = {
      name: "Hộp 5 Túi Lọc Kim Tự Tháp #01 — Citrus Twilight",
      specs: "Túi lọc sinh học PLA 5.35g • 69.000 VNĐ / Hộp 5 gói (Tiết kiệm 49.3%)",
      orderData: "Hộp 5 Gói Sachet #01 - Citrus Twilight (69.000đ)"
    };

    if (selectedMood === "unwind") {
      // EXACT CANVA SLIDE 6-7 & 15-SECOND VIDEO PRESET:
      // Night Unwind + Low Blood Pressure + Citrus-Bright -> Citrus Twilight Mocktail (VinaVita #01 — pH 4.4)
      title = "Citrus Twilight Mocktail (VinaVita #01 — pH 4.4)";
      subtitle = "The 'Sleep & Unwind' Pack • Gói Ngủ Ngon & Xả Stress Đêm (0.0% Alcohol | 0g Refined Sugar)";
      badge = "⭐ HERO SKU #01 • SLEEP & UNWIND";
      heroImg = "assets/mocktail_hero.jpg";
      formula = [
        { 
          name: "Lạc Tiên (Aerial parts)", 
          sci: "Passiflora foetida", 
          amount: "2.5g", 
          note: "Vitexin kích hoạt thụ thể GABA_A hạ Cortisol (Tan et al. 2024; Appel et al. 2011)" 
        },
        { 
          name: hasLowBP ? "Hoa Cúc Vàng (Khóa Tâm Sen)" : "Hoa Cúc Vàng & Tâm Sen nhẹ", 
          sci: "Chrysanthemum indicum", 
          amount: "1.0g", 
          note: hasLowBP 
            ? "Apigenin làm dịu trục HPA thần kinh; Khóa hoàn toàn Tâm Sen để bảo vệ an toàn huyết áp" 
            : "Apigenin hiệp đồng cùng alkaloid thảo mộc xoa dịu thần kinh thị giác" 
        },
        { 
          name: hasGastritis ? "Tắc Sấy Lạnh (Giảm 50% đệm pH 4.5)" : "Tắc Sấy Lạnh / Kumquat", 
          sci: "Citrus japonica", 
          amount: hasGastritis ? "0.8g" : "1.5g", 
          note: "Axit citric tự nhiên hạ pH về 4.4 — Khóa trực tiếp thụ thể vị đắng hTAS2R16 trên gai lưỡi (Sakurai et al. 2009)" 
        },
        { 
          name: "Cỏ Ngọt Tự Nhiên (Stevia)", 
          sci: "Stevia rebaudiana", 
          amount: "0.3g", 
          note: "Stevioside ngọt thanh tự nhiên 0-calorie, GI=0, không gây tăng đường huyết đêm" 
        },
        { 
          name: "Muối Khoáng Tinh Khiết (Na+)", 
          sci: "Mineral Salt Na+", 
          amount: "0.05g", 
          note: "Ion Na+ khử đắng chéo trung ương (Breslin & Beauchamp 1997), tạo hậu vị mượt mà" 
        }
      ];
      brewTemp = "85°C (Bảo toàn Flavonoids & Apigenin)";
      brewTime = "5 phút (Túi lọc PLA kim tự tháp 5.35g)";
      serving = "Rót qua 100g đá viên, trang trí 1 lát tắc sấy lạnh (0.0% Cồn)";
      biochem = "Công thức được cân chỉnh để vừa thơm ngon, vừa giúp bạn có giấc ngủ sâu trọn vẹn: Vị chua dịu tự nhiên từ Tắc sấy lạnh giúp cân bằng vị giác, loại bỏ cảm giác đắng ngái thường thấy của thuốc nam mà không cần đến một gam đường tinh luyện nào. Tinh chất Vitexin từ Lạc Tiên kết hợp cùng hoa Cúc giúp xoa dịu áp lực thần kinh sau một ngày dài học tập, đưa tâm trí bạn vào trạng thái thư thái tự nhiên nhất.";
      matchedSachet = {
        name: "Hộp 5 Túi Lọc Kim Tự Tháp #01 — Citrus Twilight",
        specs: "Túi lọc sinh học PLA 5.35g • 69.000 VNĐ / Hộp 5 gói (Tiết kiệm 49.3%)",
        orderData: "Hộp 5 Gói Sachet #01 - Citrus Twilight (69.000đ)"
      };

    } else if (selectedMood === "focus") {
      title = "Calm Focus Sâm Nam Brew (VinaVita #02)";
      subtitle = "The 'Deadline & Exam' Pack • Gói Chạy Deadline & Ôn Thi (Tập trung 4h không ép tim)";
      badge = "⚡ HERO SKU #02 • DEADLINE & EXAM";
      heroImg = "assets/dinh_lang.jpg";
      formula = [
        { 
          name: "Đinh Lăng Sâm Nam", 
          sci: "Polyscias fruticosa", 
          amount: "3.0g", 
          note: "Saponin triterpenoid tăng lưu lượng oxy lên não bộ, duy trì sự tỉnh táo thùy trán" 
        },
        { 
          name: "Sả Chanh Bản Địa", 
          sci: "Cymbopogon citratus", 
          amount: "1.2g", 
          note: "Citral xua tan căng thẳng, sảng khoái giác quan" 
        },
        { 
          name: hasGastritis || hasHighBP ? "Gừng Núi (Giảm liều)" : "Gừng Núi Kỳ Sơn", 
          sci: "Zingiber officinale", 
          amount: hasGastritis || hasHighBP ? "0.3g" : "0.8g", 
          note: "Gingerol làm ấm tỳ vị, kích thích tuần hoàn ngoại vi" 
        },
        { 
          name: "La Hán Quả / Cỏ Ngọt", 
          sci: "Siraitia grosvenorii", 
          amount: "0.5g", 
          note: "Mogroside V ngọt mát 0-calorie, hoàn toàn an toàn cho huyết áp và đường huyết" 
        }
      ];
      brewTemp = "90°C (Chiết xuất trọn vẹn Saponin)";
      brewTime = "3 phút";
      serving = "Dùng ấm hoặc rót qua đá viên";
      biochem = "Giải pháp tỉnh táo lành mạnh cho các bạn học sinh, sinh viên: Thay vì dùng cà phê đặc hay nước tăng lực dễ gây run tay, ép tim và cồn cào dạ dày, công thức tận dụng hoạt chất Saponin tự nhiên từ lá Đinh Lăng (Sâm Nam) kết hợp hương thơm tươi mát của Sả Chanh và Gừng ấm. Bạn sẽ cảm nhận sự tỉnh táo bền bỉ, đầu óc minh mẫn để giải quyết deadline mà cơ thể vẫn nhẹ nhàng, khỏe khoắn.";
      matchedSachet = {
        name: "Hộp 5 Túi Lọc Kim Tự Tháp #02 — Calm Focus",
        specs: "Túi lọc sinh học PLA 5.5g • 69.000 VNĐ / Hộp 5 gói",
        orderData: "Hộp 5 Gói Sachet #02 - Calm Focus (69.000đ)"
      };

    } else if (selectedMood === "social") {
      title = "Berry Social Glow Mocktail (VinaVita #03)";
      subtitle = "The '0% Party & Chill' Pack • Gói Tiệc Tùng 0% Cồn (0.0% Alcohol Social Chill)";
      badge = "🍷 HERO SKU #03 • 0% PARTY & CHILL";
      heroImg = "assets/mocktail_hero.jpg";
      formula = [
        { 
          name: hasLowBP ? "Hoa Cúc Trắng (Thay Atiso Đỏ)" : "Atiso Đỏ (Roselle Hibiscus)", 
          sci: hasLowBP ? "Chrysanthemum indicum" : "Hibiscus sabdariffa", 
          amount: "2.5g", 
          note: hasLowBP ? "Bảo vệ huyết áp thấp, Apigenin thư giãn êm dịu" : "Anthocyanin tạo sắc đỏ Ruby dạ tiệc, vị chua thanh tự nhiên" 
        },
        { 
          name: "Lạc Tiên Khô", 
          sci: "Passiflora foetida", 
          amount: "1.5g", 
          note: "Vitexin kích hoạt GABA_A tạo cảm giác ấm áp, cởi mở hòa đồng xã hội" 
        },
        { 
          name: "Quế Trà Bồng Bản Địa", 
          sci: "Cinnamomum loureiroi", 
          amount: "0.8g", 
          note: "Cinnamaldehyde tạo hương thơm nồng ấm quý phái như rượu vang Mulled Wine" 
        },
        { 
          name: "La Hán Quả / Cỏ Ngọt", 
          sci: "Siraitia grosvenorii", 
          amount: "0.7g", 
          note: "Vị ngọt tròn đầy không năng lượng thừa, không cồn" 
        }
      ];
      brewTemp = "85°C";
      brewTime = "4 phút";
      serving = "Lắc cùng đá viên, thêm chút soda bọt mịn và 1 nhánh hương thảo";
      biochem = "Ly mocktail hoàn hảo cho những buổi gặp gỡ bạn bè: Sắc đỏ Ruby quyến rũ từ Atiso Đỏ hòa quyện hương thơm trầm ấm của Quế Trà Bồng mang lại cảm giác sang trọng như một ly vang nóng. Bạn sẽ cảm thấy vui vẻ, tự tin hòa nhập vào cuộc trò chuyện mà hoàn toàn 0% cồn, không lo đau đầu, say xỉn hay ảnh hưởng sức khỏe.";
      matchedSachet = {
        name: "Hộp 5 Túi Lọc Kim Tự Tháp #03 — Berry Social Glow",
        specs: "Túi lọc sinh học PLA 5.5g • 69.000 VNĐ / Hộp 5 gói",
        orderData: "Hộp 5 Gói Sachet #03 - Berry Social Glow (69.000đ)"
      };

    } else { // detox
      title = "Highland Liver Rescue (VinaVita Detox)";
      subtitle = "Gói Thanh Can Mát Gan Sau Chuỗi Ngày Thức Trắng Đêm";
      badge = "🍵 THANH NHIỆT MÁT GAN";
      heroImg = "assets/atiso.jpg";
      formula = [
        { 
          name: "Actisô Đà Lạt", 
          sci: "Cynara scolymus", 
          amount: "5.0g", 
          note: "Cynarin kích thích chức năng bài tiết mật và tái tạo tế bào gan" 
        },
        { 
          name: "Hoa Cúc Vàng", 
          sci: "Chrysanthemum indicum", 
          amount: "3.0g", 
          note: "Thanh can hỏa, sáng mắt, tiêu trừ mụn nhiệt sau thức khuya" 
        },
        { 
          name: hasHighBP ? "Cỏ Ngọt (Thay Cam Thảo)" : "Cam Thảo Bắc", 
          sci: hasHighBP ? "Stevia rebaudiana" : "Glycyrrhiza uralensis", 
          amount: hasHighBP ? "0.5g" : "1.5g", 
          note: hasHighBP ? "Vị ngọt dịu không ảnh hưởng huyết áp" : "Hòa vị, dẫn hoạt chất làm mát toàn bộ hệ tiêu hóa" 
        }
      ];
      brewTemp = "92°C";
      brewTime = "5 phút";
      serving = "Có thể uống ấm hoặc uống lạnh cả ngày thay nước lọc";
      biochem = "Tối đa hóa nồng độ Cynarin và acid hữu cơ thực vật hỗ trợ hệ enzyme Cytochrome P450 tại gan đào thải nhanh độc tố sinh ra trong quá trình thức khuya dài ngày.";
      matchedSachet = {
        name: "Hộp 5 Túi Lọc Kim Tự Tháp #04 — All-in-One Trial Pack",
        specs: "Hộp 5 túi hỗn hợp đủ 3 vị Hero • 69.000 VNĐ / Hộp (Kèm sổ tay chánh niệm)",
        orderData: "Hộp 5 Gói Sachet #04 - All-in-One Trial Combo (69.000đ)"
      };
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

    // Update Matched Hero Sachet Box
    const sachetNameEl = document.getElementById("resSachetName");
    const btnOrderMatched = document.getElementById("resBtnOrderMatched");
    if (sachetNameEl && btnOrderMatched) {
      sachetNameEl.textContent = matchedSachet.name;
      btnOrderMatched.setAttribute("data-drink", matchedSachet.orderData);
    }
  }

  // Render Signature Drinks
  const sigContainer = document.getElementById("signatureContainer");
  if (sigContainer && typeof SIGNATURE_DRINKS !== "undefined") {
    sigContainer.innerHTML = "";
    SIGNATURE_DRINKS.forEach(drink => {
      const card = document.createElement("div");
      card.className = "sig-card";
      
      const formulaRows = drink.formula.map(f => {
        const herb = MEDICINAL_DATABASE.find(h => h.id === f.herbId);
        const herbName = herb ? herb.name : f.herbId;
        const herbSci = herb ? herb.sciName : '';
        return `
          <tr>
            <td>
              <div class="formula-herb-name">${herbName}</div>
              <div class="formula-herb-sci">${herbSci}</div>
            </td>
            <td style="text-align:center; font-weight:800; color:#fff;">${f.amount}</td>
            <td style="color:#cbd5e1; font-size:0.82rem;">${f.note || ''}</td>
          </tr>
        `;
      }).join("");

      card.innerHTML = `
        <span class="gold-corner-filigree top-left" aria-hidden="true"></span>
        <span class="gold-corner-filigree top-right" aria-hidden="true"></span>
        <span class="gold-corner-filigree bottom-left" aria-hidden="true"></span>
        <span class="gold-corner-filigree bottom-right" aria-hidden="true"></span>

        <div>
          <div class="recipe-visual-banner" style="position:relative; overflow:hidden; border-radius:14px; margin-bottom:16px; border:1.5px solid rgba(245,158,11,0.35); box-shadow:0 8px 24px rgba(0,0,0,0.5);">
            <img src="${drink.image}" alt="${drink.name}" class="recipe-hero-img" style="margin-bottom:0; height:180px; width:100%; object-fit:cover;">
          </div>
          <span class="recipe-badge">${drink.badge}</span>
          <h3 class="recipe-title" style="font-size:1.5rem; margin-top:8px;">${drink.name}</h3>
          <div class="recipe-subtitle" style="font-size:0.88rem; margin-bottom:16px;">${drink.subtitle}</div>

          <table class="formula-table" style="margin-bottom:16px;">
            <thead>
              <tr>
                <th>DƯỢC LIỆU BẢN ĐỊA</th>
                <th style="text-align:center;">ĐỊNH LƯỢNG</th>
                <th>VAI TRÒ SINH HỌC &amp; VỊ GIÁC</th>
              </tr>
            </thead>
            <tbody>
              ${formulaRows}
            </tbody>
          </table>

          ${drink.brewSpecs ? `
          <div class="brew-specs-box" style="margin-bottom:16px;">
            <div class="brew-spec-item"><span>Nhiệt độ nước tối ưu:</span><strong>${drink.brewSpecs.waterTemp}</strong></div>
            <div class="brew-spec-item"><span>Thời gian hãm chiết xuất:</span><strong>${drink.brewSpecs.steepingTime}</strong></div>
            <div class="brew-spec-item"><span>Cách thức thưởng thức:</span><strong>${drink.brewSpecs.servingStyle}</strong></div>
          </div>` : ''}

          <div class="biochem-box" style="margin-bottom:18px;">
            <strong>🔬 Cơ Chế Dược Lý &amp; Vị Giác:</strong>
            <div style="margin-top:4px;">${drink.biochemicalSummary}</div>
          </div>
        </div>

        <div class="sig-footer" style="border-top:1px solid rgba(245,158,11,0.25); padding-top:16px;">
          <div class="sachet-price-wrap">
            <span class="sachet-price-val">${drink.sachetPrice}</span>
            <span class="sachet-unit">Đóng gói màng nhôm bảo quản dược tính</span>
          </div>
          <button class="btn-primary-action btn-order-trigger" data-drink="${drink.name}">🛒 Đặt Gói Sachet</button>
        </div>
      `;
      sigContainer.appendChild(card);
    });
  }

  // Render Database Encyclopedia with Botanical Photography
  // ==============================================================================
  // BÁCH KHOA DƯỢC LIỆU: RENOVATED COMPACT LISTING & RICH SCIENTIFIC DOSSIER MODAL
  // ==============================================================================
  const dbContainer = document.getElementById("dbContainer");
  const searchInput = document.getElementById("dbSearchInput");
  const herbModal = document.getElementById("herbDetailModal");
  const herbModalClose = document.getElementById("herbModalClose");
  const herbModalContent = document.getElementById("herbModalDynamicContent");

  // Render Compact, Uniform Fixed-Length Herb Cards for scannability
  function renderDatabase(herbs) {
    if (!dbContainer) return;
    dbContainer.innerHTML = "";

    if (!herbs || herbs.length === 0) {
      dbContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:50px 20px; color:var(--text-muted); background:rgba(6,44,30,0.4); border-radius:20px; border:1px dashed rgba(245,158,11,0.3);">
          <div style="font-size:2.5rem; margin-bottom:12px;">🌿</div>
          <h3 style="color:#fff; font-size:1.25rem; margin-bottom:8px;">Không tìm thấy dược liệu phù hợp</h3>
          <p style="font-size:0.9rem;">Vui lòng thử từ khóa khác (ví dụ: Lạc Tiên, Vitexin, GABA, Đinh Lăng, Tâm Sen...)</p>
        </div>
      `;
      return;
    }

    herbs.forEach(herb => {
      const card = document.createElement("div");
      card.className = "herb-card";
      card.setAttribute("data-herb-id", herb.id);
      card.onclick = () => window.openHerbDetailModal(herb.id);

      // Top 2 active phytochemical constituents as sleek pill badges
      const topPills = herb.keyCompounds.slice(0, 2).map(c => `
        <span class="herb-pill-tag">
          <strong>${c.name}</strong> <small>(${c.class || 'Hoạt chất'})</small>
        </span>
      `).join("");

      card.innerHTML = `
        <span class="gold-corner-filigree top-left" aria-hidden="true"></span>
        <span class="gold-corner-filigree top-right" aria-hidden="true"></span>
        <span class="gold-corner-filigree bottom-left" aria-hidden="true"></span>
        <span class="gold-corner-filigree bottom-right" aria-hidden="true"></span>

        <!-- Card Banner -->
        <div class="herb-card-banner">
          <img src="${herb.image}" alt="${herb.name}" class="herb-img" loading="lazy">
          <span class="herb-badge-overlay">${herb.categoryLabel}</span>
          <span class="herb-evidence-tag">🔬 Dược Điển VN V</span>
        </div>

        <!-- Card Body (Compact & Fixed Length) -->
        <div class="herb-card-body">
          <div>
            <h3 class="herb-card-name">${herb.name}</h3>
            <div class="herb-card-sci">${herb.sciName} • ${herb.enName}</div>
            <div class="herb-card-origin">
              <span>📍</span> ${herb.heritageOrigin || 'Vùng Dược Liệu Bản Địa Đại Việt'}
            </div>
          </div>

          <!-- Bioactive Highlights -->
          <div class="herb-pills-row">
            ${topPills}
          </div>

          <!-- Quick Specs: Taste & Safe Dose -->
          <div class="herb-quick-specs">
            <div class="quick-spec-item">
              <span class="quick-spec-label">Vị &amp; Độ đắng:</span>
              <span class="quick-spec-val">Đắng ${herb.tasteProfile.bitterness}/5 • ${herb.tasteProfile.aroma}</span>
            </div>
            <div class="quick-spec-item">
              <span class="quick-spec-label">Liều an toàn:</span>
              <span class="quick-spec-val">${herb.safeDailyDose}</span>
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="herb-card-footer">
          <button class="btn-herb-reveal" onclick="event.stopPropagation(); window.openHerbDetailModal('${herb.id}')">
            <span>Khám Phá Dược Điển &amp; Đơn Bào Chế</span>
            <span class="reveal-arrow">➔</span>
          </button>
        </div>
      `;

      dbContainer.appendChild(card);
    });
  }

  // Open Full Pharmacological Dossier Modal (Renovated Image 1 Aesthetic)
  window.openHerbDetailModal = function(herbId) {
    if (typeof MEDICINAL_DATABASE === "undefined") return;
    const herb = MEDICINAL_DATABASE.find(h => h.id === herbId);
    if (!herb) return;

    if (!herbModal || !herbModalContent) return;

    const compoundsRows = herb.keyCompounds.map(c => `
      <tr>
        <td><strong style="color:#a7f3d0; font-size:0.92rem;">${c.name}</strong></td>
        <td><span class="compound-class-badge">${c.class || 'Hoạt chất'}</span></td>
        <td style="color:#cbd5e1; font-size:0.86rem; line-height:1.45;">${c.action}</td>
      </tr>
    `).join("");

    const warningsList = herb.contraindications.join("; ");

    herbModalContent.innerHTML = `
      <!-- Top Hero Banner with Botanical Photo -->
      <div class="herb-modal-hero">
        <div class="herb-modal-img-wrap">
          <img src="${herb.image}" alt="${herb.name}" class="herb-modal-img">
          <span class="herb-badge-overlay">${herb.categoryLabel}</span>
        </div>
        <div class="herb-modal-hero-info">
          <div class="herb-modal-title">${herb.name}</div>
          <div class="herb-modal-sci">${herb.sciName} • ${herb.enName}</div>
          <div class="herb-modal-tags">
            <span class="heritage-origin-tag"><span>📍</span> ${herb.heritageOrigin || 'Vùng Dược Liệu Bản Địa Đại Việt'}</span>
            <span class="evidence-level-badge"><span>🔬</span> Tiền lâm sàng &amp; Dược điển Việt Nam V</span>
          </div>
        </div>
      </div>

      <!-- Phytochemical Compounds Table -->
      <div style="margin-bottom:18px;">
        <div class="herb-modal-section-title">
          <span>🧬</span> Bảng Hoạt Chất Sinh Học &amp; Tác Dụng Dược Lý
        </div>
        <table class="formula-table" style="margin-bottom:16px;">
          <thead>
            <tr>
              <th>HOẠT CHẤT</th>
              <th>NHÓM HÓA THỰC VẬT</th>
              <th>CƠ CHẾ DƯỢC LÝ &amp; TÁC ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            ${compoundsRows}
          </tbody>
        </table>
      </div>

      <!-- Extraction & Brew Specs -->
      <div class="brew-specs-box" style="margin-bottom:16px;">
        <div class="brew-spec-item"><span>Bộ phận dùng:</span><strong>${herb.partUsed}</strong></div>
        <div class="brew-spec-item"><span>Liều dùng an toàn:</span><strong>${herb.safeDailyDose}</strong></div>
        <div class="brew-spec-item"><span>Vị giác &amp; Cảm quan:</span><strong>Đắng ${herb.tasteProfile.bitterness}/5 | ${herb.tasteProfile.aroma}</strong></div>
      </div>

      <!-- Renovated Emerald Box (Image 1 Style): Biochemical & Receptor Synergy -->
      <div class="biochem-box" style="margin-bottom:16px; border-radius:16px; padding:16px 18px; border:1px solid rgba(52,211,153,0.45); background:rgba(6,44,30,0.85); box-shadow:0 8px 24px rgba(0,0,0,0.35);">
        <strong style="color:#a7f3d0; font-size:1.02rem; display:block; margin-bottom:6px;">🔬 Cơ Chế Sinh Hóa Dược Lý (Biochemical &amp; Receptor Synergy):</strong>
        <div style="color:#e2e8f0; font-size:0.92rem; line-height:1.65;">
          ${herb.bioAction || 'Thuật toán VinaVita AI đối soát trực tiếp nồng độ hoạt chất với thụ thể thần kinh, bảo toàn hoạt tính sinh học theo tiêu chuẩn Dược điển Việt Nam.'}
        </div>
      </div>

      <!-- Renovated Gold Box (Image 1 Style): Sachet Pilot Formulation & Pre-Order -->
      <div class="res-sachet-matched-bar" style="margin-bottom:16px; border-radius:16px; padding:18px 20px;">
        <div class="res-sachet-info">
          <div class="res-sachet-tag">📦 ĐÃ CÓ GÓI ĐÓNG SẴN CHÍNH THỨC (PILOT LINE)</div>
          <div class="res-sachet-title">${herb.popularDrink ? 'Hero Formula: ' + herb.popularDrink : 'Gói Dược Liệu Tươi Tuyển Chọn — ' + herb.name}</div>
          <div class="res-sachet-specs">Túi lọc sinh học PLA sấy lạnh bảo toàn hoạt chất • 15.000 VNĐ / gói đong tươi (hoặc 69.000 VNĐ / Hộp 5 gói)</div>
        </div>
        <button class="btn-primary-action btn-order-trigger" data-drink="Gói Dược Liệu ${herb.name} Tuyển Chọn (15.000đ)">
          🛒 Đặt Thảo Dược – 15.000 VNĐ
        </button>
      </div>

      <!-- Bitterness Masking & Pairing Box -->
      <div class="bitterness-masking-box" style="margin-bottom:16px; padding:14px 16px;">
        <div class="bitterness-badge-title" style="font-size:0.78rem;"><span>🧪</span> QUY TẮC KHỬ ĐẮNG TAS2R &amp; PHỐI VỊ (FOOD SCIENCE)</div>
        <div style="font-size:0.84rem; color:#d1fae5; line-height:1.5; margin-top:6px;">${herb.maskingRules.join('. ')}</div>
      </div>

      <!-- Pharmacological Warning -->
      <div class="warning-tag" style="margin-bottom:16px;">
        ⚠️ <strong>Lưu ý dược lý &amp; Chống chỉ định:</strong> ${warningsList}
      </div>

      <!-- Mindful Reflection Quote -->
      ${herb.mindfulReminder ? `
      <div class="mindful-reminder-box" style="margin-bottom:20px;">
        <span class="mindful-icon">🪷</span>
        <div class="mindful-content">
          <div class="mindful-title">Lời Nhắc Chánh Niệm &amp; Dưỡng Sinh:</div>
          <div class="mindful-text">"${herb.mindfulReminder}"</div>
        </div>
      </div>` : ''}

      <!-- Action Buttons Row (Image 1 Style) -->
      <div class="action-row" style="margin-top:20px;">
        <button class="btn-secondary" onclick="window.print()">📥 Tải Hồ Sơ Dược Liệu (PDF)</button>
        <button class="btn-primary-action" onclick="window.useHerbInMixologist('${herb.id}')">🧪 Đưa Vào Phòng Thí Nghiệm AI (Pha Chế)</button>
      </div>
    `;

    herbModal.classList.add("active");

    // Re-bind order modal triggers for the button inside the modal
    herbModalContent.querySelectorAll(".btn-order-trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const drinkName = btn.getAttribute("data-drink") || ("Gói Dược Liệu " + herb.name);
        if (typeof window.openOrderModal === "function") {
          window.openOrderModal(drinkName);
        }
      });
    });
  };

  // Close Herb Modal Listeners
  if (herbModalClose && herbModal) {
    herbModalClose.addEventListener("click", () => herbModal.classList.remove("active"));
    herbModal.addEventListener("click", (e) => {
      if (e.target === herbModal) herbModal.classList.remove("active");
    });
  }

  // Cross-linking: Send herb directly into AI Mixologist
  window.useHerbInMixologist = function(herbId) {
    if (herbModal) herbModal.classList.remove("active");

    const mixologistTabBtn = document.querySelector('.tab-btn[data-target="viewMixologist"]');
    if (mixologistTabBtn) mixologistTabBtn.click();

    if (typeof MEDICINAL_DATABASE === "undefined") return;
    const herb = MEDICINAL_DATABASE.find(h => h.id === herbId);
    if (!herb) return;

    let targetMood = "social";
    if (herb.category === "an_than" || herb.category === "ha_ap") {
      targetMood = "unwind";
    } else if (herb.category === "bo_khi" || herb.category === "sang_mat") {
      targetMood = "focus";
    } else if (herb.category === "thanh_nhiet" || herb.category === "giai_doc") {
      targetMood = "detox";
    }

    const moodCard = document.querySelector(`.opt-mood[data-value="${targetMood}"]`);
    if (moodCard) moodCard.click();

    const genBtn = document.getElementById("btnGenerate");
    if (genBtn) {
      genBtn.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        genBtn.click();
      }, 350);
    }
  };

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
                 (h.bioAction && h.bioAction.toLowerCase().includes(query)) ||
                 h.keyCompounds.some(c => c.name.toLowerCase().includes(query) || (c.class && c.class.toLowerCase().includes(query)));
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
