import sys
import os
import re

sys.stdout.reconfigure(encoding='utf-8')

INDEX_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\index.html"
CSS_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\styles.css"
APP_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\app.js"
BUNDLE_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\bundle.py"

# ==============================================================================
# 1. UPDATE index.html
# ==============================================================================
with open(INDEX_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# Replace tab nav: remove viewChatbot tab, add navOpenChatBtn
old_nav_pattern = r'<nav class="tab-nav">.*?</nav>'
new_nav = """<nav class="tab-nav">
        <button class="tab-btn active" data-target="viewMixologist">
          <span>🍸</span> AI Mixologist
        </button>
        <button class="tab-btn" data-target="viewSignatures">
          <span>⭐</span> Menu &amp; Gói Sachet Gen-Z
        </button>
        <button class="tab-btn" data-target="viewDatabase">
          <span>📚</span> Bách Khoa Dược Liệu
        </button>
        <button class="tab-btn" data-target="viewAbout">
          <span>🏛️</span> Dự Án &amp; Đội Ngũ
        </button>
        <button id="navOpenChatBtn" class="tab-btn-chat" type="button">
          <span>💬</span> Hỏi AI Dược Sĩ
        </button>
      </nav>"""

html = re.sub(old_nav_pattern, new_nav, html, flags=re.DOTALL)

# Remove the full section viewChatbot from main
section_chatbot_pattern = r'<!-- VIEW: AI PHARMACIST CHATBOT.*?<!-- VIEW 2: SIGNATURE PRE-FORMULATED MENU'
if re.search(section_chatbot_pattern, html, flags=re.DOTALL):
    html = re.sub(section_chatbot_pattern, '<!-- VIEW 2: SIGNATURE PRE-FORMULATED MENU', html, flags=re.DOTALL)
    print("Removed standalone section viewChatbot from index.html")
else:
    # Alternative check
    section_chatbot_pattern2 = r'<section id="viewChatbot".*?</section>'
    html = re.sub(section_chatbot_pattern2, '', html, flags=re.DOTALL)
    print("Removed section viewChatbot via pattern2")

# Corner Floating Chatbot Widget HTML
corner_widget_html = """
  <!-- FLOATING CORNER AI PHARMACIST CHATBOT WIDGET -->
  <div id="cornerChatWidget" class="corner-chat-widget">
    <!-- Floating Action Button (FAB) -->
    <button id="chatWidgetToggleBtn" class="chat-widget-fab" type="button" title="Trò chuyện cùng AI Dược Sĩ VinaVita">
      <span class="fab-icon-open">🌿</span>
      <span class="fab-icon-close" style="display:none;">✕</span>
      <span class="fab-label">Hỏi AI Dược Sĩ</span>
      <span class="fab-pulse"></span>
    </button>

    <!-- Floating Chat Box Popup Window -->
    <div id="chatWidgetBox" class="chat-widget-box" style="display:none;">
      <!-- Widget Header -->
      <div class="chat-widget-header">
        <div class="chat-widget-header-info">
          <div class="widget-bot-avatar">🌿</div>
          <div>
            <div class="widget-bot-name">AI Dược Sĩ VinaVita</div>
            <div class="widget-bot-status"><span class="status-indicator-dot"></span> Sẵn sàng tư vấn dược liệu 24/7</div>
          </div>
        </div>
        <div class="chat-widget-header-actions">
          <button id="chatWidgetMinimizeBtn" class="widget-action-btn" type="button" title="Thu nhỏ">&minus;</button>
          <button id="chatWidgetCloseBtn" class="widget-action-btn" type="button" title="Đóng">&times;</button>
        </div>
      </div>

      <!-- Quick Prompt Chips -->
      <div class="chat-prompts-bar">
        <div class="chat-prompts-label">💡 Gợi ý nhanh:</div>
        <div class="chat-prompts-list">
          <button class="chat-prompt-chip" type="button" data-query="Tâm sen có làm tụt huyết áp không? Người huyết áp thấp uống sao?">🌸 Tâm sen &amp; Huyết áp</button>
          <button class="chat-prompt-chip" type="button" data-query="Cho tôi công thức thảo mộc thức khuya chạy deadline tỉnh táo không ép tim">⚡ Chạy deadline</button>
          <button class="chat-prompt-chip" type="button" data-query="Mất ngủ và stress thi cử nên uống thảo mộc nào an toàn?">🌙 Ngủ sâu &amp; GABA</button>
          <button class="chat-prompt-chip" type="button" data-query="Làm sao để khử vị đắng của dược liệu mà không dùng đường tinh luyện?">🍵 Khử vị đắng TAS2R</button>
          <button class="chat-prompt-chip" type="button" data-query="Combo 5 gói Sachet VinaVita gồm những loại nào và giá bao nhiêu?">📦 Combo 5 Gói Sachet</button>
          <button class="chat-prompt-chip" type="button" data-query="Đau dạ dày và trào ngược có uống được quất và chanh dây không?">🛡️ Đau dạ dày</button>
        </div>
      </div>

      <!-- Chat Messages Scroll Area -->
      <div class="chat-widget-body" id="chatMessages">
        <div class="chat-msg bot">
          <div class="msg-avatar">🌿</div>
          <div class="msg-bubble">
            <div class="msg-author">AI Dược Sĩ VinaVita</div>
            <p>Xin chào! Mình là <strong>Trợ lý Dược sĩ Trí tuệ Nhân tạo VinaVita</strong>. Mình kết nối trực tiếp với toàn bộ Bách khoa Dược liệu cổ truyền, phân tích hoạt chất sinh học (GABA, Flavonoid, Alkaloid, Saponin) và rào cản sức khỏe.</p>
            <p style="margin-top:6px;">Bạn có thể hỏi bất cứ điều gì: <em>"Tâm sen tác dụng gì?", "Công thức thức khuya chạy deadline?", "Đau dạ dày uống gì?", hoặc "Combo 5 gói sachet giá bao nhiêu?"</em>.</p>
          </div>
        </div>
      </div>

      <!-- Chat Input Area -->
      <div class="chat-widget-input-area">
        <input type="text" id="chatInput" class="chat-widget-input" placeholder="Nhập câu hỏi (mất ngủ, deadline, dạ dày)..." autocomplete="off">
        <button id="btnChatSend" class="chat-widget-send-btn" type="button">
          <span>Gửi</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
  </div>
"""

# Place corner widget right before </body>
if "<!-- FLOATING CORNER AI PHARMACIST CHATBOT WIDGET -->" in html:
    html = re.sub(r'<!-- FLOATING CORNER AI PHARMACIST CHATBOT WIDGET -->.*?</div>\s*</div>\s*(?=<!-- FOOTER|</body>)', '', html, flags=re.DOTALL)

html = html.replace("</body>", corner_widget_html + "\n</body>")

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    f.write(html)
print(f"Updated index.html ({len(html)} bytes)")

# ==============================================================================
# 2. UPDATE styles.css
# ==============================================================================
with open(CSS_PATH, "r", encoding="utf-8") as f:
    css = f.read()

corner_css = """
/* ==============================================================================
   CORNER FLOATING AI PHARMACIST CHATBOT WIDGET (POP-UP MODAL)
   ============================================================================== */

.corner-chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  font-family: var(--font-sans);
}

.chat-widget-fab {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  border: 1px solid rgba(52, 211, 153, 0.6);
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.45);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  font-family: var(--font-sans);
}

.chat-widget-fab:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.6);
}

.fab-icon-open, .fab-icon-close {
  font-size: 20px;
  line-height: 1;
}

.fab-pulse {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #f59e0b;
  border: 2px solid #030d08;
  animation: pulseDot 2s infinite;
}

.chat-widget-box {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 420px;
  max-width: calc(100vw - 32px);
  height: 560px;
  max-height: calc(100vh - 100px);
  background: rgba(4, 20, 13, 0.96);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glow);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: widgetSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes widgetSlideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.chat-widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: rgba(8, 34, 22, 0.9);
  border-bottom: 1px solid var(--border-subtle);
}

.chat-widget-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.widget-bot-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 1px solid var(--emerald-bright);
}

.widget-bot-name {
  font-weight: 800;
  font-size: 0.98rem;
  color: #fff;
}

.widget-bot-status {
  font-size: 0.72rem;
  color: var(--emerald-light);
  display: flex;
  align-items: center;
  gap: 5px;
}

.chat-widget-header-actions {
  display: flex;
  gap: 6px;
}

.widget-action-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  width: 28px;
  height: 28px;
  color: var(--text-muted);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.widget-action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.chat-widget-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
}

.chat-widget-input-area {
  display: flex;
  gap: 8px;
  padding: 12px 14px;
  background: rgba(5, 22, 14, 0.95);
  border-top: 1px solid var(--border-subtle);
  align-items: center;
}

.chat-widget-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 10px;
  padding: 10px 14px;
  color: #fff;
  font-size: 0.88rem;
  font-family: var(--font-sans);
  outline: none;
}

.chat-widget-input:focus {
  border-color: var(--emerald-bright);
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 0 10px var(--emerald-glow);
}

.chat-widget-send-btn {
  background: linear-gradient(135deg, var(--emerald-neon), #059669);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: var(--font-sans);
  transition: all 0.2s;
}

.chat-widget-send-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.tab-btn-chat {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.4);
  color: var(--emerald-light);
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.tab-btn-chat:hover {
  background: rgba(16, 185, 129, 0.3);
  border-color: var(--emerald-bright);
  color: #fff;
}
"""

if ".corner-chat-widget" not in css:
    css += corner_css
    with open(CSS_PATH, "w", encoding="utf-8") as f:
        f.write(css)
    print("Appended corner widget CSS to styles.css")

# ==============================================================================
# 3. REWRITE app.js CHATBOT LOGIC
# ==============================================================================
with open(APP_PATH, "r", encoding="utf-8") as f:
    app_js = f.read()

# Remove old chatbot block and replace with clean initChatWidget()
app_js_clean = re.sub(
    r'// ===+\s*// VinaVita AI PHARMACIST CHATBOT.*?// Enhanced Modal Listeners',
    '// Enhanced Modal Listeners',
    app_js,
    flags=re.DOTALL
)

chat_widget_js = """
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

    function handleSend(queryText) {
      const text = (queryText || (chatInput ? chatInput.value : "")).trim();
      if (!text) return;
      if (chatInput) chatInput.value = "";

      appendUserMessage(text);
      const typingElem = showTypingIndicator();

      setTimeout(() => {
        if (typingElem) typingElem.remove();
        const responseHtml = generateBotResponse(text);
        appendBotMessage(responseHtml);
      }, 450);
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

    // Knowledge Matching Engine
    function generateBotResponse(rawQuery) {
      const query = rawQuery.toLowerCase().trim();

      // 1. Tâm Sen / Huyết áp thấp
      if (query.includes("tâm sen") || query.includes("tim sen") || (query.includes("sen") && (query.includes("huyết áp") || query.includes("ngủ")))) {
        return `
          <p><strong>🌸 Dược liệu: Tâm Sen (Embryo Nelumbinis)</strong></p>
          <p style="margin-top:4px;"><strong>Hoạt chất sinh học chính:</strong> <span class="chat-herb-chip">Liensinine</span>, <span class="chat-herb-chip">Isoliensinine</span>, <span class="chat-herb-chip">Nuciferine</span>.</p>
          <p style="margin-top:4px;"><strong>Cơ chế dược lý:</strong> Thanh nhiệt tâm hỏa, an thần sâu, giảm bồn chồn tim đập nhanh do stress thi cử.</p>
          
          <div class="chat-warning-box">
            <strong>⚠️ CẢNH BÁO: NGƯỜI HUYẾT ÁP THẤP</strong><br>
            Liensinine làm dãn cơ trơn mạch máu, khiến huyết áp hạ nhanh. Nếu có tiền sử huyết áp thấp (&lt; 90/60 mmHg), tuyệt đối không dùng liều cao (&gt; 2g/ngày).<br>
            👉 <em>Giải pháp VinaVita:</em> Tự động thay bằng <span class="chat-herb-chip">Hoa Cúc</span> + <span class="chat-herb-chip">Lạc Tiên</span>, hoặc phối hợp cùng <span class="chat-herb-chip">Kỷ Tử</span> để ổn định thành mạch!
          </div>

          <div class="chat-recipe-card">
            <strong style="color:var(--emerald-bright);">💡 Gợi ý công thức:</strong><br>
            • Tâm Sen (1g) + Hoa Cúc (3g) + Cam Thảo (1.5g) hãm 90°C trong 4 phút.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('unwind', 'floral', ['hypotension'])">
            🧪 Nạp vào Trạm Pha Chế AI
          </button>
        `;
      }

      // 2. Chạy deadline / Thức khuya
      if (query.includes("deadline") || query.includes("thức khuya") || query.includes("tập trung") || query.includes("tỉnh táo") || query.includes("ép tim") || query.includes("mệt mỏi") || query.includes("asdwas")) {
        return `
          <p><strong>⚡ Giải Pháp Thảo Mộc Chạy Deadline Không Ép Tim (Thay Thế Cà Phê &amp; Redbull)</strong></p>
          <p style="margin-top:4px;">VinaVita AI ứng dụng nguyên lý <strong>Sóng Não Alpha &amp; Adaptogen</strong> tự nhiên:</p>
          
          <div style="margin:8px 0; padding-left:10px; border-left:2px solid var(--emerald-bright); font-size:0.86rem; line-height:1.55;">
            • <span class="chat-herb-chip">Đinh Lăng Sâm Nam</span>: Polysaccharide &amp; Saponin tăng dưỡng khí thùy trán não bộ.<br>
            • <span class="chat-herb-chip">Trà Xanh Thái Nguyên</span>: L-Theanine kích hoạt sóng não Alpha, tập trung sáng tạo không bồn chồn.<br>
            • <span class="chat-herb-chip">Bạc Hà Nam</span>: Menthol kích hoạt thụ thể lạnh TRPM8 xua tan cơn buồn ngủ tức thì.<br>
            • <span class="chat-herb-chip">Cỏ Ngọt</span>: Vị ngọt thanh khiết 0-Calorie, không làm tụt đường huyết.
          </div>

          <div class="chat-recipe-card">
            <strong style="color:var(--gold-warm);">📦 Gói Sachet "Chạy Deadline" (15.000 VNĐ / Gói)</strong><br>
            Tỉnh táo 4 tiếng bền vững. Hãm nước nóng 85°C trong 3 phút, có thể thêm đá và soda.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('focus', 'herbal', [])">
            🧪 Nạp công thức Calm Focus
          </button>
        `;
      }

      // 3. Mất ngủ / Xoa dịu stress
      if (query.includes("mất ngủ") || query.includes("ngủ ngon") || query.includes("stress") || query.includes("căng thẳng") || query.includes("lo âu") || query.includes("gaba")) {
        return `
          <p><strong>🌙 Liệu Pháp Thảo Mộc Tái Tạo Thụ Thể GABA Cho Giấc Ngủ Sâu</strong></p>
          <div style="margin:8px 0; font-size:0.86rem; line-height:1.55;">
            1. <span class="chat-herb-chip">Lạc Tiên</span>: Vitexin gắn kết thụ thể GABA_A xoa dịu suy nghĩ miên man.<br>
            2. <span class="chat-herb-chip">Hoa Cúc</span>: Apigenin giảm nồng độ cortisol, giãn cơ.<br>
            3. <span class="chat-herb-chip">Cam Thảo</span>: Hòa hoãn tính dược, tạo hậu vị ngọt êm.
          </div>
          <div class="chat-recipe-card">
            <strong style="color:var(--emerald-light);">⭐ Thức uống: Saigon Sunset Tonic hoặc Lotus Twilight</strong><br>
            Uống trước khi đi ngủ 45 phút. Thức dậy không bị uể oải.
          </div>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('unwind', 'citrus', [])">
            🧪 Thử công thức Night Unwind
          </button>
        `;
      }

      // 4. Khử vị đắng TAS2R
      if (query.includes("đắng") || query.includes("khử vị") || query.includes("tas2r") || query.includes("ngọt") || query.includes("vị giác")) {
        return `
          <p><strong>🍵 Khoa Học Triệt Tiêu Vị Đắng Bằng Thực Phẩm Học (Food Science)</strong></p>
          <p style="margin-top:4px; font-size:0.86rem; line-height:1.55;">
            Thảo mộc chứa Alkaloid tác động lên thụ thể đắng TAS2R. VinaVita AI dùng 3 đòn bẩy:<br>
            1. <strong>Acid citric Quất/Chanh dây:</strong> Biến đổi điện thế màng thụ thể đắng.<br>
            2. <strong>Stevioside Cỏ ngọt:</strong> Ngọt gấp 300 lần đường mía, 0 Calorie bọc lót hậu vị.<br>
            3. <strong>Tinh dầu Citrus &amp; Bạc hà:</strong> Limonene/Menthol kích thích khứu giác thư thái.
          </p>
        `;
      }

      // 5. Giá cả / Combo 5 gói Sachet
      if (query.includes("combo") || query.includes("giá") || query.includes("bao nhiêu") || query.includes("sachet") || query.includes("mua") || query.includes("gói")) {
        return `
          <p><strong>📦 Bảng Giá &amp; Quy Cách Đóng Gói VinaVita Sachet</strong></p>
          <div style="margin:8px 0; background:rgba(255,255,255,0.04); border-radius:10px; padding:10px; font-size:0.86rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
              <span>🌿 <strong>Hộp Combo 5 Gói Sachet Mix Vị:</strong></span>
              <strong style="color:var(--gold-warm);">68.000 VNĐ (~13.6k/ly)</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>🍃 <strong>Gói Sachet Đơn (Mua lẻ):</strong></span>
              <span>15.000 VNĐ / gói</span>
            </div>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:8px;">
            Gồm 5 gói: <em>Gói Chạy Deadline, Gói An Thần Ngủ Sâu, Gói Thức Khuya Sáng Mắt, Gói Thanh Nhiệt, Gói Social Glow</em>.
          </p>
          <button class="chat-action-btn" type="button" onclick="openOrderModal('Combo 5 Gói Sachet VinaVita (68.000 VNĐ)')">
            🛒 Mở Form Đặt Thử Nghiệm Combo 5 Gói
          </button>
        `;
      }

      // 6. Đau dạ dày
      if (query.includes("dạ dày") || query.includes("bao tử") || query.includes("trào ngược")) {
        return `
          <p><strong>🛡️ Khuyến Nghị Cho Người Đau Dạ Dày &amp; Trào Ngược</strong></p>
          <div class="chat-warning-box">
            <strong>⚠️ Tránh dùng:</strong> Quất/chanh đậm đặc lúc đói, và hạn chế trà xanh đậm vì tanin kích thích tiết acid.
          </div>
          <p style="font-size:0.86rem; line-height:1.55;">
            <strong>Ưu tiên:</strong> <span class="chat-herb-chip">Cam Thảo</span> (Glycyrrhizin tráng niêm mạc, kháng viêm) + <span class="chat-herb-chip">Hoa Cúc</span> + <span class="chat-herb-chip">Gừng Ấm</span>.
          </p>
          <button class="chat-action-btn" type="button" onclick="applyMixParams('detox', 'floral', ['gastritis'])">
            🧪 Phối công thức êm dịu dạ dày
          </button>
        `;
      }

      // 7. Check specific single herb
      if (typeof MEDICINAL_DATABASE !== "undefined") {
        const matchedHerb = MEDICINAL_DATABASE.find(h => {
          const q = query;
          return q.includes(h.name.toLowerCase()) || 
                 q.includes(h.id.replace("_", " ")) ||
                 q.includes(h.enName.toLowerCase());
        });

        if (matchedHerb) {
          const compounds = matchedHerb.keyCompounds.map(c => `<code>${c.name}</code> (${c.action})`).join(", ");
          return `
            <p><strong>📚 Tra Cứu: ${matchedHerb.name}</strong> (<em>${matchedHerb.sciName}</em>)</p>
            <div style="margin:6px 0; font-size:0.85rem; line-height:1.55;">
              • <strong>Hoạt chất:</strong> ${compounds}<br>
              • <strong>Cơ chế dược lý:</strong> ${matchedHerb.bioAction}<br>
              • <strong>Liều an toàn:</strong> ${matchedHerb.safeDailyDose}<br>
              • <strong>Vị giác:</strong> Đắng ${matchedHerb.tasteProfile.bitterness}/5 | ${matchedHerb.tasteProfile.aroma}
            </div>
            <div class="chat-warning-box">
              ⚠️ <strong>Lưu ý:</strong> ${matchedHerb.contraindications.join("; ")}
            </div>
            <button class="chat-action-btn" type="button" onclick="openDatabaseSearch('${matchedHerb.name}')">
              📖 Xem trong Bách Khoa
            </button>
          `;
        }
      }

      // Default
      return `
        <p>AI Dược Sĩ VinaVita đã ghi nhận câu hỏi: <em>"${escapeHtml(rawQuery)}"</em>.</p>
        <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">Hệ thống hỗ trợ tra cứu chuyên sâu về: <em>Tâm Sen, Lạc Tiên, Đinh Lăng, Cúc Hoa, Kỷ Tử, Atiso, Bạc Hà, Cỏ Ngọt, Cam Thảo, Trà Xanh</em> và các giải pháp sức khỏe (mất ngủ, ôn thi chạy deadline, huyết áp, dạ dày, vị đắng TAS2R).</p>
        <p style="margin-top:6px; font-size:0.84rem; color:var(--emerald-light);">Bạn có thể thử bấm vào các nút gợi ý nhanh ở trên hoặc hỏi: <strong>"Đinh lăng có tác dụng gì?"</strong> nhé!</p>
      `;
    }
  }

  // Initialize Chat Widget
  initChatWidget();
"""

# Replace in app_js: find where modal code starts and prepend chat_widget_js
modal_marker = "// Enhanced Modal Listeners"
pos = app_js_clean.find(modal_marker)
if pos != -1:
    app_js_final = app_js_clean[:pos] + chat_widget_js + "\n\n  " + app_js_clean[pos:]
else:
    # Just append before the last });
    last_brace = app_js_clean.rfind("});")
    app_js_final = app_js_clean[:last_brace] + chat_widget_js + "\n});\n"

with open(APP_PATH, "w", encoding="utf-8") as f:
    f.write(app_js_final)

print("Cleanly rebuilt app.js with initChatWidget!")

