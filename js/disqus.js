(function () {

// Loads DISQUS comments on a post page
loadDisqus = function () {
  $("#disqus_thread")
    .addClass('loading')
    .html("<p class='loading'>Loading comments, please wait...</p>");
  $.getScript("http://disqus.com/forums/itsabodybuildingblog/embed.js");

  // because disqus doesn't have any reasonable 'loaded' event
  // we need to fake it with some polling
  var waitForDisqus = setInterval(function () {
    if($("#dsq-comments").length > 0) {
      $('#dsq-content').hide();
      $('#disqus_thread').removeClass('loading')
        .find('.loading').remove();
      $('#dsq-content').slideDown();
      clearInterval(waitForDisqus);
    }
  }, 100);

  return false;
};

// include DISQUS when page loaded
$(document).ready(function () {
  $("#disqus_thread a[rel='disqus']").click(loadDisqus);
});

})();

