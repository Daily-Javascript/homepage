---
title: 'iFrame Resizer'
date: '2015-12-07'
author: ramon
template: article.jade
---

iFrame Resizer (GitHub: [davidjbradshaw/iFrame-resizer](https://github.com/davidjbradshaw/iFrame-resizer), License: MIT, npm: iframe-resizer)

[David Bradshaw](https://github.com/davidjbradshaw) sent in iFrame-resizer. Which is a library to make working with the `<iframe>` tag a lot easier.
It hides a lot of the stuff you need to change sizes, authorize domains or messaging. I suspect that this project started out as a simple library to help with resizing of an iframe which grew to a full fletched iframe utility belt.

So let's take a look how it works. The package consists of two files. The first one needs to be included on the *parent* page and the second one need to be within all the *child* frames. The child-script does not do anything unless when called by the parent. So a typical setup would look something like this:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Parent page</title>
</head>
<body>
    <h1>This is the parent page</h1>
    <iframe src="http://example.com/child-page" id="my-frame" scrolling="no"></iframe>
</body>

<script scr="/path/to/iframeResizer.min.js"></script>

<script src="/path/to/your/script.js"></script>
</html>

```

```html
<!DOCTYPE html>
<html>
<head>
	<title>Child page</title>
</head>
<body>
    <h1>This is the child page</h1>
</body>

<script scr="/path/to/iframeResizer.contentWindow.min.js"></script>
</html>

```


Then to active auto-resize for instance, we can work with it from our script like so:

```javascript
var options = {
    log: true,
    autoResize: true
}
iFrameResize( options, '#my-frame' );
```

As said before this is only the basic usage for more extensive usage you should check the [project page](http://davidjbradshaw.github.io/iframe-resizer).
