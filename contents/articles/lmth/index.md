---
title: 'lmth'
date: '2016-03-03'
author: ramon
template: article.jade
---

lmth (GitHub: [chrisdotcode/lmth](https://github.com/chrisdotcode/lmth), License: BSD-3-Clause, npm: lmth)

Manually concatenation of HTML strings is painful. Even jQuery gets this wrong, because we are still creating writing out our HTML but now in strings which can be very error prone and cause unneeded debugging time.

The is the reason tools like [pithy](https://github.com/caolan/pithy) and [hyperscript](https://github.com/dominictarr/hyperscript) came up.
Now there is a new kid on the block. lmth is a HTML DSL for JavaScript very similar to pithy, as the developer puts it:

> lmth can be considered a spiritual successor to [pithy](https://github.com/caolan/pithy), and a cousin of sorts to hyperscript.

It can output HTML as a string or as a DOM tree.
In contrast with pithy, the text content is escaped by default. But you disable this if you want to.

A quick example of how it would look:

```javascript
    'use strict';
    import l from 'lmth';

    const html = l.main({id: 'main'}, [
        l.h1(null, 'Hello, world!'),
        l.img({src: '/foo.png'})
    ]);

    // To a string:
    html.render();
    // <main id="main"><h1>Hello, world!</h1><img src="/foo.png"></main>

    // To a DOM tree:
    html.toDOM();
```
