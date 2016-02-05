'use strict';
describe('Twitter::Form Page', function () {

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
    console.log(ctrl, ' joder');
    expect(ctrl.account).to.not.be.undefined;
  });


});
