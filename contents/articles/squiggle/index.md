---
title: 'Squiggle'
date: '2015-11-09'
author: ramon
template: article.jade
---

Squiggle (GitHub: [wavebeem/squiggle](https://github.com/wavebeem/squiggle), License: MIT, npm: squiggle-lang)

Squiggle is a strict, expression-oriented, compile-to-JS programming language. Yes, yet another compile-to-JS language.
At the beginning I was sceptic about it, but once I started reading [the tutorial](http://squiggle-lang.org/tutorial) posted on the site I adjusted my opinion.
Not everything is there yet, but I need to say that I like the way it looks and might even consider picking it up.

So some of the features that drew my attention are:

- Arity checked functions
  - When calling a function created in Squiggle with not enough arguments, it throws an exception.


- Frozen literals
  - Array and object literals are frozen with `Object.freeze` by default, so you can't accidentally mutate them.


- Easy updates
  - Operators `++` to concatenate two arrays or two strings, and ~ to merge two objects into a new frozen object with the prototype of the first object.


- Destructuring assignment
  - Grab object properties or array elements when you assign variables, like: `let [x, y] = [1, 2] or let {x, y} = {x: 1, y: 2}.`


- Pattern matching
  - Is similar to the Javascript `switch` but with destructuring power built-in and no dangerous fall-through.


- No type coercion
  - Standard operators like `+`, `-`, `*`, and more, have been replaced with strict version that do not perform any type coercions, throwing exceptions on bad inputs.


- Deep equality
  - The operator == performs a deep equality check.

There are a lot more features which just make it work a bit nicer. If you want a good overview of what this language can do I would recommend you reading [the tutorial](http://squiggle-lang.org/tutorial) section of the website and then [give it a shot in the browser](http://squiggle-lang.org/try).


Here is a small example provided by the developer in which you can see how it would work together met Node's HTTP package.

```javascript
let http = require "http"

let port = 1337
let host = "127.0.0.1"

def handler(res, res) =
    let headers = {"Content-Type": "text/plain"}
    let _ = res.writeHead(200, headers)
    let _ = res.end("Hello world\n")
    in undefined

let server = http.createServer(handler)
let _ = server.listen(port, host)
let _ = console.log("Server running at http://" ++ host + ":" ++ port ++ "/")
in undefined
```

Since there is a comment section present after the latest update, I would love to here what you guys think of this and the blog in general.
