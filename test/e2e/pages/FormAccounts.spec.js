describe('Person', function () {

  var Person;
  beforeEach(angular.mock.module('twitter'));


  describe('Constructor', function () {

    it('assigns a name', function () {
      inject(function($compile,$rootScope) {
        scope = $rootScope.$new();

        // get an element representation
        elem = angular.element("<span custom-color=\"rgb(128, 128, 128)\">sample</span>");

        // create a new child scope
        scope = $rootScope.$new();

        // finally compile the HTML
        $compile(elem)(scope);

        // expect the background-color css property to be desirabe one
        expect(elem.css("background-color")).toEqual('rgb(128, 128, 128)');
      });
    });

  });

});
