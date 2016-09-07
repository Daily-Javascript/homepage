---
title: '3 modules to check, enforce or prevent running in sudo mode'
date: '2016-09-07'
author: offirmo
template: article.jade
---

As said before I will be introducing guest writers. This weeks post comes from [Offirmo Neet](https://github.com/Offirmo). Offirmo approached me asking if I wanted any help baring the load of the daily production of content.

He expressed to also be sad that Alex Young stopped producing [DailyJS](http://dailyjs.com/) and he was very eager to help create an alternative.

With no further ado I will give the word to Offirmo.

# 3 modules to check, enforce or prevent running in sudo mode

Sindre Sorhus gets us covered with 3 complementary modules about running an app as root:
* is-root (GitHub: [sindresorhus/is-root](https://github.com/sindresorhus/is-root), License: MIT, npm: [is-root](https://www.npmjs.com/package/is-root))
* sudo-block (GitHub: [sindresorhus/sudo-block](https://github.com/sindresorhus/sudo-block), License: MIT, npm: [sudo-block](https://www.npmjs.com/package/sudo-block))
* downgrade-root (GitHub: [sindresorhus/downgrade-root](https://github.com/sindresorhus/downgrade-root), License: MIT, npm: [downgrade-root](https://www.npmjs.com/package/downgrade-root))

As you know, Unix programs can be run with ["root privileges"](https://en.wikipedia.org/wiki/Superuser#Unix_and_Unix-like) usually by starting them with [`sudo`](https://en.wikipedia.org/wiki/Sudo). The "root" user has all permissions, which is in important security concern.

When writing a CLI app in javascript, you may want to check if your app is run with root privileges with the 1st module `is-root`:

```javascript
const isRoot = require('is-root')
console.log(`You are ${isRoot() ? 'root' : 'not root'}.`)
```

Which gives you:

```
$ node ./index.js
You are not root.
$ sudo `which node` ./index.js   <-- note: find userland node if not installed as root
You are root.
```

If your app doesn't need superuser rights, you can protect the user by refusing to be run by sudo with the 2nd module `sudo-block`:

```javascript
const sudoBlock = require('sudo-block')
sudoBlock()
```

If run as root, the library call will crash the process and gives explanations and solutions:
```
$ sudo `which node` ./index.js
You are not allowed to run this app with root permissions.
If running without sudo doesn't work, you can either fix your permission problems
or change where npm stores global packages by putting ~/npm/bin in your PATH and running:
npm config set prefix ~/npm

See: https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md
```

Even better, instead of stopping, you can attempt to gracefully downgrade those rights for safety with the 3rd module `downgrade-root`:
```javascript
const downgradeRoot = require('downgrade-root');

try {
	downgradeRoot()
	console.log('You were root: privileges relinquished.')
} catch (err) {
	console.error('You are root and I couldn’t downgrade permissions !')
	process.exit(1)
}

```

If run as root and if everything goes well, you'll see:
```
$ sudo `which node` ./index.js
You were root: privileges relinquished.
```

Wrapping all together gives us the best solution to avoid running as root:

```javascript
const isRoot = require('is-root')

if (isRoot()) {
	console.log(`You are root!`)
	try {
		require('downgrade-root')()
		console.log('root privileges relinquished.')
	} catch (err) {
		console.error('Couldn’t downgrade permissions !')
		require('sudo-block')()
	}
}
```

For more information and demo’s on how to use this check out the READMEs:
* [sindresorhus/is-root](https://github.com/sindresorhus/is-root)
* [sindresorhus/sudo-block](https://github.com/sindresorhus/sudo-block)
* [sindresorhus/downgrade-root](https://github.com/sindresorhus/downgrade-root)
