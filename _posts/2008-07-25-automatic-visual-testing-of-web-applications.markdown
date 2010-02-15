---
layout: post
title: "Automatic Visual Testing of Web Applications"
summary: |
  The topic of automatic visual testing returns to me like a boomerang. There are a lot of tools for automatic testing of the back-end (unit tests, integration tests, etc...) in every programming language you can possibly imagine. They even have the whole methodology of Test Driven Development. For testing the front-end we have [Selenium](http://selenium.openqa.org/) or  Ruby based [Watir](http://wtr.rubyforge.org/), but still all they test is the functionality of the web application or a website, and not the visual look of it.

  I'd like a tool, that will automagically tell me, if my web application still looks how it was intended to look. I need to know if my CSS refactoring didn't break the whole thing somewhere on a page I don't even look at, when I'm manually clicking.

  Is it really possible to automate visual testing? And if it is, will it be useful?
---

What it a Visual Test?
------------------------

If you are a web designer or developer working on a website, you look at it in a browser, click through it and you see if everything is fine. You check, if the font is as big as it should, if the background is blue, if there is no additional padding somewhere between the sidebar modules, or if this floated div got totally messed up in IE6.

It's just that simple: you look at a page and you know if it is OK or not, because you know how it should look.

All we have here is just two actions: *look* at a page and *compare* it with some reference image. For a web designer it may be just an image in his mind, but maybe he already has a photoshop design to compare? Also some other professional human tester may have a checklist or a test scenario and a bunch of reference screenshots to use while running through the website.

But is it possible to automate this process?


Automatic Visual Tests
------------------------

It seems that it's quite simple: *look* and *compare*. As I said before, in some cases reference screen-shots may already exist for human testers, so if a tester can compare what he sees in a browser, with what he has on a screen-shot, maybe computer can do the same thing?

Let's describe the ideal scenario of such automatic testing in work.

What we have is a website (or a web application) to test. Let's look at is as just a bunch of pages, screens, set of URLs to check. We also assume that for each screen to test, we have a reference screen-shot to compare with.

So all our automatic tool needs to do, is to open each screen in a browser, take a screen-shot of it (this is the *look* part) and compare it (yes, *compare*) with a reference screen-shot. Seems to be extremely simple process to automate, but after a little bit of thinking it shows up, that this compare part may become really tricky.


Problems with visual comparison
---------------------------------

Comparing images is a very cognitive process and human mind is extremely powerful in this case, but it doesn't really work well with computers. It's really hard for a machine to look at the image, as all it has is a grid of pixels. A lot of work and research was made in the field of pattern recognition to help computers understand and process images, but that's not the thing we are looking at right now, so let's just stick to our problem of comparing two images.

As an image is just a grid of pixels, the most obvious way to check if two images are equal is to simply compare them pixel by pixel. But such a simple solution is just a beginning to more and more problems, because do we really need the two screens to be equal on the level of single pixels? Should one small pixel difference cause the test to fail? If not, how many pixels should make the difference?

What is more, the way how a page looks depends on a rendering engine. Even though there shouldn't be that much differences in the general look of the page, but small details like font rendering may make a huge difference on a level of the pixels. This problem cannot be solved without some assumptions to our testing process.

The other thing is a detail of testing itself. Most of testing methodologies say, that one single test should test just one small single feature. This is how unit tests work, this is how selenium tests should be build. But comparing the screen-shots of the whole screens is like testing every feature on a page. We test the content, we test if all the buttons and links (even those not important at all) are in the proper places, we test colours, positioning, font sizes and everything...

It would be great to be able to create and compare screen-shots of just a parts of the website (single modules for example), so we could test just a header or a sidebar. Or maybe take it from the other side and not compare images but test CSS styles and rules applied to the chosen elements?

But that's another long story and it's not a place to dig into details. I may do it some other time if there will be an interest.


The Tool
----------

So I hope you get the idea of visual testing, but how about a real tool for this task?

I've made a research and I found a [Visual Flex Unit](http://code.google.com/p/visualflexunit/wiki/VisualFlexUnit), that is an extension for Flex Unit to visually test the UI components build in Flex. This is directly the idea of comparing two images. In case of VisualFlexUnit they avoid all the problems I mentioned above, as there are really no cross-browser issues (the Flash is pretty much the same everywhere) and they test one single component, so the problem of too general tests just disappears.

Unfortunately, when it comes to visual testing HTML based web applications, there is no tool to help us (or at least there are some that I couldn't find)...

And wouldn't it be great to have such as an extension to a Selenium?

