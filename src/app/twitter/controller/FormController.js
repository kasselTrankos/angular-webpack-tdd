/* @ngInject */
var FormController = function(accountService){
  'use strict';
  var vm = this;
  vm.account = '';
  vm.accounts = {
    error: false,
    loading: false,
    data: null
  }

  accountService.loadAccounts().then(function(response){
    vm.accounts = {
      data: response.data,
      error: false,
      loading: false
    }
  });

};
module.exports = FormController;
