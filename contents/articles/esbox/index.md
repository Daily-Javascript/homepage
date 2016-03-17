---
title: 'ESBox'
date: '2016-03-17'
author: ramon
template: article.jade
---

esbox (GitHub: [callumlocke/esbox](https://github.com/callumlocke/esbox), License: MIT, npm: esbox)

esbox is a zero-config REPL for when you wanna run a quick experiment using ESNext(ES6/ES7).
In that scenario you do not wanna get bothered with setting up you `.babelrc` and installing dependancies, you just wanna try out some stuff.

It automatically compiles and re-runs your script every time you save the given file.
You can look at it as a JSBin/Webpackbin-like setup within your terminal.

One of the very cool features is 'Magic imports' which provides some of the most used packages like lodash, bluebird, react, chalk, chai, express, request and many more.

An example which would work straight out of the box:
```javascript
import cheerio from 'cheerio';
import fetch from 'isomorphic-fetch';
import { cyan } from 'chalk';

(async () => {
  const result = await fetch('https://www.nytimes.com');
  console.assert(result.ok);

  const $ = cheerio.load(await result.text());

  console.log('The New York Times headlines:');

  $('.story-heading').each((i, element) => {
    console.log(' ', cyan($(element).text().trim()));
  });
})();
```
You would run this using:
```bash
esbox script.js
```
