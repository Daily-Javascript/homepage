---
title: "Tonic"
date: '2015-10-01'
author: ramon
template: article.jade
---

During my browse session at work this morning I came across [this post](https://tonicdev.com/docs/embed).
If I understand correctly the easiest way to describe Tonic is as a plugin that let's you run Node.js in a browser.

The reason why I write about this today is because of the newley released feature of embedding it on your page.
This feature can be accessed in two ways. Via HTML markup or by initializing it programatically.
Lets take a look at some examples.

When you have access to the document markup we would make it work like this:

```html
<script src="https://embed.tonicdev.com" data-element-id="daily-element"></script>

<!-- anywhere else on your page -->
<div id="daily-element">
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    console.log(body) // Show the HTML for the Google homepage.
});
</div>
```

If this code runs Tonic it will dropdown an element showing the log output.

If you do not have access to the document markup you can trigger it from Javascript like this:

```javascript

var scriptTag = document.createElement("script"),
    head = document.querySelector("head"),
    dailyElement = document.createElement('div');
scriptTag.src = "https://embed.tonicdev.com";
dailyElement.id = "daily-element";
head.appendChild( scriptTag );

document.body.appendChild( dailyElement );

var notebook = Tonic.createNotebook({
    // the parent element for the new notebook
    element: document.querySelector("#daily-element"),

    // specify the source of the notebook
    source: "\"hello world\"",

    // optionally, set the notebook to be read-only
    readOnly: false,

    // optionally, provide a callback to be called when the notebook has finished loading
    onLoad: function(){}
});
```

On of the things I'm still missing is the ability to run ES2015. I hope that the support for that will come very soon.
This weekend I will be trying to include this within this website so you will be able to run the examples that I post right there in the browser.
