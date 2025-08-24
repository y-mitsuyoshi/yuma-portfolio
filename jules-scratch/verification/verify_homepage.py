from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000/")

    time.sleep(5) # wait for 5 seconds

    with open("page_content.html", "w") as f:
        f.write(page.content())

    # Wait for the contact card to be visible
    contact_card_selector = "div.bg-gray-200"
    page.wait_for_selector(contact_card_selector)

    # Take a screenshot of the contact card
    element = page.query_selector(contact_card_selector)
    element.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
