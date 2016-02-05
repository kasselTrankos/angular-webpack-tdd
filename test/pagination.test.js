var expect    = require("chai").expect;
var Pagination = require('./../src/app/twitter/util/Pagination');
var Tweets, TweetsByPage, ShowPagesPagination;
beforeEach(function() {
  Tweets = 181;
  TweetsByPage = 10;
  ShowPagesPagination = 6;
});
describe('Pagination for Tweets', function() {
  describe('Tweets to pages', function(){
    it("Given 181 tweets expects 19 pages(max. 10 tweets by page)", function(){
      expect(Pagination(Tweets, TweetsByPage).getPages()).to.equal(19);
    });
    it("Expect first page of pagination the 3, when page actual is 3 or 6", function(){
      var pagination = Pagination(Tweets, TweetsByPage, ShowPagesPagination);
      pagination.setActualPage(6);
      expect(pagination.getFirstPage()).to.equal(3);
    });
    it('Expect to show next navigation button when page is 10', function(){
      var pagination = Pagination(Tweets, TweetsByPage, ShowPagesPagination);
      pagination.setActualPage(10);
      expect(pagination.showNavigationNextButton()).to.be.true;
    });
  });
});
