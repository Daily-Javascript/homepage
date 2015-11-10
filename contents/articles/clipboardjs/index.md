---
title: "Clipboard.js"
date: '2015-09-28'
author: ramon
template: article.jade
---

After writing this blog for a few days now I noticed that the bar of two libraries a day is hard to do when you have a day job next to it.
Because I want to give each library a fair shot, I will be reducing it to one library a day on workdays so I can work on updates for the website as well.

Clipboard.js (GitHub: [zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js), License: MIT, npm: clipboard, bower: clipboard )

During my daily browse I came across Clipboard.js which is a library to put given content to the users clipboard from Javascript.
Normally we are used to implementing this behavior using Flash or some bloated framework. Luckley now there is Clipboard.js which is an 2kb implementation of "Copy to clipboard".

To use it we need to require it first. If you are using [Browersify](http://browserify.org/) or [Webpack](https://webpack.github.io/) then use:

```javascript
import * as Clipboard from 'clipboard';

// Or the old way
var Clipboard = require('clipboard');
```
When including it in your html do it like this:

```html
<script src="dist/clipboard.min.js"></script>
```

Now we can instantiate it using a DOM selector. For instance

```javascript
new Clipboard('.btn');
```

Internally, it needs to fetch all elements that match the selector and attach event listeners for each one. But what if you have hundreds of matches? Then this operation can consume a lot of memory.
Because of this it uses event delegation which replaces multiple event listeners with just a single listener.

The most common usage of this library would be to copy the text value of an `input` field or `textarea`. This is how:

```html
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

<!-- Trigger -->
<button class="btn" data-clipboard-target="#foo">
    <img src="assets/clippy.svg" alt="Copy to clipboard">
</button>
```

It also has the ability to cut to clipboard. You would do this by attaching the `data-clipboard-action` attribute to the trigger element like this:

```html
<!-- Target -->
<textarea id="bar">Mussum ipsum cacilds...</textarea>

<!-- Trigger -->
<button class="btn" data-clipboard-action="cut" data-clipboard-target="#bar">
    Cut to clipboard
</button>
```
When you find yourself in a situation where you would like to show some feedback to the user or capture what has been selected after a copy/cut operation, you can make use of the `success` and `error` events that are being sent. You would use that like this:

```javascript
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
```
The browser support on this project superised me, it relies on both Selection and execCommand APIs. The second one is supported in the following browsers.

| <img src="http://zenorocha.github.io/clipboard.js/assets/images/chrome.png" style="width:auto; left: auto;" width="48px" height="48px" alt="Chrome logo"> | <img src="http://zenorocha.github.io/clipboard.js/assets/images/firefox.png" style="width:auto; left: auto;" width="48px" height="48px" alt="Firefox logo"> | <img src="http://zenorocha.github.io/clipboard.js/assets/images/ie.png" style="width:auto; left: auto;" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://zenorocha.github.io/clipboard.js/assets/images/opera.png" style="width:auto; left: auto;" width="48px" height="48px" alt="Opera logo"> | <img src="http://zenorocha.github.io/clipboard.js/assets/images/safari.png" style="width:auto; left: auto;" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | Nope ✘ |

Although copy/cut operations with execCommand aren't supported in Safari yet (including mobile), it gracefully degrades, because Selection is supported.

This means you could show a tooltip saying Copied! when success event is called and Press Ctrl+C to copy when error event is called because the text is already selected.
