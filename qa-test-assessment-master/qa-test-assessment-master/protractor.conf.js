// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
reporter = require('cucumber-html-reporter');
fs = require('fs');
mkdirp = require('mkdirp');
path = require('path');

const jsonReports = path.join(process.cwd(), '/test-reports/json');
const htmlReports = path.join(process.cwd(), '/test-reports/html');
const targetJson = `${jsonReports}/cucumber-test-results.json`;

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts', './hooks.js'
    ],
    format: [
      'json:test-reports/json/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
    // Following steps will create report folder
    if (!fs.existsSync(jsonReports)) {
      mkdirp.sync(jsonReports);
    }
  },
  onComplete: () => {
    const cucumberReporterOptions = {
      jsonFile: targetJson,
      output: `${htmlReports}/cucumber-test-results.html`,
      reportSuiteAsScenarios: true,
      theme: 'bootstrap'
    };
    // Following step will generate test report
    reporter.generate(cucumberReporterOptions);
  },
};
