---
layout: post
title: "Fighting comment spam"
summary: |
  Some time ago I released this new version of my blog with very simple comment functionality. It didn't take too long for comment-spam bots to find it and flood me with some very useful links...

  It's quite obvious that you simply can't build any public comment form without any mean of spam prevention.
---

So I needed some tool to block spam in my comments but I really hate [captcha](http://en.wikipedia.org/wiki/CAPTCHA) (and [I'm not the only one](http://www.google.com/search?q=i+hate+captcha)). Captchas are not usable and in most cases they are not accessible at all... They make you solve some stupid riddles, when you really don't want it. Captchas are evil.

I wanted something that will nicely fit into Steve Krug's *don't make me think* rule. A Turing test that on one hand will be simple and user-friendly, and on the other hand will be effective in blocking spammers.

The solution I used couldn't be simpler. I just added a question to my comment form asking if a visitor is a human or not, so all you need to do is typing *yes* (I even added a clue to make it easier). I assume that a real person visiting my blog will understand this question (and a clue) and spam-bots will not. The only reason this solution works is that it's not common and spam-bots are not prepared to break it.

This simple trick successfully blocks dozens of spammy comments every week. I don't know how it works for real users, as I don't get many comments lately... Hopefully it will change one day, so go ahead and try yourself in my Turing test ;)

