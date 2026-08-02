import puppeteer from 'puppeteer';
import path from 'path';

const targetUrl = 'https://chemapad.github.io/rr-integral-services-v2/';
const outputDir = '/Users/josepadron/.gemini/antigravity/brain/3a6141e4-4838-4ade-b16d-2b28af6a19aa';

async function runTests() {
  console.log('Testing Light Mode and English Mode...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });

  // 1. Click EN button
  const langButtons = await page.$$('button');
  for (const btn of langButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('EN')) {
      await btn.click();
      await new Promise(r => setTimeout(r, 500));
      break;
    }
  }

  const englishPath = path.join(outputDir, 'english_mode_desktop.png');
  await page.screenshot({ path: englishPath, fullPage: true });
  console.log(`Saved English mode screenshot: ${englishPath}`);

  // 2. Click Theme toggle button
  for (const btn of langButtons) {
    const title = await page.evaluate(el => el.getAttribute('title'), btn);
    if (title && (title.includes('Modo') || title.includes('Claro') || title.includes('Oscuro'))) {
      await btn.click();
      await new Promise(r => setTimeout(r, 500));
      break;
    }
  }

  const lightPath = path.join(outputDir, 'light_mode_desktop.png');
  await page.screenshot({ path: lightPath, fullPage: true });
  console.log(`Saved Light mode screenshot: ${lightPath}`);

  await browser.close();
  console.log('Bilingual and Theme tests completed successfully!');
}

runTests().catch(err => {
  console.error('Error running theme/lang tests:', err);
  process.exit(1);
});
