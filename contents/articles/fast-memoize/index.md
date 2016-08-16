---
title: "Fast Memoize"
date: '2016-08-16'
author: ramon
template: article.jade
---
fast-memoize (GitHub: [caiogondim/fast-memoize.js](https://github.com/caiogondim/fast-memoize.js), License: ISC, npm: fast-memoize)

First of all let me start of with informing you about why there hasn't being a new post for several weeks now.
To be completely honest with you guys, I just got very lazy.
I've just bought my first house with the fiancé. Which of course needed to be fixed up, we needed to restore damage to the previous house and we actually needed to do the move. Besides all of that I also started at a new client which took some more time to get used to. But hey those are all excuses and you don't really care about that. You just wanna see code. So now that I'm back and integrated into all the new environments around me I'm ready to start updating you again. So enough chit chat let's look at `fast-memoize.js`.

According to Wikipedia: "In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. ".

This library is an attempt to make the fastest possible memoization library in JavaScript that supports any arguments. This is not the first attempt on doing that. There have being multiple attempts but as the developer points out those attempts are not fast enough and have limitation on number of arguments which can be passed.

![benchmarks](https://camo.githubusercontent.com/296969d6a36da6df8b79ed4fe4f50f9d5b528cd6/687474703a2f2f7261776769742e636f6d2f6361696f676f6e64696d2f666173742d6d656d6f697a652f6d61737465722f696d672f62656e63686d61726b2d63686172742e706e67)

The reason why Lodash comes out on top on these benchmarks is because they limit the number of arguments you can pass, thus gaining performance.

When you want to memoize a function you can do so by creating it like this:

```javascript
const memoize = require('fast-memoize')
const fn = function (one, two, three) {
  // Awesome magical code in here
}

const memoized = memoize(fn);

memoized('foo', 3, 'bar');
// Call it again
memoized('foo', 3, 'bar'); // Cache hit
```
The library takes a look at the environment it in running on and selects the quickest cache to work with.
If you want to implement your own cache make sure it has the following methods:

- `get`
- `set`
- `has`
- `delete`

The support is also very good for details about that you should consult the [README](https://github.com/caiogondim/fast-memoize.js/).

If you have any interest in helping me make Daily-JavaScript.com better, don't hesitate to <a href="mailto:daily-javascript@ra-ge.net">contact me with your ideas</a>.
