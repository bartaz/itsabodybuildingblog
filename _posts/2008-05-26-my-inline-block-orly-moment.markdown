---
layout: post
title: "My inline-block 'O RLY?' moment"
summary: |
  Last week [Chris Coyier](http://chriscoyier.net) blogged about those [CSS "Ah-ha!" moments](http://css-tricks.com/the-css-ah-ha-moment/), when you realise how cool and powerful stylesheets are. On the same day I had one of my CSS "O RLY?" moments. This one was all about `inline-block` value of the `display` property.
---

For a really long time I was almost sure that `inline-block` is some kind of Microsoft developers' evil brainchild that can be used to [fix IE6 layout bugs](http://www.satzansatz.de/cssd/onhavinglayout.html), so it was a quite surprise for me to find out that it's [legal and standardized](http://www.w3.org/TR/CSS21/visuren.html#display-prop "W3C CSS 2.1 Specification") value of `display` property.

The problem is that it's not fully supported by IEs and even Firefox 2 still doesn't implement it at all. That's a real pity as it is a really useful display value. It allows you to create elements that behave as inline elements on the outside (so are flowed like inline elements) but inside they're regular block elements with width, height, paddings and stuff.

This is how W3C specifies it:

<blockquote cite="http://www.w3.org/TR/CSS21/visuren.html#value-def-inline-block">
  <dl>
  <dt>inline-block</dt>
  <dd>This value causes an element to generate a block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the element itself is formatted as an inline replaced element.</dd>
  </dl>
</blockquote>

So, if only the browsers would implement it well, we'd be able to build nice and simple *'floating'* layouts even without using `float` and `clear` properties. Fortunately, it seems that with Firefox 3 and IE8 we will have full support for `inline-block` value across most popular browsers.

But for now I still use it as a kind of heal-all for IE6 layout bugs. Honestly, from the depths of my experience I can tell that 90% of *'it looks different in IE6'* issues can be fixed by applying `display: inline-block` on suspicious element or it's parent (of course in IE6-only stylesheet). It's the first thing I try when IE6 starts to misbehave.

I don't want to rewrite everything it's said about it around the web, so if you are interested in this topic just have a look at these sites below or use google :)

* [Display property overview at QuirksMode](http://www.quirksmode.org/css/display.html)
* [Nice explanation of layout issues in IE and how to fix them](http://www.satzansatz.de/cssd/onhavinglayout.html)
* and some [boring but really useful visual formatting model reference](http://www.w3.org/TR/CSS21/visuren.html)

