import sys

sys.stdout.reconfigure(encoding='utf-8')

INDEX_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\index.html"

with open(INDEX_PATH, "r", encoding="utf-8") as f:
    html = f.read()

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

target = '<section id="viewSignatures" class="main-view">'
if target in html:
    html = html.replace(target, chatbot_section + "    " + target)
    print("Inserted Chatbot View successfully into index.html!")
    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print("File saved. Size:", len(html))
else:
    print("Target not found!")
