---
title: 'Little Loader'
date: '2016-01-11'
author: ramon
template: article.jade
---
Little Loader (GitHub: [walmartlabs/little-loader](https://github.com/walmartlabs/little-loader), License: MIT, npm: little-loader)

Little Loader is a lightweight JavaScript loader which is advertised as "The Only Correct Script Loader Ever Made".
It was developed by [Formidable](http://formidable.com) for a project they did for Mallmart.

The need for this library grew from the lack of browser support for the which the team needed.
To give an example look at the overview made by the team.

![https://cdn-images-1.medium.com/max/600/1*NUr1sQqkxQ8mdAcrWWLvjg.png](https://cdn-images-1.medium.com/max/600/1*NUr1sQqkxQ8mdAcrWWLvjg.png)

I'm already using it in one of my projects because after watching the introduction video I was convinced this is the best library for dynamically loading remote JavaScript files.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/F080X3Tp6_8" frameborder="0" allowfullscreen></iframe>

So how do we work with it?
First of all make use it is installed by running:

```bash
npm i little-loader -S
```
Now we can require it within our app like so:

```javascript
const load = require("little-loader");

load("http://example.com/foo.js", function (err) {
  // .. This is where you continue with your app.
});
```
That's all actually. There are multiple ways to include Little Loader. You can get it from a CDN, from npm and it is compatible with AMD loaders such as RequireJS.

When including Little Loader via a normal script tag, it will attach it self to the `window` Object and can be accessed via `window._lload` like so:
```html
<script>
  window._lload("http://example.com/foo.js", function (err) {
    // .. Your code....
  });
</script>
```
