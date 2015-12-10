---
title: 'Split.js'
date: '2015-12-10'
author: ramon
template: article.jade
---

Split.js (GitHub: [nathancahill/Split.js](https://github.com/nathancahill/Split.js), License: MIT, npm: split.js)

Split.js is a lightweight, unopinionated utility for creating adjustable split views or panes. What I like about this library is the minimal requirements to get it to work.
It has no depenencies such as jQuery and does not require you to jump through three burning hoopes before you have it working,
just two elements that have a parent in common and you are set.
I comes with draggable gutters to resize the panes and the API is very easy, just one function, `Split`.

So let's look at some code. Let's say we have a markup that looks something like this:

```html
<!-- .... -->
<div class="parent">
	<div id="one">
		<!-- .... -->
	</div>
	<div id="two">
		<!-- .... -->
	</div>
</div>
<!-- .... -->
```
Then a basic split would work like this in Javascript:
```javascript
Split(['#one', '#two'], {
    sizes: [25, 75],
    minSize: 200
});
```
It's possible to add as many elements as you want, as long as they share the same parent. Let's take three as example:

```javascript
Split(['#one', '#two', '#three'], {
    minSize: [100, 100, 300]
});
```
Because this library is unopinionated, it does not come with much styling. You can implement your own styles like so:

```css
.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('grips/vertical.png');
  cursor: ew-resize;
}

.gutter.gutter-vertical {
  background-image: url('grips/horizontal.png');
  cursor: ns-resize;
}
```
Note that split works the best with `border-box`ed element's, so if you did not apply this within your reset, you could set it like this:

```css
.split {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

The library comes with a lot of extra options which will infusence how the panes and the gutters should act. Check the [REAME](https://github.com/nathancahill/Split.js) for that.
