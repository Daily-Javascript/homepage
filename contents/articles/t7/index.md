---
title: 't7'
date: '2015-10-13'
author: ramon
template: article.jade
---

t7 (GitHub: [trueadm/t7](https://github.com/trueadm/t7), License: ISC, npm: t7)

<img src="http://t7js.com/img/screenshot.png" style="max-width: 400px;width: 100%;left: 0;">

While browsing I came across t7, which is a template library that compiles template strings into virtual DOM objects.
Because of this functionality it's used in frameworks such as [Inferno](https://github.com/trueadm/inferno), but it can also be used within React.

There are multiple ways to work with t7. You could include the script on your page the old school way like this:

```html
<script src="t7.js"></script>
```
and you can build it with [Browserify]() or [Webpack]() by installing it via npm and require it like this:

```javascript
import t7 from 't7';
```

Now let's make a page with it.
```javascript
const items = ['Pizza', 'Kebab', 'Donut'];
const welcome = 'to the wonderful world of t7';

t7`
  <div class="foo">
    <h1>Welcome ${ welcome }</h1>
    <ul>
      ${
        items.map( item => t7`
          <li class="item">
            <span>The item is: ${ item }</span>
          </li>
        `)
      }
    </ul>
  </div>
`;
```
By default t7 will attempt to check to see if React is available. If it is, t7 will automatically produce React elements as its output.
When React is not present, you can use to export it to a Universal format.
Universal DOM output should be compatible with most other virtual DOM frameworks out there, like [Mercury](https://github.com/Raynos/mercury), [Cito](https://github.com/joelrich/citojs) and [Virtual-dom](https://github.com/Matt-Esch/virtual-dom).

To set the way you want to output you use:
```javascript
t7.setOutput(t7.Outputs.React);
```
The supported outputs are:

- [React](https://facebook.github.io/react/)
- [Inferno](https://github.com/trueadm/inferno)
- [Mithril](http://mithril.js.org/)
- Universal
