require('angular');
require('angular-ui-router');

var RouterConfig = require('./config/RouterConfig');

angular.module('twitter', ['ui.router'])
.config(RouterConfig)
.controller('FormController', require('twitter/controller/FormController'))
.service('accountService', require('twitter/service/AccountService'))
.constant('MODULE_VERSION', '0.0.1')
.constant('serverConfig', require('twitter/constant/serverConfig'))
