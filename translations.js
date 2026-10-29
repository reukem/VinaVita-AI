/**
 * VinaVita AI — Comprehensive Bilingual Engine (Vietnamese <-> English)
 * Designed for RMIT Business Plan Competition (RBPC) 2026 Pitching & Global Demonstration
 */

const I18N = {
  vi: {
    // Brand & Navigation
    "brand.tagline": "Dược Liệu Việt • Quốc Hồn Trà",
    "brand.title": "VinaVita AI — Nền Tảng Mocktail Dược Liệu Việt",
    "nav.mixologist": "🍸 AI Mixologist",
    "nav.signatures": "⭐ Menu & Gói Sachet Gen-Z",
    "nav.database": "📚 Bách Khoa Dược Liệu",
    "nav.about": "🏛️ Dự Án & Đội Ngũ",
    "nav.ai_node_title": "Trạng thái Node AI Đám Mây đang hoạt động (Nhấn để mở Dược Sĩ AI)",

    // Hero Section
    "hero.initiative": "SÁNG KIẾN KINH DOANH RMIT 2026",
    "hero.headline": "Hồi Sinh <span class=\"gradient-text\">Dược Liệu Việt</span> Cho Giới Trẻ",
    "hero.lead": "VinaVita AI tiên phong kết hợp dược liệu dân tộc cùng khoa học hiện đại, tạo nên thức uống thư giãn xã hội <strong>0.0% Cồn</strong>. Giải pháp giúp các bạn trẻ xả stress, ngủ ngon sau giờ học và tự tin \"chill\" cùng bạn bè mà không say xỉn, không độc gan, không ép tim — nhờ công thức giảm đắng tự nhiên và gợi ý vị thông minh.",
    "hero.quote_text": "\"Nam Dược Trị Nam Nhân\" — Thiền sư Tuệ Tĩnh • Di Sản Dược Liệu Việt x Sáng Kiến Gen Z",
    "hero.quote_tag": "BẢN SẮC VIỆT",
    "hero.stat1_title": "100% IF–THEN Safety",
    "hero.stat1_sub": "Khóa dược liệu kỵ cơ địa",
    "hero.stat2_title": "pH 4.2–4.5 • hTAS2R16",
    "hero.stat2_sub": "Khử đắng kép • 0g Đường",
    "hero.stat3_title": "Túi Lọc PLA 5.3g",
    "hero.stat3_sub": "Bột ngô sinh học • 3 phút 85°C",
    "hero.stat4_title": "69.000 VNĐ / Hộp",
    "hero.stat4_sub": "13.800đ/ly • 49.3% Gross Margin",

    // Hero Sachet Pills Bar
    "hero.sachet_bar_title": "● BỘ 3 GÓI SACHET DI SẢN CHỦ LỰC • RMIT RBPC 2026 PILOT LINE",
    "hero.sachet_bar_sub": "Túi lọc kim tự tháp PLA 5.3g • 69.000 VNĐ / Hộp 5 gói — 13.800đ/ly • Hãm 3 phút 85°C",
    "hero.pill1_name": "01. Citrus Twilight",
    "hero.pill1_badge": "Night Unwind • pH 4.3",
    "hero.pill1_herbs": "Lạc Tiên (1.8g) • Hoa Cúc (1.5g) • Tắc sấy lạnh (1.5g) • Cỏ Ngọt (0.5g)",
    "hero.pill2_name": "02. Deadline Survivor",
    "hero.pill2_badge": "Focus • 0mg Caffeine",
    "hero.pill2_herbs": "Lá Đinh Lăng (2.5g) • Sả (1.2g) • Gừng (1.3g) • La Hán Quả (0.3g)",
    "hero.pill3_name": "03. Berry Social Glow",
    "hero.pill3_badge": "0.0% Cồn • pH 4.2",
    "hero.pill3_herbs": "Atiso Đỏ (2.2g) • Lạc Tiên (1.3g) • Quế thanh (0.8g) • La Hán Quả (1.0g)",
    "hero.pill_btn": "Pha Thử ➔",

    // AI Mixologist Studio (View 1)
    "studio.crest_sub": "TRẠM PHỐI CHẾ CÁ NHÂN HÓA",
    "studio.crest_main": "Trí Tuệ Nhân Tạo & Dược Liệu Dân Tộc",
    "studio.ctrl_title": "Trạm Phối Trộn Của AI Mixologist",
    "studio.ctrl_desc": "Khảo sát nhanh 30 giây để thuật toán tính toán liều lượng dược tính, khử vị đắng gai lưỡi và tạo công thức chuẩn cho bạn.",
    "studio.step1_label": "1. Bạn cần một ly nước thế nào hôm nay? • Need & Mood",
    "studio.mood_social_name": "Social Glow (Tiệc Tùng)",
    "studio.mood_social_detail": "Chill 0% cồn cùng bạn bè • <em>0.0% Alcohol Social Chill</em>",
    "studio.mood_unwind_name": "Night Unwind (Thư Giãn Đêm)",
    "studio.mood_unwind_detail": "Xả stress thi cử, ngủ sâu • <em>Sleep & De-Stress Pack</em>",
    "studio.mood_focus_name": "Calm Focus (Tập Trung)",
    "studio.mood_focus_detail": "Cày deadline êm dịu không ép tim • <em>Steady Alertness</em>",

    "studio.step2_label": "2. Cơ địa & Lưu ý sức khỏe • Health Guardrails",
    "guardrail.hypotension": "📉 Huyết áp thấp <em>(Low Blood Pressure - Khóa Tâm Sen)</em>",
    "guardrail.hypertension": "📈 Huyết áp cao <em>(High Blood Pressure - Khóa Cam Thảo)</em>",
    "guardrail.gastritis": "🔥 Đau dạ dày / Trào ngược <em>(Gastritis / Acid Reflux - Khóa Chua)</em>",
    "guardrail.pregnancy": "🤰 Phụ nữ mang thai / Nuôi con bú <em>(Pregnancy Safe Mode)</em>",
    "guardrail.driving": "🚗 Đang lái xe / Cần tỉnh táo <em>(Driving - Khóa Thuốc Buồn Ngủ)</em>",

    "studio.step3_label": "3. Hương vị yêu thích của bạn • Flavor Profile",
    "flavor.citrus": "Chua thanh / Citrus",
    "flavor.minty": "The mát / Minty",
    "flavor.floral": "Hương hoa / Floral",
    "flavor.sweet": "Ngọt dịu / Sweet",

    "studio.step4_label": "4. Miêu tả tình trạng tự do • Natural Language Input",
    "studio.step4_placeholder": "Hoặc gõ tình trạng của bạn (ví dụ: mai thi đại học, thức khuya mỏi mắt, dạ dày nhạy cảm)...",
    "studio.btn_nlp": "Phối Trộn Bằng AI",
    "studio.btn_generate": "🧪 Pha Cho Tôi Một Ly (Tạo Công Thức Chuẩn Hóa)",

    // Formula Result Card
    "res.placeholder_title": "Trạm Kết Quả AI Mixologist",
    "res.placeholder_lead": "Đang chờ thông tin từ bạn...",
    "res.placeholder_step1": "01. Chọn nhu cầu tại bảng điều khiển bên trái (Social, Unwind, Focus).",
    "res.placeholder_step2": "02. Tích chọn cơ địa để kích hoạt hệ thống khóa thảo dược an toàn.",
    "res.placeholder_step3": "03. Nhấn \"Pha Cho Tôi Một Ly\" để khởi tạo đơn pha chế dược học.",
    "res.watermark_title": "CÔNG THỨC ĐỘC BẢN VINAVITA",
    "res.th_herb": "DƯỢC LIỆU BẢN ĐỊA",
    "res.th_amount": "ĐỊNH LƯỢNG",
    "res.th_role": "VAI TRÒ SINH HỌC & VỊ GIÁC",
    "res.spec_temp": "Nhiệt độ nước thích hợp:",
    "res.spec_time": "Thời gian ủ trà:",
    "res.spec_serving": "Gợi ý thưởng thức:",
    "res.bitterness_title": "CƠ CHẾ KHỬ ĐẮNG & HOẠT HÓA GABA KÉP",
    "res.order_btn": "🛒 Đặt Hộp Sachet Này (Giao Tận Nơi)",

    // View 2: Signature Menu & Sachet Boxes
    "menu.crest_sub": "TINH HOA BẢN ĐỊA",
    "menu.crest_main": "Trà Dược Liệu Đóng Gói Sachet Tiện Lợi",
    "menu.title": "Bộ 3 Gói Sachet Chủ Lực & Menu <span class=\"gradient-text\">VinaVita</span>",
    "menu.desc": "Kết hợp tri thức dược liệu cổ truyền Tuệ Tĩnh cùng công thức phối trộn hiện đại: Mỗi gói là túi lọc kim tự tháp sinh học từ bột ngô (PLA) an toàn tuyệt đối, dễ dàng ủ nhanh một ly trà thơm mát chỉ trong 3 phút tại trường hay bàn học!",
    "menu.hero_pill": "🌿 DÒNG SẢN PHẨM THỬ NGHIỆM RMIT RBPC 2026 • 69.000 VNĐ / HỘP 5 GÓI (TÚI LỌC BỘT NGÔ PLA)",
    "menu.hero_headline": "Bộ 3 Gói Trà Sachet Di Sản Dành Cho Giới Trẻ <span class=\"gradient-text\">(Hero Sachets)</span>",
    "menu.hero_sub": "Túi lọc kim tự tháp màng sinh học PLA từ bột ngô giúp thảo dược nở đều và giữ trọn tinh dầu thơm tự nhiên.<br><strong>Giá chỉ 13.800 VNĐ/ly (69.000 VNĐ / Hộp 5 gói)</strong> — tiết kiệm hơn một ly trà sữa mà lại lành mạnh cho cơ thể và tinh thần! Có chính sách ưu đãi cho các Study Café học nhóm.",

    "menu.box1_badge": "🍸 HERO SKU #01 • SLEEP & UNWIND",
    "menu.box1_title": "Citrus Twilight (VinaVita #01)",
    "menu.box1_sub": "The 'Sleep & Unwind' Pack • Gói Ngủ Ngon & Xả Stress Đêm (0.0% Cồn)",
    "menu.box1_btn": "🛒 Đặt Hộp #01",

    "menu.box2_badge": "⚡ HERO SKU #02 • DEADLINE SURVIVOR",
    "menu.box2_title": "Deadline Survivor (VinaVita #02)",
    "menu.box2_sub": "The 'Deadline Survivor' Pack • Gói Chạy Deadline & Ôn Thi (0mg Caffeine)",
    "menu.box2_btn": "🛒 Đặt Hộp #02",

    "menu.box3_badge": "🍷 HERO SKU #03 • 0% PARTY & CHILL",
    "menu.box3_title": "Berry Social Glow Mocktail (VinaVita #03)",
    "menu.box3_sub": "The '0% Party & Chill' Pack • Gói Tiệc Tùng 0% Cồn (0.0% Alcohol Social Chill)",
    "menu.box3_btn": "🛒 Đặt Hộp #03",

    "menu.expanded_title": "Bộ Sưu Tập Menu Mở Rộng <span class=\"gradient-text\">Phục Vụ Trực Tiếp & Sachet Lẻ</span>",
    "menu.expanded_sub": "Dành cho khách hàng muốn thưởng thức các hương vị đặc trưng cố đô hoặc đặt gói đong lẻ từng ly (15.000 – 18.000 VNĐ/gói).",

    // View 3: Botanical Database
    "db.crest_sub": "TRI THỨC DÂN TỘC",
    "db.crest_main": "Bách Khoa Dược Liệu Dân Tộc An Toàn",
    "db.title": "Kho Dữ Liệu Dược Liệu Việt Bản Địa",
    "db.desc": "Hệ thống số hóa 24+ dược liệu dân tộc theo tiêu chuẩn Dược điển Việt Nam V, phân tích hoạt chất sinh học, rào cản an toàn và kỹ thuật khử vị đắng thực phẩm hiện đại.",
    "db.search_placeholder": "Tìm kiếm dược liệu theo tên, hoạt chất, công dụng hoặc vùng trồng...",
    "db.filter_all": "Tất cả",
    "db.filter_an_than": "An Thần - Dễ Ngủ",
    "db.filter_bo_khi": "Bổ Khí - Tập Trung",
    "db.filter_thanh_can": "Thanh Can - Hạ Áp",
    "db.filter_dieu_vi": "Khử Đắng - Điều Vị",

    // View 4: About & Team
    "about.crest_sub": "SÁNG KIẾN KINH DOANH RMIT RBPC 2026",
    "about.crest_main": "Dự Án VinaVita & Đội Ngũ Sáng Lập",
    "about.title": "Khởi Nguồn Sáng Kiến & Tầm Nhìn RMIT RBPC 2026",
    "about.desc": "Được ấp ủ từ niềm trăn trở trước áp lực học tập và thói quen lạm dụng nước tăng lực, đồ uống có cồn của giới trẻ Việt Nam — VinaVita ra đời như một lời giải hài hòa giữa y học cổ truyền và công nghệ số.",
    "about.story_lead": "Thực Trạng Giới Trẻ & Sứ Mệnh Của VinaVita",
    "about.story_p1": "Học sinh THPT và sinh viên đại học hiện đại đang đối mặt với cường độ học tập và áp lực thi cử khổng lồ. Để thức khuya chạy deadline, các bạn trẻ thường tìm đến nước tăng lực chứa nhiều caffeine và đường hóa học, dẫn đến hiện tượng ép tim, bồn chồn run tay, đau dạ dày và suy kiệt thần kinh về lâu dài. Khi giao lưu tiệc tùng cùng bạn bè, áp lực sử dụng đồ uống có cồn cũng để lại nhiều rủi ro về sức khỏe và an toàn giao thông.",
    "about.story_p2": "Lấy cảm hứng từ tư tưởng đại danh y <strong>Thiền sư Tuệ Tĩnh</strong> — <em>\"Nam Dược Trị Nam Nhân\"</em> (Thuốc Nam chữa bệnh cho người Nam), đội ngũ VinaVita tin rằng nguồn dược liệu bản địa phong phú của nước ta chính là kho báu vô giá nếu được chuẩn hóa bằng khoa học hiện đại và ứng dụng trí tuệ nhân tạo (AI) để giải quyết bài toán hương vị.",

    // AI Pharmacist Chatbot
    "chat.fab_label": "Dược Sĩ AI VinaVita",
    "chat.header_title": "Dược Sĩ AI VinaVita",
    "chat.header_sub": "Chuyên gia Dược điển & Phối chế Mocktail 0.0% Cồn",
    "chat.welcome": "Xin chào! Mình là <strong>Dược Sĩ AI VinaVita</strong>. Mình có thể phân tích cơ địa và giúp bạn phối chế trà sachet dược liệu an toàn! Bạn đang cảm thấy thế nào hoặc cần thức uống cho dịp gì?",
    "chat.chip1": "Mai thi đại học, cần tập trung",
    "chat.chip2": "Khó ngủ, thức khuya bị stress",
    "chat.chip3": "Hay bị trào ngược dạ dày",
    "chat.chip4": "Đi tiệc cần chill 0% cồn",
    "chat.input_placeholder": "Hỏi Dược Sĩ AI về cơ địa, mất ngủ, deadline, dạ dày...",
    "chat.send_title": "Gửi câu hỏi",
    "chat.btn_apply_profile": "🧪 Đưa Hồ Sơ Cơ Địa Này Vào Trạm AI Mixologist ➔"
  },

  en: {
    // Brand & Navigation
    "brand.tagline": "Vietnamese Herbs • Soul of Herbal Tea",
    "brand.title": "VinaVita AI — Vietnamese Heritage Herbal Mocktail Platform",
    "nav.mixologist": "🍸 AI Mixologist",
    "nav.signatures": "⭐ Menu & Gen-Z Sachets",
    "nav.database": "📚 Herb Encyclopedia",
    "nav.about": "🏛️ Project & Team",
    "nav.ai_node_title": "Active Cloud AI Node Status (Click to open AI Pharmacist)",

    // Hero Section
    "hero.initiative": "RMIT RBPC 2026 BUSINESS INITIATIVE",
    "hero.headline": "Revitalizing <span class=\"gradient-text\">Vietnamese Herbs</span> for Youth",
    "hero.lead": "VinaVita AI pioneers the fusion of ethnic Vietnamese herbs with modern food science to create <strong>0.0% Alcohol</strong> social relaxation mocktails. Empowering youth to de-stress, sleep deeply, and socialize hangover-free with no hepatic toxicity or heart racing — powered by natural bitterness modulation and smart flavor AI.",
    "hero.quote_text": "\"Southern Herbs Cure Southern People\" — Master Tuệ Tĩnh • Heritage x Gen Z Innovation",
    "hero.quote_tag": "HERITAGE",
    "hero.stat1_title": "100% IF–THEN Safety",
    "hero.stat1_sub": "Algorithmic Contraindication Lock",
    "hero.stat2_title": "pH 4.2–4.5 • hTAS2R16",
    "hero.stat2_sub": "Dual Bitterness Masking • 0g Sugar",
    "hero.stat3_title": "5.3g PLA Pyramid Sachet",
    "hero.stat3_sub": "Cornstarch Bio-mesh • 3 Mins 85°C",
    "hero.stat4_title": "69,000 VND / Box",
    "hero.stat4_sub": "13,800 VND/Cup • 49.3% Gross Margin",

    // Hero Sachet Pills Bar
    "hero.sachet_bar_title": "● CANONICAL TRIO HERITAGE SACHETS • RMIT RBPC 2026 PILOT LINE",
    "hero.sachet_bar_sub": "PLA pyramid sachet 5.3g • 69,000 VND / Box of 5 — 13,800 VND/Cup • Steep 3 mins at 85°C",
    "hero.pill1_name": "01. Citrus Twilight",
    "hero.pill1_badge": "Night Unwind • pH 4.3",
    "hero.pill1_herbs": "Passionflower (1.8g) • Chamomile (1.5g) • Freeze-dried Kumquat (1.5g) • Stevia (0.5g)",
    "hero.pill2_name": "02. Deadline Survivor",
    "hero.pill2_badge": "Focus • 0mg Caffeine",
    "hero.pill2_herbs": "Polyscias Leaf (2.5g) • Lemongrass (1.2g) • Ginger (1.3g) • Monk Fruit (0.3g)",
    "hero.pill3_name": "03. Berry Social Glow",
    "hero.pill3_badge": "0.0% Alcohol • pH 4.2",
    "hero.pill3_herbs": "Roselle Hibiscus (2.2g) • Passionflower (1.3g) • Cinnamon (0.8g) • Monk Fruit (1.0g)",
    "hero.pill_btn": "Brew Now ➔",

    // AI Mixologist Studio (View 1)
    "studio.crest_sub": "PERSONALIZED FORMULATION STUDIO",
    "studio.crest_main": "Artificial Intelligence & Indigenous Herbal Science",
    "studio.ctrl_title": "AI Mixologist Formulation Studio",
    "studio.ctrl_desc": "A rapid 30-second assessment for our algorithm to calculate bioactive dosage, suppress tongue bitterness receptors, and craft your optimal formula.",
    "studio.step1_label": "1. What do you need today? • Need & Mood",
    "studio.mood_social_name": "Social Glow (Party & Chill)",
    "studio.mood_social_detail": "Hang out 0% alcohol with friends • <em>0.0% Alcohol Social Chill</em>",
    "studio.mood_unwind_name": "Night Unwind (Nighttime Sleep)",
    "studio.mood_unwind_detail": "De-stress from exams, deep sleep • <em>Sleep & De-Stress Pack</em>",
    "studio.mood_focus_name": "Calm Focus (Study & Work)",
    "studio.mood_focus_detail": "Power through deadlines without jitters • <em>Steady Alertness</em>",

    "studio.step2_label": "2. Health & Physiological Guardrails • Bio-Safety",
    "guardrail.hypotension": "📉 Low Blood Pressure <em>(Hypotension - Locks Lotus Plumule)</em>",
    "guardrail.hypertension": "📈 High Blood Pressure <em>(Hypertension - Locks Licorice Root)</em>",
    "guardrail.gastritis": "🔥 Gastritis / Acid Reflux <em>(Locks High Acid, Buffers Acidity)</em>",
    "guardrail.pregnancy": "🤰 Pregnant / Lactating <em>(Strict Caution Safe Mode)</em>",
    "guardrail.driving": "🚗 Driving / Need Full Alertness <em>(Locks Sedative Herbs)</em>",

    "studio.step3_label": "3. Your Flavor Preference • Flavor Profile",
    "flavor.citrus": "Citrus Fresh",
    "flavor.minty": "Cool Minty",
    "flavor.floral": "Floral Blossom",
    "flavor.sweet": "Mellow Sweet",

    "studio.step4_label": "4. Describe Your Need in Plain Text • Natural Language Input",
    "studio.step4_placeholder": "Or describe your mood (e.g. studying for finals, eye strain from screen, sensitive stomach)...",
    "studio.btn_nlp": "Generate with AI",
    "studio.btn_generate": "🧪 Formulate My Drink (Run AI Engine)",

    // Formula Result Card
    "res.placeholder_title": "AI Mixologist Formulation Output",
    "res.placeholder_lead": "Awaiting your assessment...",
    "res.placeholder_step1": "01. Select your target occasion on the left panel (Social, Unwind, Focus).",
    "res.placeholder_step2": "02. Check any health conditions to activate bio-safety locks.",
    "res.placeholder_step3": "03. Click \"Formulate My Drink\" to generate your tailored herbal recipe.",
    "res.watermark_title": "VINAVITA SIGNATURE FORMULA",
    "res.th_herb": "INDIGENOUS HERB",
    "res.th_amount": "DOSAGE",
    "res.th_role": "BIOCHEMICAL & TASTE ROLE",
    "res.spec_temp": "Optimal Water Temperature:",
    "res.spec_time": "Steeping Time:",
    "res.spec_serving": "Serving Recommendation:",
    "res.bitterness_title": "DUAL-PATHWAY BITTERNESS MODULATION & BIOACTIVE SYNERGY",
    "res.order_btn": "🛒 Order This Sachet Box (Doorstep Delivery)",

    // View 2: Signature Menu & Sachet Boxes
    "menu.crest_sub": "INDIGENOUS EXCELLENCE",
    "menu.crest_main": "Convenient Ready-to-Brew Herbal Sachets",
    "menu.title": "Canonical Trio Sachets & <span class=\"gradient-text\">VinaVita</span> Menu",
    "menu.desc": "Bridging Master Tuệ Tĩnh's ancient herbal legacy with modern precision food science: Each pyramid sachet is crafted from bio-degradable cornstarch mesh (PLA), brewing a restorative fragrant infusion in just 3 minutes at school or your study desk!",
    "menu.hero_pill": "🌿 RMIT RBPC 2026 PILOT LINE • 69,000 VND / BOX OF 5 (PLA CORNSTARCH PYRAMID SACHETS)",
    "menu.hero_headline": "Canonical Trio Heritage Tea Sachets for Youth <span class=\"gradient-text\">(Hero Sachets)</span>",
    "menu.hero_sub": "Bio-based PLA cornstarch pyramid mesh ensures optimal infusion and preserves volatile essential oils.<br><strong>Just 13,800 VND/cup (69,000 VND / Box of 5)</strong> — far healthier and cheaper than milk tea or energy drinks! Discounted packages available for student study cafes.",

    "menu.box1_badge": "🍸 HERO SKU #01 • SLEEP & UNWIND",
    "menu.box1_title": "Citrus Twilight (VinaVita #01)",
    "menu.box1_sub": "The 'Sleep & Unwind' Pack • Nighttime Sleep & De-Stress (0.0% Alcohol)",
    "menu.box1_btn": "🛒 Order Box #01",

    "menu.box2_badge": "⚡ HERO SKU #02 • DEADLINE SURVIVOR",
    "menu.box2_title": "Deadline Survivor (VinaVita #02)",
    "menu.box2_sub": "The 'Deadline Survivor' Pack • Exam Cramming & Focus (0mg Caffeine)",
    "menu.box2_btn": "🛒 Order Box #02",

    "menu.box3_badge": "🍷 HERO SKU #03 • 0% PARTY & CHILL",
    "menu.box3_title": "Berry Social Glow Mocktail (VinaVita #03)",
    "menu.box3_sub": "The '0% Party & Chill' Pack • Hangout & Social Chill (0.0% Alcohol)",
    "menu.box3_btn": "🛒 Order Box #03",

    "menu.expanded_title": "Expanded Signature Collection <span class=\"gradient-text\">Direct Serve & Single Sachets</span>",
    "menu.expanded_sub": "Tailored for patrons craving distinctive heritage infusions or single-cup sachet purchases (15,000 – 18,000 VND/sachet).",

    // View 3: Botanical Database
    "db.crest_sub": "ANCESTRAL HERITAGE",
    "db.crest_main": "Indigenous Botanical Safety Encyclopedia",
    "db.title": "Indigenous Vietnamese Botanical Repository",
    "db.desc": "Digitizing 24+ ethnic medicinal herbs under Pharmacopoeia of Vietnam V standards, analyzing bioactive compounds, clinical contraindications, and modern bitterness masking mechanisms.",
    "db.search_placeholder": "Search herbs by name, bioactive compound, usage, or origin...",
    "db.filter_all": "All",
    "db.filter_an_than": "Sedative & Sleep",
    "db.filter_bo_khi": "Adaptogen & Focus",
    "db.filter_thanh_can": "Cooling & Cardioprotective",
    "db.filter_dieu_vi": "Taste & Bitterness Modulators",

    // View 4: About & Team
    "about.crest_sub": "RMIT RBPC 2026 BUSINESS INITIATIVE",
    "about.crest_main": "VinaVita Project & Founding Team",
    "about.title": "Project Genesis & RMIT RBPC 2026 Vision",
    "about.desc": "Born from deep concerns over academic burnout and the rampant overuse of chemical energy drinks and alcohol among Vietnamese youth — VinaVita was conceived as a harmonious bridge between traditional medicine and digital intelligence.",
    "about.story_lead": "Youth Reality & VinaVita's Core Mission",
    "about.story_p1": "High school and university students face immense academic pressure and exam anxiety. To pull all-nighters, students frequently consume energy drinks loaded with excessive synthetic caffeine and refined sugars, triggering heart palpitations, hand tremors, gastric distress, and chronic neural fatigue. During social parties, alcohol peer pressure poses severe health hazards and traffic safety risks.",
    "about.story_p2": "Inspired by Master <strong>Thiền sư Tuệ Tĩnh</strong> — <em>\"Southern Herbs Cure Southern People\"</em>, the VinaVita team believes Vietnam's abundant indigenous flora is an invaluable national treasure if standardized by modern science and food-tech AI to conquer traditional herbal bitterness.",

    // AI Pharmacist Chatbot
    "chat.fab_label": "AI Herbal Pharmacist",
    "chat.header_title": "VinaVita AI Pharmacist",
    "chat.header_sub": "Biomedical Herbal Specialist & 0.0% Mocktail Mixologist",
    "chat.welcome": "Hello! I am the <strong>VinaVita AI Pharmacist</strong>. I can analyze your physiological condition, enforce safety guardrails against contraindicated herbs, and tailor your ideal 0.0% alcohol herbal sachet tea! How are you feeling today?",
    "chat.chip1": "Final exams tomorrow, need focus",
    "chat.chip2": "Trouble sleeping, exam stress",
    "chat.chip3": "Have acid reflux / gastritis",
    "chat.chip4": "Party chill, 0% alcohol",
    "chat.input_placeholder": "Ask AI Pharmacist about body conditions, insomnia, deadlines, gastritis...",
    "chat.send_title": "Send query",
    "chat.btn_apply_profile": "🧪 Load This Clinical Profile into AI Mixologist Studio ➔"
  }
};

window.I18N = I18N;
window.currentLang = localStorage.getItem("vinavita_lang") || "vi";

/**
 * Apply language across entire website DOM and dynamic widgets
 */
window.applyLanguage = function(lang) {
  if (!I18N[lang]) lang = "vi";
  window.currentLang = lang;
  localStorage.setItem("vinavita_lang", lang);
  document.documentElement.lang = lang;

  const dict = I18N[lang];

  // 1. Text & HTML elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Placeholders with [data-i18n-placeholder]
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Titles with [data-i18n-title]
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key]) {
      el.title = dict[key];
    }
  });

  // 4. Update Language Switcher UI Pill
  const optVi = document.getElementById("langOptVi");
  const optEn = document.getElementById("langOptEn");
  if (optVi && optEn) {
    if (lang === "vi") {
      optVi.classList.add("active");
      optEn.classList.remove("active");
    } else {
      optVi.classList.remove("active");
      optEn.classList.add("active");
    }
  }

  // 5. Update Chatbot Floating Pill and Welcome Header
  const fabLabel = document.querySelector(".fab-chat-pill span:not(.fab-icon-open):not(.fab-icon-close)");
  if (fabLabel && dict["chat.fab_label"]) {
    fabLabel.textContent = dict["chat.fab_label"];
  }

  // 6. Update Chat input placeholder
  const chatInput = document.getElementById("chatInput");
  if (chatInput && dict["chat.input_placeholder"]) {
    chatInput.placeholder = dict["chat.input_placeholder"];
  }

  // 7. Update Chat Prompt Chips
  const promptChips = document.querySelectorAll(".chat-prompt-chip");
  if (promptChips.length >= 4) {
    promptChips[0].textContent = dict["chat.chip1"];
    promptChips[0].setAttribute("data-prompt", dict["chat.chip1"]);
    promptChips[1].textContent = dict["chat.chip2"];
    promptChips[1].setAttribute("data-prompt", dict["chat.chip2"]);
    promptChips[2].textContent = dict["chat.chip3"];
    promptChips[2].setAttribute("data-prompt", dict["chat.chip3"]);
    promptChips[3].textContent = dict["chat.chip4"];
    promptChips[3].setAttribute("data-prompt", dict["chat.chip4"]);
  }

  // 8. Trigger dynamic re-renders if available
  if (window.refreshCurrentFormulation) {
    window.refreshCurrentFormulation();
  }
};

/**
 * Toggle between Vietnamese and English
 */
window.toggleLanguage = function() {
  const nextLang = window.currentLang === "vi" ? "en" : "vi";
  window.applyLanguage(nextLang);
};

// Auto-run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.applyLanguage(window.currentLang);
});
