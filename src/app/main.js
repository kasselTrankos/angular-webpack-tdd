require('font-awesome/css/font-awesome.css');
require('./../style/main.scss');
require('angular');
require('angular-material');
require('twitter/Twitter');

angular.module('ats.main', [
  'ngMaterial', 'twitter'
])
  .controller('AppController', require('./controllers/AppController'));
