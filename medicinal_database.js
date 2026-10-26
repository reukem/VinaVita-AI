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
    "safeDailyDose": "Theo EMA/HMPC (Revision 1): Glycyrrhizin 64–96 mg/ngày, tối đa tuyệt đối 160 mg/ngày (nguồn thứ cấp thường giới hạn ≤ 100 mg/ngày). Khuyến nghị ẩm thực VinaVita: ≤ 1.5g rễ khô.",
    "contraindications": [
      "Chống chỉ định tuyệt đối cho người tăng huyết áp, bệnh thận, suy tim sung huyết",
      "Uống thường xuyên kéo dài gây giữ natri, bài tiết kali dẫn đến tăng huyết áp và hạ kali máu nguy hiểm"
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
    "mindfulReminder": "Hòa hợp là đỉnh cao của sự thấu hiểu; giữ cho mình sự bao dung và ngọt lành trong từng lời nói như vị ngọt sâu lắng của rễ cam thảo.",
    "officialSource": "EMA/HMPC, Glycyrrhiza glabra L. and/or G. inflata Bat. and/or G. uralensis Fisch., radix (EMA/HMPC/571119/2010); Báo cáo ca: https://pmc.ncbi.nlm.nih.gov/articles/PMC4480140"
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
    "safeDailyDose": "Lá sấy khô làm trà hãm (Liều người không xác nhận được từ bản tóm tắt EMA; khuyến nghị ẩm thực 1.5–3g/ngày).",
    "contraindications": [
      "Chỉ dùng cho người từ 12 tuổi trở lên",
      "Không dùng khi có bệnh gan và tắc nghẽn đường mật",
      "Tác dụng phụ thường gặp: tiêu chảy nhẹ, buồn nôn, ợ nóng"
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
    "mindfulReminder": "Thanh lọc cơ thể cũng là lúc thanh lọc tâm trí; hãy buông bỏ những muộn phiền tích tụ để tái sinh nguồn năng lượng tươi mát như sương sớm Đà Lạt.",
    "officialSource": "EMA/HMPC, Cynarae folium, bản tóm tắt: https://www.ema.europa.eu/en/medicines/herbal/cynarae-folium"
  },
  {
    "id": "hoa_cuc",
    "heritageOrigin": "Làng Dược Thảo Cúc Tiến Vua Nghĩa Trai (Hưng Yên)",
    "name": "Hoa Cúc Vàng (Cúc Hoa)",
    "sciName": "Chrysanthemum morifolium / C. indicum",
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
    "safeDailyDose": "Trà hoa cúc hãm: 1,5g – 3,0g nụ hoa khô/ngày (không có liều người đáng tin; nghiên cứu trên chuột về tác dụng gây ngủ: PMC3038564).",
    "contraindications": [
      "Người có tiền sử dị ứng với các loài thực vật họ Cúc (Asteraceae) có thể bị phản ứng quá mẫn"
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
    "mindfulReminder": "Đôi mắt nhìn cuộc đời với lòng trắc ẩn sẽ luôn tìm thấy vẻ đẹp an lành. Hãy cho mắt nghỉ ngơi sau chuỗi giờ căng thẳng cùng màn hình máy tính.",
    "officialSource": "PMC3038564 (2011): https://pmc.ncbi.nlm.nih.gov/articles/PMC3038564"
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
    "sciName": "Mentha × piperita L.",
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
    "safeDailyDose": "Trà lá khô: 1,0–2,0 g mỗi lần, 3 lần/ngày, hãm bằng nước sôi (EMA/HMPC Revision 1). Liều bản cũ 2008 (4,5–9 g/ngày chia 3 lần) đã được thay thế.",
    "contraindications": [
      "Trào ngược dạ dày thực quản (GERD) nên tránh vì menthol làm giãn cơ thắt thực quản",
      "Người có bệnh về đường mật, sỏi mật cần thận trọng",
      "Không dùng tinh dầu đậm đặc cho trẻ sơ sinh và trẻ nhỏ"
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
    "mindfulReminder": "Một hơi thở sâu đưa làn gió mát vào lồng ngực, đánh thức sự tỉnh táo thuần khiết để nhìn nhận mọi việc một cách sáng suốt và nhẹ nhàng.",
    "officialSource": "EMA/HMPC, European Union herbal monograph on Mentha x piperita L., folium, Final – Revision 1: https://ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-mentha-x-piperita-l-folium-revision-1_en.pdf"
  },
  {
    "id": "gung_ta",
    "heritageOrigin": "Gừng Núi Đá Kỳ Sơn (Nghệ An) & Hòa Bình",
    "name": "Gừng (Gừng Núi)",
    "sciName": "Zingiber officinale Roscoe",
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
    "safeDailyDose": "Bột thân rễ 0,18–1 g, 3 lần/ngày (dùng truyền thống); cồn thuốc 1:10: 1,5–3 ml, 3 lần/ngày. Đi xa: thêm liều sau 4 giờ, tối đa 2,5 g/ngày (người lớn), 1,5 g/ngày (trẻ em).",
    "contraindications": [
      "Thai kỳ cần có bác sĩ đồng ý (EMA/HMPC 2012 về ức chế thromboxane synthetase)",
      "Thận trọng khi dùng đồng thời thuốc chống đông máu",
      "Người viêm loét dạ dày tá tràng thể nhiệt"
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
    "mindfulReminder": "Hơi ấm từ đất mẹ xua tan mọi giá lạnh; sưởi ấm dạ dày và trái tim để luôn vững vàng trước những giông bão cuộc đời.",
    "officialSource": "EMA/HMPC, European Union herbal monograph on Zingiber officinale Roscoe, rhizoma, EMA/HMPC/885789/2022, Revision 1 (tháng 5/2025): https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-zingiber-officinale-roscoe-rhizoma-revision-1_en.pdf",
    "clinicalDoseNote": "Tiêu đề nghiên cứu gừng (Viljoen 2014 và tiêu đề đã đổi) chưa được xác nhận; ghi nhận trạng thái 'chưa kiểm chứng'."
  },
  {
    "id": "sa_chanh",
    "heritageOrigin": "Vùng Nông Nghiệp Hữu Cơ Tây Nam Bộ",
    "name": "Sả Chanh Bản Địa",
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
    "safeDailyDose": "Hướng dẫn ANVISA (Brazil 2021): 1–3 g lá trong 150 ml nước sôi, uống 2–3 lần/ngày, hãm 5–10 phút.",
    "contraindications": [
      "Tinh dầu sả tuyệt đối không uống nguyên chất",
      "Thận trọng tác động trên thận khi dùng liều cao và thời gian kéo dài"
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
    "mindfulReminder": "Hương thơm mộc mạc của quê nhà nhắc ta nhớ về những điều bình dị thiêng liêng nhất, giải tỏa mọi căng thẳng nơi đô thị ồn ào.",
    "officialSource": "Trích dẫn ANVISA (2021) qua Periódicos UFC: https://periodicos.ufc.br/medicinaeplantae/article/download/95312/251548/371600 . Nghiên cứu chuột 1986 (PMID: 3762195) không xác nhận tác dụng hạ sốt qua đường uống ở người."
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
    "name": "Trà Xanh",
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
    "safeDailyDose": "Trà pha truyền thống: 90–300 mg EGCG/ngày (an toàn theo EFSA 2018). Người uống nhiều tới 866 mg/ngày. Viên bổ sung: ≥800 mg EGCG/ngày có liên quan đến tăng men gan trong thử nghiệm người; không xác định được mức an toàn.",
    "contraindications": [
      "Tránh dùng viên nén EGCG liều cao (≥800 mg/ngày) do rủi ro tổn thương gan",
      "Trà uống thông thường được EFSA coi là an toàn; người nhạy cảm caffeine tránh uống đậm đặc trước giờ ngủ"
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
    "mindfulReminder": "Uống một ngụm trà sớm, lắng nghe hơi thở vào - ra; để L-Theanine làm dịu những suy nghĩ miên man, giữ tâm sáng như mặt hồ mùa thu.",
    "officialSource": "EFSA ANS Panel, Scientific opinion on the safety of green tea catechins, EFSA Journal (2018): https://www.efsa.europa.eu/en/efsajournal/pub/5239"
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
  },
  {
    "id": "la_han_qua",
    "name": "La Hán Quả",
    "sciName": "Siraitia grosvenorii",
    "enName": "Monk Fruit / Luo Han Guo",
    "category": "flavor",
    "categoryLabel": "Chất Ngọt Tự Nhiên (0-Calorie) & Khử Đắng",
    "heritageOrigin": "Vùng núi cao phía Bắc Việt Nam (OCOP)",
    "tasteProfile": "Vị ngọt thanh dịu đậm, hậu vị mát lành, quy kinh phế & tỳ",
    "traditionalTaste": "Vị ngọt đậm, tính mát; quy kinh phế và tỳ",
    "activeCompounds": "Mogroside V (ngọt gấp 300 lần đường mía, 0-calorie)",
    "keyCompounds": [
      {
        "name": "Mogroside V",
        "class": "Triterpene Glycoside",
        "action": "Ngọt gấp 300 lần đường mía, 0-calorie, GI=0, khử đắng thảo mộc trung ương"
      },
      {
        "name": "Mogroside IV",
        "class": "Cucurbitane Glycoside",
        "action": "Chống oxy hóa tế bào, bảo vệ phế quản và thanh quản"
      }
    ],
    "biologicalRole": "Tạo vị ngọt sâu tự nhiên, khử đắng thảo mộc trung ương mà hoàn toàn không tăng đường huyết (GI=0)",
    "preclinicalEvidence": "Chống oxy hóa, kháng viêm đường hô hấp, ức chế tín hiệu đắng (Tan et al. 2024)",
    "contraindications": "An toàn cao cho mọi đối tượng, người tỳ vị hư hàn nặng nên dùng lượng vừa phải",
    "safeCulinaryDose": "1.0g – 2.0g sấy khô",
    "safeDailyDose": "1.0g – 2.0g sấy khô (Tối đa 3.0g/ngày)",
    "origin": "Vùng núi cao phía Bắc Việt Nam (OCOP)",
    "image": "assets/la_han_qua.jpg"
  },
  {
    "id": "atiso_do",
    "name": "Atiso Đỏ (Bụp Giấm / Roselle)",
    "sciName": "Hibiscus sabdariffa",
    "enName": "Roselle Hibiscus / Red Sorrel",
    "category": "flavor",
    "categoryLabel": "Axit Hữu Cơ Ức Chế hTAS2R16 & Sắc Tố Ruby",
    "heritageOrigin": "Vùng Trồng Dược Liệu Bình Thuận & Đà Lạt (OCOP)",
    "tasteProfile": "Vị chua thanh mát, sắc đỏ Ruby tự nhiên, quy kinh can & đại tràng",
    "traditionalTaste": "Vị chua thanh mát, tính bình; quy kinh can và đại tràng",
    "activeCompounds": "Anthocyanin, Axit Hibiscic, Axit Citric, Vitamin C",
    "keyCompounds": [
      {
        "name": "Anthocyanin (Delphinidin-3-sambubioside)",
        "class": "Flavonoid Pigment",
        "action": "Tạo sắc đỏ Ruby quý phái, chống oxy hóa cực mạnh, bảo vệ nội mô mạch máu"
      },
      {
        "name": "Hibiscic Acid & Citric Acid",
        "class": "Organic Acid",
        "action": "Đưa pH về 4.2–4.5 trực tiếp ức chế thụ thể thụ cảm vị đắng hTAS2R16"
      }
    ],
    "biologicalRole": "Tạo sắc đỏ Ruby tự nhiên cho mocktail; axit hữu cơ đưa pH về 4.2–4.5 trực tiếp ức chế thụ thể vị đắng hTAS2R16",
    "preclinicalEvidence": "Hạ mỡ máu, bảo vệ gan, giảm huyết áp nhẹ qua giãn mạch ngoại vi (Sotoyama et al. 2017)",
    "contraindications": "Người huyết áp thấp nặng (Hypotension) hoặc viêm loét dạ dày cấp nên giảm liều",
    "safeCulinaryDose": "1.0g – 2.2g đài hoa khô",
    "safeDailyDose": "1.0g – 2.2g đài hoa khô (EFSA/EMA ngưỡng ẩm thực an toàn)",
    "origin": "Bình Thuận, Đà Lạt (OCOP)",
    "image": "assets/atiso_do.jpg"
  },
  {
    "id": "que_tra_bong",
    "name": "Quế Trà Bồng (Cinnamon)",
    "sciName": "Cinnamomum cassia / C. loureiroi",
    "enName": "Tra Bong Heritage Cinnamon",
    "category": "flavor",
    "categoryLabel": "Nốt Hương Ấm Mulled Wine & Tuần Hoàn",
    "heritageOrigin": "Trà Bồng, Quảng Ngãi (Di Sản Chỉ Dẫn Địa Lý Quốc Gia)",
    "tasteProfile": "Vị cay ngọt nồng ấm, hậu vị đậm đà, quy kinh thận, tỳ, tâm, can",
    "traditionalTaste": "Vị cay ngọt nồng, tính ấm; quy kinh thận, tỳ, tâm, can",
    "activeCompounds": "Cinnamaldehyde (hàm lượng tinh dầu cao)",
    "keyCompounds": [
      {
        "name": "Cinnamaldehyde",
        "class": "Phenylpropanoid",
        "action": "Tạo nốt hương ấm quý phái phong cách rượu vang Mulled Wine (0% cồn), che mùi ngái"
      },
      {
        "name": "Coumarin (ngưỡng an toàn TDI)",
        "class": "Benzopyrone",
        "action": "Kiểm soát liều nghiêm ngặt theo khuyến nghị BfR Đức (TDI 0.1 mg/kg/ngày)"
      }
    ],
    "biologicalRole": "Tạo nốt hương ấm quý phái phong cách rượu vang Mulled Wine (0% cồn), che giấu mùi ngái thảo dược",
    "preclinicalEvidence": "Kích thích tuần hoàn máu, hỗ trợ chuyển hóa glucose tế bào, kháng khuẩn tự nhiên",
    "contraindications": [
      "Người có bệnh gan, người đang dùng statin hoặc paracetamol nên dùng quế Ceylon (C. verum) vì hàm lượng coumarin rất thấp",
      "Phụ nữ mang thai không dùng liều cao"
    ],
    "safeCulinaryDose": "0.5g – 1.0g vỏ quế tán thô",
    "origin": "Trà Bồng, Quảng Ngãi (Di sản chỉ dẫn địa lý)",
    "image": "assets/que_tra_bong.jpg",
    "safeDailyDose": "Không có liều dược liệu chính thức. Ngưỡng an toàn dựa trên TDI coumarin 0,1 mg/kg thể trọng/ngày (EFSA 2004). Người 60 kg: khoảng 6 mg coumarin/ngày. Quế Cassia chứa coumarin khoảng 2.100–4.400 mg/kg (BfR). Khuyến nghị ẩm thực VinaVita: 0.5g – 0.8g trong sachet 5.3g.",
    "officialSource": "BfR (Đức), High daily intakes of cinnamon: health risk cannot be ruled out: https://www.BFR.bund.de/cm/349/high_daily_intakes_of_cinnamon_health_risk_cannot_be_ruled_out.pdf"
  },
  {
    "id": "nghe",
    "name": "Nghệ Vàng",
    "sciName": "Curcuma longa L.",
    "enName": "Nghệ Vàng",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "tieu_hoa",
    "categoryLabel": "Tiêu hóa & Chống viêm",
    "partUsed": "Thân rễ (Rhizoma Curcumae longae)",
    "image": "assets/nghe.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Bột thân rễ 0,5–1 g, 2–3 lần/ngày; cồn thuốc 1:10: 0,5–1 ml, 3 lần/ngày; cao khô: 100–200 mg, 2 lần/ngày (EMA/HMPC 2018 Revision 1; bản cũ 2009 ghi 1,5–3 g/ngày).",
    "officialSource": "EMA/HMPC, European Union herbal monograph on Curcuma longa L., rhizoma (Revision 1, 2018): https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-curcuma-longa-l-rhizoma-revision-1_en.pdf",
    "contraindications": [
      "Chống chỉ định tuyệt đối khi tắc đường mật hoặc có sỏi mật",
      "Thận trọng khi dùng cùng thuốc chống đông"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "rau_ma",
    "name": "Rau Má Bản Địa",
    "sciName": "Centella asiatica (L.) Urb.",
    "enName": "Rau Má Bản Địa",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "thanh_nhiet",
    "categoryLabel": "Thanh nhiệt & Giải độc",
    "partUsed": "Toàn cây (Herba Centellae)",
    "image": "assets/rau_ma.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Monograph EMA (Revision 1, 2022) CHỈ dành cho dùng ngoài da trong bệnh da và vết thương nhỏ. Liều uống KHÔNG được xác nhận (EMA nêu lo ngại về độc tính trên gan và khả năng sinh sản khi dùng đường uống; con số cũ 0,5–1 g/ngày từ 2010 đã bãi bỏ, không dùng).",
    "officialSource": "EMA/HMPC, European Union herbal monograph on Centella asiatica (L.) Urb., herba, Revision 1 (2022): https://www.ema.europa.eu/en/documents/herbal-monograph/european-union-herbal-monograph-centella-asiatica-l-urb-herba-revision-1_en.pdf",
    "contraindications": [
      "Dùng ngoài da theo monograph; dùng đường uống cần thận trọng và không có liều chuẩn từ EMA",
      "Phụ nữ mang thai và người có tiền sử bệnh gan cần tránh uống liều cao"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "kim_ngan_hoa",
    "name": "Kim Ngân Hoa",
    "sciName": "Lonicera japonica Thunb.",
    "enName": "Kim Ngân Hoa",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "thanh_nhiet",
    "categoryLabel": "Thanh nhiệt & Kháng khuẩn",
    "partUsed": "Nụ hoa (Flos Lonicerae)",
    "image": "assets/kim_ngan_hoa.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người từ monograph chính thức. Tiêu chuẩn chất lượng USP: Caffeoylquinic acid ≥ 3,8%. Khuyến nghị trà hãm dân gian: 2.0g – 4.0g nụ hoa khô.",
    "officialSource": "USP, Lonicera japonica Flower, Final Authorized Version 1.0: https://hmc.usp.org/node/3554 ; Systematic Pharmacology Review (2015): https://pmc.ncbi.nlm.nih.gov/articles/PMC4519546/",
    "contraindications": [
      "Người thể tạng tỳ vị hư hàn, hay đau bụng tiêu chảy nên thận trọng theo Y học cổ truyền"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "xuyen_tam_lien",
    "name": "Xuyên Tâm Liên",
    "sciName": "Andrographis paniculata Nees",
    "enName": "Xuyên Tâm Liên",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "khang_khuan",
    "categoryLabel": "Kháng viêm & Hô hấp",
    "partUsed": "Lá và phần trên mặt đất",
    "image": "assets/xuyen_tam_lien.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều chính thức. EMA (2013) kết luận không lập được monograph cho lá, không có liều tham khảo từ EU (đã xóa con số '5–10 mg/kg andrographolide' trên vital.ly do nguồn thứ cấp không rõ ràng).",
    "officialSource": "EMA/HMPC, Public statement on Andrographis paniculata Nees, folium, EMA/HMPC/709282/2012 (2013): https://www.ema.europa.eu/en/documents/public-statement/final-public-statement-andrographis-paniculata-nees-folium-first-version_en.pdf",
    "contraindications": [
      "Chống chỉ định tuyệt đối cho phụ nữ có thai và đang cho con bú",
      "Có thể gây dị ứng, ngứa, hoặc phản ứng quá mẫn ở người cơ địa nhạy cảm"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "tia_to",
    "name": "Tía Tô Bản Địa",
    "sciName": "Perilla frutescens (L.) Britton",
    "enName": "Tía Tô Bản Địa",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "giai_cam",
    "categoryLabel": "Giải cảm & Chống dị ứng",
    "partUsed": "Lá (Folium Perillae)",
    "image": "assets/tia_to.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người chính thức. Natural Medicines (qua vital.ly) ghi 'có thể an toàn tối đa 12 tháng', nhưng chưa có liều phù hợp chuẩn hóa.",
    "officialSource": "Drugs.com: https://www.drugs.com/npp/perilla.html ; Vital.ly: https://vital.ly/trc/Perilla/monograph=1024",
    "contraindications": [
      "Phụ nữ mang thai và cho con bú chưa có đủ dữ liệu an toàn",
      "Người đang sốt cao do âm hư hỏa vượng"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "muop_dang",
    "name": "Mướp Đắng (Khổ Qua)",
    "sciName": "Momordica charantia L.",
    "enName": "Mướp Đắng (Khổ Qua)",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "chuyen_hoa",
    "categoryLabel": "Đường huyết & Chuyển hóa",
    "partUsed": "Quả (Fructus Momordicae charantiae)",
    "image": "assets/muop_dang.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Thử nghiệm lâm sàng RCT dùng 500, 1.000 và 2.000 mg/ngày trong 4 tuần (so với metformin 1.000 mg/ngày). Chỉ nhóm 2.000 mg/ngày làm giảm fructosamine đáng kể.",
    "officialSource": "PMID: 21211558, J Ethnopharmacol 2011: https://pubmed.ncbi.nlm.nih.gov/21211558/ ; Tổng quan PMID: 19825210, Br J Nutr 2009 (dữ liệu lâm sàng còn hạn chế).",
    "contraindications": [
      "Có thể gây hạ đường huyết quá mức khi phối hợp cùng thuốc điều trị tiểu đường",
      "Tránh dùng trong thai kỳ (nghiên cứu thứ cấp ghi nhận nguy cơ sảy thai)"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "voi",
    "name": "Nụ Vối Bản Địa",
    "sciName": "Cleistocalyx operculatus (Roxb.) Merr. & Perry",
    "enName": "Nụ Vối Bản Địa",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "tieu_hoa",
    "categoryLabel": "Tiêu hóa & Chống oxy hóa",
    "partUsed": "Nụ hoa và lá",
    "image": "assets/voi.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người chính thức. Cần chuẩn hóa, nghiên cứu độc tính và thử nghiệm lâm sàng bài bản.",
    "officialSource": "Quyen & Quoc (2026), Cleistocalyx operculatus: phytochemistry, biological activities, and potential applications, Scientia Agropecuaria 17(3): 663–684: https://revistas.unitru.edu.pe/index.php/scientiaagrop/es/article/download/7887/7694/31304",
    "contraindications": [
      "Dữ liệu an toàn sử dụng dài hạn còn thiếu, uống điều độ như nước hãm dân gian"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "hoac_huong",
    "name": "Hoắc Hương",
    "sciName": "Pogostemon cablin (Blanco) Benth.",
    "enName": "Hoắc Hương",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "tieu_hoa",
    "categoryLabel": "Kiện tỳ & Tinh dầu",
    "partUsed": "Lá và cành non",
    "image": "assets/hoac_huong.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người đáng tin (các con số trên Examine dựa trên liều chuột, không dùng).",
    "officialSource": "Chen et al., Pharmacological activities and mechanisms of action of Pogostemon cablin Benth: a review, Chin Med 2021; PMID: 33413544; DOI: 10.1186/s13020-020-00413-y.",
    "contraindications": [
      "Tinh dầu hoắc hương có thể gây dị ứng da",
      "Chưa đủ dữ liệu an toàn cho phụ nữ có thai và cho con bú"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "day_thia_canh",
    "name": "Dây Thìa Canh",
    "sciName": "Gymnema sylvestre (Retz.) R.Br. ex Schult.",
    "enName": "Dây Thìa Canh",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "chuyen_hoa",
    "categoryLabel": "Ổn định đường huyết",
    "partUsed": "Dây và lá",
    "image": "assets/day_thia_canh.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Thử nghiệm trên 27 bệnh nhân đái tháo đường týp 1 dùng 400 mg/ngày dịch chiết GS4: nhu cầu insulin giảm, đường huyết đói và HbA1c cải thiện rõ rệt.",
    "officialSource": "PMID: 2259216, J Ethnopharmacol 1990: https://pubmed.ncbi.nlm.nih.gov/2259216/ (nghiên cứu gốc xác nhận liều GS4 400 mg/ngày trên 27 bệnh nhân IDDM; đã xóa trích dẫn nhầm của Rau má).",
    "contraindications": [
      "Có thể gây hạ đường huyết quá mức khi dùng đồng thời với insulin hoặc thuốc hạ đường huyết",
      "Chưa đủ dữ liệu an toàn cho phụ nữ mang thai"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "sai_dat",
    "name": "Sài Đất Bản Địa",
    "sciName": "Sphagneticola calendulacea (L.) Pruski",
    "enName": "Sài Đất Bản Địa",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "thanh_nhiet",
    "categoryLabel": "Thanh nhiệt & Tiêu độc",
    "partUsed": "Toàn cây trên mặt đất",
    "image": "assets/vietnamese_heritage_herbs.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người chính thức. Nghiên cứu bảo vệ gan trên chuột CCl4 (J Appl Pharm Sci 2011) và độc tính mạn trên chuột với S. trilobata (Pharmacogn J 2017).",
    "officialSource": "J Appl Pharm Sci (2011): https://www.japsonline.com/admin/php/uploads/272_pdf.pdf ; Pharmacogn J (2017): https://phcogj.com/sites/default/files/10.5530pj.2017.3.55.pdf",
    "contraindications": [
      "Dữ liệu an toàn ở người còn thiếu, khuyến cáo dùng hãm ngắn ngày theo kinh nghiệm dân gian"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "kim_tien_thao",
    "name": "Kim Tiền Thảo",
    "sciName": "Desmodium styracifolium (Osbeck) Merr.",
    "enName": "Kim Tiền Thảo",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "tiet_nieu",
    "categoryLabel": "Tiết niệu & Bài thạch",
    "partUsed": "Toàn cây trên mặt đất",
    "image": "assets/vietnamese_heritage_herbs.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Viên tổng flavone chuẩn hóa: 0,6 g (3 viên 0,2 g, mỗi viên 133 mg flavonoid tổng), 3 lần/ngày trong 28 ngày (đây là viên kê đơn, không phải nước sắc từ cây).",
    "officialSource": "Wang D et al., Desmodium styracifolium Total Flavone Capsules for Urolithiasis: A Phase 3 Randomized Clinical Trial, JAMA Netw Open (09/2026): https://www.emjreviews.com/urology/news/chinese-herbal-extract-increases-ureteral-stone-expulsion/ ; PMC13453747.",
    "contraindications": [
      "Thử nghiệm pha III (606 người lớn): Tỷ lệ tống sỏi niệu quản 5–10 mm đạt 44,6–45% vs 33,8–34% giả dược (không cải thiện có ý nghĩa quãng đường di chuyển sỏi)",
      "Đau quặn thận hoặc tiểu ra máu cần đi khám cấp cứu, không tự ý điều trị",
      "Chống chỉ định cho phụ nữ mang thai, đang cho con bú, hoặc ứ nước thận nặng"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "che_day",
    "name": "Chè Dây Rừng",
    "sciName": "Ampelopsis grossedentata (Hand.-Mazz.) W.T.Wang",
    "enName": "Chè Dây Rừng",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "tieu_hoa",
    "categoryLabel": "Bảo vệ dạ dày & Chống viêm",
    "partUsed": "Lá và cành non",
    "image": "assets/che_day.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều chính thức cho dạng trà nước sắc. Thử nghiệm Dihydromyricetin (DHM) dạng viên nén dùng 300–1.000 mg/ngày.",
    "officialSource": "NIH LiverTox, Dihydromyricetin: https://www.ncbi.nlm.nih.gov/books/NBK594407/",
    "contraindications": [
      "LiverTox ghi nhận chưa có ca tổn thương gan rõ ràng với DHM trong thử nghiệm lâm sàng, tuy nhiên vẫn cần thận trọng với dạng viên tinh chế nồng độ cao"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  },
  {
    "id": "huong_nhu",
    "name": "Hương Nhu Tía",
    "sciName": "Ocimum gratissimum L.",
    "enName": "Hương Nhu Tía",
    "heritageOrigin": "Dược liệu bản địa Việt Nam (OCOP / VietGAP)",
    "category": "giai_cam",
    "categoryLabel": "Giải cảm & Kháng khuẩn",
    "partUsed": "Toàn cây trên mặt đất",
    "image": "assets/vietnamese_heritage_herbs.jpg",
    "keyCompounds": [
      {
        "name": "Hoạt chất chuẩn hóa",
        "class": "Phytochemical",
        "action": "Tác dụng sinh học theo Dược điển"
      }
    ],
    "bioAction": "Hỗ trợ điều hòa sinh học và bảo vệ tế bào theo Dược điển Việt Nam và các tài liệu chuyên khảo quốc tế (EMA/HMPC, EFSA).",
    "safeDailyDose": "Không có liều người chính thức. Cần thử nghiệm lâm sàng để xác định liều an toàn (Heliyon 2021). Độc tính cấp chuột LD50 > 5.000 mg/kg; thử nghiệm chuột đực (PMC6558029) cho thấy phân đoạn chiết không độc mà còn tăng cường sinh sản (bằng chứng an toàn).",
    "officialSource": "Heliyon (2021), PMC8642617: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8642617/ ; PMC3140126; PMC6558029.",
    "contraindications": [
      "Tinh dầu chứa hàm lượng cao Eugenol, tuyệt đối không được uống nguyên chất",
      "Khuyến cáo hạn chế hoặc theo dõi khi sử dụng lâu dài"
    ],
    "tasteProfile": {
      "bitterness": 2,
      "astringency": 2,
      "sweetness": 1,
      "aroma": "Thơm thảo mộc tự nhiên"
    },
    "maskingRules": [
      "Phối hợp với acid hữu cơ pH 4.2–4.5 để ức chế thụ thể đắng hTAS2R16",
      "Kết hợp Cỏ Ngọt hoặc La Hán Quả tạo vị ngọt thanh không đường"
    ],
    "recommendedPairings": [
      "co_ngot",
      "quat_tac",
      "hoa_cuc"
    ],
    "popularDrink": "VinaVita Wellness Infusion",
    "mindfulReminder": "Sử dụng thảo mộc đúng liều lượng và nguồn gốc là biểu hiện của lối sống chánh niệm và yêu thương cơ thể."
  }
];

// Preset Signature Drinks ("Favourite Drinks") curated by VinaVita AI Engine
const SIGNATURE_DRINKS = [
  {
    "id": "sig_citrus_twilight",
    "name": "Citrus Twilight Mocktail (VinaVita #01)",
    "subtitle": "The 'Sleep & Unwind' Pack • Gói Ngủ Ngon & Xả Stress Đêm (0.0% Alcohol | 0g Refined Sugar)",
    "badge": "⭐ HERO SKU #01 • SLEEP & UNWIND",
    "image": "assets/mocktail_hero.jpg",
    "targetMood": "Thư giãn đêm & xả stress thi cử (0.0% Cồn)",
    "formula": [
      {
        "herbId": "lac_tien",
        "name": "Lạc Tiên (Aerial parts)",
        "sci": "Passiflora foetida",
        "amount": "1.8g",
        "note": "Vitexin kích hoạt thụ thể GABA_A hạ Cortisol (Tan et al. 2024; Appel et al. 2011)"
      },
      {
        "herbId": "hoa_cuc",
        "name": "Hoa Cúc Vàng Bản Địa",
        "sci": "Chrysanthemum indicum",
        "amount": "1.5g",
        "note": "Apigenin làm dịu trục thần kinh HPA; an toàn thay thế Tâm Sen cho người huyết áp thấp"
      },
      {
        "herbId": "quat_tac",
        "name": "Tắc Sấy Lạnh / Kumquat (pH 4.3)",
        "sci": "Citrus japonica",
        "amount": "1.5g",
        "note": "Axit citric tự nhiên đưa pH về 4.3, ức chế trực tiếp thụ thể vị đắng hTAS2R16 (Sakurai et al. 2009)"
      },
      {
        "herbId": "co_ngot",
        "name": "Cỏ Ngọt Tự Nhiên (Stevia)",
        "sci": "Stevia rebaudiana",
        "amount": "0.45g",
        "note": "Stevioside ngọt thanh tự nhiên 0-calorie, GI=0, không gây tăng đường huyết đêm"
      },
      {
        "herbId": "muoi_khoang",
        "name": "Muối Khoáng Tinh Khiết (Na+)",
        "sci": "Mineral Salt Na+",
        "amount": "0.05g",
        "note": "Ion Na+ khử đắng chéo trung ương (Breslin & Beauchamp 1997), tạo hậu vị êm mượt"
      }
    ],
    "brewSpecs": {
      "waterTemp": "85°C (Bảo toàn Flavonoids & Apigenin)",
      "steepingTime": "3 – 5 phút (Túi lọc PLA kim tự tháp 5.3g)",
      "servingStyle": "Rót qua 100g đá viên, trang trí 1 lát tắc sấy lạnh (0.0% Cồn)"
    },
    "biochemicalSummary": "Tận dụng cơ chế ức chế thụ thể vị đắng hTAS2R16 qua pH 4.3 kết hợp kích hoạt GABA_A từ Lạc Tiên và Hoa Cúc. Đạt chuẩn 5.3g pre-portioned sachet, tuyệt đối không caffeine, không cồn, không đường tinh luyện.",
    "sachetPrice": "69.000 VNĐ / Hộp 5 gói (13.800 VNĐ/ly)"
  },
  {
    "id": "sig_deadline_survivor",
    "name": "Deadline Survivor Sâm Nam Brew (VinaVita #02)",
    "subtitle": "The 'Deadline & Exam' Pack • Gói Chạy Deadline & Ôn Thi (Tập trung 4h không ép tim)",
    "badge": "⚡ HERO SKU #02 • DEADLINE & EXAM",
    "image": "assets/dinh_lang.jpg",
    "targetMood": "Tỉnh táo tập trung học thi, không bồn chồn run tay",
    "formula": [
      {
        "herbId": "dinh_lang",
        "name": "Lá Đinh Lăng Sâm Nam",
        "sci": "Polyscias fruticosa",
        "amount": "2.0g",
        "note": "Saponin triterpenoid tăng lưu lượng máu và oxy lên thùy trán, duy trì tập trung bền bỉ"
      },
      {
        "herbId": "sa_chanh",
        "name": "Sả Chanh Bản Địa",
        "sci": "Cymbopogon citratus",
        "amount": "1.5g",
        "note": "Citral tạo hương thơm tươi mát giải tỏa mệt mỏi giác quan"
      },
      {
        "herbId": "gung_ta",
        "name": "Gừng Núi Kỳ Sơn",
        "sci": "Zingiber officinale",
        "amount": "0.8g",
        "note": "Gingerol làm ấm tỳ vị, kích thích vi tuần hoàn ngoại vi"
      },
      {
        "herbId": "la_han_qua",
        "name": "La Hán Quả / Cỏ Ngọt",
        "sci": "Siraitia grosvenorii",
        "amount": "1.0g",
        "note": "Mogroside V ngọt mát 0-calorie, hoàn toàn an toàn cho huyết áp và đường huyết"
      }
    ],
    "brewSpecs": {
      "waterTemp": "90°C (Chiết xuất trọn vẹn Saponin)",
      "steepingTime": "3 phút (Túi lọc sinh học 5.3g)",
      "servingStyle": "Dùng ấm hoặc rót qua đá viên tùy sở thích"
    },
    "biochemicalSummary": "Giải pháp thay thế nước tăng lực & cà phê đặc: Cung cấp tỉnh táo bền bỉ từ Saponin Sâm Nam không gây ép tim, cồn cào dạ dày hay hạ đường huyết crash về đêm. Đạt chuẩn 5.3g sachet.",
    "sachetPrice": "69.000 VNĐ / Hộp 5 gói (13.800 VNĐ/ly)"
  },
  {
    "id": "sig_berry_social_glow",
    "name": "Berry Social Glow Mocktail (VinaVita #03)",
    "subtitle": "The '0% Party & Social Chill' Pack • Gói Tiệc Tùng 0% Cồn (0.0% Alcohol Social Chill)",
    "badge": "🍷 HERO SKU #03 • 0% PARTY & CHILL",
    "image": "assets/berry_mocktail_hero.jpg",
    "targetMood": "Giao lưu bạn bè, tiệc đêm 0.0% cồn tuân thủ Nghị định 168",
    "formula": [
      {
        "herbId": "atiso_do",
        "name": "Atiso Đỏ (Roselle Hibiscus)",
        "sci": "Hibiscus sabdariffa",
        "amount": "2.2g",
        "note": "Anthocyanin tạo sắc đỏ Ruby dạ tiệc; Axit hữu cơ đưa pH về 4.2 ức chế vị đắng"
      },
      {
        "herbId": "lac_tien",
        "name": "Lạc Tiên Khô Bản Địa",
        "sci": "Passiflora foetida",
        "amount": "1.3g",
        "note": "Vitexin tạo cảm giác ấm áp, cởi mở hòa đồng tự nhiên trong giao tiếp"
      },
      {
        "herbId": "que_tra_bong",
        "name": "Quế Trà Bồng Bản Địa",
        "sci": "Cinnamomum loureiroi",
        "amount": "0.8g",
        "note": "Cinnamaldehyde tạo hương thơm nồng ấm quý phái như rượu vang Mulled Wine"
      },
      {
        "herbId": "la_han_qua",
        "name": "La Hán Quả Tự Nhiên",
        "sci": "Siraitia grosvenorii",
        "amount": "1.0g",
        "note": "Vị ngọt tròn đầy không năng lượng thừa, không cồn"
      }
    ],
    "brewSpecs": {
      "waterTemp": "85°C",
      "steepingTime": "4 phút (Túi lọc sinh học 5.3g)",
      "servingStyle": "Lắc cùng đá viên, thêm chút soda bọt mịn và 1 nhánh hương thảo"
    },
    "biochemicalSummary": "Ly mocktail sắc đỏ Ruby dạ tiệc hòa quyện hương quế nồng ấm, 100% tuân thủ Nghị định 168/2024/NĐ-CP (0.00% cồn), an toàn tuyệt đối khi lái xe về nhà sau tiệc.",
    "sachetPrice": "69.000 VNĐ / Hộp 5 gói (13.800 VNĐ/ly)"
  },
  {
    "id": "sig_highland_liver_rescue",
    "name": "Highland Liver Rescue (VinaVita Detox)",
    "subtitle": "Gói Thanh Can Mát Gan Sau Chuỗi Ngày Thức Trắng Đêm (0.0% Cồn | 0g Đường)",
    "badge": "🍵 THANH NHIỆT MÁT GAN",
    "image": "assets/atiso.jpg",
    "targetMood": "Thanh nhiệt mát gan, hồi phục thể trạng sau mùa thi",
    "formula": [
      {
        "herbId": "atiso",
        "name": "Actisô Đà Lạt Tuyển Chọn",
        "sci": "Cynara scolymus",
        "amount": "2.0g",
        "note": "Cynarin kích thích bài tiết mật và hỗ trợ chức năng giải độc gan"
      },
      {
        "herbId": "hoa_cuc",
        "name": "Hoa Cúc Vàng Bản Địa",
        "sci": "Chrysanthemum indicum",
        "amount": "1.5g",
        "note": "Thanh can hỏa, sáng mắt, tiêu trừ mụn nhiệt sau thức khuya"
      },
      {
        "herbId": "co_muc",
        "name": "Cỏ Mực Bản Địa",
        "sci": "Eclipta prostrata",
        "amount": "1.0g",
        "note": "Làm mát huyết, thanh can nhiệt theo Dược điển Việt Nam (Đỗ Tất Lợi 2004)"
      },
      {
        "herbId": "co_ngot",
        "name": "Cỏ Ngọt Tự Nhiên (Stevia)",
        "sci": "Stevia rebaudiana",
        "amount": "0.8g",
        "note": "Vị ngọt dịu thanh mát không gây tăng đường huyết, an toàn cho huyết áp"
      }
    ],
    "brewSpecs": {
      "waterTemp": "92°C",
      "steepingTime": "5 phút (Túi lọc sinh học 5.3g)",
      "servingStyle": "Uống ấm hoặc uống mát cả ngày thanh lọc cơ thể"
    },
    "biochemicalSummary": "Tối đa hóa nồng độ Cynarin và acid hữu cơ thực vật hỗ trợ hệ enzyme Cytochrome P450 tại gan đào thải độc tố sinh ra sau các đêm thức trắng làm bài.",
    "sachetPrice": "69.000 VNĐ / Hộp 5 gói (13.800 VNĐ/ly)"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MEDICINAL_DATABASE, SIGNATURE_DRINKS };
}
