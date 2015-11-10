---
title: "Scroller Friday"
date: '2015-10-02'
author: ramon
template: article.jade
---

### Fartscroll.js

fartscroll.js (GitHub: [theonion/fartscroll.js](https://github.com/theonion/fartscroll.js), License: MIT)

Since it is Friday today my colleages and me are in a humorous mood. So when I started looking what to write about today I got some real fun suggestions.
The first one is fartscroll.js.

The name already saids it all, it’s a library that makes your page fart when the user is scrolling.
Because everybody farts and likes farting, why not give your application the same privilege? Here is how:

First we need to include the script within our markup.

```html
<script src="http://code.onion.com/fartscroll.js"></script>
```

Then we call it like this:

```javascript
// Fart every 400 pixels scrolled in the window
fartscroll();
```

When you think you pages farts to often you can increase the amount of pixels that need to be scrolled before farting like this:

```javascript
// Fart every 800 pixels scrolled in the window
fartscroll(800);
```
If you just want to have some fun on other webpages, you can use <a href="javascript:%20(function%20()%20{%20%20%20%20%20var%20fs%20=%20document.createElement('script');%20%20%20%20%20fs.setAttribute('src',%20'http://code.onion.com/fartscroll.js');%20%20%20%20%20document.head.appendChild(fs);%20%20%20%20%20window.setTimeout(function(){%20%20%20%20%20%20%20%20%20fartscroll(800);%20%20%20%20%20%20%20%20%20},%20500);%20}());">this bookmarklet</a>. Here is the code for it.

```javascript
javascript:%20(function%20()%20{%20%20%20%20%20var%20fs%20=%20document.createElement('script');%20%20%20%20%20fs.setAttribute('src',%20'http://code.onion.com/fartscroll.js');%20%20%20%20%20document.head.appendChild(fs);%20%20%20%20%20window.setTimeout(function(){%20%20%20%20%20%20%20%20%20fartscroll(800);%20%20%20%20%20%20%20%20%20},%20500);%20}());
```

### Elevator.js

elevator.js (GitHub: [tholman/elevator.js](https://github.com/tholman/elevator.js), License: MIT)

While we are in the theme of scrolling libraries, here is another fun one. I cannot say that this one is very new, but it's still gold in my opinion. So what does it do?
Elevator.js is provides you with a "back to top" button that behaves like a real elevator. Now your users don't have to be bored during the awkward time they spend waiting for your page to scroll back to the top. How do we use this?

First we need to include the script within our markup.

```html
<script src="https://cdn.rawgit.com/tholman/elevator.js/master/elevator.min.js"></script>
```
Now we need to instantiate it with some mp3 files and a trigger target like this:

```javascript
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: '/src/to/audio.mp3',
    endAudio: '/src/to/end-audio.mp3'
  });
}
```

If you do not have any inspiration for sounds you can just use the defaults like this:

```javascript
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000 // milliseconds
  });
}
```
