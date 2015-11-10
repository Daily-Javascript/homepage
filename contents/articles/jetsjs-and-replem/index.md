---
title: "Jets.js and repl'em"
date: '2015-09-26'
author: ramon
template: article.jade
---

Jets.js (GitHub: [NeXTs/Jets.js](https://github.com/NeXTs/Jets.js), License: MIT, npm: jets, bower: jets)

Jets.js is a search engine which utilizes CSS to present the results.
The main idea is not to affect attributes of each tag in the list while filtering.
Instead apply dynamic CSS rule in only `<style>` tag and browser will decide which item of list to show or hide. Since it's just CSS - Jets.js may be applied to any tag, whether it's a table or UL, OL, DIV…

<img src="http://nexts.github.io/Jets.js/img/demo_hover.gif" style="max-width: 400px;width: 100%;left: 0;">

On the developers [page](http://nexts.github.io/Jets.js/) there is a speed test.

<img src="http://i.imgur.com/SToKoIY.png" style="left:0; width: 100%;">

Because I was so amazed by how easy it was to setup I started a small [codepen](http://codepen.io/Dailjs-Javascript/pen/vNyXOr) and had some fun with it.

### repl'em

repl'em (GitHub: [raine/replem](https://github.com/raine/replem), License: Unknown, npm: replem)

If you are a developer like me you shall recognize the pain of trying a lot of different modules to find which one suits your task.
repl'em let's you run a list of modules that use specify in a repl context.

<img src="https://raw.githubusercontent.com/raine/replem/media/term.png" style="left:0; width: 100%; min-height:200px;">

It also supports custom repl's such as coffee-script. To use these you must give them as an argument.

```bash
$ npm install --prefix ~/.replem coffee-script
$ replem --repl coffee-script/repl lodash
```

You can also get all module properties in the direct context. You do this by providing each module with a bang (!) argument.

```bash
$ replem ramda!
Installed into REPL context:
 - ramda@0.17.1 as ramda
> reduce === ramda.reduce
true
```

This tool will certainly make it easier to try out new modules for providing you with new posts everyday.
