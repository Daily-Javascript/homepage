---
title: 'Pollinate'
date: '2016-02-16'
author: ramon
template: article.jade
---

Pollinate (GitHub: [everysquare/pollinate](https://github.com/everysquare/pollinate), License: MIT, npm: pollinate)

Pollinate is for the best I can describe a scaffolding engine. It takes a template project and uses [Nunjucks](http://mozilla.github.io/nunjucks/) to generate the files with the names. The name comes from visualization a tree as a "Flower".

> Think of a tree of files as a `Flower` and a source data as `Pollen`; combined together they create a fertilized project seed. Pollinate will allow you to template a set of files and store them on GitHub. When you decide to use them later you can `pollinate` them using an object of data. Each time you pollinate you can specify which files to `discard`, `parse`, or `move`.

There are three components to a Pollinate boilerplate.
- The Flower
- The Pollen
- The Data

The `Flower` is a GitHub repository which holds all of the files.
These files can be passed through a template engine which uses the supplied data.

The `Pollen` is just a vessel to get new data to the `Flower`.
It can be supplied as an HTTP JSON endpoint, as a local file or directly as a set of arguments.

The data can be considered as the DNA.
Both sides can supply it, but the data from the Pollen takes precedence when merging the objects.
The data supplies a list of files to act upon with the template engine along with the data to inject.
The data can also supply file operations to move or delete files during the process.

The developer of this project has posted an example which is very easy to follow along when you want to set up your own Pollinate.

Don't forget to to invest some time to rehash or practice your knowledge by checking this weeks challenge: [Websocket Challenge](http://daily-javascript.com/challenges/websocket-challenge/).
