/* @ngInject */
var AccountService = function($http){
  'use strict';
  var loadAccounts = function(){
    var promise = $http.get('//apitwitter/accounts').then(function (response) {
        // The then function here is an opportunity to modify the response
        // console.log(response.data);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
  };
  return {
    loadAccounts: loadAccounts
  };
};
module.exports = AccountService;
