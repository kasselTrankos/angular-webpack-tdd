module.exports = function(tweets, tweetPerPage, showPagesPagination){
  'use strict';
  var Tweets = tweets || false;
  var TweetPerPage = tweetPerPage || 10;
  var ShowPagesPagination = showPagesPagination || 10;
  var currentPage = 1;
  function getPages() {
    return Math.ceil(Tweets/TweetPerPage);
  }
  function getMiddlePage(){
    return Math.ceil(showPagesPagination/2);
  }
  function lessThanMiddle(){
    return (currentPage<=getMiddlePage());
  }

  function isinLastSectionPagination(){
    return (currentPage>=parseInt(getPages()-ShowPagesPagination));
  }
  function setActualPage(page){
    currentPage = page;
  }
 function getFirstPage(){
    return  (lessThanMiddle()) ?
      currentPage :
      (isinLastSectionPagination()) ? parseInt(getPages()-ShowPagesPagination)
      : Math.ceil(currentPage-getMiddlePage());
  }


  function showNavigationNextButton() {
    return (!isinLastSectionPagination());
  }
  return {
    getPages: getPages,
    setActualPage: setActualPage,
    getFirstPage: getFirstPage,
    showNavigationNextButton: showNavigationNextButton
  };
};
