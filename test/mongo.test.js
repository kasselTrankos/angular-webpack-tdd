import {connect, disconnect, ExitsAccount,
  findAllTweetsByAccount, GetAllAccounts,
  PushMongoTimelineRest} from './../twitter/db';
import {Timeline} from './../twitter/api';
import Mongoose from 'mongoose';

import chaiAsPromised from 'chai-as-promised';
import chai from 'chai';
var expect = require("chai").expect;
chai.use(chaiAsPromised);
before(function(done){
  process.env['MONGODB'] = 'mongodb://localhost:27017/vera';
    Timeline('kasselTrankos').then((docs)=>{
      PushMongoTimelineRest(docs, 'kasselTrankos', '0001');
      if (Mongoose.connection.readyState === 0) {
        connect();
      }
      return done();
    }).catch((err)=>{
    console.log(' no debiera tener ningun error', err);
  });

});
after(function (done) {
  disconnect();
  return done();
});
describe('Tweets::Accounts::Twitter', function(){
  it('expect minium of 2 accounts', function(done){
    expect(GetAllAccounts())
    .to.eventually.have.length.of.at.least(2)
    .notify(done);
  });
  it('expect exists(not null) kasselTrankos account', function(done){
    expect(ExitsAccount('kasselTrankos'))
    .not.to.eventually.null
    .notify(done);
  });
  it('expect minium of 10 tweets from kasselTrankos', function(done){
    expect(findAllTweetsByAccount('kasselTrankos'))
    .to.eventually.have.length.of.at.least(10)
    .notify(done);
  });
});
