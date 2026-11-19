import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright-core");
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await p.goto("http://localhost:4501/", { waitUntil: "networkidle" });
await p.mouse.wheel(0, 560); await p.waitForTimeout(5200);
console.log(await p.evaluate(() => [...document.querySelectorAll('.note.is-in')].length));
await p.screenshot({ path: "lab/hero-mobile-scrolled.png" });
await b.close();
