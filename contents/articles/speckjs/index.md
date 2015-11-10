---
title: "Speck JS"
date: '2015-10-06'
author: ramon
template: article.jade
---

SpeckJS (GitHub: [speckjs/speckjs](https://github.com/speckjs/speckjs), License: MIT, npm: speckjs)

SpeckJS is a library that parses JavaScript comments and outputs unit-tests. SpeckJS currently supports [Tape](https://github.com/substack/tape), [Jasmine](https://github.com/jasmine/jasmine), and [Mocha](https://github.com/mochajs/mocha)/[Chai](https://github.com/chaijs/chai).

SpeckJS comes with plugins for [Grunt](https://github.com/speckjs/grunt-speckjs), [Gulp](https://github.com/speckjs/gulp-speckjs) and [Atom](https://github.com/speckjs/atom-speckjs).

The goal of SpeckJS is to make it as easy as possible to get started using Test-Driven Development on a new project or to quickly add unit-tests to your existing project.

Let's make a test.

```javascript
/*
test > sum function
# sum(1, 2) == 3 (returns the sum of both params)
# sum(3, 4) == 7 (returns the sum of both params)
*/

function sum(a, b){
    return a + b;
}
```

SpeckJS supports some basic assertion like: equal, strict equal, not equal.
Besides relying on all the tools already provided, such as `gulp` and atom plugins, you could also script yourself with the API like this:

```javascript
var speck = require('speckjs');

// file object to be passed as an argument
var file = {
  name: 'demo.js',
  content: scriptContent
};

// options hash selecting Jasmine and specifying a callback
var option = {
  testFW: 'jasmine',
  onBuild: function(data) {
    console.log(data);
  }
}

// Returns Jasmine test file
var result = speck.build(file, option);
```

We will start using this in my company from now on, because it makes it a lot easier to integrate testing in a long running project that has never being tested just by walking through the files.
I hope to see other people pick this up aswel.
