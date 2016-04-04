---
title: 'WebBlock.js'
date: '2016-04-04'
author: ramon
template: article.jade
---

WebBlock.js (GitHub: [richardanaya/webblock](https://github.com/richardanaya/webblock), License: MIT, npm: webblock)

Web components are a very powerful way to modularize your the UI of your application in a way that is compliant with the standards.
One of the problems with this is that Polymer JS is the leading library for web components, because:

- It has a very steep learning curve
- It lacks concise ways to write expressions

Luckily did Richard Anaya notice these problems and saw an opportunity to create a library that allows you to get started with Web components quickly and reuse popular virtual DOM technologies like React.

Not only is it compatible with React and VirtualDOM but you can still use indirection data architectures like Flux and Redux.
The developer has posted a Redux example in [this WebpackBin](http://www.webpackbin.com/E1D11e1Ce).

A quick example of how a component would look using React and WebBlock:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import WebBlock from 'webblock';

WebBlock({
  tag: 'pizza',
  virtualDom: WebBlock.React(React,ReactDOM),
  render() {
		return <div>Hello {this.name}</div>;
	},
  attributes: {
    name: String,
  }
});

WebBlock({
  tag: 'pizza-list',
  virtualDom: WebBlock.React(React, ReactDOM),
  render() {
    if(this.names == undefined) return <div></div>;
    const pizzas = this.names.map((x) => {
      function setName(ref){
        //set the property directly on the DOM node
        ref.name = x;
      }
      return <pizza ref={setName}></pizza>
    })
    return <div>{pizzas}</div>
  },
  attributes: {
    names: Array
  }
});
```

Which you could use in your HTML like so:

```html
<pizza-list names='["margarita", "salami", "veggie"]'><pizza-list>
```

Besides making all new components, you could also make use of [the great collection](https://customelements.io/) of components already created for Polymer.
To enable this you will need to force Polymer to use ShadowDOM before it is loaded like so:
```html
<script>
    /* this must run before Polymer is imported */
    window.Polymer = {
      dom: 'shadow',
      lazyRegister: true
    };
</script>
```
