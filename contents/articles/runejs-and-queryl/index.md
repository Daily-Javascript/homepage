---
title: "Rune.js and queryl"
date: '2015-09-28'
author: ramon
template: article.jade
---

### Rune.js

Rune.js (GitHub: [runemadsen/rune.js](https://github.com/runemadsen/rune.js), License: MIT )

Rune.js is a library for programming graphic design systems with SVG. It has a fluent drawing API, an unobtrusive scene graph, and a bunch of features designed specifically for graphic designers, such as: native support for color conversion, grid systems, typography, pixel iteration and an expanding set of computational geometry helpers. What peaked my interest is that it uses a [virtual-dom](https://github.com/Matt-Esch/virtual-dom) under the hood.

If you're not familiar with the virtual-dom I suggest you take a break to take a look at that first.

Unfortunately I could not find any npm or bower install instructions, so I am hoping that the developer will add that soon.

Rune.js has all basic shapes in the API.

```javascript
r.line(0, 0, 100, 100);

r.rect(0, 0, 100, 50);

r.ellipse(0, 0, 100, 50);

r.circle(0, 0, 100);

r.triangle(0, 0, 100, 0, 100, 100);
```
And for more complex shapes it fluent API makes drawing with SVG very readable and familiar.

```javascript
r.polygon(0, 0).lineTo(100, 0).lineTo(100, 100).lineTo(0, 100);

r.path(0, 0).lineTo(100, 0).curveTo(100, 100, 0, 100, 0, 0);
```

Since this library is packed with features and concepts, I will only give you the tip of the iceberg right now. If you want to know more, consult the [amazing documentation](http://runemadsen.github.io/rune.js/).


### queryl

queryl (GitHub: [issuetrackapp/queryl](https://github.com/issuetrackapp/queryl), License: MIT, npm: queryl)

queryl is a query language to preform complex object searches. The purpose of this "language" is to allow the developer to build very complex queries to e.g. search a collection of objects, to validate objects before you dump it in a db or even to make assertions in tests.

queryl comes with a very simple API. `queryl.match` is the main entry at this point this will always return a boolean and expects an object to match. For example:

```javascript
queryl.match({
  $contain: {
    foo: 1
  }
}, {
  foo: [ 1, 2, 3 ]
});
> true
```
This is just a very basic example of what it can do. The full API docs shows the entire power of this "language".

I can see this working very well for matching and parsing certain objects like the ones you would receive from, for instance, the Google spreadsheet API.
