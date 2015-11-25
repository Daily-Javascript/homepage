---
title: 'Domcom'
date: '2015-11-16'
author: ramon
template: article.jade
---

Domcom (GitHub: [taijiweb/domcom](https://github.com/taijiweb/domcom), License: MIT, npm: domcom)

Yesterday I got an email with the request to take a look at the Domcom.
Domcom is a frontend framework which uses declarative components to proxy the DOM in order to implement better performance than [VirtualDOM](https://github.com/Matt-Esch/virtual-dom). It comes with "lazy" reactive functions to manage data. A few of the features included in this framework are:

- Declarative compostable components with reactive function

- Only render the invalidated components and refresh the really changed DOM nodes with automatic update status checking

- Decouple with model and controller

- Simple but powerful route

- Support for promise

And a whole lot more but I would refer you to the [Github project](https://github.com/taijiweb/domcom) for that.

Here is a code example provided by the developer to give a taste of Domcom:

In javascript:
```javascript
    const {list, text, p, flow, see} = dc
    ​
    demoSum = function() {
      let a, b, comp, p1, t1, t2;

      a = see(1);
      b = see(2);

      comp = list((t1 = text({
        value: a,
        onchange() { return a(this.value * 1); }

      })), (t2 = text({
        value: b,
        onchange() { return b(this.value * 1); }

      })), p1 = p(flow.add(a, b)));

      dc.updateWhen([t1, t2], 'change', p1);

      return comp.mount();
    };
    ​
    demoSum();
```

Since the developer likes coffee-script is here the same example in coffee-script.

```coffeescript
{list, text, p, flow, see} = dc

demoSum = ->

    a = see 1; b = see 2

    comp = list \
        (t1 = text value: a, onchange: -> a @value*1),
        (t2 = text value: b, onchange: -> b @value*1),
        p1 = p flow.add a, b

    dc.updateWhen [t1, t2], 'change', p1

    comp.mount()

demoSum()

```
