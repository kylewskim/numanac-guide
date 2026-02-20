import { chromium, Page } from "@playwright/test";
import * as fs from "fs";

const EMAIL = "Testerqatester212@gmail.com";
const PASSWORD = "gedsum-juxTuw-6nesxi";
const BASE_URL = "https://site.numanac.com";
const MOBILE_VIEWPORT = { width: 393, height: 852 };

async function login(page: Page) {
  await page.goto(BASE_URL);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);

  // Enter email
  await page.fill('input[type="email"]', EMAIL);
  await page.click('button:has-text("Continue")');
  await page.waitForTimeout(3000);

  // Enter password
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);

  // Organization selection (WorkOS)
  const orgBtn = page.locator('text="qatester tester"').first();
  if (await orgBtn.count() > 0) {
    await orgBtn.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(4000);
  }

  // Workspace selection (Numanac)
  const wsBtn = page.locator('button:has-text("qatester tester")');
  if (await wsBtn.count() > 0) {
    await wsBtn.first().click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
  }

  console.log("   Final URL:", page.url());
}

async function explore() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: MOBILE_VIEWPORT });
  const page = await ctx.newPage();

  console.log("=== Logging in ===");
  await login(page);

  await page.screenshot({ path: "scripts/app-main.png" });

  const bodyText = await page.locator("body").innerText().catch(() => "");
  console.log("App text:", bodyText.slice(0, 800));

  // All clickable elements
  const els = await page.locator("a, button, [role='tab'], [role='button']").all();
  console.log("\nClickable elements:", els.length);
  for (const el of els.slice(0, 40)) {
    const text = (await el.innerText().catch(() => "")).trim();
    const href = await el.getAttribute("href").catch(() => null);
    const aria = await el.getAttribute("aria-label").catch(() => null);
    const label = text || aria || "";
    if (label) console.log(`  "${label}"${href ? ` → ${href}` : ""}`);
  }

  // Check URLs by navigating
  const testPaths = ["/map", "/records", "/chat", "/settings", "/weather"];
  for (const p of testPaths) {
    await page.goto(`${BASE_URL}${p}`);
    await page.waitForTimeout(3000);
    const url = page.url();
    const title = await page.title();
    console.log(`${p}: ${url} | ${title}`);
  }

  await browser.close();
}

explore().catch(console.error);
