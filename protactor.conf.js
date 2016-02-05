exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/e2e/pages/FormAccount.specs.js'],
  rootElement: '[ng-app]',
  // The timeout in milliseconds for each script run on the browser. This should
  // be longer than the maximum time your application needs to stabilize between
  // tasks.
  allScriptsTimeout: 21000,

  // How long to wait for a page to load.
  getPageTimeout: 20000,
};
