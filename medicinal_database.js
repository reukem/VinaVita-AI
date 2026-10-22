/**
 * VinaVita AI - Dược Liệu Việt Master Phytochemical & Pharmacological Database
 * Compiled for RMIT Business Plan Competition 2026 (RBPC 2026)
 * Project: VinaVita AI - AI-Personalized Vietnamese Herbal Mocktail & Wellness Platform
 * "Nam Dược Trị Nam Nhân" - Thiền sư Tuệ Tĩnh x Modern Generative AI
 */

const MEDICINAL_DATABASE = [
  {
    "id": "lac_tien",
    "heritageOrigin": "Vùng Thảo Dược Đồng Tháp Mười & Nam Bộ",
    "name": "Lạc Tiên",
    "sciName": "Passiflora foetida L.",
    "enName": "Wild Passion Flower",
    "image": "assets/lac_tien.jpg",
    "category": "an_than",
    "categoryLabel": "An thần / Giấc ngủ",
    "partUsed": "Toàn cây trên mặt đất (Herba Passiflorae)",
    "keyCompounds": [
      {
        "name": "Vitexin",
        "class": "Flavonoid C-glycoside",
        "action": "Điều hòa thụ thể GABA_A, giảm lo âu"
      },
      {
        "name": "Isovitexin",
        "class": "Flavonoid",
        "action": "Chống oxy hóa, an thần nhẹ"
      },
      {
        "name": "Harman alkaloids (vết)",
        "class": "Indole alkaloid",
        "action": "Ức chế nhẹ MAO (ở nồng độ an toàn)"
      }
    ],
    "bioAction": "Tăng cường hoạt tính acid gamma-aminobutyric (GABA) tại hệ thần kinh trung ương, giúp làm dịu hưng phấn não bộ, tái tạo cảm giác thư giãn tự nhiên giống rượu vang nhẹ nhưng 0% cồn.",
    "safeDailyDose": "8 - 15g (dược liệu khô)",
    "contraindications": [
      "Phụ nữ mang thai (do alkaloid có thể gây co bóp tử cung nhẹ)",
      "Người đang lái xe đường dài cần tập trung cao độ (liều cao gây buồn ngủ)"
    ],
    "tasteProfile": {
      "bitterness": 3,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thảo mộc thanh mát, hơi nồng nhẹ"
    },
    "maskingRules": [
      "Kết hợp với vị chua hữu cơ (Acid citric từ Quất / Chanh dây) để ức chế thụ thể đắng TAS2R",
      "Bổ sung Cam Thảo (Glycyrrhizin) tạo hậu vị ngọt sâu kéo dài"
    ],
    "recommendedPairings": [
      "cam_thao",
      "quat_tac",
      "dinh_lang",
      "chanh_day"
    ],
    "popularDrink": "Social Glow Tonic",
    "mindfulReminder": "Khi màn đêm buông xuống, hãy cho phép tâm trí được thảnh thơi trút bỏ mọi âu lo. Tự nhiên luôn có cách xoa dịu những gánh nặng nếu ta chịu dừng lại và thở sâu."
  },
  {
    "id": "tam_sen",
    "heritageOrigin": "Đầm Sen Tịnh Tâm (Cố Đô Huế) & Đồng Tháp",
    "name": "Tâm Sen (Liên Tâm)",
    "sciName": "Embryo Nelumbinis",
    "enName": "Lotus Plumule",
    "image": "assets/tam_sen.jpg",
    "category": "an_than",
    "categoryLabel": "An thần / Hạ hỏa",
    "partUsed": "Chồi mầm trong hạt sen",
    "keyCompounds": [
      {
        "name": "Liensinine",
        "class": "Bisbenzylisoquinoline alkaloid",
        "action": "Hạ huyết áp, an thần, chống loạn nhịp"
      },
      {
        "name": "Isoliensinine",
        "class": "Alkaloid",
        "action": "Bảo vệ tế bào nội mô mạch máu"
      },
      {
        "name": "Nuciferine",
        "class": "Aporphine alkaloid",
        "action": "Thư giãn cơ trơn, hỗ trợ giấc ngủ sâu"
      }
    ],
    "bioAction": "Tác động an thần chuyên sâu, giải nhiệt tâm hỏa, thanh nhiệt lương huyết, đặc biệt hiệu quả với chứng mất ngủ do stress thi cử, tim đập nhanh hồi hộp.",
    "safeDailyDose": "1.5 - 3g (khô)",
    "contraindications": [
      "Người có tiền sử HUYẾT ÁP THẤP (gây tụt huyết áp đột ngột)",
      "Người tỳ vị hư hàn, thường xuyên tiêu chảy, lạnh bụng",
      "Không dùng liên tục quá 2 tuần mà không có thảo mộc cân bằng tính ấm"
    ],
    "tasteProfile": {
      "bitterness": 5,
      "astringency": 3,
      "sweetness": 0,
      "aroma": "Mùi hương thanh tao nhưng vị đắng gắt đầu lưỡi"
    },
    "maskingRules": [
      "Bắt buộc dùng chất tạo ngọt mạnh tự nhiên (Cỏ Ngọt hoặc Mật Ong) để trung hòa",
      "Ủ ở nhiệt độ 80-85°C (không ủ sôi 100°C) để tránh hòa tan quá nhiều tannin đắng"
    ],
    "recommendedPairings": [
      "hoa_cuc",
      "co_ngot",
      "cam_thao",
      "tao_do"
    ],
    "popularDrink": "Deep Night Unwind",
    "mindfulReminder": "Giữ cho tâm phẳng lặng như mặt hồ sen mùa hạ; một chén trà dịu mát sẽ hạ bớt những ngọn lửa nóng vội, đón nhận sự an yên từ tận đáy lòng."
  },
  {
    "id": "dinh_lang",
    "heritageOrigin": "Vùng Dược Liệu Hải Hậu (Nam Định) - Sâm Nam",
    "name": "Đinh Lăng (Sâm Nam)",
    "sciName": "Polyscias fruticosa (L.) Harms",
    "enName": "Vietnamese Ginseng",
    "image": "assets/dinh_lang.jpg",
    "category": "boi_bo",
    "categoryLabel": "Bồi bổ / Thích nghi (Adaptogen)",
    "partUsed": "Rễ và lá khô",
    "keyCompounds": [
      {
        "name": "Saponin triterpenoid",
        "class": "Saponin",
        "action": "Tăng lực, chống mệt mỏi thể chất và trí não"
      },
      {
        "name": "Vitamin nhóm B & 20 acid amin",
        "class": "Dưỡng chất",
        "action": "Nuôi dưỡng tế bào thần kinh"
      },
      {
        "name": "Polysaccharides",
        "class": "Carbohydrate phức",
        "action": "Tăng cường miễn dịch tự nhiên"
      }
    ],
    "bioAction": "Thảo mộc Adaptogen bản địa giúp cơ thể thích nghi với áp lực căng thẳng cực độ, tăng tuần hoàn máu não, tăng dẫn truyền thần kinh dopamine mà không gây kích thích ép tim như caffein.",
    "safeDailyDose": "5 - 10g (rễ) hoặc 10 - 20g (lá)",
    "contraindications": [
      "Phụ nữ mang thai trong 3 tháng đầu",
      "Uống liều quá cao (>30g) có thể gây say saponin, mệt mỏi"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 3,
      "aroma": "Thơm dịu đặc trưng giống nhân sâm, hậu vị ngọt bùi"
    },
    "maskingRules": [
      "Vị rất dễ chịu, dễ dàng phối hợp với hương cam chanh hoặc bạc hà tươi",
      "Chiết xuất tốt ở nước ấm 90°C"
    ],
    "recommendedPairings": [
      "lac_tien",
      "bac_ha",
      "quat_tac",
      "gung_ta"
    ],
    "popularDrink": "Daylight Focus Brew",
    "mindfulReminder": "Sức mạnh bền bỉ không đến từ sự thúc ép vội vã, mà đâm chồi từ cội rễ kiên tâm. Hãy lắng nghe nhịp điệu tự nhiên của cơ thể để đi xa hơn mỗi ngày."
  },
  {
    "id": "cam_thao",
    "heritageOrigin": "Dược Điển Cổ Truyền Bắc Bộ (Hòa Vị Chi Dược)",
    "name": "Cam Thảo Bắc",
    "sciName": "Glycyrrhiza uralensis Fisch.",
    "enName": "Licorice Root",
    "image": "assets/cam_thao.jpg",
    "category": "dieu_vi",
    "categoryLabel": "Điều vị / Dẫn thuốc / Khử đắng",
    "partUsed": "Rễ và thân rễ phơi khô",
    "keyCompounds": [
      {
        "name": "Glycyrrhizin",
        "class": "Saponin triterpen",
        "action": "Độ ngọt gấp 50 lần đường mía, bảo vệ niêm mạc dạ dày"
      },
      {
        "name": "Liquiritin & Isoliquiritigenin",
        "class": "Flavonoid",
        "action": "Chống viêm, làm giãn cơ trơn tiêu hóa"
      }
    ],
    "bioAction": "Đóng vai trò là 'Sứ giả' trong bài thuốc cổ truyền: hòa hoãn tính dược, bảo vệ dạ dày, và là chất khử vị đắng tự nhiên số 1 giúp ức chế gai vị giác đắng TAS2R.",
    "safeDailyDose": "2 - 6g (khô)",
    "contraindications": [
      "Người tăng huyết áp nặng (Glycyrrhizin dùng lâu dài giữ natri, tăng huyết áp)",
      "Người phù nề, suy thận"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 0,
      "sweetness": 5,
      "aroma": "Ngọt đậm sâu, mùi thơm thảo mộc ấm áp"
    },
    "maskingRules": [
      "Chất khử đắng hoàn hảo cho Tâm Sen, Lạc Tiên, Actiso",
      "Chỉ cần 1-2 lát mỏng (1g) cho mỗi khẩu phần 300ml"
    ],
    "recommendedPairings": [
      "tam_sen",
      "lac_tien",
      "atiso",
      "hoa_cuc"
    ],
    "popularDrink": "All Mocktails (Base Sweetener)",
    "mindfulReminder": "Hòa hợp là đỉnh cao của sự thấu hiểu; giữ cho mình sự bao dung và ngọt lành trong từng lời nói như vị ngọt sâu lắng của rễ cam thảo."
  },
  {
    "id": "co_ngot",
    "heritageOrigin": "Vùng Cao Mộc Châu (Sơn La) & Hà Giang",
    "name": "Cỏ Ngọt (Cúc Ngọt)",
    "sciName": "Stevia rebaudiana (Bertoni)",
    "enName": "Stevia",
    "image": "assets/co_ngot.jpg",
    "category": "dieu_vi",
    "categoryLabel": "Chất tạo ngọt 0 calo tự nhiên",
    "partUsed": "Lá phơi khô",
    "keyCompounds": [
      {
        "name": "Stevioside & Rebaudioside A",
        "class": "Glycoside diterpen",
        "action": "Ngọt gấp 250-300 lần đường mía, 0 calorie, không tăng đường huyết"
      }
    ],
    "bioAction": "Cung cấp độ ngọt thanh mát tự nhiên mà không sinh năng lượng thừa, an toàn tuyệt đối cho người ăn kiêng, tập gym, hoặc tiểu đường.",
    "safeDailyDose": "1 - 3g (khô)",
    "contraindications": [
      "Dùng quá nhiều có thể để lại hậu vị hơi lợ (cần cân bằng với chanh/quất)"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 5,
      "aroma": "Thảo mộc thanh nhạt"
    },
    "maskingRules": [
      "Kết hợp hoàn hảo với vị chua thanh của Quất/Chanh dây để khử hậu vị lợ"
    ],
    "recommendedPairings": [
      "tam_sen",
      "tra_xanh",
      "chanh_day",
      "hoa_cuc"
    ],
    "popularDrink": "Zero-Calorie Social Tonic",
    "mindfulReminder": "Cuộc sống trọn vẹn không cần thêm những gánh nặng dư thừa; đón nhận sự ngọt ngào thanh khiết vốn có từ những điều dung dị xung quanh."
  },
  {
    "id": "atiso",
    "heritageOrigin": "Cao Nguyên Xứ Lạnh Đà Lạt (Lâm Đồng)",
    "name": "Actisô Đà Lạt",
    "sciName": "Cynara scolymus L.",
    "enName": "Artichoke",
    "image": "assets/atiso.jpg",
    "category": "gan_mat",
    "categoryLabel": "Thanh nhiệt / Giải độc gan",
    "partUsed": "Lá, hoa và cụm hoa khô",
    "keyCompounds": [
      {
        "name": "Cynarin",
        "class": "Dicaffeoylquinic acid",
        "action": "Kích thích tiết mật, tái tạo tế bào gan"
      },
      {
        "name": "Luteolin & Apigenin",
        "class": "Flavonoid",
        "action": "Hạ cholesterol, chống oxy hóa mạch máu"
      }
    ],
    "bioAction": "Tăng cường chức năng thải độc của gan sau những chuỗi ngày thức khuya, ăn đồ cay nóng hoặc sau các bữa tiệc; làm mát cơ thể, giảm mụn nhọt.",
    "safeDailyDose": "5 - 10g (khô)",
    "contraindications": [
      "Người bị tắc ống dẫn mật hoặc sỏi mật lớn",
      "Người tỳ vị hàn trệ, dễ đầy hơi lạnh bụng"
    ],
    "tasteProfile": {
      "bitterness": 3,
      "astringency": 2,
      "sweetness": 2,
      "aroma": "Hương nồng đầm ấm, hậu vị ngọt nhẹ đặc trưng Đà Lạt"
    },
    "maskingRules": [
      "Phối cùng Hoa Cúc và Cam Thảo để tạo dòng trà thanh nhiệt thượng hạng"
    ],
    "recommendedPairings": [
      "hoa_cuc",
      "cam_thao",
      "co_muc",
      "bac_ha"
    ],
    "popularDrink": "Liver Rescue Botanical",
    "mindfulReminder": "Thanh lọc cơ thể cũng là lúc thanh lọc tâm trí; hãy buông bỏ những muộn phiền tích tụ để tái sinh nguồn năng lượng tươi mát như sương sớm Đà Lạt."
  },
  {
    "id": "hoa_cuc",
    "heritageOrigin": "Làng Dược Thảo Cúc Tiến Vua Nghĩa Trai (Hưng Yên)",
    "name": "Hoa Cúc Trắng (Bạch Cúc)",
    "sciName": "Chrysanthemum indicum L.",
    "enName": "White Chrysanthemum",
    "image": "assets/hoa_cuc.jpg",
    "category": "an_than",
    "categoryLabel": "Sáng mắt / Thanh nhiệt / Giải độc",
    "partUsed": "Cụm hoa phơi sấy khô",
    "keyCompounds": [
      {
        "name": "Apigenin",
        "class": "Flavonoid",
        "action": "Gắn kết chọn lọc thụ thể Benzodiazepine, an thần êm dịu"
      },
      {
        "name": "Luteolin",
        "class": "Flavonoid",
        "action": "Bảo vệ võng mạc, giảm nhức mỏi mắt khi nhìn màn hình"
      }
    ],
    "bioAction": "Làm dịu căng thẳng thần kinh thị giác (rất cần cho học sinh và lập trình viên ngồi máy tính cả ngày), giảm đau đầu chóng mặt do căng thẳng.",
    "safeDailyDose": "5 - 10g (khô)",
    "contraindications": [
      "Người dị ứng với họ Cúc (Asteraceae)",
      "Người huyết áp quá thấp nên uống lượng vừa phải"
    ],
    "tasteProfile": {
      "bitterness": 1,
      "astringency": 1,
      "sweetness": 2,
      "aroma": "Hương thơm quý phái, thanh khiết dịu dàng"
    },
    "maskingRules": [
      "Tôn vinh hương hoa tự nhiên, tuyệt đối không đun sôi sùng sục làm bay tinh dầu (pha ở 85°C)"
    ],
    "recommendedPairings": [
      "tam_sen",
      "ky_tu",
      "tao_do",
      "cam_thao"
    ],
    "popularDrink": "Scholar Eye Calm",
    "mindfulReminder": "Đôi mắt nhìn cuộc đời với lòng trắc ẩn sẽ luôn tìm thấy vẻ đẹp an lành. Hãy cho mắt nghỉ ngơi sau chuỗi giờ căng thẳng cùng màn hình máy tính."
  },
  {
    "id": "quat_tac",
    "heritageOrigin": "Làng Quất Di Sản Tứ Liên (Hà Nội) & Miền Tây",
    "name": "Quất (Tắc) Tươi & Vỏ Quất",
    "sciName": "Citrus japonica Thunb.",
    "enName": "Kumquat",
    "image": "assets/quat_tac.jpg",
    "category": "dieu_vi",
    "categoryLabel": "Axit hữu cơ / Tinh dầu khử đắng",
    "partUsed": "Quả tươi thái lát hoặc vỏ sấy lạnh",
    "keyCompounds": [
      {
        "name": "Citric acid",
        "class": "Acid hữu cơ",
        "action": "Kích thích vị giác, ức chế thụ thể đắng TAS2R"
      },
      {
        "name": "Limonene",
        "class": "Tinh dầu Terpene",
        "action": "Tạo hương thơm phấn chấn, kích thích tiêu hóa"
      },
      {
        "name": "Vitamin C",
        "class": "Vitamin",
        "action": "Chống oxy hóa, tăng sinh năng lượng tế bào"
      }
    ],
    "bioAction": "Cung cấp độ chua thanh sáng bừng (Zesty Acid), chuyển đổi một chén trà thuốc bắc buồn tẻ thành một ly Mocktail hiện đại thời thượng.",
    "safeDailyDose": "2 - 4 quả tươi (15 - 30ml nước cốt)",
    "contraindications": [
      "Người đang viêm loét dạ dày cấp tính (tránh uống lúc bụng đói)"
    ],
    "tasteProfile": {
      "bitterness": 1,
      "astringency": 1,
      "sweetness": 2,
      "aroma": "Hương tinh dầu cam chanh bừng tỉnh giác quan"
    },
    "maskingRules": [
      "Vũ khí số 1 để 'đập tan' vị đắng của Lạc Tiên và Đinh Lăng"
    ],
    "recommendedPairings": [
      "lac_tien",
      "dinh_lang",
      "co_ngot",
      "bac_ha"
    ],
    "popularDrink": "Zesty Zen Punch",
    "mindfulReminder": "Một chút tươi vui, bừng tỉnh giác quan như giọt sương mai trên cành quất; hãy mở rộng lòng mình để đón nhận nguồn cảm hứng mới mỗi sớm mai."
  },
  {
    "id": "chanh_day",
    "heritageOrigin": "Thủ Phủ Nông Sản Cao Nguyên Gia Lai & Đắk Lắk",
    "name": "Chanh Dây (Chanh Leo)",
    "sciName": "Passiflora edulis Sims",
    "enName": "Passion Fruit",
    "image": "assets/chanh_day.jpg",
    "category": "dieu_vi",
    "categoryLabel": "Hương vị nhiệt đới / Cân bằng pH",
    "partUsed": "Dịch quả sấy dẻo hoặc nước cốt",
    "keyCompounds": [
      {
        "name": "Acid Malic & Citric",
        "class": "Acid hữu cơ",
        "action": "Cân bằng độ chua ngọt"
      },
      {
        "name": "Passiflorine (vết)",
        "class": "Alkaloid",
        "action": "Hỗ trợ an thần tự nhiên"
      }
    ],
    "bioAction": "Mang lại màu vàng óng ánh sang trọng và hương thơm nhiệt đới bùng nổ, biến ly Mocktail thành tâm điểm của mọi bữa tiệc acoustic.",
    "safeDailyDose": "1 - 2 quả",
    "contraindications": [
      "Người viêm dạ dày trào ngược nặng"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 3,
      "aroma": "Hương thơm nồng nàn quyến rũ đặc trưng Nam Bộ"
    },
    "maskingRules": [
      "Tạo nền chua ngọt nhiệt đới che phủ hoàn toàn thảo mộc"
    ],
    "recommendedPairings": [
      "lac_tien",
      "tam_sen",
      "co_ngot",
      "soda"
    ],
    "popularDrink": "Tropical Twilight",
    "mindfulReminder": "Hòa quyện hương sắc nhiệt đới rực rỡ, nhắc nhở ta hãy sống hết mình với đam mê nhưng luôn giữ cho tâm hồn một khoảng lặng dịu êm."
  },
  {
    "id": "bac_ha",
    "heritageOrigin": "Thung Lũng Thảo Mộc Sa Pa & Nam Định",
    "name": "Bạc Hà Nam",
    "sciName": "Mentha arvensis L.",
    "enName": "Field Mint",
    "image": "assets/bac_ha.jpg",
    "category": "huong_vi",
    "categoryLabel": "Khai vị / Mát lạnh / Giải cảm",
    "partUsed": "Lá tươi hoặc khô",
    "keyCompounds": [
      {
        "name": "L-Menthol",
        "class": "Monoterpene",
        "action": "Kích hoạt thụ thể lạnh TRPM8, tạo cảm giác sảng khoái băng giá"
      }
    ],
    "bioAction": "Đem lại hậu vị sảng khoái mát lạnh, kích thích tiêu hóa, thông thoáng đường thở và giải tỏa căng thẳng sau giờ làm việc mệt mỏi.",
    "safeDailyDose": "3 - 6g (khô)",
    "contraindications": [
      "Trẻ sơ sinh và trẻ nhỏ dưới 2 tuổi (tinh dầu menthol có thể ức chế hô hấp)",
      "Người đang bị tiêu chảy nặng"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 0,
      "sweetness": 1,
      "aroma": "The mát bừng tỉnh não bộ"
    },
    "maskingRules": [
      "Xóa tan mùi thảo mộc nồng, tạo cảm giác như đang thưởng thức Mojito"
    ],
    "recommendedPairings": [
      "dinh_lang",
      "quat_tac",
      "soda",
      "tra_xanh"
    ],
    "popularDrink": "Saigon Green Mojito 0.0",
    "mindfulReminder": "Một hơi thở sâu đưa làn gió mát vào lồng ngực, đánh thức sự tỉnh táo thuần khiết để nhìn nhận mọi việc một cách sáng suốt và nhẹ nhàng."
  },
  {
    "id": "gung_ta",
    "heritageOrigin": "Gừng Núi Đá Kỳ Sơn (Nghệ An) & Hòa Bình",
    "name": "Gừng Ta (Sinh Khương)",
    "sciName": "Zingiber officinale Rosc.",
    "enName": "Vietnamese Organic Ginger",
    "image": "assets/gung_ta.jpg",
    "category": "dieu_vi",
    "categoryLabel": "Ấm tỳ vị / Giảm nôn / Tăng tuần hoàn",
    "partUsed": "Thân rễ tươi hoặc sấy lát",
    "keyCompounds": [
      {
        "name": "Gingerol ([6]-gingerol)",
        "class": "Phenolic ketone",
        "action": "Kích thích thụ thể TRPV1, tăng tuần hoàn ngoại vi, chống co thắt dạ dày"
      },
      {
        "name": "Shogaol",
        "class": "Phenylalkylketone",
        "action": "Kháng viêm mạnh mẽ, ấm kinh lạc, giảm đau đầu do lạnh"
      },
      {
        "name": "Zingiberene",
        "class": "Sesquiterpene",
        "action": "Tạo hương thơm cay ấm quý phái, kích hoạt tiết enzyme tiêu hóa"
      }
    ],
    "bioAction": "Làm ấm tỳ vị, đánh tan cảm giác ớn lạnh bụng khi uống nước đá, kích hoạt tuần hoàn máu não và giảm cảm giác buồn nôn, hồi hộp.",
    "safeDailyDose": "3 - 8g (tươi) hoặc 1 - 3g (khô)",
    "contraindications": [
      "Người đang xuất huyết nội tạng hoặc trĩ chảy máu cấp",
      "Người sốt cao do say nắng (hỏa vượng)"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 0,
      "sweetness": 1,
      "aroma": "Cay nồng ấm áp, thơm dậy mùi tinh dầu bản địa"
    },
    "maskingRules": [
      "Dùng độ cay ấm để trung hòa tính hàn trệ của Tâm Sen và Actisô",
      "Phối cùng Sả Chanh và Mật ong tạo tầng hương Mocktail Ginger Ale thảo mộc thượng hạng"
    ],
    "recommendedPairings": [
      "sa_chanh",
      "quat_tac",
      "cam_thao",
      "tam_sen"
    ],
    "popularDrink": "Mekong Warming Mule",
    "mindfulReminder": "Hơi ấm từ đất mẹ xua tan mọi giá lạnh; sưởi ấm dạ dày và trái tim để luôn vững vàng trước những giông bão cuộc đời."
  },
  {
    "id": "sa_chanh",
    "heritageOrigin": "Vùng Nông Nghiệp Hữu Cơ Tây Nam Bộ",
    "name": "Sả Chanh (Hương Mậu)",
    "sciName": "Cymbopogon citratus (DC.) Stapf",
    "enName": "Lemongrass",
    "image": "assets/sa_chanh.jpg",
    "category": "huong_vi",
    "categoryLabel": "Thư giãn thần kinh / Kháng khuẩn / Hạ Acid Uric",
    "partUsed": "Thân cây và gốc giả củ thái khoanh",
    "keyCompounds": [
      {
        "name": "Citral (Geranial & Neral)",
        "class": "Monoterpene aldehyde",
        "action": "Tác động an thần thụ thể GABA, giải tỏa lo âu thần kinh tức thì"
      },
      {
        "name": "Myrcene",
        "class": "Terpene hydrocarbon",
        "action": "Giảm đau nhức cơ bắp, tăng khả năng thẩm thấu dưỡng chất"
      },
      {
        "name": "Flavonoid Luteolin",
        "class": "Polyphenol",
        "action": "Ức chế enzyme Xanthine oxidase hỗ trợ hạ acid uric trong máu"
      }
    ],
    "bioAction": "Mang lại tầng hương Citrus thanh thoát quý phái, xua tan cảm giác ngột ngạt căng thẳng trong phòng máy lạnh, hỗ trợ thanh lọc đường tiết niệu.",
    "safeDailyDose": "5 - 10g (thân tươi)",
    "contraindications": [
      "Phụ nữ mang thai (tránh dùng liều tinh dầu đậm đặc kích thích co bóp tử cung)"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 1,
      "aroma": "Hương sả chanh tươi mát bừng tỉnh không gian"
    },
    "maskingRules": [
      "Cắt bay lập tức mùi ngái thuốc bắc của Lạc Tiên và rễ Đinh Lăng",
      "Đập dập nhẹ cuống trước khi chiết ở nhiệt độ 85°C để giữ trọn vẹn Citral"
    ],
    "recommendedPairings": [
      "gung_ta",
      "quat_tac",
      "bac_ha",
      "co_ngot"
    ],
    "popularDrink": "Indochine Citrus Fizz",
    "mindfulReminder": "Hương thơm mộc mạc của quê nhà nhắc ta nhớ về những điều bình dị thiêng liêng nhất, giải tỏa mọi căng thẳng nơi đô thị ồn ào."
  },
  {
    "id": "tao_do",
    "heritageOrigin": "Dược Thiện Dân Gian Bồi Bổ Khí Huyết",
    "name": "Táo Đỏ (Đại Táo)",
    "sciName": "Ziziphus jujuba Mill.",
    "enName": "Red Jujube Date",
    "image": "assets/tao_do.jpg",
    "category": "an_than",
    "categoryLabel": "Bổ tỳ ích khí / Dưỡng tâm an thần",
    "partUsed": "Quả chín phơi sấy khô",
    "keyCompounds": [
      {
        "name": "Cyclic AMP (cAMP)",
        "class": "Nucleotide",
        "action": "Tăng cường năng lượng tế bào cơ tim, chống mệt mỏi suy nhược"
      },
      {
        "name": "Jujuboside (A & B)",
        "class": "Dammarane triterpenoid",
        "action": "Tác động an thần chọn lọc tại vùng đồi thị não bộ, kéo dài pha ngủ REM"
      },
      {
        "name": "Polysaccharides ZP",
        "class": "Phức hợp đường",
        "action": "Bảo vệ niêm mạc dạ dày, bồi bổ hồng cầu và miễn dịch"
      }
    ],
    "bioAction": "Dưỡng tâm an thần, cung cấp vị ngọt caramel tự nhiên béo nhẹ, giúp người làm việc trí óc căng thẳng tái tạo năng lượng tinh thần nhanh chóng mà không gây tăng đường huyết đột biến.",
    "safeDailyDose": "10 - 20g (khoảng 3 - 5 quả khô cắt lát)",
    "contraindications": [
      "Người đang bị đầy trướng bụng do tích trệ thức ăn (đờm thấp thịnh)"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 0,
      "sweetness": 4,
      "aroma": "Ngọt đằm sâu lắng, thơm nồng caramel thảo mộc"
    },
    "maskingRules": [
      "Là chất làm ngọt và 'hòa hoãn' kinh điển nhất trong đông dược phương Đông",
      "Cắt lát mỏng hãm nước nóng để trích ly toàn bộ hợp chất Jujuboside"
    ],
    "recommendedPairings": [
      "ky_tu",
      "hoa_cuc",
      "tam_sen",
      "dinh_lang"
    ],
    "popularDrink": "Scholar Eye Calm",
    "mindfulReminder": "Nuôi dưỡng khí huyết từ những quả ngọt chín mọng; bồi đắp năng lượng yêu thương cho chính mình để luôn tràn đầy nhiệt huyết sẻ chia."
  },
  {
    "id": "ky_tu",
    "heritageOrigin": "Dược Trà Cung Đình Cố Đô",
    "name": "Kỷ Tử Đỏ (Câu Kỷ Tử)",
    "sciName": "Lycium barbarum L.",
    "enName": "Organic Goji Berry",
    "image": "assets/ky_tu.jpg",
    "category": "an_than",
    "categoryLabel": "Bổ can thận / Sáng mắt / Chống lão hóa",
    "partUsed": "Quả khô đỏ mọng",
    "keyCompounds": [
      {
        "name": "Zeaxanthin dipalmitate",
        "class": "Carotenoid",
        "action": "Tập trung tại điểm vàng võng mạc, hấp thụ ánh sáng xanh độc hại từ màn hình laptop"
      },
      {
        "name": "Lycium barbarum Polysaccharides (LBP)",
        "class": "Glycoconjugate",
        "action": "Kích hoạt tế bào miễn dịch T, chống lão hóa ty thể tế bào não"
      },
      {
        "name": "Betaine",
        "class": "Alkaloid tự nhiên",
        "action": "Hỗ trợ chu trình methyl hóa tại gan, ức chế lắng đọng mỡ gan"
      }
    ],
    "bioAction": "Cứu tinh cho học sinh và lập trình viên nhìn màn hình liên tục 8-12 tiếng mỗi ngày; giảm khô nhức mắt, tăng sinh lực và dưỡng huyết an thần.",
    "safeDailyDose": "8 - 15g (khoảng 1 muỗng canh quả khô)",
    "contraindications": [
      "Người đang bị tiêu chảy do viêm ruột cấp tính",
      "Người đang sốt cao do nhiễm trùng ngoại cảm"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 3,
      "aroma": "Ngọt chua thanh tao, hậu vị đầm ấm dễ chịu"
    },
    "maskingRules": [
      "Tạo sắc nước màu đỏ cam hổ phách tự nhiên cực đẹp cho ly Mocktail",
      "Kết hợp ăn cả xác quả ngậm no nước sau khi pha trà để hấp thu trọn vẹn Zeaxanthin"
    ],
    "recommendedPairings": [
      "tao_do",
      "hoa_cuc",
      "tam_sen",
      "bac_ha"
    ],
    "popularDrink": "Scholar Eye Calm",
    "mindfulReminder": "Sáng mắt, sáng lòng để thấy rõ con đường phía trước. Yêu thương bản thân từ những hạt đỏ ấm áp nhỏ bé của dược trà cung đình."
  },
  {
    "id": "tra_xanh",
    "heritageOrigin": "Đệ Nhất Danh Trà Tân Cương (Thái Nguyên) & Suối Giàng",
    "name": "Trà Xanh (Lục Trà Bản Địa)",
    "sciName": "Camellia sinensis (L.) Kuntze",
    "enName": "Vietnamese Heritage Green Tea",
    "image": "assets/tra_xanh.jpg",
    "category": "tinh_tao",
    "categoryLabel": "Tỉnh táo / Chống oxy hóa / Calm-Focus",
    "partUsed": "Búp non một tôm hai lá phơi sấy mộc",
    "keyCompounds": [
      {
        "name": "L-Theanine",
        "class": "Amino acid tự nhiên",
        "action": "Kích hoạt sóng não Alpha 8-12Hz, xoa dịu stress mà vẫn duy trì sự tập trung sắc bén"
      },
      {
        "name": "EGCG (Epigallocatechin gallate)",
        "class": "Catechin polyphenol",
        "action": "Chống gốc tự do mạnh gấp 100 lần Vitamin C, bảo vệ nơ-ron thần kinh"
      },
      {
        "name": "Caffeine phức hợp",
        "class": "Methylxanthine",
        "action": "Phóng thích chậm từ từ nhờ liên kết Tanin, tỉnh táo êm không ép tim"
      }
    ],
    "bioAction": "Tạo trạng thái 'Tỉnh Thức Trong Bình An' (Calm Alertness), gia tăng tập trung sâu cho não bộ trong 4-6 tiếng liên tục mà không có hiện tượng tụt năng lượng đột ngột (crash).",
    "safeDailyDose": "5 - 10g búp khô (khoảng 300 - 500ml nước trà)",
    "contraindications": [
      "Người đang đói cồn cào (tránh say trà cồn cào ruột)",
      "Tránh uống đặc sát giờ ngủ đêm"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 3,
      "sweetness": 3,
      "aroma": "Hương cốm non thơm ngát, tiền chát hậu ngọt sâu"
    },
    "maskingRules": [
      "Ủ ở nước 80-85°C (không ủ nước sôi 100°C để tránh chát gắt)",
      "Phối cùng Bạc Hà và Quất Tươi tạo dòng Tea-Mocktail bùng nổ sảng khoái"
    ],
    "recommendedPairings": [
      "bac_ha",
      "quat_tac",
      "co_ngot",
      "hoa_nhai"
    ],
    "popularDrink": "Zen Theanine Elixir",
    "mindfulReminder": "Uống một ngụm trà sớm, lắng nghe hơi thở vào - ra; để L-Theanine làm dịu những suy nghĩ miên man, giữ tâm sáng như mặt hồ mùa thu."
  },
  {
    "id": "ha_thu_o",
    "heritageOrigin": "Dãy Rừng Nguyên Sinh Hoàng Liên Sơn & Hà Giang",
    "name": "Hà Thủ Ô Đỏ (Dạ Giao Đằng)",
    "sciName": "Fallopia multiflora (Thunb.) Haraldson",
    "enName": "Red Fleeceflower / He Shou Wu",
    "image": "assets/ha_thu_o.jpg",
    "category": "boi_bo",
    "categoryLabel": "Bổ can thận / Dưỡng huyết / Sống thọ",
    "partUsed": "Củ rễ cạo vỏ chế đỗ đen cửu chưng cửu sái",
    "keyCompounds": [
      {
        "name": "TSG (Tetrahydroxystilbene glucoside)",
        "class": "Stilbene glycoside",
        "action": "Bảo vệ tế bào thần kinh, chống xơ vữa động mạch và thoái hóa myelin"
      },
      {
        "name": "Emodin & Physcion",
        "class": "Anthraquinone",
        "action": "Hỗ trợ nhuận tràng, bảo vệ gan và kháng viêm"
      },
      {
        "name": "Phospholipid & Lecithin",
        "class": "Lipid sinh học",
        "action": "Bồi bổ tủy não, nuôi dưỡng chân tóc và tăng cường hồng cầu"
      }
    ],
    "bioAction": "Dược điển Tuệ Tĩnh ghi nhận: 'Uống lâu sống thọ, đen râu tóc, bổ can thận ích khí huyết'. Bồi bổ khí huyết toàn diện, giảm rụng tóc và suy kiệt do thức đêm cày cuốc.",
    "safeDailyDose": "6 - 12g (đã chế cửu chưng cửu sái chuẩn đông y)",
    "contraindications": [
      "Người đang tiêu chảy phân sống (do tính nhuận tràng nhẹ)",
      "Tuyệt đối không dùng củ sống chưa chế đỗ đen"
    ],
    "tasteProfile": {
      "bitterness": 3,
      "astringency": 4,
      "sweetness": 2,
      "aroma": "Thơm nồng thảo mộc đại ngàn, hậu vị bùi ấm"
    },
    "maskingRules": [
      "Cần sao chế cửu chưng cửu sái với nước đỗ đen để triệt tiêu vị chát độc tính",
      "Phối cùng Táo Đỏ và Cam Thảo tạo vị đậm đà êm ái"
    ],
    "recommendedPairings": [
      "tao_do",
      "ky_tu",
      "cam_thao",
      "dinh_lang",
      "cat_sam"
    ],
    "popularDrink": "Immortal Vitality Brew",
    "mindfulReminder": "Dưỡng khí từ gốc rễ: đừng để những đêm dài thi cử vắt kiệt sinh lực tuổi trẻ; hãy trân trọng mái tóc và giấc ngủ của chính mình."
  },
  {
    "id": "co_muc",
    "heritageOrigin": "Vùng Cù Lao Thảo Dược Sông Cửu Long & Nam Bộ",
    "name": "Cỏ Nhọ Nồi (Cỏ Mực)",
    "sciName": "Eclipta prostrata (L.) L.",
    "enName": "False Daisy / Eclipta",
    "image": "assets/co_muc.jpg",
    "category": "gan_mat",
    "categoryLabel": "Lương huyết / Mát gan / Bổ thận âm",
    "partUsed": "Toàn thân trên mặt đất có hoa phơi khô",
    "keyCompounds": [
      {
        "name": "Wedelolactone",
        "class": "Coumestan",
        "action": "Bảo vệ tế bào gan hàng đầu, chống độc tố gan và kích thích tái tạo nhu mô gan"
      },
      {
        "name": "Demethylwedelolactone",
        "class": "Coumestan",
        "action": "Chống viêm, chống oxy hóa mạch máu"
      },
      {
        "name": "Ecliptine",
        "class": "Alkaloid tự nhiên",
        "action": "Dịu thần kinh, hỗ trợ giấc ngủ an lành"
      }
    ],
    "bioAction": "Thanh nhiệt lương huyết, cầm máu tự nhiên (giảm nhiệt miệng, chảy máu cam do nóng trong), mát gan tiêu mụn nhọt, hỗ trợ giấc ngủ khi bị bốc hỏa bồn chồn.",
    "safeDailyDose": "8 - 15g khô",
    "contraindications": [
      "Người tỳ vị hư hàn tiêu chảy nặng",
      "Phụ nữ có thai cần tham vấn ý kiến dược sĩ"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Hương cỏ tươi đồng nội thanh khiết"
    },
    "maskingRules": [
      "Phối cùng Quất tươi và Chanh dây để át mùi nồng ngái của thảo dược hoang dã"
    ],
    "recommendedPairings": [
      "quat_tac",
      "co_ngot",
      "atiso",
      "hoa_cuc"
    ],
    "popularDrink": "Highland Breeze (Thanh Can Lạc Hồng)",
    "mindfulReminder": "Thanh lọc những cơn bốc hỏa, dịu mát tâm trí giữa áp lực cuộc sống bằng dòng dược chất lành dịu của đất phù sa Nam Bộ."
  },
  {
    "id": "bo_cong_anh",
    "heritageOrigin": "Thung Lũng Dược Thảo Sa Pa (Lào Cai) & Mộc Châu",
    "name": "Bồ Công Anh Nam (Rau Bồ Cóc)",
    "sciName": "Lactuca indica L.",
    "enName": "Vietnamese Wild Dandelion",
    "image": "assets/bo_cong_anh.jpg",
    "category": "gan_mat",
    "categoryLabel": "Tiêu viêm / Thải độc / Kháng khuẩn tự nhiên",
    "partUsed": "Lá và thân cành non tươi hoặc sấy lạnh",
    "keyCompounds": [
      {
        "name": "Taraxasterol & Inulin",
        "class": "Triterpenoid & Prebiotic",
        "action": "Kháng viêm tự nhiên và nuôi dưỡng hệ vi sinh đường ruột (Trục Não - Ruột)"
      },
      {
        "name": "Luteolin & Apigenin",
        "class": "Flavonoid",
        "action": "Tiêu trừ mụn viêm, làm sạch máu và hạ men gan"
      },
      {
        "name": "Acid Cichoric",
        "class": "Phenolic acid",
        "action": "Kích thích tiết dịch tiêu hóa, chống đầy bụng khó tiêu"
      }
    ],
    "bioAction": "Tiêu độc tán kết, tiêu trừ các nốt mụn trứng cá và nhiệt miệng do ăn đồ cay nóng thức khuya, hỗ trợ cân bằng trục Não - Ruột (Gut-Brain Axis) giúp tinh thần phấn chấn.",
    "safeDailyDose": "8 - 15g khô",
    "contraindications": [
      "Người huyết áp thấp nặng nên giảm liều",
      "Người đang lạnh bụng do hàn thấp"
    ],
    "tasteProfile": {
      "bitterness": 3,
      "astringency": 1,
      "sweetness": 1,
      "aroma": "Thơm dịu hương thảo dược Tây Bắc"
    },
    "maskingRules": [
      "Kết hợp cùng Cam Thảo và Bạc Hà để trung hòa độ đắng nhẹ của lá non"
    ],
    "recommendedPairings": [
      "cam_thao",
      "bac_ha",
      "atiso",
      "quat_tac"
    ],
    "popularDrink": "Pure Bloom Detox",
    "mindfulReminder": "Hệ tiêu hóa khỏe mạnh là cội nguồn của tinh thần sảng khoái; hãy lắng nghe chiếc bụng của bạn trước mỗi kỳ thi căng thẳng."
  },
  {
    "id": "dau_tam",
    "heritageOrigin": "Thủ Phủ Dâu Tằm Bảo Lộc (Lâm Đồng) & Bãi Bồi Sông Hồng",
    "name": "Dâu Tằm (Tang Thầm & Tang Diệp)",
    "sciName": "Morus alba L.",
    "enName": "Mulberry Berry & Leaf",
    "image": "assets/dau_tam.jpg",
    "category": "an_than",
    "categoryLabel": "Dưỡng huyết / Chống lão hóa / Ngủ ngon",
    "partUsed": "Trái chín mọng tím đen và lá bánh tẻ",
    "keyCompounds": [
      {
        "name": "Cyanidin-3-glucoside",
        "class": "Anthocyanin tự nhiên",
        "action": "Chống thoái hóa điểm vàng mắt và bảo vệ mạch máu vi tuần hoàn"
      },
      {
        "name": "Resveratrol",
        "class": "Polyphenol stilbenoid",
        "action": "Kéo dài tuổi thọ tế bào, bảo vệ sức khỏe tim mạch"
      },
      {
        "name": "GABA tự nhiên & DNJ",
        "class": "Alkaloid đường & GABA",
        "action": "Ổn định đường huyết sau bữa ăn, êm dịu thần kinh"
      }
    ],
    "bioAction": "Cung cấp sắc tím ruby quý tộc cho thức uống Mocktail; bồi bổ can thận, dưỡng huyết sáng mắt, giúp giấc ngủ đến nhẹ nhàng êm ái.",
    "safeDailyDose": "15 - 30g trái tươi hoặc 6 - 12g quả khô",
    "contraindications": [
      "Người viêm đại tràng tiêu chảy mạn tính tránh dùng lượng quả quá lớn"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 4,
      "aroma": "Hương dâu chín chua ngọt thanh tao, màu tím quyến rũ"
    },
    "maskingRules": [
      "Tạo nền màu ruby và vị chua ngọt tự nhiên tuyệt đỉnh, không cần che giấu"
    ],
    "recommendedPairings": [
      "tam_sen",
      "hoa_nhai",
      "co_ngot",
      "soda"
    ],
    "popularDrink": "Imperial Mulberry Spritz",
    "mindfulReminder": "Sắc tím mọng nước của trái dâu tằm như lời nhắc về vẻ đẹp kiên trì; nuôi dưỡng từng tế bào từ những gì thuần khiết nhất của đất trời."
  },
  {
    "id": "hoa_nhai",
    "heritageOrigin": "Làng Hoa Cổ Quảng Bá - Nghi Tàm (Hà Nội)",
    "name": "Hoa Nhài (Hoa Lài)",
    "sciName": "Jasminum sambac (L.) Aiton",
    "enName": "Arabian Jasmine Flower",
    "image": "assets/hoa_nhai.jpg",
    "category": "huong_vi",
    "categoryLabel": "Giải tỏa stress / Khai khiếu / Hạ Cortisol",
    "partUsed": "Búp hoa hé nở lúc hoàng hôn sấy lạnh",
    "keyCompounds": [
      {
        "name": "Linalool",
        "class": "Monoterpene alcohol",
        "action": "Giảm kích thích thần kinh, hạ huyết áp tâm thu tức thì"
      },
      {
        "name": "Benzyl acetate",
        "class": "Ester tinh dầu",
        "action": "Kích hoạt khứu giác tác động trực tiếp lên hệ viền Limbic, giảm cortisol trong 60 giây"
      },
      {
        "name": "Jasmine Lactone",
        "class": "Lactone thơm",
        "action": "Hương thơm êm dịu quý tộc tạo cảm giác thư thái hạnh phúc"
      }
    ],
    "bioAction": "Hương liệu trị liệu (Aromatherapy) tự nhiên mạnh mẽ nhất trong dược trà Việt. Giảm lo âu xã hội, giải phóng áp lực tâm lý trong tích tắc.",
    "safeDailyDose": "3 - 6g hoa khô",
    "contraindications": [
      "Phụ nữ có thai trong 3 tháng đầu không nên hít tinh dầu quá đậm đặc"
    ],
    "tasteProfile": {
      "bitterness": 1,
      "astringency": 1,
      "sweetness": 3,
      "aroma": "Hương hoa ngát ngào, quyến rũ vương giả"
    },
    "maskingRules": [
      "Dùng nhiệt độ nước 80-85°C để giữ trọn vẹn tầng tinh dầu hoa bay bổng"
    ],
    "recommendedPairings": [
      "tra_xanh",
      "tam_sen",
      "dau_tam",
      "co_ngot"
    ],
    "popularDrink": "Zen Theanine Elixir",
    "mindfulReminder": "Dừng lại 10 giây, hít sâu hương hoa nhài ngát ngào, cảm nhận sự nhẹ nhõm đang lan tỏa từ lồng ngực đến tận các đầu ngón tay."
  },
  {
    "id": "bach_chi",
    "heritageOrigin": "Vùng Dược Liệu Dãy Núi Tam Đảo (Vĩnh Phúc)",
    "name": "Bạch Chỉ Nam (Hương Bạch Chỉ)",
    "sciName": "Angelica dahurica (Hoffm.) Benth.",
    "enName": "Dahurian Angelica Root",
    "image": "assets/bach_chi.jpg",
    "category": "an_than",
    "categoryLabel": "Giảm đau đầu / Thông khiếu / Thư giãn cơ",
    "partUsed": "Rễ củ phơi sấy thái lát mỏng",
    "keyCompounds": [
      {
        "name": "Imperatorin & Isoimperatorin",
        "class": "Furanocoumarin",
        "action": "Ức chế chọn lọc COX-2, giảm đau nhức đầu do căng thẳng thần kinh"
      },
      {
        "name": "Byakangelicin",
        "class": "Coumarin",
        "action": "Giãn mạch máu vùng thái dương, giảm nhức hốc mắt do nhìn màn hình"
      },
      {
        "name": "Phellandrene",
        "class": "Tinh dầu Terpene",
        "action": "Thông mũi họng, sảng khoái đường thở"
      }
    ],
    "bioAction": "Trấn thống chỉ thống kinh điển: đánh bay cơn đau nhức đầu vùng trán và thái dương do nhìn màn hình vi tính quá lâu hoặc căng thẳng stress deadline.",
    "safeDailyDose": "3 - 8g lát khô",
    "contraindications": [
      "Người âm hư hỏa vượng (người nóng trong bốc hỏa, đổ mồ hôi trộm)",
      "Người đang sốt xuất huyết"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 2,
      "aroma": "Cay ấm nhẹ, thơm nồng đặc trưng họ Hoa tán"
    },
    "maskingRules": [
      "Cắt lát mỏng, phối cùng Táo Đỏ và Quất Tươi để cân bằng hương ấm dịu"
    ],
    "recommendedPairings": [
      "tao_do",
      "hoa_cuc",
      "quat_tac",
      "gung_ta"
    ],
    "popularDrink": "Scholar Eye Calm",
    "mindfulReminder": "Thả lỏng đôi chân mày và cơ hàm; để thảo mộc tự nhiên nâng đỡ những cơn đau mỏi đầu gáy sau nhiều giờ liền tập trung."
  },
  {
    "id": "cat_sam",
    "heritageOrigin": "Vùng Núi Rừng Trà My & Tây Giang (Quảng Nam)",
    "name": "Cát Sâm (Sâm Nam Trà My)",
    "sciName": "Millettia speciosa Champ.",
    "enName": "Specious Callerya Root",
    "image": "assets/cat_sam.jpg",
    "category": "boi_bo",
    "categoryLabel": "Bổ phế dưỡng âm / Tăng sức bền / Dẻo dai",
    "partUsed": "Củ rễ sấy lát vàng óng",
    "keyCompounds": [
      {
        "name": "Formononetin & Maackiain",
        "class": "Isoflavonoid",
        "action": "Tăng cường sức đề kháng tế bào, chống oxy hóa cơ bắp"
      },
      {
        "name": "Polysaccharides thực vật MSP",
        "class": "Carbohydrate phức",
        "action": "Bảo vệ biểu mô niêm mạc phổi và phế quản, sinh tân dịch"
      },
      {
        "name": "Saponin triterpenoid",
        "class": "Saponin",
        "action": "Tăng cường dẻo dai thể lực, chống kiệt sức thể chất"
      }
    ],
    "bioAction": "Bổ trung ích khí, nhuận phế sinh tân dịch; giúp thanh giọng, giảm khô rát cổ họng do ngồi máy lạnh lâu ngày và bồi bổ năng lượng dẻo dai.",
    "safeDailyDose": "8 - 15g củ lát",
    "contraindications": [
      "Người đang cảm sốt cao do phong hàn chưa phát"
    ],
    "tasteProfile": {
      "bitterness": 0,
      "astringency": 1,
      "sweetness": 4,
      "aroma": "Thơm bùi béo nhẹ như khoai sâm, hậu ngọt sâu ngát"
    },
    "maskingRules": [
      "Vị rất ngọt bùi dễ uống, là vị thuốc dẫn nền tuyệt hảo cho mọi công thức Mocktail"
    ],
    "recommendedPairings": [
      "ha_thu_o",
      "dinh_lang",
      "tao_do",
      "ky_tu"
    ],
    "popularDrink": "Immortal Vitality Brew",
    "mindfulReminder": "Uống từng ngụm chậm rãi, tiếp nhận năng lượng dẻo dai từ rễ sâm rừng già để bước tiếp chặng đường dài mà không kiệt sức."
  }
];

// Preset Signature Drinks ("Favourite Drinks") curated by VinaVita AI Engine
const SIGNATURE_DRINKS = [
  {
    "id": "sig_social_glow",
    "name": "Saigon Sunset (Dạ Tiệc Thăng Long)",
    "subtitle": "Thay thế Bia & Rượu nhẹ trong các bữa tiệc đêm (0.0% Cồn)",
    "badge": "🏮 DI SẢN DẠ TIỆC 0% CỒN",
    "image": "assets/mocktail_hero.jpg",
    "targetMood": "Tiệc tùng & Thư giãn không say (0% Cồn)",
    "formula": [
      {
        "herbId": "lac_tien",
        "amount": "5g",
        "note": "Hoạt chất Vitexin kích hoạt GABA thư giãn xã hội"
      },
      {
        "herbId": "dinh_lang",
        "amount": "3g",
        "note": "Adaptogen tăng tuần hoàn máu, tạo cảm giác vui vẻ"
      },
      {
        "herbId": "quat_tac",
        "amount": "2 quả tươi",
        "note": "Acid citric khử đắng & Limonene thơm phấn chấn"
      },
      {
        "herbId": "cam_thao",
        "amount": "1.5g",
        "note": "Dịu dạ dày, tạo vị ngọt êm sâu"
      }
    ],
    "brewSpecs": {
      "waterTemp": "85°C",
      "steepingTime": "3 phút 30 giây",
      "servingStyle": "Lắc cùng đá viên, thêm 1 lát tắc mỏng và nhánh bạc hà"
    },
    "biochemicalSummary": "Công thức tối ưu hóa thụ thể GABA_A và dopamine tự nhiên, mang lại cảm giác ấm áp, tự tin và giải tỏa âu lo khi giao tiếp xã hội mà nồng độ cồn trong máu vẫn tuyệt đối bằng 0.00%!",
    "sachetPrice": "16.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_night_unwind",
    "name": "Lotus Twilight (An Thần Hương Sen Cố Đô)",
    "subtitle": "Dành cho học sinh & văn phòng xả stress lúc 11h đêm",
    "badge": "🪷 AN THẦN HƯƠNG SEN CỐ ĐÔ",
    "image": "assets/tam_sen.jpg",
    "targetMood": "Giải tỏa áp lực thi cử & Giấc ngủ sâu tự nhiên",
    "formula": [
      {
        "herbId": "tam_sen",
        "amount": "2g",
        "note": "Liensinine hạ hỏa, làm chậm nhịp tim hồi hộp"
      },
      {
        "herbId": "lac_tien",
        "amount": "4g",
        "note": "Kháng âu lo thần kinh, dịu phản xạ căng thẳng"
      },
      {
        "herbId": "hoa_cuc",
        "amount": "3g",
        "note": "Apigenin thư giãn não bộ và làm dịu nhức mỏi mắt"
      },
      {
        "herbId": "co_ngot",
        "amount": "1g",
        "note": "Vị ngọt thanh khiết 0 calorie không gây mỡ bụng"
      }
    ],
    "brewSpecs": {
      "waterTemp": "80°C",
      "steepingTime": "4 phút",
      "servingStyle": "Uống ấm trước giờ ngủ 30 phút, không thêm đá"
    },
    "biochemicalSummary": "Sự kết hợp giữa Bisbenzylisoquinoline và Flavonoid Apigenin giúp giảm nồng độ hormone cortisol gây căng thẳng, đưa sóng não từ trạng thái Beta (căng thẳng) về Alpha/Theta (thư giãn sâu).",
    "sachetPrice": "18.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_zen_theanine",
    "name": "Zen Theanine Elixir (Trần Triều Tĩnh Trí)",
    "subtitle": "Tập trung sâu 6 tiếng, giải tỏa bồn chồn lo âu trước giờ thi",
    "badge": "🍵 TĨNH TRÍ ĐẠI VIỆT",
    "image": "assets/tra_xanh.jpg",
    "targetMood": "Trạng thái 'Calm Alertness' - Tỉnh táo trong an yên",
    "formula": [
      {
        "herbId": "tra_xanh",
        "amount": "5g",
        "note": "L-Theanine kích hoạt sóng não Alpha, EGCG bảo vệ nơ-ron"
      },
      {
        "herbId": "hoa_nhai",
        "amount": "3g",
        "note": "Linalool hạ Cortisol và xua tan căng thẳng tâm lý"
      },
      {
        "herbId": "bac_ha",
        "amount": "2g",
        "note": "Kích hoạt thụ thể lạnh TRPM8 sảng khoái thanh mát"
      },
      {
        "herbId": "co_ngot",
        "amount": "1g",
        "note": "Tạo vị ngọt thanh khiết dịu dàng"
      }
    ],
    "brewSpecs": {
      "waterTemp": "82°C",
      "steepingTime": "3 phút",
      "servingStyle": "Uống ấm chậm rãi khi bắt đầu buổi học tập nghiên cứu"
    },
    "biochemicalSummary": "Tỷ lệ hoàng kim giữa L-Theanine và caffeine phức hợp tạo trạng thái tập trung sâu bền bỉ (flow state), triệt tiêu hoàn toàn chứng hồi hộp ép tim thường gặp ở cà phê và nước tăng lực.",
    "sachetPrice": "17.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_immortal_vitality",
    "name": "Immortal Vitality Brew (Hoàng Liên Bổ Huyết)",
    "subtitle": "Hồi phục nguyên khí, chống kiệt sức sau những đêm thức trắng",
    "badge": "👑 BỔ KHÍ DƯỠNG HUYẾT",
    "image": "assets/ha_thu_o.jpg",
    "targetMood": "Phục hồi sinh lực toàn diện & Chống suy nhược",
    "formula": [
      {
        "herbId": "ha_thu_o",
        "amount": "5g",
        "note": "TSG bảo vệ tế bào não, bồi bổ can thận dưỡng huyết"
      },
      {
        "herbId": "cat_sam",
        "amount": "5g",
        "note": "Tăng cường sức bền thể chất và phục hồi tân dịch"
      },
      {
        "herbId": "tao_do",
        "amount": "2 quả",
        "note": "Jujuboside dưỡng tâm an thần, tăng sinh ATP"
      },
      {
        "herbId": "ky_tu",
        "amount": "4g",
        "note": "Zeaxanthin sáng mắt, phục hồi vi tuần hoàn"
      }
    ],
    "brewSpecs": {
      "waterTemp": "95°C",
      "steepingTime": "5 phút",
      "servingStyle": "Uống ấm sau bữa ăn hoặc khi cơ thể cảm thấy mệt mỏi kiệt sức"
    },
    "biochemicalSummary": "Kết tinh tri thức Tuệ Tĩnh: sự hòa quyện giữa các chuỗi Stilbene glycoside, Isoflavone và Polysaccharide tái tạo hồng cầu, phục hồi tổn thương oxy hóa và tái cấp năng lượng từ cấp độ ty thể.",
    "sachetPrice": "19.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_clear_flow",
    "name": "Verdant Focus (Sâm Nam Minh Mẫn)",
    "subtitle": "Tỉnh táo êm dịu, không ép tim, thay thế Redbull & Cà phê",
    "badge": "⚡ SÂM NAM TRÁNG TRÍ",
    "image": "assets/dinh_lang.jpg",
    "targetMood": "Tập trung cao độ 4 tiếng liên tục",
    "formula": [
      {
        "herbId": "dinh_lang",
        "amount": "6g",
        "note": "Saponin tăng dưỡng khí lên não bộ, chống mỏi mệt"
      },
      {
        "herbId": "bac_ha",
        "amount": "3g",
        "note": "Kích thích thụ thể TRPM8 mang lại sự tỉnh táo mát lạnh"
      },
      {
        "herbId": "quat_tac",
        "amount": "1 quả",
        "note": "Vitamin C và acid hữu cơ chống oxy hóa tế bào"
      },
      {
        "herbId": "cam_thao",
        "amount": "1g",
        "note": "Giữ vị ngọt tự nhiên ở cổ họng"
      }
    ],
    "brewSpecs": {
      "waterTemp": "90°C",
      "steepingTime": "2 phút 30 giây",
      "servingStyle": "Đổ qua đá lạnh, thêm chút bọt soda sủi tăm"
    },
    "biochemicalSummary": "Thay vì dùng caffeine liều cao làm co thắt mạch máu và tăng nhịp tim đột ngột, Đinh Lăng cung cấp nguồn năng lượng tế bào bền vững (ATP) thông qua các chuỗi saponin thực vật.",
    "sachetPrice": "15.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_liver_detox",
    "name": "Highland Breeze (Thanh Can Lạc Hồng)",
    "subtitle": "Thanh nhiệt, giải độc cơ thể sau chuỗi ngày thức đêm",
    "badge": "🍵 THANH NHIỆT LẠC HỒNG",
    "image": "assets/atiso.jpg",
    "targetMood": "Mát gan, thanh lọc cơ thể, tiêu trừ mụn nhọt",
    "formula": [
      {
        "herbId": "atiso",
        "amount": "6g",
        "note": "Cynarin kích thích chức năng bài tiết mật và phục hồi gan"
      },
      {
        "herbId": "hoa_cuc",
        "amount": "4g",
        "note": "Thanh can hỏa, giải độc da mặt"
      },
      {
        "herbId": "cam_thao",
        "amount": "2g",
        "note": "Hòa vị, dẫn hoạt chất làm mát toàn thân"
      }
    ],
    "brewSpecs": {
      "waterTemp": "92°C",
      "steepingTime": "5 phút",
      "servingStyle": "Có thể uống cả ngày thay nước lọc"
    },
    "biochemicalSummary": "Phục hồi chức năng chuyển hóa gan mật thông qua hợp chất Cynarin và các chất chống oxy hóa tự nhiên, giúp đào thải nhanh các gốc tự do tích tụ do thức đêm.",
    "sachetPrice": "16.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_scholar_eye",
    "name": "Scholar Eye Calm (Thanh Can Minh Mục Đỗ Đạt)",
    "subtitle": "Dành riêng cho học sinh & coder cày màn hình máy tính xuyên đêm",
    "badge": "📜 MINH MỤC ĐỖ ĐẠT",
    "image": "assets/ky_tu.jpg",
    "targetMood": "Giảm khô mỏi mắt & Dưỡng tâm an thần sâu",
    "formula": [
      {
        "herbId": "ky_tu",
        "amount": "6g",
        "note": "Zeaxanthin bảo vệ điểm vàng võng mạc khỏi ánh sáng xanh"
      },
      {
        "herbId": "hoa_cuc",
        "amount": "4g",
        "note": "Apigenin làm dịu căng thẳng thần kinh thị giác"
      },
      {
        "herbId": "tao_do",
        "amount": "2 quả",
        "note": "Jujuboside dưỡng tâm huyết, bồi bổ tế bào não mỏi mệt"
      },
      {
        "herbId": "tam_sen",
        "amount": "1.5g",
        "note": "Hạ hỏa, ổn định nhịp tim hồi hộp"
      }
    ],
    "brewSpecs": {
      "waterTemp": "85°C",
      "steepingTime": "4 phút 30 giây",
      "servingStyle": "Uống ấm khi học tập, có thể ăn cả quả kỷ tử và táo đỏ"
    },
    "biochemicalSummary": "Sức mạnh chống oxy hóa từ Carotenoid tự nhiên kết hợp Flavonoid giúp khôi phục lưu lượng máu đến hốc mắt, giảm 80% triệu chứng mỏi điều tiết và nhức thái dương.",
    "sachetPrice": "18.000 VNĐ / gói sachet"
  },
  {
    "id": "sig_mekong_mule",
    "name": "Mekong Warming Mule (Khí Huyết Bừng Tỉnh Phương Nam)",
    "subtitle": "Ấm bụng, sảng khoái, đánh tan uể oải phòng điều hòa",
    "badge": "🌾 KHÍ HUYẾT PHƯƠNG NAM",
    "image": "assets/gung_ta.jpg",
    "targetMood": "Khởi động ngày mới tràn đầy nhiệt huyết",
    "formula": [
      {
        "herbId": "gung_ta",
        "amount": "4g",
        "note": "Gingerol kích thích tuần hoàn ngoại vi, làm ấm tỳ vị"
      },
      {
        "herbId": "sa_chanh",
        "amount": "4g",
        "note": "Citral xua tan căng thẳng, thanh lọc hệ tiêu hóa"
      },
      {
        "herbId": "quat_tac",
        "amount": "2 quả",
        "note": "Citric acid & Limonene kích thích vị giác sảng khoái"
      },
      {
        "herbId": "cam_thao",
        "amount": "1.5g",
        "note": "Tạo hậu ngọt sâu êm ái, bảo vệ niêm mạc dạ dày"
      }
    ],
    "brewSpecs": {
      "waterTemp": "90°C",
      "steepingTime": "3 phút",
      "servingStyle": "Lắc cùng đá viên, thêm chút soda bọt mịn và lát gừng tươi"
    },
    "biochemicalSummary": "Kích hoạt thụ thể nhiệt TRPV1 giúp mạch máu giãn nở êm dịu, tăng lưu thông dưỡng khí lên đại não mà không gây kích ứng hệ thần kinh thực vật.",
    "sachetPrice": "16.000 VNĐ / gói sachet"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MEDICINAL_DATABASE, SIGNATURE_DRINKS };
}
