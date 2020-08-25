const { Before, After, Status } = require('cucumber');
const { browser, protractor } = require('protractor');
const { setDefaultTimeout } = require('cucumber');

Before({ timeout: 10 * 10000 }, async () => {
  setDefaultTimeout(60 * 10000);
  await browser.get(browser.baseUrl);
});

After(async function (scenario) {
  // Following steps takes screenshot on failure of each scenario
  if (scenario.result.status === Status.FAILED) {
    console.log(scenario.result.status);
    console.log(Status.FAILED);
        // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
