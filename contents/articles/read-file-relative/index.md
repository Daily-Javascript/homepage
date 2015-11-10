---
title: "Read file relative"
date: '2015-10-07'
author: ramon
template: article.jade
---

### Read file relative

read-file-relative (GitHub: [inikulin/read-file-relative](https://github.com/inikulin/read-file-relative), License: Unknown, npm: read-file-relative)

A problem everybody probably encounters once in a while is relativity of file paths while reading files with Node.js.
You would do something like this:

```javascript
var fs   = require('fs');
var path = require('path');
var data = fs.readFileSync(path.join(__dirname, '/data-file.txt')).toString();

// Or like:
var fs   = require('fs');
var data = fs.readFileSync(__dirname + '/data-file.txt').toString();

// Or even like this
var fs   = require('fs');
var data = fs.readFileSync('./data-file.txt').toString();
```

Now you can easily read out files without all the annoying boilerplate code.
Imagine a world where you could do this:

```javascript
var data = readSync('/data-file.txt');
```

Well you can stop imagining, because it's here and it's called `read-file-relative`.
`Read-file-relative` comes with two main functions on it's API: read and readSync.
Let's take a look.

To read out the file synchronously this is what you would do.

```javascript
var readSync = require('read-file-relative').readSync;
var data = readSync('/file.txt');
```

When you prefer asynchronously reading you just provide a callback like this:
```javascript
var read = require('read-file-relative').read;
read('/file.txt', 'utf8',function(err, content) {
   // ...
});
```
Note that for the `read` we need to provide the encoding else it will return a buffer.

Besides reading files you can also just convert a path to an absolute path like this:

```javascript
var toAbsPath = require('read-file-relative').toAbsPath;
var absPath = toAbsPath('/file.txt');
```

This is a nice addition to everybody's toolbox. It doesn't do much, but what it does, it does very well.
