---
layout: post
title: "Genealogy in the Time of Web 2.0"

summary: |
  In every family there is such a time when someone starts to looking into family roots. It seems that it's *that* time for my family, as my father created lots of paper sheets with quite random pack of names and lines joining them.

  He asked:

  > Bartek, maybe you will write some app to organize this thing, keep it all together? In few months I'll forget who is who on this papers.

  What could I answer?

  > Yeay! Why not! Seems like fun.

  But, as once I was told that good programmer is a lazy programmer. So as a lazy programmer I started with googling some genealogy software and on-line family trees :)
---

Of course all the desktop applications where dismissed at the beginning. Not only because they all look so bad (dark ages of early '90) but you know, it's 21st century, age of Web 2.0.

So I quickly found and signed into some on-line genealogy services ([geni.com](http://geni.com), [myheritage.com](http://myheritage.com) and Polish [moikrewni.pl](http://moikrewni.pl)) that surprisingly seem to be each other's clones. I don't know which one was the first. It doesn't matter. I've chosen moikrewni as it's all in Polish and it would be easier for my relatives to use it.

It seemed quite fun at the start. With nice Flash based tree visualisation with quick editing directly inside the tree. But when the tree grew up over 200 people it started to be extremely slow and really unusable...

Building family tree is based on adding and editing data. And on this stage I really don't care much about visualisation. And this simple task of adding data became really annoying at some point because of some small usability problems.

In addition this visually nice interface doesn't allow to model some of the relations between people. Even not very complicated. For example when two family lines are joined in two places. Let's say two brothers married two sisters. It's not something unusual and impossible in the real world. But it is in this application (in all of these as far as I checked).

So after last session of adding far far relatives, after being annoyed again with lags, bugs and absolute ignorance about usability this lazy programmer in me just went away leaving some place to the other one --- the If-You-Want-Something-To-Be-Done-Well-Do-It-Yourself guy.

I've downloaded [django](http://www.djangoproject.com) and after an hour or so (literaly --- including running through [docs](http://djangobook.com)) I had simple data model ready and built in [admin app](http://www.djangobook.com/en/1.0/chapter06/) allowed me to add and edit data in much easier and usable way. No kidding.

Of course the problem will come with family tree visualisation... But man... I've studied intelligent decision support systems, if I can't do it than who can? ;)

Python has bindings to so many great libraries that for sure I'll find something that will suit me. [Graphviz](http://www.graphviz.org) maybe? But I'm still not sure, maybe I'll try to do some XHTML + `<canvas>` + JavaScript magic? [John Resig's processing.js](http://ejohn.org/blog/processingjs/) looks extremely tempting in here...

I'll keep you updated. And if you have any thoughts just leave me a comment.

