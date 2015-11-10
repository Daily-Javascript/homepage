---
title: 'Stream.js'
date: '2015-11-02'
author: ramon
template: article.jade
---

### Stream.js

Stream.js (GitHub: [winterbe/streamjs](https://github.com/winterbe/streamjs), License: MIT, npm: streamjs, bower: streamjs)

Stream.js is a lightweight functional library for operating on in memory collections. It requires ES 5+, but has built-in support for ES6 features it works in all current browsers, Node.js and Java 8 [Nashorn](http://openjdk.java.net/projects/nashorn/).

This library is built around a lazily evaluated operation pipeline. Which means that instead of consecutively performing each operation on the input collection, objects are passed vertically and one by one into the chain.
Interim results will not be stored in internal collections. Instead objects are piped into the result object.

Stream's operations are lazily evaluated to avoid examining all of the input data when it's not necessary.
For instance with a filter - map - findFirst stream you don't have to filter and map the whole data. Instead map and findFirst are executed just one time before returning the single result. This results in way better performance when operation upon large amount of input.

Like this:
```javascript
Stream([1, 2, 3, 4])
   .filter((num) => {   // called twice
      return num % 2 === 0;
   })
   .map((even) => {     // called once
      return "even" + even;
   })
   .findFirst();        // called once
```

Because this library has a very extensive API, I will not be discussing that today and I will just refer you to the [API Docs](https://github.com/winterbe/streamjs/blob/master/APIDOC.md) provided by the developer
