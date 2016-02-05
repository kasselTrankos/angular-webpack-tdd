'use strict';
describe('Twitter::FormController', function () {

  var scope, ctrl, location, accountService;
  beforeEach(angular.mock.module('twitter'));

  beforeEach(inject(function($rootScope, $controller, _accountService_){
    scope = $rootScope.$new();
    ctrl = $controller('FormController', {accountService: _accountService_});
    accountService = _accountService_;
  }));
  it('expect called accountService.loadAccounts', function(){
    sinon.stub(accountService, 'loadAccounts');
    accountService.loadAccounts();
    expect(accountService.loadAccounts).to.have.been.called;
  });
  it('expect account var is definded', function () {
    expect(ctrl.account).to.not.be.undefined;
  });
  it('expect accounts has \'loading\', \'error\' and \'data\'', function () {
    expect(ctrl.accounts).to.contain.all.keys(['loading', 'error', 'data']);
  });

});
