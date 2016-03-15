---
title: 'Hactar'
date: '2016-03-15'
author: ramon
template: article.jade
---

Hactar (GitHub: [Hactar-js/hactar](https://github.com/Hactar-js/hactar), License: ISC, npm: hactar)

Since a few month I start noticing a lot of people getting frustrated with the amount of setup required when trying new techniques.
First of all I would like to refer these people that we are developers and it is our task to learn these methods and techniques. The libraries and frameworks we use are not consumer products. I do not understand where the expectation comes from that a framework or library should feel like a consumer product.

mpjme has a [very great episode](https://www.youtube.com/watch?v=LyQU1sdnAtM) about exactly this problem in the Javascript community.

<iframe width="100%" height="480px" src="https://www.youtube.com/embed/LyQU1sdnAtM" frameborder="0" allowfullscreen></iframe>

When I was browsing for new tools today I came across Hactar.
Hactar is an attempt to resolve the issue of "Javascript Fatigue". It configures build tools, installs dependencies, adds imports, creates tests automatically.

It does not require boilerplates, no generators, and no build tools to configure.
To start using Hactar you simply write code and it figures out what you want to do and the best practices to make it happen.

Typically a workflow with Hactar would look like this;

Start up Hactar
```bash
$ hactar -p hactar-babel

# initiating npm
# name: (testcats)
# ...
# hactar is running
```

Open/create a file to start coding in.
```bash
emacs index.js
```
And add some boilerplate which you will probably copy and past from the documentation of the library you want to use:

```javascript
import React from 'react';
import Button from 'react-toolbox/lib/button';

const CustomButton = () => (
  <Button label="Hello world" raised accent />
);

export default CustomButton;
```
Hactar will detect all the features used here and install the following packages:

- babel
  - configured with babel and es2015
- react
- react-toolbox

So you don't have to worry about setting up any environment anymore.
