---
title: 'jsdoc2diagram'
date: '2015-10-27'
author: ramon
template: article.jade
---

jsdoc2diagram (GitHub: [amcmillan01/jsdoc2diagram](https://github.com/amcmillan01/jsdoc2diagram), License: MIT, npm: jsdoc2diagram)

If your day job looks anything like mine, the problem of sharing knowledge will be a well known issue for you.
We try our best to keep the docs up to date and inform our co-workers of any changes that would be crucial. But what if a new developer joins the team? He will be spending the next week or 2 getting the know the entire app but mostly how everything hangs together.

Since we are probably already using [JSDoc](http://usejsdoc.org) there is a great addition available for giving insight on how the application is put together called `jsdoc2diagram`.

What jsdoc2diagram does is literally what the name implies it does. It turns JSDocs documentation into graphs using [d3.js](d3js.org).

This is an example of the kind of graph it would present you with:

<img src="https://github.com/amcmillan01/jsdoc2diagram/raw/master/example/diagram.png" style="max-width: 756px; width: 100%; position:static;">

The for for this diagram looks like this:

```javascript
/**
 * @constructor
 */
var Garage = function(){

};

/**
 * @return {number}
 */
Garage.prototype.getVehicleCount = function(){

};


/**
 *
 * @constructor
 * @memberof Garage
 */
var Car = function(){
  /**
   *
   * @type {string}
   */
  this.name = '';
  /**
   *
   * @type {string}
   */
  this.color = '';
};

/**
 * @return {boolean}
 */
Car.prototype.isOn = function(){

};

/**
 * @return {boolean}
 */
Car.prototype.hasNavigation = function(){

};

```

I think this is a great addition to every bit of documentation. It gives a clear overview of how objects and methods are in relation to each other, which is something I was really missing.

To get started using this you will need to have `jsdoc` installed once you have that you only need to install `jsdoc2diagram` via npm and then you could use it like this:

```bash
jsdoc -t PATH/TO/jsdoc2diagram -r JS_SOURCE_DIR/FILE -d OUTPUT_DIR
```
I could imagine that you would call this from an npm run script after your JSDocs are generated.
