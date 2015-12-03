---
title: 'Matreshka'
date: '2015-12-03'
author: ramon
template: article.jade
---

Matreshka (GitHub: [matreshkajs/matreshka](https://github.com/matreshkajs/matreshka), License: MIT, npm: matreshka, bower: matreshka)

![http://matreshka.io/](https://camo.githubusercontent.com/27ecdbde13a34ee2555f36ba3e3ee9363413d6f0/687474703a2f2f6d6174726573686b612e696f2f696d672f6d6b352d6c6f676f5f66756c6c2d766572742e737667)

Matreshka is small but powerful client-side framework that allows you to build single page applications.
It describes it self as a event driven framework, which means that you put listeners on objects and elements to which you can react with configured handler functions.
Besides it's event system it comes with features such as: two-way data-binding, custom objects and custom arrays.

Let's say we would be making a simple SPA then this would be our markup would look something like this

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My first Matreshka application</title>
    </head>
    <body>
        <input type="text" class="my-input">
        <div class="my-output"></div>
        <script src="http://cdn.jsdelivr.net/matreshka/latest/matreshka.min.js"></script>
        <script>

        </script>
    </body>
</html>
```
As you can see we import the Matreshka via a script tag but it's also possible to install via npm.
Nothing new here right? So let's put some code in our `script` tag. Let's make an "class" called Application:

```javascript
var Application = Class({
    'extends': Matreshka,
    constructor: function() {

        // bind the property x and the text field
        this.bindNode('x', '.my-input');

        // bind the property x and the ".my-output" block
        this.bindNode('x', '.my-output', {
            setValue: function(v) {
                this.innerHTML = v;
            }
        });
        this.on('change:x', function() {
            console.log('x changed to ' + this.x);
        });
    }
});

var app = new Application();
```

Or the same code in ES2015:

```javascript
class Application extends Matreshka {
    constructor() {
        this.bindNode('x', '.my-input');
        this.bindNode('x', '.my-output', {
            setValue(v) {
                this.innerHTML = v;
            }
        });
        this.on('change:x', () =>
            console.log('x changed to ' + this.x));
    }
}
```

Now when something happens we can change the value `x` like this:
```javascript
app.x = 'Hello Daily Javascript';
```
This will fill the `input` and the `#output` elements with the string `'Hello Daily Javascript'`.

Nowadays we are not impressed by data-binding any more. It comes with a lot more, but for that I would refer you to the [full documentation](http://matreshka.io/). The API is very small and easy to reason about, so if you have a new POC project coming up I would suggest you give it a try.
