$(document).ready(function () {

  function separator(text) {
    return "<div class=\"markdown separator\">" + text.replace(/./g, "-") + "</div>";
  };
  function span(text) {
    return "<span class=\"markdown\">" + text + "</span>";
  };

  // yaml meta data
  $("h1.entry-title").prepend(span("title: "))
    .before(separator("---"));

  $("#tagline")
    .insertBefore($(".entry-title"))
    .prepend(span("# "));
  $("p.meta")
    .after(separator("---"))
    .find(".author").prepend(span("author: ")).end()
    .find(".published").prepend(span("date: "));

  // markdown
  var links = $("<ul class=\"links markdown\">");
  $("#content")
    .append(links)
    .find("em").prepend(span("*")).append(span("*")).end()
    .find("strong").prepend(span("**")).append(span("**")).end()
    .find("h2").append(function () { return separator($(this).text() + "--") }).end()
    .find("h3").prepend(span("### ")).end()
    .find("a[href]")
      .before(span("[")).after(span("]"))
      .each(function () {
        var text = $(this).text(),
            href = $(this).attr('href'),
            justify = text.length > 13 ? 32 : 13,
            space = "";
        for(var i = 0; i < justify - text.length; i++) space += "&nbsp;";
        
        links.append("<li>[<a href=\"" + href + "\">" + text + "</a>]: " + space + href + "</li>");
      });

  $('body').addClass('markdownized');

});
