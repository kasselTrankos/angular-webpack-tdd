module.exports = function(tweets, tweetPerPage, showPagesPagination){
  var Tweets = tweets || false;
  var TweetPerPage = tweetPerPage || 10;
  var ShowPagesPagination = showPagesPagination || 10;
  var currentPage = 1;
  function getPages() {
    return Math.ceil(Tweets/TweetPerPage);
  }
  function setActualPage(page){
    currentPage = page;
    return this;
  }
 function getFirstPage(){
    return (lessThanMiddle()) ? currentPage : Math.ceil(currentPage-getMiddlePage());
  }

  function lessThanMiddle(){
    return (currentPage<=getMiddlePage());
  }
  function getMiddlePage(){
    return Math.ceil(showPagesPagination/2);
  }
  return {
    getPages: getPages,
    setActualPage: setActualPage,
    getFirstPage: getFirstPage
  }
}
