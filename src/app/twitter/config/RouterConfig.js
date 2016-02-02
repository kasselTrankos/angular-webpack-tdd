
/* @ngInject */
var RouterConfig = function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider
  .otherwise('/');

  $stateProvider
  .state("home", {
    url: "/",
    template: require('twitter/template/form.template.html'),
    controller: require('twitter/controller/FormController'),
    controllerAs:'vm'
  });


  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

module.exports = RouterConfig;
