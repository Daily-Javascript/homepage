---
title: "XRegExp and Gun"
date: '2015-09-27'
author: ramon
template: article.jade
---

### XRegExp

XRegExp (GitHub: [slevithan/xregexp](https://github.com/slevithan/xregexp), License: MIT, npm: xregexp)

 XRegExp is a regex utility belt that provides augmented and extensible JavaScript regular expressions.
 It comes with a new modern syntax and flags beyond what browsers support natively. Furthermore it comes with tools to make client-side grepping and string parsing easier. This will free you from worrying about cross-browser inconsistencies and problems like manually manipulating `lastIndex` or slicing strings when tokenizing.

 Because XRegExp compiles to native `RegExp` objects it's just as fast native regular expressions.
 The only penalty would be the compiling the pattern the first time.

 Here are two example that the developer posted on Github.

 ```javascript
 // Using named capture and flag x (free-spacing and line comments)
const date = XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
                    (?<month> [0-9]{2} ) -?  # month \n\
                    (?<day>   [0-9]{2} )     # day   ', 'x');

// XRegExp.exec gives you named backreferences on the match result
let match = XRegExp.exec('2015-02-22', date);
match.year; // -> '2015'

// You can also pass forward and return specific backreferences
const html = '<a href="http://daily-javascript.com/">Daily Javascript</a>' +
           '<a href="http://www.google.com/">Google</a>';
XRegExp.matchChain(html, [
    {regex: /<a href="([^"]+)">/i, backref: 1},
    {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
]); // -> ['daily-javascript.com', 'www.google.com']

// Merge strings and regexes into a single pattern, safely rewriting backreferences
XRegExp.union(['a+b*c', /(dog)\1/, /(cat)\1/], 'i');
// -> /a\+b\*c|(dog)\1|(cat)\2/i
```

You can also enabled some add-ons such as unicode support and then you can do this:

```javascript
// Test the Unicode category L (Letter)
const unicodeWord = XRegExp('^\\pL+$');
unicodeWord.test('Русский'); // -> true
unicodeWord.test('日本語'); // -> true
unicodeWord.test('العربية'); // -> true

// Test some Unicode scripts
XRegExp('^\\p{Hiragana}+$').test('ひらがな'); // -> true
XRegExp('^[\\p{Latin}\\p{Common}]+$').test('Über Café.'); // -> true
```
When installed via npm all add-ons are always available to use this in the browser. You must include to addons like this:

```html
<script src="src/xregexp.js"></script>
<script src="src/addons/unicode-base.js"></script> <!-- This must be include before the other addons -->
<script src="src/addons/unicode-categories.js"></script>
<script src="src/addons/unicode-scripts.js"></script>
```


### GUN

GUN (GitHub: [amark/gun](https://github.com/amark/gun), License: Apache 2.0, npm: gun)

Mark Nadal sent in GUN which is an open source alternative to Firebase.
Mark tells me that he got tired of dealing with DevOps/SysAdmin work to keep MongoDB running in production. It was making him very unhappy.
So he took it upon him self to start a DBaaS like Firebase, but one that he could run on his own servers.

It looks very promising and very easy to setup. Right now it doesn't have an efficient storage engine yet so it stores all the data in JSON.
Let's look at some examples.

To make a connection we must require it and make a reference to it.

```javascript
var Gun = require('gun');
var ref = Gun('http://gunjs.herokuapp.com/gun').get('daily/javascript');

```

Now we are able to put and get data this way.

```javascript

// Putting data
gun.put({
  username: "RamonGebben",
  name: "Ramon Gebben",
  email: "daily-javascript@ra-ge.net"
}).key('usernames/RamonGebben');

// Getting data
gun.get('usernames/RamonGebben').val((user) => console.log(user.name));

```
You can also extend GUN by reacting on events like this:

```javascript
Gun.on('opt').event((gun, opt) => {
    /* Your module here! */
});
```
If you take a look at what the developers have planned to introduce, you will notice this is something to keep your eye on.

I would not recommend using this in production just yet, because it feels very young, but for small prototype for which you don't want to bother setting up an entire infrastructure to load and save this could be a good choice.
