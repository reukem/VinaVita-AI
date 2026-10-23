import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

file_url = "file:///C:/Users/THIS%20PC/Downloads/AnThao-AI-Mixologist.html"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1400, "height": 950})

    console_errors = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: console_errors.append(str(err)))

    page.goto(file_url)
    page.wait_for_timeout(1000)

    print("Title:", page.title())
    print("Console errors on load:", console_errors)

    # 1. Take screenshot of Tab 1 (Studio)
    page.screenshot(path="screenshot_tab1_studio.png")
    print("Saved screenshot_tab1_studio.png")

    # 2. Test Tab 2: Menu & Sachet Boxes
    menu_tab = page.locator('button[data-target="viewSignatures"]')
    menu_tab.click()
    page.wait_for_timeout(800)
    page.screenshot(path="screenshot_tab2_menu.png")
    print("Saved screenshot_tab2_menu.png")

    # Count hero sachet cards and signature cards
    sachet_cards = page.locator(".hero-sachet-card")
    print("Total hero sachet cards found:", sachet_cards.count())
    sig_cards = page.locator(".sig-card")
    print("Total signature cards found:", sig_cards.count())

    # 3. Test Tab 3: Database Encyclopedia
    db_tab = page.locator('button[data-target="viewDatabase"]')
    db_tab.click()
    page.wait_for_timeout(800)
    page.screenshot(path="screenshot_tab3_database.png")
    print("Saved screenshot_tab3_database.png")

    herb_cards = page.locator(".herb-card")
    print("Total herb cards found:", herb_cards.count())

    # 4. Test Tab 4: About & Team
    about_tab = page.locator('button[data-target="viewAbout"]')
    about_tab.click()
    page.wait_for_timeout(800)
    page.screenshot(path="screenshot_tab4_about.png")
    print("Saved screenshot_tab4_about.png")

    team_cards = page.locator(".team-card")
    print("Total team cards found:", team_cards.count())

    # 5. Test AI Mixologist Generator in Tab 1
    mix_tab = page.locator('button[data-target="viewMixologist"]')
    mix_tab.click()
    page.wait_for_timeout(500)
    gen_btn = page.locator("#btnGenerate")
    gen_btn.click()
    page.wait_for_timeout(2000)
    page.screenshot(path="screenshot_tab1_generated.png")
    print("Saved screenshot_tab1_generated.png")

    print("Final Console errors:", console_errors)
    browser.close()
