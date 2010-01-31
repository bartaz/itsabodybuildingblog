---
layout: post
title: "'this' is not always what it seems to be"
summary: |
  Recently, while developing some simple stuff with jQuery, I came across strange problem with strings in JavaScript. After hours of debugging and investigating, it turned out to be a result of confusion between primitive strings and `String` objects in JavaScript. If you don't want to repeat my mistakes and would like to understand a&nbsp;little bit more about strings in JavaScript, this post is for you.
---

I once needed to truncate some text in JavaScript before showing it on a page. I&nbsp;didn't want to reinvent the wheel, so I took a `truncate` method from [prototype.js](http://www.prototypejs.org/api/string/truncate) and added it to `String`'s prototype.

So the simple use case may be to truncate given text to 20 characters and put it into a `<div>` element on a page, just like this:

<code class="snippet"> 
jQuery("div").html( text.<strong>truncate</strong>(20) );
</code>

I was very surprised to find that it worked well when text had more than 20 characters (so it was truncated), but didn't when it was shorter and didn't need any truncating. It was just throwing some ugly exception from the deepest core of jQuery, but, as the problem was depending on the results of `truncate` method, I&nbsp;looked into it to find the reason.

That's how the `truncate`'s code looks like:

<code class="snippet"> 
<strong>String</strong>.prototype.truncate = function(length, truncation) {<br/>
&nbsp;&nbsp;length = length || 30;<br/>
&nbsp;&nbsp;truncation = truncation === undefined ? '...' : truncation;<br/>
&nbsp;&nbsp;<strong>return</strong> <strong>this</strong>.length > length ?<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>this</strong>.slice(0, length - truncation.length) + truncation : <strong>this</strong>;<br/>
};
</code>

The conditional behaviour that interests us is in the `return` statement: if the string's length is greater than required then we return truncated string, otherwise unchanged value of the string is returned. And the problem shows up when we return unchanged string --- the value of `this`. So what's wrong with `this`?

I used [Firebug](http://getfirebug.com) to investigate it, and it gave me another clue. The trucnated and not truncated strings where displayed by in a different ways in Firebug's console:

<code class="firebug">
<span class="query">&gt;&gt;&gt; "testing".truncate(6)</span><br/>
<span class="string">"tes..."</span><br/>
<span class="query">&gt;&gt;&gt; "testing".truncate(7)</span><br/>
<span class="object">testing 0=<span class="value">t</span> 1=<span class="value">e</span> 2=<span class="value">s</span> 3=<span class="value">t</span> 4=<span class="value">i</span> 5=<span class="value">n</span> 6=<span class="value">g</span></span>
</code>

So even Firebug sees the difference and treats the second case like an object, not a&nbsp;primitive string. Let's check the type of a value returned by truncate method:

<code class="firebug">
<span class="query">&gt;&gt;&gt; typeof "testing".truncate(6)</span><br/>
<span class="string">"string"</span><br/>
<span class="query">&gt;&gt;&gt; typeof "testing".truncate(7)</span><br/>
<span class="string">"object"</span>
</code>

Gotcha! So when we truncate a string, we get a string, but when we return `this` we get an object... But it's still a string, isn't it?

<code class="firebug">
<span class="query">&gt;&gt;&gt; "testing".truncate(6).constructor</span><br/>
<span class="function">String()</span><br/>
<span class="query">&gt;&gt;&gt; "testing".truncate(7).constructor</span><br/>
<span class="function">String()</span>
</code>

They are both strings, but one is primitive string, and other one is a `String` object. The same difference we can see when using `String` constructor:

<code class="firebug">
<span class="query">&gt;&gt;&gt; typeof "primitive string"</span><br/>
<span class="string">"string"</span><br/>
<span class="query">&gt;&gt;&gt; typeof new String("String object")</span><br/>
<span class="string">"object"</span>
</code>

So we have 2 issues here. One is that when we return `this` from `String`'s prototype we get a `String` object rather than primitive string. Other problem is that jQuery does't work well with `String` objects, but it's not a big deal I guess, as using `String` objects in JavaScript is a very rare case.

The real problem lays in the `truncate` method. It's results should be consistent, so it should always return primitive string (as all standard `String` methods do). The easiest way to turn a `String` object into a primitive string is to concatenate it with some other string, or to run it through global `String` method.

<code class="firebug">
<span class="query">&gt;&gt;&gt; new String("test")</span><br/>
<span class="object">test 0=<span class="value">t</span> 1=<span class="value">e</span> 2=<span class="value">s</span> 3=<span class="value">t</span></span><br/>
<span class="query">&gt;&gt;&gt; String(new String("test"))</span><br/>
<span class="string">"test"</span><br/>
<span class="query">&gt;&gt;&gt; new String("test") + ""</span><br/>
<span class="string">"test"</span>
</code>

So our fixed truncate method may look like this:

<code class="snippet"> 
<strong>String</strong>.prototype.truncate = function(length, truncation) {<br/>
&nbsp;&nbsp;length = length || 30;<br/>
&nbsp;&nbsp;truncation = truncation === undefined ? '...' : truncation;<br/>
&nbsp;&nbsp;<strong>return</strong> <strong>this</strong>.length > length ?<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>this</strong>.slice(0, length - truncation.length) + truncation : <strong>String</strong>(<strong>this</strong>);<br/>
};
</code>

So what is the conclusion from this story?

If you want to extend prototype of some object (especially in case of `String`, `Boolean`, `Number`...) you should really know what you are doing and if you want to return the value of `this` directly, always check if it has required type, as `this` is not always what it seems to be.

