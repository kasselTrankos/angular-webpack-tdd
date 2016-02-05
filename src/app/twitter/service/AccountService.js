/* @ngInject */
var AccountService = function($http, serverConfig){
  'use strict';
  var loadAccounts = function(){
    var promise = $http.get(serverConfig.account).then(function (response) {
        // The then function here is an opportunity to modify the response
        // console.log(response.data);
        // The return value gets picked up by the then in the controller.
        return response.data;
      }).catch(function(e){
        // handle errors in processing or in error.
        return e;
      });
      // Return the promise to the controller
      return promise;
  };
  return {
    loadAccounts: loadAccounts
  };
};
module.exports = AccountService;
