import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright-core");
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
for (const [w,h,n] of [[1440,900,'ch4-desktop'],[390,844,'ch4-mobile']]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto("http://localhost:4501/", { waitUntil: "networkidle" });
  const H = await p.evaluate(() => document.querySelector('.dossier').getBoundingClientRect().top + scrollY);
  for (let y = 0; y < H + (w>800?200:900); y += 300) { await p.mouse.wheel(0, 300); await p.waitForTimeout(40); }
  await p.waitForTimeout(2500);
  const st = await p.evaluate(() => [...document.querySelectorAll('.demo-vid')].map(v => ({ shown: v.offsetParent !== null, playing: !v.paused, t: +v.currentTime.toFixed(1) })));
  console.log(n, JSON.stringify(st), errs, 'overflow', await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth));
  await p.screenshot({ path: `lab/${n}.png` });
}
await b.close();
