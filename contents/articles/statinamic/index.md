---
title: 'Statinamic'
date: '2016-03-22'
author: ramon
template: article.jade
---

statinamic (GitHub: [MoOx/statinamic](https://github.com/MoOx/statinamic), License: MIT, npm: statinamic)

Statinamic is a static site generator for the modern web.
It uses React for it's views and is very easy to get started with but flexible enough that it does not get in your way.

Currently I'm considering moving from Wintersmith, which I currently use for this site, to Statinamic.
Since I want to add some features which would require some more customizations, I would be more comfortable using React to implement that.

During the development process of your static application/website you will have all the benefits of hot loading, compilation errors, runtime errors.
To get started you will need to install the module inside of an fresh directory which contains a basic `package.json` which can be acquired via:

```bash
npm init;
```
Then after installation of the module you can call the CLI from the `node_modules` folder like so:

```bash
./node_modules/.bin/statinamic setup
```
This will prompt you with some questions about what boilerplate you want inserted.
Questions like:

- Name of your project?
- Homepage url for your website?
- Should statinamic generate a CNAME file?

After scaffold is done you still need to install the project dependencies by running:
```bash
npm i;
```
Now you can start developing by running:
```bash
npm start;
```

The basic structure it provides you with looks something like this:
```
├── README.md
├── content
│   ├── 404.md
│   ├── assets
│   │   └── react.svg
│   └── index.md
├── dist
├── package.json
├── scripts
│   ├── build.js
│   ├── config.js
│   ├── index-client.js
│   ├── webpack.config.babel.js
│   └── webpack.config.client.js
└── web_modules
    ├── Footer
    │   ├── index.css
    │   └── index.js
    ├── Header
    │   ├── index.css
    │   └── index.js
    ├── LayoutContainer
    │   ├── index.css
    │   └── index.js
    ├── app
    │   ├── metadata.js
    │   ├── routes.js
    │   └── store.js
    ├── icons
    │   ├── iconmonstr-github-1.svg
    │   └── iconmonstr-twitter-1.svg
    └── layouts
        ├── Page
        │   └── index.js
        ├── PageError
        │   └── index.js
        └── index.js
```
