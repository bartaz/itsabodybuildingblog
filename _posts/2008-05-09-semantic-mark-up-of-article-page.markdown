---
layout: post
title: Semantic Mark-up of an Article Page
summary: |
  [Last time](/semantic-mark-up-of-the-home-page/) we where discussing semantic mark-up of blog's home page. With all this knowledge we can smoothly move forward and mark up the page with full article contents and visitors' comments.

  The process will be very similar to one we used for home page, so if you haven't read [previous article](/semantic-mark-up-of-the-home-page/), please do it as it will be really helpful. If you already been there don't hesitate and [read on](#more) :)
---

### Article page check-list

Of course we start with a little check-list. What are the contents of article page?

header
:   Every page needs a header, we know it already. We'd like to have a nice and big article title there and of course a name or logo of the blog, so the visitor knows where he is and what he or she is reading.

article contents
:   As it is an article page then the full text of the article is the most important content here.

foot-note
:   Visitors probably would like to know who wrote the article, when was it published and such stuff.

comments
:   *List* of comments. If you've read the post about marking up the home page you will know why the *list* is a keyword here.

comment form
:   Simple form to leave a comment: text input for nickname, bigger text box for comment and maybe some checkboxes for subscribing feature or antispam CAPTCHA image to read.

addtional info
:   And as this article page is still part of a blog website it would be nice to have some modules with archives, legal note, blogroll or whatsoever. But this one was described already in previous post, so I wont repeat myself once again.

Yep... seems to be quite a lot of it wont be that hard, you'll see.

  *[CAPTCHA]: Completely Automated Public Turing Test to Tell Computers and Humans Apart

### Article header

When we where talking about home page, the blog title was our main **`<h1>`** header and you may be tempted to do the same on an article page. We are still on a blog aren't we? So the blog title is the most important thing... is it really?

Article page is a part of blog website, but as it's *article* page then the *article* title should me the most important header, don't you think? So this is what we will do:

<code class="snippet">
&lt;<strong>h1</strong>&gt;<br/>
&nbsp;&nbsp;&lt;a href="<abbr title="Your article URL goes here">/</abbr>" title="permalink"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Title of this great article<br/>
&nbsp;&nbsp;&lt;/a&gt;<br/>
&lt;/<strong>h2</strong>&gt;
</code>

This **`<a>`** link is not needed here but I like to keep it consistent. And it's a nice place to store a bookmark link, so visitors don't need to copy/paste url from address bar.

But how about blog's title? Or a logo?

Yes, we still want visitor to be aware that this page is part of the whole website and there is no better place for "back to home" link as header section... So let's create some navigation links list right above our **`<h1>`** header.

<code class="snippet">
&lt;<strong>ul</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>li</strong> class="home"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="<abbr title="Your home page URL goes here">/</abbr>" title="Go home"&gt;Awesome home page&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br/>
&lt;/<strong>ul</strong>&gt;<br/>
&lt;h1&gt; ... &lt;/h1&gt;
</code>

Why the list if there is only one element?

Because it's very likely that the list of links in the navigation will grow. Maybe one day you'll add 'About me' page for example? Even if not it's a very good practice from accessibility point of view to add some kind of 'Skip to content' link at the top so the users with text browsers or veeeeeery small screens will be able to quickly move to things that are more important to them than a shiny header.

<code class="snippet">
&lt;ul&gt;<br/>
&nbsp;&nbsp;&lt;<strong>li</strong> class="access"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="#content"&gt;Skip to content&lt;/a&gt;<br/>
&nbsp;&nbsp;&lt;/<strong>li</strong>&gt;<br/>
&nbsp;&nbsp;&lt;li class="home"&gt; ... &lt;/li&gt;<br/>
&lt;/<strong>ul</strong>&gt;<br/>
&lt;h1&gt; ... &lt;/h1&gt;
</code>

So now we have nice semantic header with accessibility enhancement. How cool is that?

### Article contents

So... The article contents. There is only one article on a page, so no lists here, really :)
We will just use plain **`<div>`**.

<code class="snippet">
&lt;<strong>div</strong> class="contents"&gt;<br/>
&nbsp;&nbsp;&lt;p&gt;Here this great article starts.&lt;/p&gt;<br/>
&lt;/<strong>div</strong>&gt;
</code>

And that's it really when it comes to content. Just remember to put text it into paragraphs and use headers wisely.

### Article's foot-note

Here is where we want to have author's name, published date and let's say a list of tags.

<code class="snippet">
&lt;<strong>p</strong>&gt;written by <abbr title="author&apos;s name goes in here of course">bartaz</abbr> on <abbr title="here is where a nicely formatted date should be inserted by your blog service">7th May 2008</abbr> about&lt;/<strong>p</strong>&gt;<br/>
&lt;<strong>ul</strong>&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;life&lt;/li&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;universe&lt;/li&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;everything&lt;/li&gt;<br/>
&lt;/<strong>ul</strong>&gt;
</code>

Simple as it could be: a **`<p>`** paragraph of text and unordered list **`<ul>`** of tags.

You would probably like to make a tag names linked to some page with a list of other articles tagged with it on your blog or some search engine (like [Technorati](http://technorati.com)).

<code class="snippet">
&lt;p&gt; ... &lt;/p&gt;<br/>
&lt;ul&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;&lt;<strong>a</strong> href="/life" <strong>rel="tag"</strong>&gt;life&lt;/<strong>a</strong>&gt;&lt;/li&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;&lt;<strong>a</strong> href="/universe" <strong>rel="tag"</strong>&gt;universe&lt;/<strong>a</strong>&gt;&lt;/li&gt;<br/>
&nbsp;&nbsp;&lt;li&gt;&lt;<strong>a</strong> href="/everything" <strong>rel="tag"</strong>&gt;everything&lt;/<strong>a</strong>&gt;&lt;/li&gt;<br/>
&lt;/ul&gt;
</code>

Have you noticed `rel="tag"` attribute inside the **`<a>`** tag? This `rel` stands for *relation* and it means that relation between the page we are linking to and ours is that it's a tag page. So this few characters added a great semantic meaning to this links. Now it's clear that these are the tags. And it's clear not just for humans reading the post (or looking into the code) but also for machines --- such as search engines for example, that can now understand it and use this tags to properly index your page.

And you know what? With this simple little trick we just used one of [Microformats](http://microformats.org) called [rel-tag](http://microformats.org/wiki/reltag)! That was really easy, wasn't it? That's the truth about microformats --- they're really simple and straightforward.

But still this paragraph and list seem to be separate things in document flow. If we want to *connect* them semantically we should just wrap everything there into a **`<div>`** with some nice `class` attribute.

<code class="snippet">
&lt;<strong>div</strong> class="footnote"&gt;<br/>
&nbsp;&nbsp;&lt;p&gt; ... &lt;/p&gt;<br/>
&nbsp;&nbsp;&lt;ul&gt;<br/>
&nbsp;&nbsp;&nbsp;... <br/>
&nbsp;&nbsp;&lt;/ul&gt;<br/>
&lt;/<strong>div</strong>&gt;
</code>

### List of comments

We are all used to the concept of the lists, aren't we? So it wont be hard to mark up the list of comments.

<code class="snippet">
&lt;<strong>ol</strong>&gt;<br/>
&nbsp;&nbsp;&lt;<strong>li</strong> class="comment"&gt; ... &lt;/<strong>li</strong>&gt;<br/>
&lt;/<strong>ol</strong>&gt;
</code>

I used ordered list **`<ol>`**, as comments are in most cases ordered by date. Now let's dig into comment contents.

<code class="snippet">
&lt;ol&gt;<br/>
&nbsp;&nbsp;&lt;li class="comment"&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;<strong>cite</strong>&gt;&lt;a href="<abbr title="troll&apos;s trolling website address">/</abbr>"&gt;troll&lt;/a&gt;&lt;/<strong>cite</strong>&gt; said:&lt;/p&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>blockquote</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oranges are so much better than apples.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<strong>blockquote</strong>&gt;<br/>
&nbsp;&nbsp;&lt;/li&gt;<br/>
&lt;/ol&gt;
</code>

Simple paragraph with commenter's name, link to his/her website in a **`<cite>`** element and a **`<blockquote>`** to represent comment contents.

But why the **`<cite>`** and **`<blockquote>`** elements? Are we really *quoting* anything?

For sure it's not a quote from any other website or a book, but we are somehow quoting commenter's words or thoughts. That's why I think **`<blockquote>`** as comment contents and a **`<cite>`** element to indicate commenter's name and address are semantically correct in this place.

### Comment form

Forms in general are a really long story and a great pain for designers and web developers. But the real pain starts when it comes to styling and we will worry about it a bit later. Let's now focus on the mark-up. It's quite straightforward, especially in such simple example as comment form.

<code class="snippet">
&lt;<strong>form</strong> id=&quot;comment_form&quot; action=&quot;<abbr title="Your action url goes here">/</abbr>&quot; method="post"&gt;<br/>
&nbsp;&nbsp;&lt;<strong>fieldset</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>label</strong> for=&quot;nick&quot;&gt;Nick&lt;/<strong>label</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>input</strong> type=&quot;text&quot; id="nick" name="nick"/&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>label</strong> for=&quot;comment&quot;&gt;Comment&lt;/<strong>label</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>textarea</strong> name="comment" id="comment"&gt;&lt;/<strong>textarea</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>input</strong> type=&quot;submit&quot; value=&quot;Submit&quot;/&gt;<br/>
&nbsp;&nbsp;&lt;/<strong>fieldset</strong>&gt;<br/>
&lt;/<strong>form</strong>&gt;
</code>

Simple, but if we want to actually look nicely we will need some additional mark-up there. Right now we will get all the labels, text-fields and buttons in one line.

The easiest way to get around it is the use of **`<p>`** paragraphs:

<code class="snippet">
&lt;form ... &gt;<br/>
&nbsp;&nbsp;&lt;fieldset&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>p</strong>&gt;&lt;label&gt;...&lt;/label&gt;&lt;input ... /&gt;&lt;/<strong>p</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>p</strong>&gt;&lt;label&gt;...&lt;/label&gt;&lt;textarea ... &gt;&lt;/textarea&gt;&lt;/<strong>p</strong>&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>p</strong>&gt;&lt;input value=Submit ... /&gt;&lt;/<strong>p</strong>&gt;<br/>
&nbsp;&nbsp;&lt;/fieldset&gt;<br/>
&lt;/form&gt;
</code>

It will be enough for now, but a little more magic will be needed when we will come to styling this form with CSS. But we don't worry about it today.

### That's all folks

That was quite a long way but in the end we have a really nice semantic mark-up on this article page. It wasn't that hard, right? And we are just a small step from applying even more semantic meaning with Microformats (we already did it with tags, remember?) but this is a subject of a brand new article.

#### Want some more?

If you don't have enough in this topic just have a look at one of these:

* [Joe Dolson's Guide to Semantic Use of HTML Elements](http://www.joedolson.com/articles/2008/04/guide-to-semantic-html/)
* W3C recommended technique --- [Using semantic elements to mark up structure](http://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/G115.html)

