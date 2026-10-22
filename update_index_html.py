import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

INDEX_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\index.html"

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update Title and Brand Name
html = html.replace(
    "<title>AnThảo AI — Nền Tảng Pha Chế Dược Liệu & Mocktail Thảo Mộc Việt Nam (RBPC 2026)</title>",
    "<title>VinaVita AI — Nền Tảng Pha Chế Dược Liệu & Mocktail Thảo Mộc Việt Nam (RBPC 2026)</title>"
)

html = html.replace(
    '<div class="brand-name">AnThảo <span>AI</span></div>\n          <div class="brand-tagline">Dược Liệu Việt • AI Mixologist</div>',
    '<div class="brand-name">VinaVita <span>AI</span></div>\n          <div class="brand-tagline">Dược Liệu Việt • AI Mixologist & Dược Sĩ Trí Tuệ Nhân Tạo</div>'
)

# 2. Add Chatbot Tab in Nav
old_nav = """        <button class="tab-btn active" data-target="viewMixologist">
          <span>🍸</span> AI Mixologist
        </button>
        <button class="tab-btn" data-target="viewSignatures">
          <span>⭐</span> Menu Yêu Thích
        </button>"""

new_nav = """        <button class="tab-btn active" data-target="viewMixologist">
          <span>🍸</span> AI Mixologist
        </button>
        <button class="tab-btn" data-target="viewChatbot">
          <span>💬</span> AI Dược Sĩ Trợ Lý
        </button>
        <button class="tab-btn" data-target="viewSignatures">
          <span>⭐</span> Menu &amp; Gói Sachet Gen-Z
        </button>"""

if old_nav in html:
    html = html.replace(old_nav, new_nav)
    print("Updated navigation bar with AI Chatbot tab!")
else:
    print("Warning: old_nav not matched!")

# 3. Add Chatbot Section right before viewSignatures
chatbot_section = """    <!-- VIEW: AI PHARMACIST CHATBOT (DIRECT DATABASE ACCESS & ADVICE) -->
    <section id="viewChatbot" class="main-view">
      <div class="glass-panel chatbot-wrapper">
        <!-- Chat Header -->
        <div class="chat-header">
          <div class="chat-header-left">
            <div class="chat-bot-avatar">🌿</div>
            <div>
              <div class="chat-bot-title">AI Dược Sĩ VinaVita</div>
              <div class="chat-bot-status">
                <span class="status-indicator-dot"></span> Đang trực tuyến • Truy vấn Dược điển Cổ truyền &amp; Dược lý Sinh học
              </div>
            </div>
          </div>
          <div class="chat-header-actions">
            <span class="chat-badge-tag">RMIT RBPC 2026</span>
          </div>
        </div>

        <!-- Quick Question Prompts -->
        <div class="chat-prompts-bar">
          <div class="chat-prompts-label">💡 Gợi ý câu hỏi nhanh cho AI Dược Sĩ:</div>
          <div class="chat-prompts-list">
            <button class="chat-prompt-chip" data-query="Tâm sen có làm tụt huyết áp không? Người huyết áp thấp uống sao?">🌸 Tâm sen &amp; Huyết áp thấp</button>
            <button class="chat-prompt-chip" data-query="Cho tôi công thức thảo mộc thức khuya chạy deadline tỉnh táo không ép tim">⚡ Thức khuya chạy deadline</button>
            <button class="chat-prompt-chip" data-query="Mất ngủ và stress thi cử nên uống thảo mộc nào an toàn?">🌙 Mất ngủ &amp; Xoa dịu GABA</button>
            <button class="chat-prompt-chip" data-query="Làm sao để khử vị đắng của dược liệu mà không dùng đường tinh luyện?">🍵 Khử vị đắng TAS2R</button>
            <button class="chat-prompt-chip" data-query="Combo 5 gói Sachet VinaVita gồm những loại nào và giá bao nhiêu?">📦 Combo 5 Gói Sachet Gen-Z</button>
            <button class="chat-prompt-chip" data-query="Đau dạ dày và trào ngược có uống được quất và chanh dây không?">🛡️ Người đau dạ dày</button>
          </div>
        </div>

        <!-- Chat Messages Conversation -->
        <div class="chat-body" id="chatMessages">
          <div class="chat-msg bot">
            <div class="msg-avatar">🌿</div>
            <div class="msg-bubble">
              <div class="msg-author">AI Dược Sĩ VinaVita</div>
              <p>Xin chào! Mình là <strong>Trợ lý Dược sĩ Trí tuệ Nhân tạo VinaVita</strong>. Mình có quyền truy cập trực tiếp vào toàn bộ Bách khoa Dược liệu cổ truyền Việt Nam, phân tích hoạt chất sinh học (GABA, Flavonoid, Alkaloid, Saponin) và đối soát các chống chỉ định y khoa.</p>
              <p style="margin-top:8px;">Bạn có thể hỏi mình bất cứ điều gì cụ thể: <em>"Tâm sen tác dụng gì?", "Công thức thức khuya chạy deadline không ép tim?", "Khử vị đắng của Lạc Tiên bằng cách nào?", hoặc "Combo 5 gói sachet giá bao nhiêu?"</em>.</p>
            </div>
          </div>
        </div>

        <!-- Chat Input Bar -->
        <div class="chat-input-area">
          <input type="text" id="chatInput" class="chat-input-field" placeholder="Hỏi AI Dược Sĩ về dược liệu, triệu chứng (mất ngủ, deadline, dạ dày) hoặc công thức..." autocomplete="off">
          <button id="btnChatSend" class="chat-send-btn">
            <span>Gửi</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
    </section>

"""

if '<!-- VIEW 2: SIGNATURE PRE-FORMULATED MENU -->' in html:
    html = html.replace('<!-- VIEW 2: SIGNATURE PRE-FORMULATED MENU -->', chatbot_section + '    <!-- VIEW 2: SIGNATURE PRE-FORMULATED MENU -->')
    print("Inserted Chatbot View into index.html!")
else:
    print("Warning: viewSignatures anchor not found!")

# 4. Update Modal to Interactive Sachet Ordering
old_modal = """  <!-- ORDER MODAL SIMULATION -->
  <div id="orderModal" class="modal-overlay">
    <div class="modal-box">
      <button id="modalClose" class="modal-close">&times;</button>
      <div style="text-align:center; margin-bottom:20px;">
        <div style="font-size:40px; margin-bottom:8px;">📦</div>
        <h3 style="font-family:var(--font-display); font-size:1.45rem; font-weight:800; color:#fff;">Đặt Gói Dược Liệu Sachet Đong Sẵn</h3>
        <p style="color:var(--text-muted); font-size:0.86rem; margin-top:4px;">Hợp tác cùng Hợp tác xã Dược liệu OCOP Việt Nam</p>
      </div>

      <div style="background:rgba(255,255,255,0.04); border-radius:14px; padding:18px; margin-bottom:22px; font-size:0.9rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span style="color:var(--text-muted);">Món đã chọn:</span>
          <strong id="modalItemName" style="color:var(--emerald-light);">Saigon Sunset Tonic</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
          <span style="color:var(--text-muted);">Quy cách:</span>
          <span>Hộp 5 gói Sachet đong sẵn</span>
        </div>
        <div style="display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px;">
          <span style="color:var(--text-muted);">Giá ưu đãi thử nghiệm:</span>
          <strong style="color:var(--gold-warm); font-size:1.15rem;">69.000 VNĐ (~13.8k/ly)</strong>
        </div>
      </div>

      <button id="btnConfirmOrder" class="btn-primary-action" style="width:100%; padding:15px; font-size:0.95rem;">
        Xác Nhận Đặt Gói (15.000 VNĐ / Gói Đơn)
      </button>
      <p style="font-size:0.75rem; color:var(--text-dim); text-align:center; margin-top:14px;">
        *Giao hàng siêu tốc trong 24-48h. Cam kết 100% thảo mộc tự nhiên có kiểm định an toàn thực phẩm.
      </p>
    </div>
  </div>"""

new_modal = """  <!-- ORDER MODAL SIMULATION (GEN-Z COMBO 5 SACHETS & TRIAL CHECKOUT) -->
  <div id="orderModal" class="modal-overlay">
    <div class="modal-box">
      <button id="modalClose" class="modal-close">&times;</button>
      
      <!-- Order Form State -->
      <div id="orderFormState">
        <div style="text-align:center; margin-bottom:18px;">
          <div style="font-size:38px; margin-bottom:6px;">📦</div>
          <h3 style="font-family:var(--font-display); font-size:1.4rem; font-weight:800; color:#fff;">Đặt Gói Sachet VinaVita Đong Sẵn</h3>
          <p style="color:var(--text-muted); font-size:0.84rem; margin-top:4px;">Chuẩn hóa định lượng dược liệu OCOP Việt Nam • Tiện lợi cho Gen-Z</p>
        </div>

        <!-- Product Summary Box -->
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(52, 211, 153, 0.25); border-radius:14px; padding:16px; margin-bottom:18px; font-size:0.88rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="color:var(--text-muted);">Sản phẩm:</span>
            <strong id="modalItemName" style="color:var(--emerald-light);">Combo 5 Gói Sachet VinaVita</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="color:var(--text-muted);">Quy cách đóng gói:</span>
            <span>Hộp 5 túi Sachet màng nhôm bảo quản dược tính</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; align-items:center;">
            <span style="color:var(--text-muted);">Đơn giá đề xuất:</span>
            <strong id="modalPriceDisplay" style="color:var(--gold-warm); font-size:1.15rem;">68.000 VNĐ (~13.6k/gói)</strong>
          </div>
        </div>

        <!-- Customer Inputs -->
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
          <div>
            <label style="font-size:0.78rem; color:var(--text-muted); display:block; margin-bottom:4px;">Họ tên người nhận (Thử nghiệm demo):</label>
            <input type="text" id="orderCustName" style="width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:10px 14px; color:#fff; font-size:0.9rem;" value="Ngô Minh Thiên Bảo">
          </div>
          <div>
            <label style="font-size:0.78rem; color:var(--text-muted); display:block; margin-bottom:4px;">Khu vực nhận hàng / Giao nhanh:</label>
            <input type="text" id="orderCustAddress" style="width:100%; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; padding:10px 14px; color:#fff; font-size:0.9rem;" value="Vinschool Central Park, TP. Hồ Chí Minh">
          </div>
        </div>

        <button id="btnConfirmOrder" class="btn-primary-action" style="width:100%; padding:14px; font-size:0.95rem;">
          🚀 Xác Nhận Đặt Thử Nghiệm (Combo 5 Gói)
        </button>
        <p style="font-size:0.75rem; color:var(--text-dim); text-align:center; margin-top:12px;">
          *Mô phỏng đặt hàng thực tế phục vụ RMIT Business Plan Competition 2026.
        </p>
      </div>

      <!-- Receipt Success State (Hidden by default) -->
      <div id="orderSuccessState" style="display:none;">
        <div class="order-receipt-box">
          <div class="receipt-icon">🎉</div>
          <div class="receipt-title">ĐẶT HÀNG THỬ NGHIỆM THÀNH CÔNG!</div>
          <div style="font-size:0.85rem; color:var(--emerald-light); margin-bottom:12px;">
            Mã đơn: <span id="receiptOrderId" class="receipt-id">#VV-2026-8839</span>
          </div>
          <div class="receipt-details">
            <div class="receipt-row">
              <span style="color:var(--text-muted);">Sản phẩm:</span>
              <strong id="receiptItemName" style="color:#fff;">Combo 5 Gói Sachet VinaVita</strong>
            </div>
            <div class="receipt-row">
              <span style="color:var(--text-muted);">Người nhận:</span>
              <span id="receiptCustName" style="color:#fff;">Ngô Minh Thiên Bảo</span>
            </div>
            <div class="receipt-row">
              <span style="color:var(--text-muted);">Địa chỉ:</span>
              <span id="receiptCustAddress" style="color:#fff;">Vinschool Central Park, TP.HCM</span>
            </div>
            <div class="receipt-row">
              <span style="color:var(--text-muted);">Dự kiến giao:</span>
              <span style="color:var(--gold-warm); font-weight:700;">24 – 48 giờ (HTX OCOP)</span>
            </div>
          </div>
          <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5; margin-bottom:16px;">
            Đơn hàng đã được ghi nhận vào hệ thống điều phối của VinaVita. Gói thảo mộc đong chuẩn tỷ lệ sinh học sẵn sàng được giao tới bạn.
          </p>
          <button id="btnDoneOrder" class="btn-primary-action" style="width:100%; padding:12px; font-size:0.9rem;">
            Hoàn Tất &amp; Quay Lại
          </button>
        </div>
      </div>

    </div>
  </div>"""

if old_modal in html:
    html = html.replace(old_modal, new_modal)
    print("Updated order modal with interactive receipt!")
else:
    print("Warning: old_modal not matched exactly!")

# 5. Footer Rebrand
html = html.replace(
    '<div><strong>AnThảo AI</strong> — Vietnam Botanical Mocktail &amp; Herbal Wellness Platform</div>',
    '<div><strong>VinaVita AI</strong> — Vietnam Botanical Mocktail &amp; Herbal Wellness Platform</div>'
)

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(html)

print("Updated index.html successfully!")
