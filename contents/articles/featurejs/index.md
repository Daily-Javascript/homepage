---
title: 'Feature.js'
date: '2016-01-13'
author: ramon
template: article.jade
---
Feature.js (GitHub: [viljamis/feature.js](https://github.com/viljamis/feature.js/), License: MIT)

Feature.js is a very fast, simple and lightweight browser feature detection library. I received this from a ex-colleage of mine and I was amazed I did not stumble upon this before, since it has more than 1200 stars on Github.
There are several features you can test with this library, here is a list of them:

- AddEventListener
- Async attribute
- Canvas
- ClassList API
- CORS API
- Context Menu
- CSS 3D transform
- CSS transform
- CSS transition
- Defer attribute
- DeviceOrientation
- DeviceMotion
- Geolocation
- History API
- Input Placeholder
- LocalStorage
- MatchMedia
- Picture element
- QuerySelectorAll
- REM Units
- Service Worker
- Sizes attribute
- Srcset attribute
- SVG
- Touch
- Viewport Units
- WebGL

Since the tests it uses are pretty straight forward I will not go into this al to much. The most used test is done by simply checking if the requested feature is within the object in needs to be in.

You use it with simple `if` statements like so:

```javascript
if (feature.webGL) {
    console.log('WebGL supported');
} else {
    console.log('WebGL not supported');
}
```

If you want to see it in action head over to the [project page](http://featurejs.com/) where the developer has implemented a nice demo.
