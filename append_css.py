import sys

sys.stdout.reconfigure(encoding='utf-8')

css_content = """

/* ==============================================================================
   AI PHARMACIST CHATBOT & ENHANCED ORDER RECEIPT STYLES
   Added for VinaVita AI (RBPC 2026)
   ============================================================================== */

.chatbot-wrapper {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 680px;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--border-glow);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: rgba(5, 26, 16, 0.9);
  border-bottom: 1px solid var(--border-subtle);
}

.chat-header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.chat-bot-avatar {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(52, 211, 153, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  border: 1px solid var(--emerald-bright);
  box-shadow: 0 0 15px var(--emerald-glow);
}

.chat-bot-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  color: #fff;
}

.chat-bot-status {
  font-size: 0.78rem;
  color: var(--emerald-light);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.status-indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  display: inline-block;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.chat-badge-tag {
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.35);
  color: var(--gold-warm);
  font-size: 0.75rem;
  font-weight: 700;
}

.chat-prompts-bar {
  padding: 10px 20px;
  background: rgba(4, 18, 11, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.chat-prompts-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.6px;
}

.chat-prompts-list {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.chat-prompts-list::-webkit-scrollbar {
  display: none;
}

.chat-prompt-chip {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.22);
  color: var(--emerald-light);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 0.78rem;
  cursor: pointer;
  white-space: nowrap;
  font-family: var(--font-sans);
  transition: all 0.2s ease;
}

.chat-prompt-chip:hover {
  background: rgba(16, 185, 129, 0.22);
  border-color: var(--emerald-bright);
  color: #fff;
  transform: translateY(-1px);
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.chat-msg {
  display: flex;
  gap: 12px;
  max-width: 86%;
  animation: fadeInMsg 0.25s ease;
}

@keyframes fadeInMsg {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.chat-msg.bot {
  align-self: flex-start;
}

.chat-msg.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.msg-avatar {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(52, 211, 153, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-msg.user .msg-avatar {
  background: rgba(56, 189, 248, 0.2);
  border-color: rgba(56, 189, 248, 0.4);
}

.msg-bubble {
  padding: 14px 18px;
  border-radius: 16px;
  font-size: 0.92rem;
  line-height: 1.6;
}

.chat-msg.bot .msg-bubble {
  background: rgba(6, 28, 18, 0.92);
  border: 1px solid rgba(52, 211, 153, 0.25);
  color: #e2e8f0;
  border-top-left-radius: 4px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
}

.chat-msg.user .msg-bubble {
  background: linear-gradient(135deg, #047857, #065f46);
  color: #fff;
  border: 1px solid rgba(52, 211, 153, 0.4);
  border-top-right-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.msg-author {
  font-size: 0.74rem;
  color: var(--emerald-bright);
  font-weight: 700;
  margin-bottom: 4px;
}

.chat-msg.user .msg-author {
  color: #a7f3d0;
  text-align: right;
}

.chat-herb-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 6px;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.3);
  color: var(--emerald-light);
  font-size: 0.8rem;
  font-weight: 600;
  margin: 2px 0;
}

.chat-warning-box {
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(244, 63, 94, 0.15);
  border-left: 3px solid var(--alert-red);
  color: #fecdd3;
  font-size: 0.85rem;
}

.chat-recipe-card {
  margin: 10px 0;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.chat-action-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(245, 158, 11, 0.2);
  border: 1px solid rgba(245, 158, 11, 0.4);
  color: var(--gold-warm);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-sans);
}

.chat-action-btn:hover {
  background: rgba(245, 158, 11, 0.35);
  color: #fff;
}

.chat-input-area {
  display: flex;
  gap: 10px;
  padding: 14px 20px;
  background: rgba(4, 18, 11, 0.85);
  border-top: 1px solid var(--border-subtle);
  align-items: center;
}

.chat-input-field {
  flex: 1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 12px;
  padding: 12px 16px;
  color: #fff;
  font-size: 0.92rem;
  font-family: var(--font-sans);
  outline: none;
  transition: border 0.2s ease;
}

.chat-input-field:focus {
  border-color: var(--emerald-bright);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 12px var(--emerald-glow);
}

.chat-send-btn {
  background: linear-gradient(135deg, var(--emerald-neon), #059669);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-sans);
}

.chat-send-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

/* Typing Indicator */
.typing-bubble {
  display: flex;
  gap: 5px;
  padding: 12px 18px;
  align-items: center;
}

.typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--emerald-bright);
  animation: typingBounce 1.2s infinite ease-in-out;
}

.typing-dot:nth-child(1) { animation-delay: 0s; }
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-6px); opacity: 1; }
}

/* Order Confirmation Receipt Inside Modal */
.order-receipt-box {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid var(--border-glow);
  border-radius: 16px;
  padding: 22px;
  text-align: center;
  margin-top: 10px;
  animation: fadeInMsg 0.3s ease;
}

.receipt-icon {
  font-size: 44px;
  margin-bottom: 10px;
}

.receipt-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 6px;
}

.receipt-id {
  font-family: monospace;
  background: rgba(255, 255, 255, 0.08);
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--emerald-bright);
}

.receipt-details {
  margin: 16px 0;
  text-align: left;
  font-size: 0.88rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.receipt-row {
  display: flex;
  justify-content: space-between;
}
"""

p = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\styles.css"
with open(p, "a", encoding="utf-8") as f:
    f.write(css_content)

print("Appended CSS successfully!")
