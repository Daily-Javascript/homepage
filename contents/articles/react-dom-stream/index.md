---
title: 'React DOM Stream'
date: '2015-10-26'
author: ramon
template: article.jade
---

React DOM Stream (GitHub: [aickin/react-dom-stream](https://github.com/aickin/react-dom-stream), License: MIT, npm: react-dom-stream)

react-dom-stream is a React renderer for generating markup on a NodeJS server. Unlike the built-in ReactDOM.renderToString, this module renders to a stream.
Streams make this library as much as 47% faster in sending down a full page than ReactDOM.renderToString.

One difficulty with ReactDOM.renderToString is that it is synchronous, which could cost you performance with server-side rendering of React sites. Especially true with large HTML payloads. Which could lead to the following problems as the developer saids:

 > 1. The server cannot send out any part of the response until all the HTML is created, which means that browsers can't start working on painting the page until the renderToString call is done. With larger pages, this can introduce a latency of hundreds of milliseconds.
2. The server has to allocate memory for the entire HTML string.
3. One call to ReactDOM.renderToString can dominate the CPU and starve out other requests. This is particularly troublesome on servers that serve a mix of small and large pages.

react-dom-stream tries to fix those problems for us.

Let's take a look, To use the server-side methods, we'll need to require `react-dom-stream/server`.
To render an `element` as a `stream` using express we would use the `renderToString` method. This would look something like this:

```javascript
var ReactDOMStream = require("react-dom-stream/server");

app.get('/', function (req, res) {
    ReactDOMStream.renderToString(<Foo prop={value}/>, res)
        .then(function(hash) {
            // TODO: write the hash out to the page in a script tag
            res.end();
        });
});
```
When you are working with static pages where you don't intend to use React to render on the client side you could use the `renderToStaticMarkup` method to generates smaller sized markup than `renderToString`.

Again with an express example:

```javascript
var ReactDOMStream = require("react-dom-stream/server");

app.get('/', function (req, res) {
    ReactDOMStream.renderToStaticMarkup(<Foo prop={value}/>, res)
        .then(function() {
            res.end();
        });
});
```

When you are generating server markup using `react-dom-stream`, *you cannot use the standard ReactDOM.render;* you must use the render method in `react-dom-stream`. The difference between react-dom's version and this one is that this render also takes in the hash returned from `renderToString`.

```javascript
var ReactDOMStream = require("react-dom-stream");

var hash = 1234567890; // returned from renderToString's promise and read out into the page
ReactDOMStream.render(<Foo prop={value}/>, document.getElementById("bar"), hash);
```
