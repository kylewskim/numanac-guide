import { chromium, Page } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

const EMAIL = "Testerqatester212@gmail.com";
const PASSWORD = "gedsum-juxTuw-6nesxi";
const BASE_URL = "https://site.numanac.com";
const MOBILE_VIEWPORT = { width: 393, height: 852 };
const OUT = path.join(process.cwd(), "public/screenshots");

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

async function shot(page: Page, filepath: string) {
  const full = path.join(OUT, filepath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  await page.screenshot({ path: full });
  console.log("  ✓", filepath);
}

async function closeAnyDrawer(page: Page) {
  // Press Escape and also try clicking outside the drawer
  await page.keyboard.press("Escape");
  await wait(800);
  // If a dialog/drawer is still open, click outside it
  const dialog = page.locator('[role="dialog"]');
  if (await dialog.count() > 0) {
    await page.mouse.click(196, 50); // top-center, outside drawer
    await wait(800);
    await page.keyboard.press("Escape");
    await wait(500);
  }
}

async function clickNavTab(page: Page, tabName: string) {
  // Close any open drawers first
  await closeAnyDrawer(page);

  // Click the last button with that text (nav bar is at the bottom, usually last)
  const btn = page.locator("button").filter({ hasText: new RegExp(`^${tabName}$`, "i") });
  const count = await btn.count();
  if (count === 0) {
    console.log(`  ⚠ Tab "${tabName}" not found`);
    return;
  }
  await btn.last().click({ timeout: 8000 });
  await wait(2000);
}

async function fullLogin(page: Page) {
  console.log("\n🔐 Logging in...");
  await page.goto(BASE_URL);
  await page.waitForLoadState("networkidle");
  await wait(2000);

  await shot(page, "onboarding/login-screen.png");
  await page.fill('input[type="email"]', EMAIL);
  await shot(page, "onboarding/signup-email.png");
  await page.click('button:has-text("Continue")');
  await wait(3000);
  await shot(page, "onboarding/signup-password.png");
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await wait(5000);

  const org = page.locator('text="qatester tester"').first();
  if (await org.count() > 0) { await org.click(); await wait(4000); }

  const ws = page.locator("button").filter({ hasText: "qatester tester" });
  if (await ws.count() > 0) { await ws.first().click(); await wait(5000); }

  console.log("  ✓ Logged in →", page.url());
}

async function mapScreenshots(page: Page) {
  console.log("\n🗺️  Map...");
  await wait(2000);
  await shot(page, "map/map-overview.png");

  // FAB button (+ to add field/tract)
  await page.mouse.click(350, 620);
  await wait(2000);
  await shot(page, "map/map-add-menu.png");

  // Click "Field View" option
  const fieldViewBtn = page.locator("button").filter({ hasText: "Field View" });
  if (await fieldViewBtn.count() > 0) {
    await shot(page, "map/map-select-field-view.png");
    await fieldViewBtn.click();
    await wait(2000);
    await shot(page, "map/map-draw-boundary.png");
    await page.keyboard.press("Escape");
    await wait(1000);
  }

  await shot(page, "map/map-clean.png");

  // Layers button
  await page.mouse.click(350, 660);
  await wait(2000);
  await shot(page, "map/map-layers-menu.png");
  await page.keyboard.press("Escape");
  await wait(1000);
}

async function recordsScreenshots(page: Page) {
  console.log("\n📝 Records...");
  await clickNavTab(page, "Records");
  await shot(page, "logging/records-list.png");
  await page.screenshot({ path: path.join(OUT, "logging/records-full.png"), fullPage: true });

  // List buttons for debugging
  const btns = await page.locator("button").all();
  for (let i = 0; i < btns.length; i++) {
    const t = (await btns[i].innerText().catch(() => "")).trim();
    const box = await btns[i].boundingBox().catch(() => null);
    const pos = box ? `(${Math.round(box.x)},${Math.round(box.y)})` : "";
    if (t) console.log(`  [${i}] "${t.slice(0, 30)}" ${pos}`);
  }

  // Find and click the mic button specifically by aria-label or position
  // The mic button is usually the large button in the center bottom area
  const micBtn = page.locator('button[aria-label*="mic" i], button[aria-label*="record" i], button[aria-label*="speak" i]').first();
  if (await micBtn.count() > 0) {
    await shot(page, "logging/mic-button.png");
    // Don't click it to avoid opening drawer
  } else {
    // Find the FAB-like button at center bottom — inspect center area
    await shot(page, "logging/records-center.png");
  }

  // Try clicking a record row to see detail (not the mic)
  const recordRow = page.locator('[role="listitem"], [role="row"], .record-item').first();
  if (await recordRow.count() > 0) {
    await recordRow.click();
    await wait(2000);
    await shot(page, "logging/record-detail.png");
    await closeAnyDrawer(page);
  }

  // + button for manual entry
  const plusBtn = page.locator("button").filter({ hasText: "+" });
  if (await plusBtn.count() > 0) {
    await plusBtn.last().click();
    await wait(2000);
    await shot(page, "logging/new-record-form.png");
    await closeAnyDrawer(page);
  }
}

async function chatScreenshots(page: Page) {
  console.log("\n🤖 Chat/Alma...");
  await clickNavTab(page, "Chat");
  await shot(page, "alma/chat-main.png");
  await page.screenshot({ path: path.join(OUT, "alma/chat-full.png"), fullPage: true });

  // List buttons
  const btns = await page.locator("button").all();
  for (const btn of btns) {
    const t = (await btn.innerText().catch(() => "")).trim();
    const a = await btn.getAttribute("aria-label").catch(() => "");
    const box = await btn.boundingBox().catch(() => null);
    const pos = box ? `(${Math.round(box.x)},${Math.round(box.y)})` : "";
    if (t || a) console.log(`  [chat] "${t.slice(0, 40)}" [${a}] ${pos}`);
  }

  // Focus textarea
  const textarea = page.locator("textarea, input[type='text']").first();
  if (await textarea.count() > 0) {
    await textarea.click();
    await wait(500);
    await shot(page, "alma/chat-input.png");
    // Type a sample query
    await textarea.fill("What happened in my fields last week?");
    await shot(page, "alma/chat-query-typed.png");
    await page.keyboard.press("Escape");
    await wait(500);
  }

  // History (clock) button
  const historyBtn = page.locator('button[aria-label*="history" i], button[aria-label*="clock" i]').first();
  if (await historyBtn.count() > 0) {
    await historyBtn.click();
    await wait(1500);
    await shot(page, "alma/chat-history.png");
    await closeAnyDrawer(page);
  }

  // New chat (+) button
  const newBtn = page.locator("button").filter({ hasText: /^\+$/ }).first();
  if (await newBtn.count() > 0) {
    await shot(page, "alma/chat-new-btn.png");
  }

  // Add Focus button
  const focusBtn = page.locator("button").filter({ hasText: /focus|add focus/i }).first();
  if (await focusBtn.count() > 0) {
    await focusBtn.click();
    await wait(1500);
    await shot(page, "alma/chat-focus-modal.png");
    await closeAnyDrawer(page);
  }
}

async function alertsScreenshots(page: Page) {
  console.log("\n🔔 Alerts...");
  await clickNavTab(page, "Alerts");
  await wait(1000);
  await shot(page, "alerts/alerts-main.png");
}

async function settingsScreenshots(page: Page) {
  console.log("\n⚙️  Settings...");
  await clickNavTab(page, "Settings");
  await shot(page, "settings/settings-main.png");
  await page.screenshot({ path: path.join(OUT, "settings/settings-full.png"), fullPage: true });

  // Log text content
  const text = (await page.locator("body").innerText().catch(() => "")).slice(0, 600);
  console.log("  Content:", text);

  // Log all buttons
  const btns = await page.locator("button").all();
  for (const btn of btns) {
    const t = (await btn.innerText().catch(() => "")).trim();
    const box = await btn.boundingBox().catch(() => null);
    if (t) console.log(`  [settings] "${t.slice(0, 50)}" pos=${box ? `(${Math.round(box.x)},${Math.round(box.y)})` : ""}`);
  }

  // Click plan/account area to see subscription details
  const planBtn = page.locator("button").filter({ hasText: /plan|billing|subscription|account/i }).first();
  if (await planBtn.count() > 0) {
    await planBtn.click();
    await wait(2000);
    await shot(page, "settings/settings-plan-detail.png");
    await closeAnyDrawer(page);
  } else {
    // Try clicking somewhere on the plan card area
    await page.mouse.click(196, 300);
    await wait(2000);
    await shot(page, "settings/settings-plan-detail.png");
    await closeAnyDrawer(page);
  }

  // Invite/Team button
  const inviteBtn = page.locator("button").filter({ hasText: /invite|team/i }).first();
  if (await inviteBtn.count() > 0) {
    await inviteBtn.click();
    await wait(2000);
    await shot(page, "team/invite-form.png");
    await closeAnyDrawer(page);
  }

  // Seats button
  const seatsBtn = page.locator("button").filter({ hasText: /seat|member/i }).first();
  if (await seatsBtn.count() > 0) {
    await seatsBtn.click();
    await wait(2000);
    await shot(page, "team/seats-modal.png");
    await closeAnyDrawer(page);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: MOBILE_VIEWPORT });
  const page = await ctx.newPage();

  try {
    await fullLogin(page);
    await mapScreenshots(page);
    await recordsScreenshots(page);
    await chatScreenshots(page);
    await alertsScreenshots(page);
    await settingsScreenshots(page);

    const pngs = (fs.readdirSync(OUT, { recursive: true }) as string[]).filter(f => f.endsWith(".png"));
    console.log(`\n✅ Done! ${pngs.length} screenshots saved.`);
    pngs.forEach(f => console.log(" ", f));
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
