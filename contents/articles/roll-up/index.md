---
title: 'Rollup.js'
date: '2015-10-21'
author: ramon
template: article.jade
---

### Rollup.js

Rollup.js (GitHub: [rollup/rollup](https://github.com/rollup/rollup), License: MIT, npm: rollup)

Rollup is a next-generation Javascript module bundler. Build your app or library using ES2015 modules, then efficiently bundle them up into a single file for use in browsers and Node.js.
This is not an unfamiliar concept to the most of us. What makes Rollup stand out is that fact that it's using only the functionality that you import.

Normally you would do something like this:

```javascript
var util = require('util');
util.ajax('http://some-api.com/?q=DailyJavascript').then( handleData );
```
What this does is include the entire module `util` but we only use the `ajax` method. This will increase the total size of our app.
Now there is ES2015 module loading which allows us to include only the functions we need like this:

```javascript
import { ajax } from 'util';
ajax('http://some-api.com/?q=DailyJavascript').then( handleData );
```
When we build the second example, with for instance Browserify, what would happen is that the entire module would still get loaded. Kinda beats the point of using `import` right?
Luckily there is Rollup to the rescue which will only build that what you need.

For the moment it only provides a command line interface which you can acquire via:
```bash
npm i rollup -g
```

The usage is pretty straight forward.

```bash
# create a self-executing bundle...
rollup --format iife -- src/app.js > build/app.js

# ...with inline sourcemaps:
rollup -f iife --sourcemap inline -- src/app.js > build/app.js

# create a bundle with dependencies on jQuery and Angular,
# with a sourcemap in a separate file
rollup -f iife --globals jquery:jQuery,angular:ng \
  -i src/app.js -o build/app.js -m build/app.js.map
```
For more commands check out the `--help`.

Alternatively, you could use rollup command from an npm run script cntext, you can install it as a devDependency using:

```bash
npm i rollup -D
```
