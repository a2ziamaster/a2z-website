import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright-core");
const URL = process.argv[2] || "http://localhost:4501/";
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const [w,h,n] of [[1440,900,'hero-desktop'],[390,844,'hero-mobile']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
  await p.goto(URL, { waitUntil: "networkidle" });
  await p.waitForTimeout(6500);
  await p.screenshot({ path: `lab/${n}.png` });
  const live = await p.evaluate(() => ({ live: document.querySelector('.plate__far').classList.contains('is-live'), notes: [...document.querySelectorAll('.note.is-in')].length, ow: document.documentElement.scrollWidth - innerWidth }));
  console.log(n, JSON.stringify(live), errs.slice(0,3));
}
await b.close();
