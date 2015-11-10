---
title: 'generator-redux'
date: '2015-10-29'
author: ramon
template: article.jade
---

generator-redux (GitHub: [banderson/generator-redux](https://github.com/banderson/generator-redux), License: MIT, npm: generator-redux)

Today I like to mention a Yeoman generator which I've being using a lot lately: generator-redux.
When you are not familiar with Yeoman please check it out, it will save you a lot of time.

You have probably heard about [Facebook's Flux architecture](facebook.github.io/flux/). Since a few months there is a new kid in town called Redux.
[Redux](https://github.com/rackt/redux) is ["Atomic Flux with hot reloading"](http://youtube.com/watch?v=xsSnOQynTHs). A next-generation take on the Flux pattern with some core design differences such as:
> - Preserves the benefits of Flux, but adds other nice properties thanks to its functional nature.
- Prevents some of the anti-patterns common in Flux code.
- Works great in universal (aka "isomorphic") apps because it doesn't use singletons and the data can be rehydrated. ...

The features included in this generator are:

- Redux functional application architecture
- Redux-DevTools configured and enabled when in dev mode
- WebPack for build pipeline and dev server awesomeness
- Babel transpiler so you can use bleeding edge language features
- PostCSS preprocessor with autoprefixer support

Offcourse this generator depends on `yo` being installed globally. Once you have that you can acquire it via:

```bash
npm install -g generator-redux
```
Now that the generator is installed you can access it via:
```bash
yo redux
```
This will give you a prompt asking you for an application name, description and a port.
Description is used in package.json and the generated README.md.
Port is to run your development server on (defaults to 3000).

To start the scaffold app use:
```bash
npm run
```
When you wanna run it with the Redux-DevTools enabled use:
```bash
DEBUG=true npm start
```
