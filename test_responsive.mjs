import puppeteer from 'puppeteer';
import path from 'path';

const targetUrl = 'https://chemapad.github.io/rr-integral-services-v2/';
const outputDir = '/Users/josepadron/.gemini/antigravity/brain/3a6141e4-4838-4ade-b16d-2b28af6a19aa';

const viewports = [
  { name: 'mobile_375', width: 375, height: 812 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'desktop_1440', width: 1440, height: 900 }
];

async function runTests() {
  console.log('Launching browser for responsive design tests...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const vp of viewports) {
    console.log(`Testing viewport ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    // Take full page screenshot
    const screenshotPath = path.join(outputDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot: ${screenshotPath}`);

    // If mobile, test opening mobile drawer menu
    if (vp.name === 'mobile_375') {
      const menuBtn = await page.$('button[aria-label="Toggle menu"]');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 500));
        const menuOpenPath = path.join(outputDir, 'mobile_menu_open.png');
        await page.screenshot({ path: menuOpenPath });
        console.log(`Saved mobile menu open screenshot: ${menuOpenPath}`);
      }
    }
  }

  await browser.close();
  console.log('Responsive design tests completed successfully!');
}

runTests().catch(err => {
  console.error('Error running responsive tests:', err);
  process.exit(1);
});
