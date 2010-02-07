// Loads DISQUS comments on a post page

// set-up DISQUS params
var disqus_identifier = "itsabodybuildingblog.com{{ page.id }}",
    // disqus_developer = 1,
    disqus_title = "{{ page.title }}";

// include DISQUS when page loaded
$(document).ready(function(){
  $("#disqus_thread").html("<p class='loading'>Loading comments, please wait...</p>");
  $.getScript("http://disqus.com/forums/itsabodybuildingblog/embed.js");

  // because disqus doesn't have any reasonable 'loaded' event
  // we need to fake it with some polling
  var waitForDisqus = setInterval(function () {
    if($("#dsq-comments").length > 0) {
      $('#disqus_thread .loading').remove();
      clearInterval(waitForDisqus);
    }
  }, 100);
});
