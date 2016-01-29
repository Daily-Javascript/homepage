---
title: 'Pressure'
date: '2016-01-25'
author: ramon
template: article.jade
---

Pressure (GitHub: [yamartino/pressure](https://github.com/yamartino/pressure), License: MIT, npm: pressure)

<img src="https://camo.githubusercontent.com/ff9a4c42ce2565fd1ef4e2b55ebcd0e9028d6961/687474703a2f2f79616d617274696e6f2e6769746875622e696f2f70726573737572652f70726573737572652e676966" style=" width: 100%;" />

Pressure is a library which makes dealing with Apple's "Force Touch" and "3D Touch" simpler.
At the time of writing this update the support for Force Touch was:

- iPhone 6s
- iPhone 6s Plus
- MacBook 2015
    - 13" MacBook Pro 2015
    - 15" MacBook Pro 2015
- Magic Trackpad 2

And sadly it only works inside Safari.
The developer has let us know that when there are more devices or browsers to support, that it will also be supported by Pressure.

> Future devices and browser that support force will be added when they come out

The library is constructed in a way that Force Touch for new Macs and 3D Touch for the new iPhone 6s and 6s Plus are all bundled under one roof with a simple API. By example:

```javascript
var Pressure = require('pressure');

Pressure.set('#myAwesomeElement', {
    change: (force) => {
        this.innerHTML = force;
    }
});
```

What this will do is render the "amount" of pressure put on `#myAwesomeElement`.
The rest of the API is just as straight forward.
Use `end` to know when the user has stopped putting pressure on your awesome element.
`startDeepPress` to know if the user is applying deep pressure and `endDeepPress` to know when it stopped.
And as a curtesy there is `unsupported` which tell's you if Force Touch is available.

If you want to know more head over to the [Github Page](http://yamartino.github.io/pressure/) and check the [documentation](http://yamartino.github.io/pressure/). The developer also implemented a very nice demo on that same page.

Since it's the first day of the week I would like to remind you to challenge yourself this week.
This weeks challenge is to create a workshop about a topic you care about or want to research.
The only way you can be sure of knowing something is when you can teach it to somebody else.

Head over to the [Workshopper Challenge](http://daily-javascript.com/challenges/workshopper/) section for more details.
