describe('Twiitter:: Service Account', function () {
  var accountService, httpBackend;

  beforeEach(angular.mock.module('twitter'));

  beforeEach(inject(function (_accountService_, $httpBackend) {
    accountService = _accountService_;
    httpBackend = $httpBackend;
  }));

  it('expect accounts have that keys: \'name\' and \'_id\'', function () {
    httpBackend.whenGET("http://localhost:3001/apitwitter/account").respond({
        data:[
          {name: 'kasselTrankos', _id: 1},
          {name:'perraco', _id: 2}
        ]
    });
    accountService.loadAccounts().then(function(response) {
      expect(response.data[0]).to.contain.all.keys(['name', '_id']);
    });
    httpBackend.flush();
  });

});
