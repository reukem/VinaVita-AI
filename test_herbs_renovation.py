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
    print("Console errors on initial load:", console_errors)

    # 1. Switch to Bách Khoa Dược Liệu
    db_tab = page.locator('button[data-target="viewDatabase"]')
    print("Clicking Bách Khoa Dược Liệu tab...")
    db_tab.click()
    page.wait_for_timeout(500)

    # 2. Check herb cards
    cards = page.locator(".herb-card")
    card_count = cards.count()
    print(f"Total herb cards rendered: {card_count}")
    assert card_count >= 15, "Expected at least 15 herb cards"

    # 3. Check card height uniformity (fixed length)
    first_box = cards.first.bounding_box()
    second_box = cards.nth(1).bounding_box()
    third_box = cards.nth(2).bounding_box()
    print(f"Card 1 height: {first_box['height']}px, Card 2 height: {second_box['height']}px, Card 3 height: {third_box['height']}px")
    assert abs(first_box['height'] - 480) <= 20, f"Card height {first_box['height']} should be ~480px"
    assert abs(first_box['height'] - second_box['height']) <= 5, "Card heights must be uniform"

    # 4. Click first herb card to open renovated scientific modal
    first_title = cards.first.locator(".herb-card-name").inner_text()
    print(f"Opening detail modal for first herb: {first_title}")
    cards.first.click()
    page.wait_for_timeout(500)

    herb_modal = page.locator("#herbDetailModal")
    assert herb_modal.is_visible(), "Herb detail modal should be visible"
    print("Herb detail modal is visible!")

    # 5. Verify Image 1 Renovated Elements inside modal
    biochem_box = page.locator("#herbDetailModal .biochem-box")
    print("Biochem box visible:", biochem_box.is_visible())
    print("Biochem snippet:", biochem_box.inner_text()[:100])

    sachet_bar = page.locator("#herbDetailModal .res-sachet-matched-bar")
    print("Hero sachet bar visible:", sachet_bar.is_visible())
    print("Sachet title:", sachet_bar.locator(".res-sachet-title").inner_text())

    formula_table = page.locator("#herbDetailModal .formula-table")
    print("Formula table visible:", formula_table.is_visible())

    action_row = page.locator("#herbDetailModal .action-row")
    print("Action row visible:", action_row.is_visible())

    # 6. Click Order Trigger inside modal to verify order modal integration
    order_btn = sachet_bar.locator(".btn-order-trigger")
    order_btn.click()
    page.wait_for_timeout(500)

    order_modal = page.locator("#orderModal")
    assert order_modal.is_visible(), "Order modal should open from herb dossier"
    print("Order modal successfully opened from herb dossier!")

    # Close order modal
    page.locator("#modalClose").click()
    page.wait_for_timeout(300)

    # 7. Test AI Mixologist cross-link action
    mix_ai_btn = page.locator("#herbDetailModal button:has-text('Đưa Vào Phòng Thí Nghiệm AI')")
    print("Clicking 'Đưa Vào Phòng Thí Nghiệm AI' button...")
    mix_ai_btn.click()
    page.wait_for_timeout(1500)

    # Verify redirected to viewMixologist
    is_mix_active = page.locator("#viewMixologist").is_visible()
    print("Is viewMixologist active:", is_mix_active)
    assert is_mix_active, "Should have navigated to viewMixologist"

    # Verify AI generated recipe
    recipe_res = page.locator("#resRecipeTitle")
    print("Generated AI recipe title:", recipe_res.inner_text())

    # 8. Test Search Filter in Bách Khoa Dược Liệu
    db_tab.click()
    page.wait_for_timeout(500)
    search_input = page.locator("#dbSearchInput")
    search_input.fill("GABA")
    page.wait_for_timeout(300)

    filtered_cards = page.locator(".herb-card")
    filtered_count = filtered_cards.count()
    print(f"Cards matching 'GABA': {filtered_count}")
    assert filtered_count > 0 and filtered_count < card_count, "Search filter should narrow down cards"

    print("Console errors at end of test:", console_errors)
    assert len(console_errors) == 0, f"Expected 0 console errors, got: {console_errors}"

    browser.close()

print("ALL TESTS PASSED WITH 100% SUCCESS!")
