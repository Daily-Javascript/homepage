---
title: 'Meow'
date: '2016-03-16'
author: ramon
template: article.jade
---

meow (GitHub: [sindresorhus/meow](https://github.com/sindresorhus/meow), License: ISC, npm: meow)

After looking over some the source code of a CLI I might wanted to mention today, I came across this:

```javascript
require('meow')
```
Which made me curious. So I clicked on the package, which I can do thanks to [Octolinker](https://github.com/octo-linker/chrome-extension).
This landed me with in the repository of Meow, which is a CLI helper.

It parses arguments, converts flags to camelCase, shows `--help` message and it sets the process title to the binary name defined in `package.json` which is a nice cosmetic touch.

As an example:

```javascript
const meow = require('meow');

const cli = meow(`
    Usage
      $ foo <input>

    Options
      -r, --rainbow  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`, {
    alias: {
        r: 'rainbow'
    }
});

foo(cli.input[0], cli.flags);
```
When this is called like so:
```bash
node foo-app.js unicorns --rainbow
```
Meow will provide you with the following object:
```javascript
{
    input: ['unicorns'],
    flags: {rainbow: true},
    // ...
}
```
With which you could implement a method like:
```javascript
  function foo(action, flags){
    if( action === 'unicorns' ){
      const outputString = flags.rainbow ? '🌈 unicorns 🌈' : 'unicorns';
      console.log(outputString);
    }
  }
```
