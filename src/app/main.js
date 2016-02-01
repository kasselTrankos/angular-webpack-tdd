require('./../style/main.scss');
require('angular');
require('angular-material');
angular.module('ats.main', ['ngMaterial'])
  .controller('AppCtrl', require('./controllers/AppCtrl'));
