import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright-core");
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const [w,h,n] of [[1440,900,'end-desktop'],[390,844,'end-mobile']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto("http://localhost:4500/", { waitUntil: "networkidle" });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 300) { await p.mouse.wheel(0, 300); await p.waitForTimeout(40); }
  await p.waitForTimeout(1800);
  const r = await p.evaluate(() => { const q = s => [...document.querySelectorAll(s)].map(e => getComputedStyle(e).opacity); return { y: scrollY, ask: q('.ask'), faq: q('.faq details'), askTop: Math.round(document.querySelector('.ask').getBoundingClientRect().top) }; });
  console.log(n, JSON.stringify(r));
  await p.screenshot({ path: `lab/${n}.png` });
}
await b.close();
