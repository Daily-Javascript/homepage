---
title: "Neo"
date: '2016-08-17'
author: ramon
template: article.jade
---
Neo (GitHub: [mozilla/neo](https://github.com/mozilla/neo), License: MPL-2.0, npm: mozilla-neo)

During the daily challenge of finding something interesting for you guys to read, I came across this head line ["Create and build React web applications with zero initial configuration and minimal fuss"](https://blog.eliperelman.com/neo-8bf3d7325f7#.4w7pwyc2d).
This intrigued me, like most clickbait does. So starting looking into it and first thing that popped into my head was: "Oh no, not another project generator."
But then I saw it was posted on Mozilla's Github account which made it interesting.

Neo is like a lot more project an generator for getting a React app of the ground really quick.
With most generators I'm always missing curtain things but the scaffold Neo gave me was very nice.

It uses React, Redux, React Router, Webpack and ES2015 modules. Tests and coverage is done with Karma, Mocha, Chai, Enzyme for component tests and Immutable for the data structures.
Basically the same way I would setup a new front-end.
It works out of the box and you do not need to sift through a bunch of poorly written documentation pages to get started.

When you want to use Neo to generate a new project for you, you will need to create a directory for the project first.

```bash
mkdir <my awesome project>;
```
Now you can install Neo inside of that directory:

```bash
npm i mozilla-neo;
```
To start the generator you will need to call the binary from the `node_modules` directory like so:

```bash
node_modules/.bin/neo init
```
Alternatively you could install Neo in a global context by adding the `-g` flag to the the initial install after which you could use it like:
```bash
neo init
```

The `init` command will prompt you with a few question about you project, like what’s the name of the project, who’s maintaining/authoring it etc.
Once it has all information it will start the generation process after which it will install the dependencies. That's really all there is to it.

I recommend that you read the [post written by the author](https://blog.eliperelman.com/neo-8bf3d7325f7#.4w7pwyc2d) of the library Eli Perelman to get a broader impression of what Neo can do for you.
