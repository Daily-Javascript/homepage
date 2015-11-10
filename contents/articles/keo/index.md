---
title: 'Keo'
date: '2015-11-03'
author: ramon
template: article.jade
---

### Keo

Keo (GitHub: [Wildhoney/Keo](https://github.com/Wildhoney/Keo), License: MIT, npm: keo)

![https://github.com/Wildhoney/Keo/raw/master/media/screenshot.png](https://github.com/Wildhoney/Keo/raw/master/media/screenshot.png)

If you are like me and don't like the ESnext syntactic sugar which gets used in most React examples nowadays, then you will like Keo.
Keo gives you a more functional approach to creating React components.

The advantages gained by using Keo are:

- Steer away from `class`
- Create referentially transparent, pure functions without this
- Use `export` to export plain functions for simpler unit-testing
- Simple composing of functions for mixin support
- Avoid functions being littered with React specific method calls

Keo's philosophy is that you should not have to worry about the `this` keyword (even though scoping has became a lot better since ES2015). As such, Keo takes a more [Deku](https://github.com/dekujs/deku) approach in that items such as props, state, setState, et cetera are passed in to some [React lifecycle functions](https://facebook.github.io/react/docs/component-specs.html).

The React lifecycle functions such as: `componentWillMount`, `componentDidMount`, `componentWillUnmount`, `render` will receive props, state, setState and dispatch as an object which can be destructured.

When you have created your component, Keo encourages you to `export` all functions so that you can test each one individually, but **demands** that you export the lifecycle functions by invoking keo.stitch like this:
```javascript
import {stitch} from 'keo';
// ...
export default stitch({ componentDidMount, render });
```

You could still use Redux with Keo. Keo provides a `keo/redux` adapter for handling Redux in a more succinct fashion. Instead of importing keo you can import the keo/redux adapter and use the `stitch` function from there instead like this:

```javascript
import {stitch} from 'keo/redux';
// ...
export default stitch({ componentWillMount, render }, state => state.zombies);
```
