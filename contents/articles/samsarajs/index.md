---
title: 'SamsaraJS'
date: '2016-02-04'
author: ramon
template: article.jade
---

SamsaraJS (GitHub: [dmvaldman/samsara](https://github.com/dmvaldman/samsara), License: MIT, npm: samsarajs)

SamsaraJS is a functional reactive library for animating layout.
It tries to provides a language for positioning, orienting and sizing DOM elements, and animating those properties over time.
Everything within Samsara is based on streams. This means that can subscribe to for instance the user input and preform curtain actions when the input occurs. By example:

```javascript
const Surface = Samsara.DOM.Surface;
const Context = Samsara.DOM.Context;
const Transform = Samsara.Core.Transform;
const MouseInput = Samsara.Inputs.MouseInput;

const surface = new Surface({
    content: 'drag me',
    size: [100,100],
    properties : {
        background : '#FF0000'
    }
});

const mouse = new MouseInput();

// The mouse now listens to the DOM events originating from the surface
mouse.subscribe(surface);

// Map the mouse data to a translation
const transform = mouse.map(data => Transform.translate(data.cumulate));

const context = new Context();
context.add({transform : transform}).add(surface);
context.mount(document.querySelector('#myAwesomeApp'));

```

A great thing about SamsaraJS is that it does not have any opinion about content. It's only responsibility is presentation.
> It moves rectangles around the screen — what you do inside those rectangles is up to you.

A sad thing about this library is that it does require a CSS sheet to be loaded, which can be found `node_modules/samsarajs/dist/samsara.css`.

The developer has posted some really amazing examples on [samsarajs.org](http://www.samsarajs.org/) which you should definitely check out.
Besides the amazing demo's you can also find very expensive documentation about the API and some real helpful guides.

This is by far [my favorite demo](http://samsarajs.org/demos/ParallaxCats/index.html)
<iframe src="http://samsarajs.org/demos/ParallaxCats/index.html" width="100%" height="480px"></iframe>
