/* @ngInject */
var FormController = function(accountService){
  'use strict';
  var vm = this;
  vm.account = '';
  accountService.loadAccounts();

};
module.exports = FormController;
