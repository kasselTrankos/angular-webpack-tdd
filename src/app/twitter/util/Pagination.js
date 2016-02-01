module.exports = function(tweets, tweetPerPage){
  var Tweets = tweets || false;
  var TweetPerPage = TweetPerPage || 10;

  function GetPages() {
    return Math.ceil(Tweets/TweetPerPage);
  }
  return {
    GetPages: GetPages
  }
}
