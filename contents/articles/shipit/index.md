---
title: 'Shipit'
date: '2015-12-23'
author: ramon
template: article.jade
---

Shipit (GitHub: [shipitjs/shipit](https://github.com/shipitjs/shipit), License: MIT, npm: shipit)

Shipit is an automation engine and a deployment tool written for Node.

Shipit is an alternative for [Capistrano](http://capistranorb.com/). If you are not familiar Capistrano, it is a remote server automation and deployment tool written in Ruby.
Since Capistrano was written in Ruby, you needed to be comfortable working in Ruby and be familiar with the tooling that comes with it.
Nowadays we are using Javascript for everything. Web servers, build tooling, bot's you can even control a drone using Javascript.
So it makes sense to do deployment in Javascript as well.

Shipit's task structure is very similar to that of [Gulp](http://gulpjs.com/). Since they are both based on [orchestrator](https://github.com/orchestrator/orchestrator).

Besides the main API for handling remote work, there is also a dedicated deploy package based on git and rsync commands.
With which you can deploy tag, branch or commit. Add additional behavior using hooks, build your project locally or remotely and you can do easy rollback.

A simple `shipitfile.js` would look something like this:

```javascript
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'https://github.com/user/repo.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      key: '/path/to/key',
      shallowClone: true
    },
    staging: {
      servers: 'user@myserver.com'
    }
  });
};
```
The CLI structure works like: `shipit <environment> <tasks ...>`.
So with a `shipitfile.js` like this:

```bash
shipit staging deploy
```
