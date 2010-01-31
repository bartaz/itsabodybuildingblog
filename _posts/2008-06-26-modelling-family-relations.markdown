---
layout: post
title: "Modeling Family Relations"
summary: |
  Humans are really complicated beings. Relations between humans are even more complicated...

  A while ago I've written [an article about my small genealogy project](/genealogy-in-the-time-of-web-2.0). After quite fast implementation of data gathering tools (thanks to django admin panel) I got a little stuck with trying to visualize family tree.
---

It seems that the concept of a family tree or even family graph (if you want to visualize more general view of the family) fits well into concept or [tree structures](http://en.wikipedia.org/wiki/Tree_structure) and [graph theory](http://en.wikipedia.org/wiki/Graph_theory).

It seems... because when it comes to visualize this date there is a great mess.

Graph theory simplifies the universe into *nodes* and *edges*. What is the problem, you may ask. People are nodes and relations between them are edges in the family graph... In such scenario every child will be connected with separate line to his mother and father. It's quite fine when you think about abstract model of relations, but it's very very ugly in visualization. Two edges, when you need one. Every human being has two parents, mother and father, a couple. Biology is quite strict about it (at least nowadays). So I want this two people to be visualized as a couple and connected to their parents.

So the model becomes a little more complicated when both *people* and *couples* are nodes connected with the edges. Not that bad... but unfortunately relations between family members are much more complicated than simple case of parenthood.

Divorces, separation, adoption... Maybe few centuries ago simple family tree was enough, but not in the modern world of freedom :)

I spent hours trying to get [graphviz](http://www.graphviz.org/) (and its [more](http://software.inl.fr/trac/wiki/GvGen) or [less](http://yapgvb.sourceforge.net/) annoying python bindings) show me my family in the way I want, but it seems that standard graph layout algorithms are not good enough. Even in very simple cases nodes (my family members) where drawn in very strange places of the graph with edges crossing all around. If I cannot understand what I'm looking at, I don't call it good visualization.

So I got back to the idea of visualizing the graph with HTML + CSS + JavaScript with a little help from canvas element. And I used a lot of paper trying to workout my own family-graph-layout algorithm. Current state of algorithm is a draft (literally) and it waits for some spare time to get simple implementation and testing. So it's a long long way to see some visible results.

I hope I'll be soon able to share some short article about visualizing simple family tree starting with pure HTML, through CSS styling, up to JavaScript and canvas.

