/**
 * VinaVita AI — Comprehensive 100% Bilingual Translation Engine
 * Vietnamese (vi) <-> English (en)
 * Pitching & Technical Engine for RMIT Business Plan Competition (RBPC) 2026
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
    "hero.quote_tag": "Bản Sắc Việt",
    "hero.stat1_title": "100% IF–THEN Safety",
    "hero.stat1_sub": "Khóa dược liệu kỵ cơ địa",
    "hero.stat2_title": "pH 4.2–4.5 • hTAS2R16",
    "hero.stat2_sub": "Khử đắng kép • 0g Đường",
    "hero.stat3_title": "Túi Lọc PLA 5.3g",
    "hero.stat3_sub": "Bột ngô sinh học • 3 phút 85°C",
    "hero.stat4_title": "69.000 VNĐ / Hộp",
    "hero.stat4_sub": "13.800đ/ly • 49.3% Gross Margin",

    // Hero Sachet Pills Bar
    "hero.sachet_bar_title": "BỘ 3 GÓI SACHET DI SẢN CHỦ LỰC • RMIT RBPC 2026 PILOT LINE",
    "hero.sachet_bar_sub": "Túi lọc kim tự tháp PLA 5.3g • 69.000 VNĐ / Hộp 5 gói — 13.800đ/ly • Hãm 3 phút 85°C",
    "hero.pill1_name": "01. Citrus Twilight",
    "hero.pill1_badge": "Night Unwind • pH 4.3",
    "hero.pill1_herbs": "Lạc Tiên (1.8g) • Hoa Cúc (1.5g) • Tắc sấy lạnh (1.5g) • Cỏ Ngọt (0.5g)",
    "hero.pill1_title": "Nhấp để phối trộn ngay Citrus Twilight",
    "hero.pill2_name": "02. Deadline Survivor",
    "hero.pill2_badge": "Focus • 0mg Caffeine",
    "hero.pill2_herbs": "Lá Đinh Lăng (2.0g) • Sả Chanh (1.5g) • Gừng Núi (1.5g) • La Hán Quả (0.3g)",
    "hero.pill2_title": "Nhấp để phối trộn ngay Deadline Survivor",
    "hero.pill3_name": "03. Berry Social Glow",
    "hero.pill3_badge": "0.0% Cồn • pH 4.2",
    "hero.pill3_herbs": "Atiso Đỏ (2.2g) • Lạc Tiên (1.3g) • Quế thanh (0.8g) • La Hán Quả (1.0g)",
    "hero.pill3_title": "Nhấp để phối trộn ngay Berry Social Glow",
    "hero.pill_btn": "Pha Thử ➔",

    // AI Mixologist Studio (View 1)
    "studio.ctrl_title": "<span>🧪</span> Trạm phối trộn của AI Mixologist",
    "studio.ctrl_desc": "Hôm nay bạn thấy thế nào? Hãy chia sẻ tâm trạng, cơ địa của bạn (như huyết áp thấp, đau dạ dày) và gu vị bạn thích — trợ lý AI Mixologist sẽ tự động lọc thảo mộc kỵ và gợi ý công thức vừa an toàn, vừa chuẩn gu nhất cho riêng bạn.",
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
    "guardrail.gastritis": "🛡️ Đau dạ dày / Trào ngược <em>(Acid Reflux - Giảm chua pH 4.5)</em>",
    "guardrail.pregnancy": "🤰 Mang thai / Cho con bú <em>(Pregnancy Safe Filter)</em>",
    "guardrail.driving": "🚗 Cần lái xe / Tỉnh táo cao <em>(High Vigilance - Không buồn ngủ)</em>",

    "studio.step3_label": "3. Gu vị bạn muốn thưởng thức • Flavor Profile",
    "flavor.citrus_name": "Citrus-Bright (Chua Thanh)",
    "flavor.citrus_detail": "Quất sấy lạnh & Chanh dây thơm mát",
    "flavor.sweet_name": "Mellow-Sweet (Ngọt Dịu)",
    "flavor.sweet_detail": "Cỏ ngọt 0-calorie & Cam thảo dịu nhẹ",
    "flavor.floral_name": "Floral Breeze (Hương Hoa)",
    "flavor.floral_detail": "Bạch cúc cố đô & Hoa nhài thanh nhã",
    "flavor.minty_name": "Cool-Minty (Mát Lạnh)",
    "flavor.minty_detail": "Bạc hà nam the mát sảng khoái",

    "studio.step4_label": "4. Hoặc mô tả tình trạng riêng của bạn • Custom AI Query",
    "studio.step4_placeholder": "VD: Đang ôn thi thức khuya, đau dạ dày, thích vị chua the mát...",
    "studio.btn_nlp": "Gợi Ý",
    "studio.quick_tag1": "💡 Ôn thi đau dạ dày",
    "studio.quick_tag2": "💡 Khó ngủ + HA thấp",
    "studio.quick_tag3": "💡 Tiệc 0% cồn lái xe",
    "studio.btn_generate": "<span>✨</span> Pha Cho Tôi Một Ly (Gợi ý công thức ngay)",

    // Recipe Placeholder & Output
    "res.ph_status_pill": "⚡ BUỒNG BÀO CHẾ SINH HỌC & ĐỐI CHIẾU DƯỢC ĐIỂN",
    "res.ph_title": "Ly Thảo Mộc Của Bạn Đang Chờ...",
    "res.ph_desc": "Hãy lựa chọn nhanh các tiêu chí ở cột bên trái rồi bấm nút, hệ thống AI Mixologist sẽ tự động lọc thảo mộc kỵ, cân bằng độ chua pH 4.2–4.5 để khử vị đắng và gợi ý công thức phù hợp nhất cho riêng bạn!",
    "res.ph_spec1_lbl": "Cơ chế khử đắng",
    "res.ph_spec1_val": "Khóa thụ thể hTAS2R16 (pH 4.3)",
    "res.ph_spec2_lbl": "Độ an toàn dược lý",
    "res.ph_spec2_val": "100% IF-THEN Contraindication",
    "res.ph_spec3_lbl": "Chuẩn đóng gói",
    "res.ph_spec3_val": "Túi lọc PLA bột ngô 5.3g (85°C)",
    "res.ph_spec4_lbl": "Cam kết sức khỏe",
    "res.ph_spec4_val": "0.0% Cồn • 0g Đường tinh luyện",
    "res.ph_preset_title": "Thử nhanh 3 kịch bản mẫu từ Proposal:",
    "res.ph_btn1": "🌙 #01 Citrus Twilight (Ngủ sâu)",
    "res.ph_btn2": "⚡ #02 Deadline Survivor (Chạy deadline)",
    "res.ph_btn3": "🍷 #03 Berry Social Glow (Tiệc 0% cồn)",

    "res.badge": "⭐ GỢI Ý CÔNG THỨC DÀNH CHO BẠN",
    "res.evidence_badge": "🔬 [Preclinical: Tan 2024] • [Đỗ Tất Lợi 2004]",
    "res.th_herb": "Dược Liệu Bản Địa",
    "res.th_amount": "Định Lượng",
    "res.th_role": "Công Dụng & Hương Vị Tự Nhiên",
    "res.total_label": "📦 ĐỊNH LƯỢNG 1 TÚI LỌC SACHET:",
    "res.total_note": "(Đúng chuẩn PLA sinh học • ≤2.2g/vị)",
    "res.spec_temp_lbl": "Nhiệt độ nước thích hợp:",
    "res.spec_time_lbl": "Thời gian ủ trà:",
    "res.spec_serving_lbl": "Gợi ý thưởng thức:",
    "res.bitterness_title": "<span>🧪</span> BÍ QUYẾT GIẢM ĐẮNG TỰ NHIÊN • KHÔNG CẦN ĐƯỜNG TINH LUYỆN",
    "res.bitter1_title": "1. Ức Chế Thụ Thể hTAS2R16 (pH 4.2 – 4.5)",
    "res.bitter1_desc": "Axit citric tự nhiên từ Tắc sấy lạnh / Atiso Đỏ đưa pH dịch chiết về 4.4, trực tiếp ức chế thụ thể vị đắng hTAS2R16 trên gai vị giác <em>(Sakurai et al. 2009; Sotoyama et al. 2017)</em>.",
    "res.bitter2_title": "2. Khử Đắng Kênh Ion Na+ & Cỏ Ngọt (GI = 0)",
    "res.bitter2_desc": "0.05g muối khoáng (Na+) ức chế dẫn truyền tín hiệu đắng chéo trung ương <em>(Breslin & Beauchamp 1997)</em>, hiệp đồng cùng Stevioside tạo hậu vị thanh khiết.",
    "res.biochem_title": "🔬 Ghi chú từ nhóm nghiên cứu học sinh:",
    "res.matched_tag": "📦 ĐÃ CÓ GÓI SACHET ĐÓNG SẴN CHÍNH THỨC",
    "res.matched_btn": "🛒 Đặt Hộp 5 Gói Dùng Thử – 69.000 VNĐ",
    "res.disclaimer_title": "LƯU Ý ẨM THỰC & AN TOÀN SỨC KHỎE:",
    "res.disclaimer_text": "VinaVita là thức uống thảo mộc ẩm thực hỗ trợ thư giãn & tập trung, 0.0% cồn (Nghị định 168/2024/NĐ-CP), 0g đường tinh luyện. Sản phẩm tuân thủ liều lượng an toàn thực phẩm (≤ 2.2g/vị), không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Phụ nữ mang thai hoặc người có bệnh nền mãn tính nên tham khảo ý kiến chuyên gia trước khi dùng.",
    "res.btn_pdf": "📥 Tải Công Thức (PDF)",
    "res.btn_order_fresh": "📦 Đặt Gói Đong Tươi (15k)",

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
    "menu.box1_bitter_title": "<span>🧪</span> CƠ CHẾ KHỬ ĐẮNG & HOẠT HÓA GABA KÉP",
    "menu.box1_bitter_desc": "Axit hữu cơ đưa pH về 4.4 triệt tiêu vị đắng thảo mộc, hiệp đồng cùng Vitexin tạo giấc ngủ sinh học tự nhiên không gây mệt mỏi buổi sáng.",
    "menu.box1_btn": "🛒 Đặt Hộp #01",

    "menu.box2_badge": "⚡ HERO SKU #02 • DEADLINE SURVIVOR",
    "menu.box2_title": "Deadline Survivor (VinaVita #02)",
    "menu.box2_sub": "The 'Deadline Survivor' Pack • Gói Chạy Deadline & Ôn Thi (0mg Caffeine)",
    "menu.box2_bitter_title": "<span>⚡</span> TẬP TRUNG 4H BỀN BỈ • KHÔNG ÉP TIM",
    "menu.box2_bitter_desc": "Không chứa caffeine tổng hợp: Hoàn toàn không gây run tay, không cồn cào dạ dày hay sụt năng lượng đột ngột (crash).",
    "menu.box2_btn": "🛒 Đặt Hộp #02",

    "menu.box3_badge": "🍷 HERO SKU #03 • 0% PARTY & CHILL",
    "menu.box3_title": "Berry Social Glow Mocktail (VinaVita #03)",
    "menu.box3_sub": "The '0% Party & Chill' Pack • Gói Tiệc Tùng 0% Cồn (0.0% Alcohol Social Chill)",
    "menu.box3_bitter_title": "<span>🧪</span> CƠ CHẾ KHỬ ĐẮNG KÉP • DUAL-PATHWAY BITTERNESS MODULATION (0G REFINED SUGAR)",
    "menu.box3_bitter_desc": "Axit hữu cơ tự nhiên từ Atiso Đỏ đưa pH dịch chiết về 4.4 ức chế thụ thể đắng hTAS2R16, phối hợp cùng Mogroside tự nhiên tạo hậu vị ngọt sâu không cồn.",
    "menu.box3_btn": "🛒 Đặt Hộp #03",

    "menu.box_unit": "/ Hộp 5 túi PLA (5.3g)",
    "menu.expanded_title": "Bộ Sưu Tập Menu Mở Rộng <span class=\"gradient-text\">Phục Vụ Trực Tiếp & Sachet Lẻ</span>",
    "menu.expanded_sub": "Dành cho khách hàng muốn thưởng thức các hương vị đặc trưng cố đô hoặc đặt gói đong lẻ từng ly (15.000 – 18.000 VNĐ/gói).",

    // View 3: Botanical Database
    "db.crest_sub": "TRI THỨC DÂN TỘC",
    "db.crest_main": "Bách Khoa Dược Liệu Dân Tộc An Toàn",
    "db.title": "Bách Khoa Dược Liệu Việt & <span class=\"gradient-text\">Cẩm Nang An Toàn</span>",
    "db.desc": "Được nhóm tác giả chúng em dày công tra cứu và chuẩn hóa từ Dược điển Việt Nam, các công trình của Cố Giáo sư Đỗ Tất Lợi cùng nhiều tài liệu y học tin cậy. Tại đây, Quý vị và các bạn có thể dễ dàng tra cứu từng vị thuốc, liều lượng dùng an toàn hàng ngày và cách phối hợp sao cho thơm ngon, dễ uống nhất.",
    "db.search_placeholder": "🔍 Gõ tên cây thuốc (Lạc Tiên, Đinh Lăng, Tâm Sen...), công dụng (ngủ ngon, giảm mỏi mắt) hoặc hương vị...",

    // View 4: About & Team
    "about.title": "Câu Chuyện Dự Án: <span class=\"gradient-text\">VinaVita AI x RMIT RBPC 2026</span>",
    "about.p_intro": "<strong>Kính thưa Quý Ban Giám khảo và Quý Thầy Cô,</strong>",
    "about.p_team": "Chúng em là nhóm 4 học sinh THPT bước vào cuộc thi <strong>RMIT Business Plan Competition 2026</strong> với một trăn trở rất thật từ cuộc sống hàng ngày: <em>Làm sao để học sinh, sinh viên có thể học tập và cống hiến hết mình mà không phải đánh đổi bằng sức khỏe và giấc ngủ?</em>",
    "about.p_teacher": "Ý tưởng về <strong>VinaVita AI</strong> không đến từ sách vở hay những ý niệm kinh doanh xa vời. Nó bắt đầu từ một buổi chiều đầu tháng 10, khi một người cô giáo dạy Tin học ngồi lại tâm sự cùng chúng em. Cô kể rằng cô từng có quãng thời gian kiệt sức vì công việc, suy nhược thần kinh đến mức não bộ báo động đỏ. Cô từng tìm đến thuốc tây, nhưng uống vào lại bị phản tác dụng và mệt mỏi thêm. Cho đến khi cô được một người bạn bốc cho thang thuốc Đông Y cổ truyền: chính những vị thảo mộc mộc mạc ấy đã cứu cô, giúp cô an thần, có lại giấc ngủ sâu thực sự, để từng tế bào trong cơ thể tự chữa lành và phục hồi năng lượng sống. Lời dặn dò chân thành của cô hôm đó đã chạm thẳng vào tâm can chúng em: <em>\"Cơ thể mình có giới hạn sinh học, nếu để nó bị phạt một lần thì hậu quả sẽ rất lớn. Điều quan trọng nhất là mình phải còn hiện diện khỏe mạnh ở đây.\"</em>",
    "about.p_status_quo": "Nhìn quanh giảng đường và bàn học mỗi đêm, chúng em thấy quá nhiều bạn bè đang tự \"phạt\" cơ thể mình bằng những lon nước tăng lực đặc quánh đường hóa học hay cà phê đậm đặc, dẫn đến ép tim, hoặc tệ hơn là đau tim, run tay, cồn cào dạ dày và kiệt sức vào sáng hôm sau. Kho tàng Nam Dược ngàn năm của dân tộc mình — từ ngọn Lạc Tiên bờ rào, lá Đinh Lăng trong vườn cho đến bông Cúc trắng cố đô — vốn dĩ lành tính và xoa dịu thần kinh kỳ diệu như thế. Tại sao thế hệ trẻ lại ngại sử dụng chỉ vì vị đắng và cách đun sắc cổ truyền rườm rà, mà chỉ đinh ninh sử dụng thuốc tây hay nước tăng lực mà hiếm khi biết thành phần hay những hệ lụy lâu dài đang âm thầm bào mòn cơ thể từng ngày?",
    "about.p_solution": "Đây chính là lý do chúng em đã làm ra VinaVita. Bằng cách dùng thuật toán để tính toán tỷ lệ vị giúp triệt tiêu vị đắng tự nhiên mà không cần đến một gam đường tinh luyện nào, rồi đóng thành từng gói trà nhỏ gọn tiện lợi chỉ mất 3 phút rót nước sôi ngay tại bàn học, chúng em muốn đưa Nam Dược bước ra khỏi những ấm sắc nặng nề để đến gần hơn với người trẻ. Đó là một giải pháp thiết thực và lành tính — để những đêm ôn thi hay chạy deadline của học sinh, sinh viên không còn là những cuộc đánh cược với sức khỏe của chính mình.",
    "about.showcase_title": "Không Gian Nghiên Cứu Dược Liệu & Mô Hình AI Thảo Mộc Việt Nam",
    "about.showcase_desc": "Nơi tri thức thảo dược dân tộc ngàn đời được thế hệ học sinh chúng em tiếp nối và hồi sinh bằng công nghệ mới.",
    "about.showcase_badge": "Bản Sắc Việt 2026",
    "about.team_title": "Cơ Cấu Đội Ngũ Tác Chiến",
    "about.alex_role": "LEADER — BIOTECH RESEARCHER",
    "about.alex_name": "Huỳnh Hữu Anh Khoa",
    "about.alex_school": "🏫 Vinschool Central Park High School, HCMC",
    "about.bao_school": "🏫 Vinschool Central Park High School, HCMC",
    "about.hieu_school": "🏫 Vinschool Central Park High School, HCMC",
    "about.dung_school": "🏫 Vinschool Central Park High School, HCMC",
    "about.alex_school": "🏫 THPT Vinschool Central Park, TP.HCM",
    "about.bao_school": "🏫 THPT Vinschool Central Park, TP.HCM",
    "about.hieu_school": "🏫 THPT Vinschool Central Park, TP.HCM",
    "about.dung_school": "🏫 THPT Vinschool Central Park, TP.HCM",
    "about.alex_bio": "Người khởi xướng ý tưởng VinaVita, Trưởng nhóm Nghiên cứu Công nghệ Sinh học. Có thế mạnh và niềm đam mê lớn với Hóa học cùng Sinh học, định hướng tương lai theo đuổi Công nghệ Sinh học và Y khoa. Anh Khoa trực tiếp kết nối phản hồi từ người dùng, nghiên cứu Khoa học Thực phẩm và phát triển mô hình kinh doanh dược liệu OCOP bền vững.",
    "about.bao_role": "SYSTEM ARCHITECT — SOFTWARE & AI ENGINEER",
    "about.bao_name": "Ngô Minh Thiên Bảo",
    "about.bao_bio": "Kiến trúc sư trưởng Hệ thống, Kỹ sư Phần mềm và Kỹ sư AI. Trực tiếp lập trình và phát triển toàn bộ website nền tảng, xây dựng mô hình AI và thuật toán lọc an toàn sinh học, thiết kế toàn diện giao diện UI/UX Cyber-Botanical và logic phối trộn công thức của VinaVita AI.",
    "about.hieu_role": "PHARMACOLOGIST",
    "about.hieu_name": "Trương Quang Hiếu",
    "about.hieu_bio": "Chuyên gia Dược học, người đặt nền móng dữ liệu ban đầu cho VinaVita từ trang web lưu trữ trước khi hệ thống được phát triển toàn diện. Tỉ mỉ đối chiếu từng vị thuốc từ Dược điển Việt Nam và các nghiên cứu lâm sàng quốc tế để đảm bảo mỗi công thức gợi ý ra đều an toàn tuyệt đối và có cơ sở khoa học vững chắc.",
    "about.dung_role": "DATA INTELLIGENCE LEAD",
    "about.dung_name": "Nguyễn Minh Dũng",
    "about.dung_bio": "Đồng sáng lập phụ trách phân tích dữ liệu và luồng trải nghiệm người dùng. Sở hữu nền tảng kỹ thuật công nghệ vững chắc, Dũng trực tiếp thiết kế khảo sát, thu thập và bóc tách dữ liệu hành vi thực tế từ 60 bạn trẻ. Thông qua các mô hình trực quan hóa và phân tích sâu sắc, Dũng giúp đội ngũ thấu hiểu trọn vẹn nhu cầu người dùng, hoàn thiện cơ sở dữ liệu thực nghiệm và tối ưu hóa hệ thống VinaVita AI.",
    "about.ref_title": "Tài Liệu Tham Khảo Học Thuật",
    "about.ref_list": "<li>Appel, K, Rose, T, Fiebich, B, Kammler, T, Hoffmann, C &amp; Weiss, G 2011, \'Modulation of the γ-aminobutyric acid (GABA) system by Passiflora incarnata L.\', <em>Phytotherapy Research</em>, vol. 25, no. 6, pp. 838–843.</li><li>Breslin, PAS &amp; Beauchamp, GK 1997, \'Salt enhances flavour by suppressing bitterness\', <em>Nature</em>, vol. 387, no. 6633, p. 563.</li><li>Đỗ, TL 2004, <em>Những cây thuốc và vị thuốc Việt Nam</em>, Nhà xuất bản Y học, Hà Nội.</li><li>Nguyễn, TTH, Nguyễn, QH &amp; Trần, VS 2020, \'Phytochemical constituents and biological activities of Passiflora foetida L. in Vietnam\', <em>Vietnam Journal of Science and Technology</em>, vol. 58, no. 4, pp. 412–420.</li><li>World Health Organization (WHO) 2024, <em>Global status report on alcohol and health and treatment of substance use disorders</em>, World Health Organization, Geneva.</li>",
    "modal.close": "Đóng hồ sơ",
    "chat.btn_minimize": "Thu nhỏ",
    "chat.btn_close": "Đóng",

    // Order Modal
    "order.title": "Đặt Gói Sachet VinaVita Đong Sẵn",
    "order.sub": "Chuẩn hóa định lượng dược liệu OCOP Việt Nam • Tiện lợi cho Gen-Z",
    "order.lbl_product": "Sản phẩm:",
    "order.lbl_packaging": "Quy cách đóng gói:",
    "order.val_packaging": "Hộp 5 túi lọc kim tự tháp sinh học PLA (5.3g/gói)",
    "order.lbl_price": "Đơn giá đề xuất:",
    "order.lbl_name": "Họ tên người nhận (Thử nghiệm demo):",
    "order.lbl_address": "Khu vực nhận hàng / Giao nhanh:",
    "order.btn_confirm": "🚀 Xác Nhận Đặt Thử Nghiệm — Combo 5 Gói",
    "order.disclaimer": "*Mô phỏng đặt hàng thực tế phục vụ RMIT Business Plan Competition 2026.",
    "order.receipt_title": "ĐẶT HÀNG THỬ NGHIỆM THÀNH CÔNG!",
    "order.receipt_id_lbl": "Mã đơn:",
    "order.receipt_delivery": "Dự kiến giao:",
    "order.receipt_delivery_val": "24 – 48 giờ qua HTX OCOP",
    "order.receipt_desc": "Đơn hàng đã được ghi nhận vào hệ thống điều phối của VinaVita. Gói thảo mộc đong chuẩn tỷ lệ sinh học sẵn sàng được giao tới bạn.",
    "order.receipt_btn": "Hoàn Tất & Quay Lại",

    // Footer
    "footer.brand": "VinaVita AI",
    "footer.tagline": "Nền Tảng Pha Chế Dược Liệu & Mocktail Thảo Mộc Việt Nam — 0.0% Cồn",
    "footer.team": "Huỳnh Hữu Anh Khoa — Leader & Biotech Researcher, Ngô Minh Thiên Bảo — Lead System Architect, Trương Quang Hiếu — Pharmacologist & Nguyễn Minh Dũng — Data Intelligence Lead • Team Thinking Space — RMIT RBPC 2026",
    "footer.disclaimer": "Dự án nghiên cứu phục vụ cuộc thi RMIT Business Plan Competition 2026. Các thông tin công thức dựa trên y học cổ truyền và dược lý học thực nghiệm, không nhằm mục đích thay thế chẩn đoán hoặc điều trị y tế chuyên sâu.",
    "footer.ai_warning": "⚠️ AI có thể mắc lỗi, vui lòng kiểm tra lại thông tin để đảm bảo tính chính xác. Vui lòng tham khảo thêm ý kiến chuyên gia y tế và bác sĩ đối với các lời khuyên sức khỏe và dược liệu.",

    // AI Pharmacist Chatbot
    "chat.fab_label": "Dược Sĩ AI VinaVita",
    "chat.fab_title": "Trò chuyện cùng Dược Sĩ AI VinaVita",
    "chat.bot_name": "Dược Sĩ AI VinaVita",
    "chat.status_text": "🟢 Cloud Neural AI Online (Gemini 2.5 Flash + Dược Điển RAG) • AI có thể mắc lỗi, kiểm tra lại thông tin",
    "chat.disclaimer": "⚠️ AI có thể mắc lỗi. Vui lòng tham khảo thêm ý kiến chuyên gia y tế & bác sĩ đối với các lời khuyên sức khỏe và dược liệu.",
    "chat.prompts_label": "💡 Gợi ý nhanh:",
    "chat.chip1": "🌸 Tâm sen & Huyết áp",
    "chat.chip2": "⚡ Chạy deadline",
    "chat.chip3": "🌙 Ngủ sâu & GABA",
    "chat.chip4": "🍵 Khử vị đắng TAS2R",
    "chat.chip5": "📦 Combo 5 Gói Sachet",
    "chat.chip6": "🛡️ Đau dạ dày",
    "chat.welcome_full": "<p>Xin chào! Mình là <strong>Dược Sĩ AI VinaVita</strong>. Mình kết nối trực tiếp với toàn bộ Bách khoa Dược liệu cổ truyền, phân tích hoạt chất sinh học (GABA, Flavonoid, Alkaloid, Saponin, L-Theanine) và rào cản sức khỏe.</p><p style=\"margin-top:6px;\">Bạn có thể hỏi bất cứ điều gì: <em>\"Tâm sen tác dụng gì?\", \"Công thức thức khuya chạy deadline?\", \"Đau dạ dày uống gì?\", hoặc \"Combo 5 gói sachet giá bao nhiêu?\"</em>.</p>",
    "chat.input_placeholder": "Nhập câu hỏi (mất ngủ, deadline, dạ dày)...",
    "chat.send_btn": "Gửi",
    // Seal & Recipe Defaults
    "brand.seal_line1": "NAM DƯỢC",
    "brand.seal_line2": "TRỊ NAM NHÂN",
    "res.def_title": "Lạc Vibe Citrus Spritz",
    "res.def_sub": "Giải pháp thay thế Bia & Rượu nhẹ trong các bữa tiệc đêm (0.0% Cồn)",
    "res.def_time": "3 phút 30 giây",
    "res.def_serving": "Lắc cùng đá viên, thêm 1 nhánh bạc hà",
    "res.def_biochem": "Thuật toán tối ưu hóa tỷ lệ Vitexin (Lạc Tiên) và Saponin Adaptogen (Đinh Lăng) ở tỷ lệ 5:3, giúp hạ chỉ số căng thẳng thần kinh mà không gây ức chế phản xạ.",
    "res.def_sachet_name": "Hộp 5 Túi Lọc Kim Tự Tháp #01 — Citrus Twilight",
    "res.def_sachet_specs": "Túi lọc sinh học PLA 5.35g • 69.000 VNĐ / Hộp 5 gói (Tiết kiệm 49.3%)",

    // Menu Tables & Specs
    "menu.th_herb": "DƯỢC LIỆU BẢN ĐỊA",
    "menu.th_amount": "ĐỊNH LƯỢNG",
    "menu.th_role": "VAI TRÒ SINH HỌC & VỊ GIÁC",
    "menu.spec_temp_lbl": "Nhiệt độ nước thích hợp:",
    "menu.spec_time_lbl": "Thời gian ủ trà:",
    "menu.spec_serving_lbl": "Gợi ý thưởng thức:",

    "menu.b1_h1_name": "Lạc Tiên Khô",
    "menu.b1_h1_role": "Vitexin hoạt hóa GABA_A, giải tỏa căng thẳng thần kinh sau 23h học thi",
    "menu.b1_h2_name": "Bạch Cúc Cố Đô",
    "menu.b1_h2_role": "Apigenin giãn mạch, thanh can giáng hỏa, hương hoa thanh nhã",
    "menu.b1_h3_name": "Tắc Sấy Lạnh",
    "menu.b1_h3_role": "Acid citric đưa pH về 4.4 triệt tiêu vị đắng gai lưỡi hTAS2R",
    "menu.b1_h4_name": "Cỏ Ngọt & Na+",
    "menu.b1_h4_role": "Hậu vị ngọt sâu không đường (0g GI), ion Na+ ức chế đắng trung ương",
    "menu.b1_spec_time": "5 phút",
    "menu.b1_spec_serving": "Rót qua 100g đá viên, thêm 1 lát tắc mỏng và nhánh bạc hà",

    "menu.b2_h1_name": "Đinh Lăng Sâm Nam",
    "menu.b2_h1_role": "Saponin Adaptogen tăng tưới máu não, duy trì tỉnh táo không gây ép tim hay run tay",
    "menu.b2_h2_name": "Sả Chanh Bản Địa",
    "menu.b2_h2_role": "Citral & Geraniol tạo hương thơm sảng khoái, xua tan căng thẳng giác quan",
    "menu.b2_h3_name": "Gừng Núi Kỳ Sơn",
    "menu.b2_h3_role": "Gingerol làm ấm tỳ vị, hỗ trợ lưu thông khí huyết và chống mệt mỏi",
    "menu.b2_h4_name": "La Hán Quả Cổ Truyền",
    "menu.b2_h4_role": "Mogroside V tạo vị ngọt thanh dịu mát, 0g đường tinh luyện, 0-calorie (GI = 0)",
    "menu.b2_spec_time": "3 – 5 phút (Brew in 3 Mins)",
    "menu.b2_spec_serving": "Dùng ấm hoặc rót qua đá viên để thưởng thức mocktail thanh mát",

    "menu.b3_h1_name": "Atiso Đỏ (Roselle Hibiscus)",
    "menu.b3_h1_role": "Anthocyanin tạo sắc đỏ Ruby dạ tiệc, vị chua thanh tự nhiên",
    "menu.b3_h2_name": "Lạc Tiên Khô",
    "menu.b3_h2_role": "Vitexin kích hoạt GABA_A tạo cảm giác ấm áp, cởi mở hòa đồng xã hội",
    "menu.b3_h3_name": "Quế Trà Bồng Bản Địa",
    "menu.b3_h3_role": "Cinnamaldehyde tạo hương thơm nồng ấm quý phái như rượu vang Mulled Wine",
    "menu.b3_h4_name": "La Hán Quả / Cỏ Ngọt",
    "menu.b3_h4_role": "Vị ngọt tròn đầy không năng lượng thừa, không cồn",
    "menu.b3_spec_time": "4 phút",
    "menu.b3_spec_serving": "Lắc cùng đá viên, thêm chút soda bọt mịn và 1 nhánh hương thảo",

    // Order Modal Items
    "order.combo_name": "Combo 5 Gói Sachet VinaVita",
    "order.combo_price": "69.000 VNĐ — 13.8k/ly",
    "order.receipt_product": "Sản phẩm:",
    "order.receipt_cust": "Người nhận:",
    "order.receipt_addr": "Địa chỉ:",
  },

  en: {
    // Brand & Navigation
    "brand.tagline": "Vietnamese Herbs • Soul of Herbal Tea",
    "brand.title": "VinaVita AI — Vietnamese Heritage Herbal Mocktail Platform",
    "nav.mixologist": "🍸 AI Mixologist",
    "nav.signatures": "⭐ Menu & Gen-Z Sachets",
    "nav.database": "📚 Herb Encyclopedia",
    "nav.about": "🏛️ Project & Team",
    "nav.ai_node_title": "Cloud AI Node Active (Click to open AI Pharmacist, VinaVita)",

    // Hero Section
    "hero.initiative": "RMIT RBPC 2026 BUSINESS INITIATIVE",
    "hero.headline": "Revitalizing <span class=\"gradient-text\">Vietnamese Herbs</span> for Youth",
    "hero.lead": "VinaVita AI pioneers the fusion of ethnic Vietnamese herbs with modern food science to create <strong>0.0% Alcohol</strong> social relaxation mocktails. Empowering youth to de-stress, sleep deeply, and socialize hangover-free with no hepatic toxicity or heart racing — powered by natural bitterness modulation and smart flavor AI.",
    "hero.quote_text": "\"Southern Herbs Cure Southern People\" — Master Tuệ Tĩnh • Heritage x Gen Z Innovation",
    "hero.quote_tag": "Heritage",
    "hero.stat1_title": "100% IF–THEN Safety",
    "hero.stat1_sub": "Algorithmic Contraindication Lock",
    "hero.stat2_title": "pH 4.2–4.5 • hTAS2R16",
    "hero.stat2_sub": "Dual Bitterness Masking • 0g Sugar",
    "hero.stat3_title": "5.3g PLA Pyramid Sachet",
    "hero.stat3_sub": "Cornstarch Bio-mesh • 3 Mins 85°C",
    "hero.stat4_title": "69,000 VND / Box",
    "hero.stat4_sub": "13,800 VND/Cup • 49.3% Gross Margin",

    // Hero Sachet Pills Bar
    "hero.sachet_bar_title": "CANONICAL TRIO HERITAGE SACHETS • RMIT RBPC 2026 PILOT LINE",
    "hero.sachet_bar_sub": "PLA pyramid sachet 5.3g • 69,000 VND / Box of 5 — 13,800 VND/Cup • Steep 3 mins at 85°C",
    "hero.pill1_name": "01. Citrus Twilight",
    "hero.pill1_badge": "Night Unwind • pH 4.3",
    "hero.pill1_herbs": "Passionflower (1.8g) • Chamomile (1.5g) • Freeze-dried Kumquat (1.5g) • Stevia (0.5g)",
    "hero.pill1_title": "Click to formulate Citrus Twilight now",
    "hero.pill2_name": "02. Deadline Survivor",
    "hero.pill2_badge": "Focus • 0mg Caffeine",
    "hero.pill2_herbs": "Polyscias Leaf (2.0g) • Lemongrass (1.5g) • Mountain Ginger (1.5g) • Monk Fruit (0.3g)",
    "hero.pill2_title": "Click to formulate Deadline Survivor now",
    "hero.pill3_name": "03. Berry Social Glow",
    "hero.pill3_badge": "0.0% Alcohol • pH 4.2",
    "hero.pill3_herbs": "Roselle Hibiscus (2.2g) • Passionflower (1.3g) • Cinnamon (0.8g) • Monk Fruit (1.0g)",
    "hero.pill3_title": "Click to formulate Berry Social Glow now",
    "hero.pill_btn": "Brew Now ➔",

    // AI Mixologist Studio (View 1)
    "studio.ctrl_title": "<span>🧪</span> AI Mixologist Formulation Studio",
    "studio.ctrl_desc": "How are you feeling today? Share your mood, physical conditions (e.g. low blood pressure, sensitive stomach), and flavor preferences — our AI Mixologist algorithm automatically locks out contraindicated botanicals and calculates a safe, tailor-made formula.",
    "studio.step1_label": "1. What drink do you need today? • Need & Mood",
    "studio.mood_social_name": "Social Glow (Party & Chill)",
    "studio.mood_social_detail": "Hang out 0% alcohol with friends • <em>0.0% Alcohol Social Chill</em>",
    "studio.mood_unwind_name": "Night Unwind (Deep Sleep)",
    "studio.mood_unwind_detail": "De-stress after exams, sleep soundly • <em>Sleep & De-Stress Pack</em>",
    "studio.mood_focus_name": "Calm Focus (Deep Study)",
    "studio.mood_focus_detail": "Crush deadlines smoothly without jitters • <em>Steady Alertness</em>",

    "studio.step2_label": "2. Health Guardrails & Bio-Safety Locks",
    "guardrail.hypotension": "📉 Low Blood Pressure <em>(Hypotension - Locks Lotus Plumule)</em>",
    "guardrail.hypertension": "📈 High Blood Pressure <em>(Hypertension - Locks Licorice Root)</em>",
    "guardrail.gastritis": "🛡️ Gastritis / Acid Reflux <em>(Buffer acid to pH 4.5)</em>",
    "guardrail.pregnancy": "🤰 Pregnant / Nursing <em>(Pregnancy Safe Filter)</em>",
    "guardrail.driving": "🚗 Driving / High Vigilance <em>(Non-drowsy mode)</em>",

    "studio.step3_label": "3. Your Flavor Profile Preference",
    "flavor.citrus_name": "Citrus-Bright (Refreshing Tart)",
    "flavor.citrus_detail": "Freeze-dried Kumquat & Passion Fruit",
    "flavor.sweet_name": "Mellow-Sweet (Natural Sweet)",
    "flavor.sweet_detail": "0-calorie Stevia & Gentle Licorice",
    "flavor.floral_name": "Floral Breeze (Delicate Floral)",
    "flavor.floral_detail": "Imperial White Chrysanthemum & Jasmine",
    "flavor.minty_name": "Cool-Minty (Crisp & Cool)",
    "flavor.minty_detail": "Native Peppermint crisp invigorating taste",

    "studio.step4_label": "4. Or Describe Your Condition Freely • Custom AI Query",
    "studio.step4_placeholder": "E.g., Cramming late for finals, acid reflux, prefer cool refreshing taste...",
    "studio.btn_nlp": "Suggest",
    "studio.quick_tag1": "💡 Late exam + Gastritis",
    "studio.quick_tag2": "💡 Insomnia + Low BP",
    "studio.quick_tag3": "💡 Party 0% alcohol driver",
    "studio.btn_generate": "<span>✨</span> Formulate My Drink (Generate Formula Now)",

    // Recipe Placeholder & Output
    "res.ph_status_pill": "⚡ BIOMEDICAL FORMULATION CHAMBER & PHARMACOPOEIA MATCHING",
    "res.ph_title": "Your Herbal Infusion is Awaiting...",
    "res.ph_desc": "Select your criteria in the left column and click generate; the AI Mixologist engine will automatically lock contraindicated herbs, buffer pH to 4.2–4.5 to eliminate herbal bitterness, and tailor the most suitable recipe for you!",
    "res.ph_spec1_lbl": "Bitterness Masking",
    "res.ph_spec1_val": "hTAS2R16 Receptor Block (pH 4.3)",
    "res.ph_spec2_lbl": "Pharmacological Safety",
    "res.ph_spec2_val": "100% IF-THEN Contraindication Lock",
    "res.ph_spec3_lbl": "Packaging Standard",
    "res.ph_spec3_val": "Cornstarch PLA Sachet 5.3g (85°C)",
    "res.ph_spec4_lbl": "Wellness Pledge",
    "res.ph_spec4_val": "0.0% Alcohol • 0g Refined Sugar",
    "res.ph_preset_title": "Quick-try 3 canonical scenarios from our proposal:",
    "res.ph_btn1": "🌙 #01 Citrus Twilight (Deep Sleep)",
    "res.ph_btn2": "⚡ #02 Deadline Survivor (Focus & Study)",
    "res.ph_btn3": "🍷 #03 Berry Social Glow (0% Party Chill)",

    "res.badge": "⭐ FORMULA TAILORED FOR YOU",
    "res.evidence_badge": "🔬 [Preclinical: Tan 2024] • [Đỗ Tất Lợi 2004]",
    "res.th_herb": "Indigenous Botanical Herb",
    "res.th_amount": "Dosage",
    "res.th_role": "Pharmacological Role & Taste Profile",
    "res.total_label": "📦 TOTAL DOSAGE PER SACHET:",
    "res.total_note": "(Compliant PLA bio-sachet • ≤2.2g/herb)",
    "res.spec_temp_lbl": "Optimal Water Temperature:",
    "res.spec_time_lbl": "Infusion Steeping Time:",
    "res.spec_serving_lbl": "Serving Recommendation:",
    "res.bitterness_title": "<span>🧪</span> NATURAL BITTERNESS MODULATION • ZERO REFINED SUGAR",
    "res.bitter1_title": "1. hTAS2R16 Receptor Inhibition (pH 4.2 – 4.5)",
    "res.bitter1_desc": "Natural citric and malic acids from Kumquat / Roselle bring infusion pH to 4.4, directly blocking hTAS2R16 bitter taste receptors on human taste buds <em>(Sakurai et al. 2009; Sotoyama et al. 2017)</em>.",
    "res.bitter2_title": "2. Na+ Ion Channel Bitter Suppression & Stevia (GI = 0)",
    "res.bitter2_desc": "Trace food mineral salt (0.05g Na+) cross-inhibits bitter neural transmissions <em>(Breslin & Beauchamp 1997)</em>, synergizing with Stevioside for a crisp, sweet finish.",
    "res.biochem_title": "🔬 Student Research Team Pharmacological Notes:",
    "res.matched_tag": "📦 CANONICAL READY-MADE SACHET BOX AVAILABLE",
    "res.matched_btn": "🛒 Order Trial Box of 5 — 69,000 VND",
    "res.disclaimer_title": "CULINARY WELLNESS & HEALTH SAFETY DISCLAIMER:",
    "res.disclaimer_text": "VinaVita is a culinary herbal wellness mocktail supporting relaxation & concentration, 0.0% alcohol (Decree 168/2024/ND-CP), 0g refined sugar. Complies with food safety dosage standards (≤ 2.2g/herb), and is not intended to replace medical treatment. Pregnant women or individuals with chronic conditions should consult health professionals before use.",
    "res.btn_pdf": "📥 Download Recipe (PDF)",
    "res.btn_order_fresh": "📦 Order Fresh Pack (15k)",

    // View 2: Signature Menu & Sachet Boxes
    "menu.crest_sub": "HERITAGE EXCELLENCE",
    "menu.crest_main": "Convenient Ready-to-Brew Herbal Sachets",
    "menu.title": "Canonical Trio Sachets & <span class=\"gradient-text\">VinaVita</span> Menu",
    "menu.desc": "Bridging Master Tuệ Tĩnh's ancient herbal legacy with modern precision food science: Each pyramid sachet is crafted from bio-degradable cornstarch mesh (PLA), brewing a restorative fragrant infusion in just 3 minutes at school or your study desk!",
    "menu.hero_pill": "🌿 RMIT RBPC 2026 PILOT LINE • 69,000 VND / BOX OF 5 (PLA CORNSTARCH PYRAMID SACHETS)",
    "menu.hero_headline": "Canonical Trio Heritage Tea Sachets for Youth <span class=\"gradient-text\">(Hero Sachets)</span>",
    "menu.hero_sub": "Bio-based PLA cornstarch pyramid mesh ensures optimal infusion and preserves volatile essential oils.<br><strong>Just 13,800 VND/cup (69,000 VND / Box of 5)</strong> — far healthier and cheaper than milk tea or energy drinks! Discounted packages available for student study cafes.",

    "menu.box1_badge": "🍸 HERO SKU #01 • SLEEP & UNWIND",
    "menu.box1_title": "Citrus Twilight (VinaVita #01)",
    "menu.box1_sub": "The 'Sleep & Unwind' Pack • Nighttime Sleep & De-Stress (0.0% Alcohol)",
    "menu.box1_bitter_title": "<span>🧪</span> DUAL-PATHWAY BITTERNESS MODULATION & GABA ACTIVATION",
    "menu.box1_bitter_desc": "Organic acids adjust pH to 4.4 suppressing herbal bitterness, synergizing with Vitexin to promote natural biological sleep without next-morning grogginess.",
    "menu.box1_btn": "🛒 Order Box #01",

    "menu.box2_badge": "⚡ HERO SKU #02 • DEADLINE SURVIVOR",
    "menu.box2_title": "Deadline Survivor (VinaVita #02)",
    "menu.box2_sub": "The 'Deadline Survivor' Pack • Exam Cramming & Focus (0mg Caffeine)",
    "menu.box2_bitter_title": "<span>⚡</span> 4-HOUR SUSTAINED FOCUS • NO JITTERS OR RACING HEART",
    "menu.box2_bitter_desc": "100% synthetic caffeine-free: Eliminates hand tremors, stomach burning, and sudden energy crashes.",
    "menu.box2_btn": "🛒 Order Box #02",

    "menu.box3_badge": "🍷 HERO SKU #03 • 0% PARTY & CHILL",
    "menu.box3_title": "Berry Social Glow Mocktail (VinaVita #03)",
    "menu.box3_sub": "The '0% Party & Chill' Pack • Hangout & Social Chill (0.0% Alcohol)",
    "menu.box3_bitter_title": "<span>🧪</span> DUAL-PATHWAY BITTERNESS MODULATION (0G REFINED SUGAR)",
    "menu.box3_bitter_desc": "Natural organic acids from Roselle bring pH to 4.4 inhibiting hTAS2R16 bitter receptors, pairing with Mogroside for a deep sweet finish with zero alcohol.",
    "menu.box3_btn": "🛒 Order Box #03",

    "menu.box_unit": "/ Box of 5 PLA sachets (5.3g)",
    "menu.expanded_title": "Expanded Signature Collection <span class=\"gradient-text\">Direct Serve & Single Sachets</span>",
    "menu.expanded_sub": "Tailored for patrons craving distinctive heritage infusions or single-cup sachet purchases (15,000 – 18,000 VND/sachet).",

    // View 3: Botanical Database
    "db.crest_sub": "ANCESTRAL HERITAGE",
    "db.crest_main": "Indigenous Botanical Safety Encyclopedia",
    "db.title": "Vietnamese Botanical Encyclopedia & <span class=\"gradient-text\">Safety Handbook</span>",
    "db.desc": "Painstakingly standardized by our student research team from the Pharmacopoeia of Vietnam, late Prof. Đỗ Tất Lợi's treatises, and peer-reviewed clinical studies. Easily look up medicinal herbs, safe daily dosages, and optimal culinary pairing rules for pleasant, refreshing brews.",
    "db.search_placeholder": "🔍 Search herbs (Passionflower, Polyscias, Lotus Plumule...), function (sleep, eye strain) or flavor...",

    // View 4: About & Team
    "about.title": "Project Genesis: <span class=\"gradient-text\">VinaVita AI x RMIT RBPC 2026</span>",
    "about.p_intro": "<strong>Dear Distinguished Judges and Honored Teachers,</strong>",
    "about.p_team": "We are a team of 4 high school seniors participating in the <strong>RMIT Business Plan Competition 2026</strong> driven by an urgent real-world struggle: <em>How can students study and excel passionately without sacrificing their health, mental well-being, and sleep?</em>",
    "about.p_teacher": "The concept of <strong>VinaVita AI</strong> was not born from dry textbooks or abstract business theories. It began on an October afternoon, when our Computer Science teacher shared her personal story. She recounted experiencing severe burnout and nervous exhaustion from work overload until her brain sounded red alarms. She turned to Western pharmaceuticals, but experienced harsh side effects and compounded fatigue. Not until a close friend prescribed traditional Vietnamese herbal medicine did she find relief: humble native botanicals restored her deep, restorative sleep, allowing her cellular repair mechanisms to naturally rejuvenate her vitality. Her sincere advice moved us deeply: <em>\"Our bodies have biological limits; if we push them past the breaking point, the consequences are irreversible. Above all, we must remain healthy and truly present.\"</em>",
    "about.p_status_quo": "Looking across classrooms and study desks every night, we witness countless peers punishing their bodies with sugary energy drinks or excessive coffee, triggering heart palpitations, tremors, stomach burning, and next-day exhaustion. Vietnam's thousand-year-old Southern Medicine heritage — from hedgerow Passionflower to garden Polyscias and imperial Chrysanthemum — is inherently gentle and restorative. Why do young people avoid traditional herbs simply because of bitterness and cumbersome boiling rituals, while relying on synthetic stimulants whose long-term health toll silently erodes their bodies?",
    "about.p_solution": "This is precisely why we created VinaVita. By leveraging algorithmic flavor science to naturally neutralize bitterness with zero refined sugar, and packaging herbs into convenient pyramid sachets ready in 3 minutes right at your study desk, we bring Vietnamese herbal medicine out of cumbersome clay pots and into youth daily life. A gentle, empowering solution — so that cramming for exams is never again a gamble with one's health.",
    "about.showcase_title": "Botanical Research Space & Vietnamese AI Herbal Model",
    "about.showcase_desc": "Where ancestral herbal wisdom is embraced and revitalized by the new generation using frontier technology.",
    "about.showcase_badge": "Heritage 2026",
    "about.team_title": "Operational Team Structure",
    "about.alex_role": "LEADER — BIOTECH RESEARCHER",
    "about.alex_name": "Huỳnh Hữu Anh Khoa",
    "about.alex_bio": "Initiator of VinaVita concept, Head of Biotechnology Research. Possesses a deep passion for Chemistry and Biology, pursuing future degrees in Biotechnology and Medicine. Anh Khoa directly bridges user feedback, food science research, and sustainable OCOP herbal business modeling.",
    "about.bao_role": "SYSTEM ARCHITECT — SOFTWARE & AI ENGINEER",
    "about.bao_name": "Ngô Minh Thiên Bảo",
    "about.bao_bio": "Lead Systems Architect, Software & AI Engineer. Engineered the full web platform, algorithmic bio-safety filtration models, Cyber-Botanical UI/UX interface, and formulation kinetics for VinaVita AI.",
    "about.hieu_role": "PHARMACOLOGIST",
    "about.hieu_name": "Trương Quang Hiếu",
    "about.hieu_bio": "Pharmacology Specialist, laid the foundational herbal database for VinaVita. Rigorously cross-references the Pharmacopoeia of Vietnam and international clinical studies to ensure every recommended formula is strictly safe and scientifically validated.",
    "about.dung_role": "DATA INTELLIGENCE LEAD",
    "about.dung_name": "Nguyễn Minh Dũng",
    "about.dung_bio": "Co-founder leading Data Analytics & UX Flow. Possessing strong technical engineering expertise, Dũng designed user surveys, gathered and dissected behavioral datasets from 60 youth respondents, and optimized the VinaVita AI interaction pipeline.",
    "about.ref_title": "Academic References & Literature",
    "about.ref_list": "<li>Appel, K, Rose, T, Fiebich, B, Kammler, T, Hoffmann, C &amp; Weiss, G 2011, \'Modulation of the γ-aminobutyric acid (GABA) system by Passiflora incarnata L.\', <em>Phytotherapy Research</em>, vol. 25, no. 6, pp. 838–843.</li><li>Breslin, PAS &amp; Beauchamp, GK 1997, \'Salt enhances flavour by suppressing bitterness\', <em>Nature</em>, vol. 387, no. 6633, p. 563.</li><li>Do, TL 2004, <em>Medicinal Plants and Traditional Remedies of Vietnam</em>, Medical Publishing House, Hanoi.</li><li>Nguyen, TTH, Nguyen, QH &amp; Tran, VS 2020, \'Phytochemical constituents and biological activities of Passiflora foetida L. in Vietnam\', <em>Vietnam Journal of Science and Technology</em>, vol. 58, no. 4, pp. 412–420.</li><li>World Health Organization (WHO) 2024, <em>Global status report on alcohol and health and treatment of substance use disorders</em>, World Health Organization, Geneva.</li>",
    "modal.close": "Close Dossier",
    "chat.btn_minimize": "Minimize",
    "chat.btn_close": "Close",

    // Order Modal
    "order.title": "Order Pre-Portioned VinaVita Sachet Box",
    "order.sub": "Standardized Vietnamese OCOP Botanical Net Dosage • Designed for Gen-Z",
    "order.lbl_product": "Product:",
    "order.lbl_packaging": "Packaging Standard:",
    "order.val_packaging": "Box of 5 bio-based PLA pyramid sachets (5.3g/sachet)",
    "order.lbl_price": "Proposed Unit Price:",
    "order.lbl_name": "Recipient Name (Demo Simulation):",
    "order.lbl_address": "Delivery Address / Fast Shipping:",
    "order.btn_confirm": "🚀 Confirm Trial Order — 5-Sachet Box",
    "order.disclaimer": "*Real-world ordering simulation for RMIT Business Plan Competition 2026.",
    "order.receipt_title": "TRIAL ORDER CONFIRMED SUCCESSFULLY!",
    "order.receipt_id_lbl": "Order ID:",
    "order.receipt_delivery": "Estimated Delivery:",
    "order.receipt_delivery_val": "24 – 48 Hours via OCOP Cooperative",
    "order.receipt_desc": "Your order has been recorded in VinaVita's dispatch engine. Standardized bio-ratio botanical sachets are ready to be delivered to your doorstep.",
    "order.receipt_btn": "Done & Return",

    // Footer
    "footer.brand": "VinaVita AI",
    "footer.tagline": "Vietnamese Botanical Infusion & Herbal Mocktail Platform — 0.0% Alcohol",
    "footer.team": "Huỳnh Hữu Anh Khoa — Leader & Biotech Researcher, Ngô Minh Thiên Bảo — Lead System Architect, Trương Quang Hiếu — Pharmacologist & Nguyễn Minh Dũng — Data Intelligence Lead • Team Thinking Space — RMIT RBPC 2026",
    "footer.disclaimer": "Research initiative for RMIT Business Plan Competition 2026. Formulas are based on traditional ethnobotany and experimental pharmacology; not intended to replace professional medical treatment.",
    "footer.ai_warning": "⚠️ AI may produce inaccuracies; please verify critical information. Please do also consult a specialist regarding advices and medicine as well.",

    // AI Pharmacist Chatbot
    "chat.fab_label": "AI Pharmacist, VinaVita",
    "chat.fab_title": "Chat with AI Pharmacist, VinaVita",
    "chat.bot_name": "AI Pharmacist, VinaVita",
    "chat.status_text": "🟢 Cloud Neural AI Online (Gemini 2.5 Flash + Pharmacopoeia RAG) • AI may make errors, verify info",
    "chat.disclaimer": "⚠️ AI may produce errors. Please do also consult a specialist regarding advices and medicine as well.",
    "chat.prompts_label": "💡 Quick queries:",
    "chat.chip1": "🌸 Lotus Plumule & Blood Pressure",
    "chat.chip2": "⚡ Deadline Cramming",
    "chat.chip3": "🌙 Deep Sleep & GABA",
    "chat.chip4": "🍵 TAS2R Bitter Suppression",
    "chat.chip5": "📦 5-Sachet Combo Box",
    "chat.chip6": "🛡️ Gastritis & Reflux",
    "chat.welcome_full": "<p>Hello! I am <strong>AI Pharmacist, VinaVita</strong>. I interface directly with our Pharmacopoeia botanical repository, analyzing bioactive compounds (GABA, Flavonoids, Alkaloids, Saponins, L-Theanine) and physiological health guardrails.</p><p style=\"margin-top:6px;\">Feel free to ask anything: <em>\"What does Lotus Plumule do?\", \"Formula for pulling all-nighters without jitters?\", \"What to drink with gastritis?\", or \"How much is the 5-sachet box?\"</em>.</p>",
    "chat.input_placeholder": "Ask a question (insomnia, deadline, gastritis)...",
    "chat.send_btn": "Send",
    // Seal & Recipe Defaults
    "brand.seal_line1": "SOUTHERN",
    "brand.seal_line2": "HERBS",
    "res.def_title": "Lac Vibe Citrus Spritz",
    "res.def_sub": "Wholesome Alternative to Beer & Liquor at Evening Gatherings (0.0% Alcohol)",
    "res.def_time": "3 mins 30 secs",
    "res.def_serving": "Shake over ice cubes, garnish with a fresh mint sprig",
    "res.def_biochem": "Algorithm balances Vitexin (Passionflower) and Adaptogenic Saponins (Polyscias) at a 5:3 ratio, lowering neuro-stress markers without impairing reflex agility.",
    "res.def_sachet_name": "Box of 5 Pyramid Sachets #01 — Citrus Twilight",
    "res.def_sachet_specs": "PLA Bio-mesh Sachet 5.35g • 69,000 VND / Box of 5 (Save 49.3%)",

    // Menu Tables & Specs
    "menu.th_herb": "INDIGENOUS BOTANICAL",
    "menu.th_amount": "DOSAGE",
    "menu.th_role": "BIOCHEMICAL & TASTE ROLE",
    "menu.spec_temp_lbl": "Optimal Water Temp:",
    "menu.spec_time_lbl": "Steeping Time:",
    "menu.spec_serving_lbl": "Serving Suggestion:",

    "menu.b1_h1_name": "Dried Passionflower",
    "menu.b1_h1_role": "Vitexin activates GABA_A receptors, relieving exam stress after 11 PM",
    "menu.b1_h2_name": "Imperial White Chrysanthemum",
    "menu.b1_h2_role": "Apigenin promotes vasodilation, cooling hepatic fire with elegant floral notes",
    "menu.b1_h3_name": "Freeze-Dried Kumquat",
    "menu.b1_h3_role": "Natural citric acid buffers pH to 4.4, eliminating tongue hTAS2R bitterness",
    "menu.b1_h4_name": "Stevia & Na+ Mineral Ions",
    "menu.b1_h4_role": "Deep sugar-free sweet finish (0g GI), Na+ ions suppress central bitter reception",
    "menu.b1_spec_time": "5 minutes",
    "menu.b1_spec_serving": "Pour over 100g ice cubes with a thin kumquat wheel and fresh mint",

    "menu.b2_h1_name": "Southern Ginseng (Polyscias Leaf)",
    "menu.b2_h1_role": "Adaptogenic Saponins enhance cerebral perfusion, sustaining alertness without heart racing",
    "menu.b2_h2_name": "Indigenous Lemongrass",
    "menu.b2_h2_role": "Citral & Geraniol deliver invigorating aroma, melting away sensory fatigue",
    "menu.b2_h3_name": "Kỳ Sơn Mountain Ginger",
    "menu.b2_h3_role": "Gingerols warm digestion, boosting peripheral circulation and stamina",
    "menu.b2_h4_name": "Traditional Monk Fruit",
    "menu.b2_h4_role": "Mogroside V yields cooling natural sweetness, 0g refined sugar, 0-calorie (GI = 0)",
    "menu.b2_spec_time": "3 – 5 mins (Brew in 3 Mins)",
    "menu.b2_spec_serving": "Serve warm or pour over ice rocks for a refreshing herbal mocktail",

    "menu.b3_h1_name": "Roselle Hibiscus (Atiso Đỏ)",
    "menu.b3_h1_role": "Anthocyanins produce vivid party ruby hue with natural tartness",
    "menu.b3_h2_name": "Dried Passionflower",
    "menu.b3_h2_role": "Vitexin activates GABA_A receptors for warm, convivial social relaxation",
    "menu.b3_h3_name": "Trà Bồng Cinnamon Bark",
    "menu.b3_h3_role": "Cinnamaldehyde imparts a festive warm aroma reminiscent of mulled wine",
    "menu.b3_h4_name": "Monk Fruit & Stevia",
    "menu.b3_h4_role": "Full-bodied natural sweetness with zero excess calories and 0% alcohol",
    "menu.b3_spec_time": "4 minutes",
    "menu.b3_spec_serving": "Shake with ice, top with fine soda bubbles and a fresh rosemary sprig",

    // Order Modal Items
    "order.combo_name": "VinaVita 5-Sachet Combo Box",
    "order.combo_price": "69,000 VND — 13.8k/cup",
    "order.receipt_product": "Product:",
    "order.receipt_cust": "Recipient:",
    "order.receipt_addr": "Address:",
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
  const fabLabel = document.querySelector(".chat-widget-fab .fab-label");
  if (fabLabel && dict["chat.fab_label"]) {
    fabLabel.textContent = dict["chat.fab_label"];
  }

  // 6. Update Chat input placeholder
  const chatInput = document.getElementById("chatInput");
  if (chatInput && dict["chat.input_placeholder"]) {
    chatInput.placeholder = dict["chat.input_placeholder"];
  }

  // 7. Update Chat Prompt Chips & Quick Data Queries
  const promptChips = document.querySelectorAll(".chat-prompt-chip");
  const chipKeys = ["chat.chip1", "chat.chip2", "chat.chip3", "chat.chip4", "chat.chip5", "chat.chip6"];
  const queriesVi = [
    "Tâm sen có làm tụt huyết áp không? Người huyết áp thấp uống sao?",
    "Cho tôi công thức thảo mộc thức khuya chạy deadline tỉnh táo không ép tim",
    "Mất ngủ và stress thi cử nên uống thảo mộc nào an toàn?",
    "Làm sao để khử vị đắng của dược liệu mà không dùng đường tinh luyện?",
    "Combo 5 gói Sachet VinaVita gồm những loại nào và giá bao nhiêu?",
    "Đau dạ dày và trào ngược có uống được quất và chanh dây không?"
  ];
  const queriesEn = [
    "Does lotus plumule lower blood pressure? How should low BP individuals consume it?",
    "Give me an herbal formula for cramming late without heart racing or jitters",
    "What herbs are safe and effective for exam stress and insomnia?",
    "How does natural bitterness modulation work without refined sugar?",
    "What is included in the VinaVita 5-sachet box and what is the pricing?",
    "Can people with acid reflux drink kumquat and passion fruit?"
  ];

  promptChips.forEach((chip, idx) => {
    if (idx < chipKeys.length && dict[chipKeys[idx]]) {
      chip.textContent = dict[chipKeys[idx]];
      chip.setAttribute("data-query", lang === "en" ? queriesEn[idx] : queriesVi[idx]);
    }
  });

  // 8. Re-render dynamic views if registered
  if (window.renderSignatureDrinks) {
    window.renderSignatureDrinks();
  }
  if (window.renderDatabase && typeof MEDICINAL_DATABASE !== "undefined") {
    window.renderDatabase(MEDICINAL_DATABASE);
  }
  if (window.refreshCurrentFormulation) {
    window.refreshCurrentFormulation();
  }
  if (window.refreshChatbotAiBadge) {
    window.refreshChatbotAiBadge();
  }
  if (window.updateSafetyAlert) {
    window.updateSafetyAlert();
  }
};

/**
 * Toggle between Vietnamese and English
 */
window.toggleLanguage = function() {
  const nextLang = window.currentLang === "vi" ? "en" : "vi";
  window.applyLanguage(nextLang);
};

function initLanguageSwitcher() {
  window.applyLanguage(window.currentLang);

  const pill = document.getElementById("langTogglePill");
  const optVi = document.getElementById("langOptVi");
  const optEn = document.getElementById("langOptEn");

  if (pill) {
    pill.addEventListener("click", (e) => {
      if (e.target === pill || e.target.classList.contains("lang-divider")) {
        window.toggleLanguage();
      }
    });
  }
  if (optVi) {
    optVi.addEventListener("click", (e) => {
      e.stopPropagation();
      window.applyLanguage("vi");
    });
  }
  if (optEn) {
    optEn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.applyLanguage("en");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
