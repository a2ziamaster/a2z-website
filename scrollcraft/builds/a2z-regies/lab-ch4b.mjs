import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright-core");
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:4501/", { waitUntil: "networkidle" });
const H = await p.evaluate(() => document.querySelector('.dossier').getBoundingClientRect().top + scrollY);
for (let y = 0; y < H + 400; y += 300) { await p.mouse.wheel(0, 300); await p.waitForTimeout(40); }
await p.waitForTimeout(2500);
await p.locator('.dossier').screenshot({ path: 'lab/ch4-section.png' });
await b.close();
