var expect    = require("chai").expect;
var Pagination = require('./../src/app/twitter/util/Pagination');
describe('Pagination for Tweets', function() {
  describe('Tweets to pages', function(){
    it("converts tweets to pages", function(){
      var Tweets = 181;
      var TweetsByPage = 10;
      expect(Pagination(Tweets, TweetsByPage).GetPages()).to.equal(19);
    });
  });
});
