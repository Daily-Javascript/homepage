---
title: 'Ora'
date: '2016-03-08'
author: ramon
template: article.jade
---

Ora (GitHub: [sindresorhus/ora](https://github.com/sindresorhus/ora), License: MIT, npm: ora)

When you are making command line tools using Node.js you are probably using something like [Vorpal](http://daily-javascript.com/articles/vorpal/) or [commander](https://www.npmjs.com/package/commander).
When you want to communicate to the user that she needs to wait there are multiple things you could do.
You could show a progress bar, but for that you would need to know when to fill it and when its done.
Maybe you do not have this and do not wanna be bothered with implementing this.
Well the maybe you wanna show a loading spinner like this:

<img src="https://github.com/sindresorhus/ora/raw/master/screenshot.gif" style="max-width: 480px; width: 100%;" />

Well than Ora is the spinner for you.
It works very straight forward:

```javascript
const ora = require('ora');
const mySpinner = ora('Loading undead unicorns');

mySpinner.start();

// Update
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Killing all the undead unicorns';
}, 1000);
```
One of the great things about this spinner is that it will not clutter up your CI logs with stuff like:
```
|
\
-
/
-
|
```
or
```
[=   ]
[==  ]
[=== ]
[====]
```
Since it will gracefully not do anything when there's no TTY.
When you do not like the default spinner, you could select another one from the [list of spinners](https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json) or create your own like so:

```javascript
const mySpinner{
  interval: 80,
  frames: ['-', '+', '-'],
};
```
