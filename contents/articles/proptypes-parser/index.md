---
title: 'proptypes-parser'
date: '2016-04-11'
author: ramon
template: article.jade
---

proptypes-parser (GitHub: [joonhocho/proptypes-parser](https://github.com/joonhocho/proptypes-parser), License: MIT, npm: proptypes-parser)


When working in in React and you are following the guidelines on how to create components, you've probably already ran into the frustration of constantly saying `PropTypes.number`, `PropTypes.string`, `PropTypes.func` etc.
Personally I do not like to write all this repetition. So I could do something like this:
```javascript
import { PropTypes } from 'react';
const { number, string, func, shape, /* etc */ } = PropTypes;
```
But that does not really work, since I would need to do that on top each file.

proptypes-parser lets you define your `PropTypes` in a GraphQL-like syntax, like so:

```javascript
const propTypes = parsePropTypes(`{
  number: Number
  string: String!
  boolean: Boolean
  function: Function!
  date: Date!
  object: Object!
  shape: {
    nested: Number
    array: [Number]
    must: Boolean!
  }!
  array: [Number!]!
  arrayOfObjects: [{
    value: String
  }!]
  node: Node
  element: Element!
  message: Message!
  any: Any!
}`);
```
It also allows you to define your own custom `PropTypes` like so:

```javascript
const parsePropTypes = createPropTypesParser(PropTypes, {
  Message: class Message {} // To use 'Message' type is PropTypes.
});
```
For further documentation and examples take a look at the [README](https://github.com/joonhocho/proptypes-parser) file.
