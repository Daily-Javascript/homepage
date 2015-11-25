---
title: 'Babel Typecheck'
date: '2015-11-10'
author: ramon
template: article.jade
---

Babel Typecheck (GitHub: [codemix/babel-plugin-typecheck](https://github.com/codemix/babel-plugin-typecheck), License: MIT, npm: babel-plugin-typecheck)

Babel Typecheck is a [Babel](https://babeljs.io/) plugin for static and runtime type checking. It does so using [Flow type](http://flowtype.org/).
What it does is turn a code block like this:

```javascript
function sendMessage (to: User, message: string): boolean {
  return socket.send(to, message);
}
```
Into this:

```javascript
function sendMessage(to, message) {
  var _socket$send;

  if (!(to instanceof User)) throw new TypeError("Value of argument 'to' violates contract.");
  if (typeof message !== "string") throw new TypeError("Value of argument 'message' violates contract.");
  _socket$send = socket.send(to, message);
  if (typeof _socket$send !== "boolean") throw new TypeError("Function 'sendMessage' return value violates contract.");
  return _socket$send;
}
```
What this does is it executes the same as when you would write your function like this:

```javascript
function sendMessage (to, message) {
  return socket.send(to, message);
}
```
But with one big difference, when you call this function with the wrong arguments your application just breaks.
When using Babel Typecheck it would present you with a type error on transpiling so you will not make silly mistakes again. Well not the type error kind at least.

In the example above we see a few new things, mostly attached to the function call:
```javascript
	(to: User, message: string): boolean
```

Which means that the `to` parameter expects to be an instance of User.
The `message` parameter expects to be a String.
The `:` at the and of the function call is to indicate what the function will return which is a Boolean in this example.


This function demonstrates which kinds of annotations are supported:
```javascript
function foo(
	aNum: number,
	anOptionalString: ?string, // will allow null/undefined
	anObject: Object,
	aDate: Date,
	anError: Error,
	aUnionType: Object|string,
	aClass: User,
	aShape: {foo: number, bar: ?string},
	anArray: Array,
	arrayOf: string[] | Array<string>,
	{x, y}: {x: string, y: number}, // destructuring works
	es6Defaults: number = 42
) : number {
  return aNum;
}
```

When I saw the syntax of this plugin the first thing that jumped into my mind was why not just use Typescript then.
Since Typescript had it's own upstream this might not be inline with the ESnext(ES6/ES7) feature we have grown to love.
By including this plugin in your `.babelrc` to can have the power and security of strongly typed Javascript and all the new features provided by Babel.
