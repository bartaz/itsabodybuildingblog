---
layout: post
title: Semantic Mark-up of the Home Page
summary: |
  When you start to build a website and you have a general idea about content it will contain, you very often move on to designing the visual part of it and later this visualisation gets marked up into XHTML styled with CSS. It's not a bad way to do it, but in such process in most cases mark-up gets focused much more on the visual part of the design than on semantic meaning of the content.

  That's why the process of building a website should be split into clear steps. I'm just testing such iteration approach while creating this blog and I'll document every step in further posts. Marking up the home page is the first one to go.

    *[XHTML]: eXtensible HyperText Markup Language
    *[CSS]: Cascading Style Sheets
---

So this is how we start --- forget about design. I'm not even thinking how this blog will look like in a week or two. We can handle it later. Now we need to focus on the content and semantic meaning of it.

Even such a simple example of a blog starts to be a long long story when you discuss semantic mark-up, so in this article I'll focus on the home page of this blog and give you some overall idea how I think about it and how I dress up this idea into XHTML tags. In next posts we will move to single article page and dig into some more details if it will be worth it :)

So what are the contents of blog's home page?


Home page check-list
----------------------

Let's create a little check-list of things we'd like to see on a home page.

header
:   Quite obvious, isn't it? Every blog (even every website) has a header with a title, nice logo and other cool stuff that tells us where we are and what can we do. In the case of this blog we will start with showing up a title and some short description.

posts
:   Posts or articles are the key content of the blogs and the list (remember the word *list*) of articles (or excerpts of articles) is the most important thing on blog's home page.

That could be it actually. We have the most important things... but it would be so boring without some short note about the author, access to blog's archive, search functionality or other stuff people often put into sidebar or footer. So what more do we need?

additional info
:   list (*list* --- again) of some kind of modules that will contain note about author, links to archive and maybe some legal stuff.

As we now know what logical parts of page we will have and what they semantically mean we can move on and code this structure.


Page header
-------------

The simple one. As this is a blog's home page, the blog's title is what we need in a header and this is the most important header on the entire page. So what else can we use for it as **`<h1>`** element?

<code class="snippet">
&lt;<strong>h1</strong>&gt;<br/>
&nbsp;&nbsp;&lt;a href="/" title="Take me home, please..." &gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Amazing title of my amazing blog<br/>
&nbsp;&nbsp;&lt;/a&gt;<br/>
&lt;/<strong>h1</strong>&gt;
</code>

We also wanted to have some short description of a blog. If you treat it as a subtitle it may get into **`<h2>`** element, but for me it's just a bunch of text so I put it into simple **`<p>`** paragraph:

<code class="snippet">
&lt;h1&gt;<br/>
&nbsp;&nbsp;&lt;a href="/" title="Take me home, please..." &gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Amazing title of my amazing blog<br/>
&nbsp;&nbsp;&lt;/a&gt;<br/>
&lt;/h1&gt;<br/>
  &lt;<strong>p</strong>&gt;Truly amazing blog about amazing stuff&lt;/<strong>p</strong>&gt; 
</code>

That's it when in comes to header. Now more crazy stuff :)


List of the articles
----------------------

In every blogging service I've touched, in every template I've seen, there was the same schema used: there was some posts container made with **`<div>`** element and inside of it a pack of **`<div>`** elements representing posts...

Do you remember what I wanted you to memorize few paragraphs above? The word *list*. We want to represent a *list* of articles, so why to loose this semantic meaning of the list and use simple divs?
List --- this is what we need. And XHTML specification gives us a lot of freedom in this case. We have unordered lists **`<ul>`**, ordered lists **`<ol>`** and definition lists **`<dl>`**... and in this case it's not a clear choice. Actually any of these is as good as the other.

Our mark-up should represent a list, so unordered list is good enough. But in most cases posts on the home page are ordered by date from the newest to the oldest, so ordered list a little better, as it keeps this semantic meaning of order on the list.

<code class="snippet">
&lt;<strong>ol</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>li</strong> class="entry"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Title of the post&lt;/h3&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="published"&gt;date&lt;/span&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="summary"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Really great article to read...<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="author"&gt;name&lt;/span&gt;<br/>
&nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br/>
 ...<br/>
&lt;/<strong>ol</strong>&gt;
</code>

On the other side we have a definition list. It doesn't keep the order as ordered list does but has other benefits.

On a blog's home page each post described by it's title, publishing date, content (or excerpt of the content), note about author and maybe some tags... So it's really tempting to build this structure with definition list element **`<dl>`**, where each *'term'* on the list will represent single post, defined with a post title (definition title element **`<dt>`**) and a pack of elements descriping this post (definition description element **`<dd>`**) such as date, excerpt, author, etc.

<code class="snippet">
&lt;<strong>dl</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>dt</strong>&gt;Title of the post&lt;/<strong>dt</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>dd</strong> class=&quot;published&gt;date here&lt;/<strong>dd</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>dd</strong> class=&quot;summary&quot;&gt;summary of the post&lt;/<strong>dd</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>dd</strong> class=&quot;author&quot;&gt;authors name&lt;/<strong>dd</strong>&gt;<br/>
...<br/>
&lt;/<strong>dl</strong>&gt;
</code>

Very often definition lists are forgotten in web design and development, but they give really nice possibilities both from the semantic and styling point of view.

In my template though I will stick with ordered list. It's simple and quite obvious solution when it comes to building list of posts and it also allows to add a little bit of microformat magic into mark-up. I'll discuss this in one of the posts later.

So let's move on to the last point on our check-list.


Footer modules
----------------

Now, as we are used to the concept of lists, it shouldn't be hard to guess what kind of elements I propose for the list of modules in the footer.

Yes. List of course. It simply can be unordered list this time as footer modules don't have any order from semantic point of view.

<code class="snippet">
&lt;<strong>ul</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>li</strong> class="module"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;Module header&lt;/h4&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Module contents&lt;/p&gt;<br/>
&nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br/>
 ...<br/>
&lt;/<strong>ul</strong>&gt;
</code>

Simple, isn't it?


That's all folks
------------------

So we've just ran through all of our small list of home page sections and we've learned a little bit of semantic thinking and list elements usage. This of course is not enough and I'llill dig into more details later on this blog.

### Want some more?

As we where mostly talking about lists today, here are some resources to check in this subject.

* [W3Schools HTML list tutorial](http://www.w3schools.com/HTML/html_lists.asp)
* [W3C HTML lists specification](http://www.w3.org/TR/html401/struct/lists.html)

