require('./../style/main.scss');
require('angular');
require('angular-material');
angular.module('ats.main', ['ngMaterial'])
  .controller('AppController', require('./controllers/AppController'));
