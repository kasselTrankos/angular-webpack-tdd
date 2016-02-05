describe('Twitter::Form Page', function () {
  var scope, ctrl, location;
  beforeEach(angular.mock.module('twitter'));
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(inject(function($rootScope, $controller, $location){
    scope = $rootScope.$new();
    ctrl = $controller('FormController', {$scope: scope});
    location = $location;
  }));



  it('should expect stationId to be undefined if stationId not defined in route parameters', function () {
    expect(scope.stationId).to.be.undefined;
  });

});
