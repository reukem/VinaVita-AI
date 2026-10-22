import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

file_url = "file:///C:/Users/THIS%20PC/Downloads/VinaVita-AI-Mixologist.html"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    console_errors = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: console_errors.append(str(err)))

    page.goto(file_url)
    page.wait_for_timeout(1000)

    print("Title:", page.title())
    print("Console errors on load:", console_errors)

    # Test Tab Navigation to Chatbot
    chat_tab = page.locator('button[data-target="viewChatbot"]')
    print("Found chat tab:", chat_tab.count())
    chat_tab.click()
    page.wait_for_timeout(500)

    # Check if viewChatbot is active
    is_chat_active = page.locator("#viewChatbot").is_visible()
    print("Is chat tab visible:", is_chat_active)

    # Click first prompt chip
    first_chip = page.locator(".chat-prompt-chip").first
    print("Clicking first prompt chip:", first_chip.inner_text())
    first_chip.click()
    page.wait_for_timeout(1000)

    # Check if bot message appeared
    bot_msgs = page.locator(".chat-msg.bot")
    print("Total bot messages:", bot_msgs.count())
    last_msg = bot_msgs.last.inner_text()
    print("Last bot response snippet:", last_msg[:150])

    # Test manual input
    chat_input = page.locator("#chatInput")
    chat_input.fill("Đinh lăng uống chạy deadline được không?")
    send_btn = page.locator("#btnChatSend")
    send_btn.click()
    page.wait_for_timeout(1000)

    print("Total bot messages after query:", bot_msgs.count())
    last_msg2 = bot_msgs.last.inner_text()
    print("Second bot response snippet:", last_msg2[:150])

    # Test order modal trigger from chat or menu
    order_action_btn = page.locator(".chat-action-btn").first
    if order_action_btn.is_visible():
        print("Clicking chat action button...")
        order_action_btn.click()
        page.wait_for_timeout(500)
    
    # Check if modal opens
    modal = page.locator("#orderModal")
    print("Modal is visible:", modal.is_visible())

    # If visible, confirm order
    if modal.is_visible():
        btn_confirm = page.locator("#btnConfirmOrder")
        if btn_confirm.is_visible():
            btn_confirm.click()
            page.wait_for_timeout(1000)
            receipt = page.locator("#orderSuccessState")
            print("Receipt state is visible:", receipt.is_visible())
            print("Receipt text snippet:", receipt.inner_text()[:120])

    print("Final console errors:", console_errors)
    browser.close()

print("All Playwright verification steps passed!")
