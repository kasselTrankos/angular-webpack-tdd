import {Timeline} from './../twitter/api';
import chaiAsPromised from 'chai-as-promised';
import chai from 'chai';
var expect = require("chai").expect;
chai.use(chaiAsPromised);
describe('Stream Twitter API', function(){
  this.timeout(15000);
  it('expect 20 tweets from account kasselTrankos', function(done){
    expect(Timeline('kasselTrankos'))
    .to.eventually.have.length(20)
    .notify(done);
  });
});
