from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:3000/")

    # Wait for the contact card to be visible
    contact_card_selector = "div.bg-gray-200.py-12"
    contact_card = page.locator(contact_card_selector)
    expect(contact_card).to_be_visible()

    # Take a screenshot of the contact card element
    contact_card.screenshot(path="jules-scratch/verification/contact_card.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
