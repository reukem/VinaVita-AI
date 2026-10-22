# 🧠 VinaVita AI Pharmacist — Small Language Model (SLM) Architecture
**Dự án:** VinaVita AI (Đề tài tham dự RMIT Business Plan Competition 2026 — AI for Good)  
**Tác giả thiết kế hệ thống:** Ngô Minh Thiên Bảo (Lead Systems Architect)  
**Phụ trách Flowchart & Data Proposal:** Nguyễn Minh Dũng & Alex Huynh (Khoa)  

---

## 1. TẠI SAO PHẢI LÀ SLM (SMALL LANGUAGE MODEL) THAY VÌ ĐÒI HỎI LLM CỒNG KỀNH?
* **Thách thức của LLM khổng lồ (GPT-4 / Claude / Gemini Pro):** Chi phí API đắt đỏ, độ trễ mạng cao (1-3s), nguy cơ hallucination (bịa đặt thông tin y khoa) và không thể chạy offline tại các máy trạm/thiết bị IoT hoặc máy tính trường học.
* **Lợi thế của VinaVita SLM (0.5B - 1.5B Parameters):**
  1. **Siêu nhẹ & Tốc độ cao:** Có thể chạy on-device (Edge AI) trên laptop của học sinh, điện thoại hoặc máy tính nhúng tại quầy pha chế mocktail thông qua ONNX Runtime / WebGPU.
  2. **Zero Hallucination:** Huấn luyện chuyên biệt (Domain-Adapted Fine-Tuning) trên Dược điển Việt Nam V, không bị phân tâm bởi dữ liệu rác trên internet.
  3. **Tuân thủ Y Đức & Rào Cản An Toàn Sinh Học (Medical Guardrails):** Tự động phát hiện các chống chỉ định nguy hiểm (hạ huyết áp do Tâm Sen, kích ứng dạ dày do acid quất chanh liều cao).

---

## 2. FLOWCHART QUY TRÌNH HOẠT ĐỘNG (DÀNH CHO DŨNG VẼ VÀO PROPOSAL)

```
[ NGƯỜI DÙNG NHẬP CÂU HỎI ]
        │
        ▼
[ STEP 1: TOKENIZER & NORMALIZER ] ──> Chuẩn hóa tiếng Việt, xử lý tiếng lóng Gen-Z, bắt lỗi chính tả
        │
        ▼
[ STEP 2: INTENT & ENTITY CLASSIFIER ]
        ├─► Chào hỏi / Giao tiếp xã hội ─────────────► [ Lớp Persona VinaVita ]
        ├─► Tra cứu Dược liệu đơn lẻ ───────────────► [ Bộ trích xuất Hoạt chất Sinh học ]
        ├─► Nhu cầu triệu chứng (Mất ngủ, Deadline) ──► [ Bộ lọc Hiệp đồng Dược tính ]
        └─► Chống chỉ định (Huyết áp, Dạ dày) ──────► [ LỚP BẢO VỆ Y KHOA: GUARDRAILS ]
        │
        ▼
[ STEP 3: PHYTOMEDICINE VECTOR RAG ]
        │ (Truy xuất nồng độ hoạt chất: Vitexin, Liensinine, Apigenin, Saponin từ Master Database)
        ▼
[ STEP 4: SLM DECODER & FOOD SCIENCE MASKING ]
        │ (Ứng dụng 3 nguyên lý khử đắng TAS2R: Acid hữu cơ, Stevioside, Tinh dầu)
        ▼
[ STEP 5: BIOCHEMICAL SAFETY AUDIT ]
        │ (Kiểm tra lại liều lượng safeDailyDose & tương tác thuốc trước khi xuất kết quả)
        ▼
[ STEP 6: DYNAMIC CONVERSATIONAL RESPONSE ] ──> Đưa ra lời khuyên + Nút bấm hành động 1-chạm
```

---

## 3. THÔNG SỐ KỸ THUẬT HUẤN LUYỆN (MODEL SPECS)
* **Base Architecture:** Qwen2.5-0.5B-Instruct hoặc SmolLM-135M-Instruct
* **Kỹ thuật Fine-Tuning:** QLoRA (Quantized Low-Rank Adaptation, Rank r=16, Alpha=32, 4-bit NF4)
* **Tập dữ liệu:** `vinavita_slm_dataset.jsonl` (Instruction-tuning trên 15+ dược liệu bản địa Việt Nam, quy chuẩn Dược điển và cơ chế thụ thể GABA/TAS2R)
* **Inference Runtime:** ONNX Runtime Web (WebAssembly / WebGPU) cho trình duyệt + Local FastAPI Python Engine cho backend.
