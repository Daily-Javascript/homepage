---
title: 'CLog.js'
date: '2016-02-18'
author: ramon
template: article.jade
---

CLog.js (GitHub: [CVarisco/CLog.js](https://github.com/CVarisco/CLog.js), License: MIT, npm: clog_js bower: clog)

<img src="https://camo.githubusercontent.com/c4884bc7f9b88f02a4043a997a50bb50f6a01171/687474703a2f2f7777772e636976692e63687269737469616e7661726973636f2e636f6d2f646f776e6c6f61642f6e6f726d616c436c6f672e706e67" style="max-width: 756px; width: 100%;">

CLog.js is a very lightweight library create custom colored log messages for the browser.
Sadly this feature is only available in Google Chrome. In other browsers it falls back to the default console.log.

The problem this library tries to solve is the same problem [Chalk](https://www.npmjs.com/package/chalk) and [Colors.js](https://github.com/marak/colors.js/) are trying to solve. But this library is only focused on the browser.

I hope to see more options to style with such as background-color, underline and maybe strike-through, right now it only supports colors.
You can install it using bower, npm or [downloading it here](https://github.com/CVarisco/CLog.js/blob/master/clog.js).

Then you can instantiate it like so:

```javascript
var options = {
    group: false,
    colors: {
        log: "#31f095",
        debug: "#e86024",
        data: "#DDDDDD"
        error: "#e22f2f",
        network: "#08bce9",
    }
}

var CLog = new CLog(options);
```

Now we can use it within our code like this:

```javascript
CLog('debug', 'Pizza is awesome!!');
```
And it will log it in the color assigned to `debug`. In this same place we can give it a HEX color and it will use it.

```javascript
CLog('#FFCFFF', 'Pizza is awesome!!');
```

Today is normally the last day you can submit your solution for this weeks challenge. Since I have only received one submission up till now, I will leave the submissions open until tomorrow night around 8PM Amsterdam time, which would be 2PM New York time.
Be sure you send in what you got before that time. When it's not finished yet, hurry up. If you need a reminder on what the challenge was head over to the challenge page of: [Websocket Challenge](http://daily-javascript.com/challenges/websocket-challenge/).
