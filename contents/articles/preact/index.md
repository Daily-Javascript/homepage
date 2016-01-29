---
title: 'Preact'
date: '2016-01-26'
author: ramon
template: article.jade
---

Preact (GitHub: [developit/preact](https://github.com/developit/preact), License: MIT, npm: preact)

Preact is an attempt to recreate the core value proposition of React using as little code as possible.
It is far to say that the developers succeeded in this, since it's only around 3kb when minified and gzipped.

The library retains a large amount of compatibility with React. Note that only the [stateless functional components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) and [ES6 Classes interface](https://facebook.github.io/react/docs/reusable-components.html#es6-classes) are available for use.

It already has a few add-ons such as [a router](http://git.io/preact-router), [an universal renderer](http://git.io/preact-render-to-string) and [a compatibility layer for other React modules](https://github.com/developit/preact-compat).

A full list of demo's, add-ons and libraries can be found on the [Github Page](http://developit.github.io/preact/).

Let's take a look on how we work with it.

```javascript
// import the stuff we want to use
import { h, render, Component } from 'preact';

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

class App extends Component {
    render() {
        return <h1>My Super Awesome App</h1>;
    }
}

// render an instance of App into <body>:
render(<App />, document.body);

```
As you can see it's very similar to React but only 3kb.
It comes with the same set of lifecycle events:

- componentWillMount
- componentDidMount
- componentWillUnmount
- componentDidUnmount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate

For more examples check the [README](https://github.com/developit/preact-compat) or the [Github Page](http://developit.github.io/preact/) where you can find some amazing examples posted by the developer.
