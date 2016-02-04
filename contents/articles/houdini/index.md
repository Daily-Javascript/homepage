---
title: 'Houdini'
date: '2016-02-02'
author: ramon
template: article.jade
---

During my daily browse I came across ["New ways to make your web app jank with Houdini – An introduction"](https://surma.link/things/houdini-intro/). Which made me curious. After the first paragraph I was hooked.
The author Surma make the point that as developers we can only observe what the magic CSS does.
Even when we are animating using Javascript we are still animating the CSS properties of the animated element.

This way of thinking is actually backward. What if there was a way you could access the magic CSS does?
Define your own properties for doing layout, scroll behavior or position. The possibilities are endless.
No longer will we be limited to what is implemented in the spec. That is where Houdini comes in.

The Houdini task force is a collection of engineers from Mozilla, Apple, Microsoft, HP, Intel and Google working together to expose certain parts of the CSS engine. This task force is working on a [collection of drafts](https://drafts.css-houdini.org/) with the goal to get them accepted by the W3C and become part of the actual web standards.

I would strongly recommend you take a look at [Surma's post](https://surma.link/things/houdini-intro/) and check out [the drafts already created](https://drafts.css-houdini.org/).

Surma also posted a small demo of what Compositor Worklet can do in a very early implementation he got to play with.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/EUlIxr8mk7s" frameborder="0" allowfullscreen></iframe>
