var testsContext;
require('./bower_components/angular/angular');
require('./bower_components/angular-mocks/angular-mocks');
require('./src/app/main.js');
testsContext = require.context('./test', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
