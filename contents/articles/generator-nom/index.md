---
title: 'Generator Nom'
date: '2015-10-08'
author: ramon
template: article.jade
---

### Generator Nom

generator-nom (GitHub: [ironSource/node-generator-nom](https://github.com/inikulin/read-file-relative), License: MIT, npm: generator-nom)

We all strive to write DRY code, but still while setting up projects and maintaining depenencies we are constantly repeating ourselves.
I find myself going through the same flow time and time again. `git init`, `npm init`, `touch README.md`, going to Github getting an origin to push to et cetra. This process is a pain every time. What if you could just generate all this stuff with one command.

That is where the `yo nom` come in.
Nom is a [Yeoman](http://yeoman.io) generator which is a collection of several sub-generators. It includes the following generators;

#### npm
Create package.json and prompt to keep dependencies of a previous package.json if any. Create .gitignore, cli.js (optional), install test framework (tape, tap, mocha, grunt, cake, or ava), add LICENSE file (MIT, BSD2 or BSD3).
#### git
Initialize local git repository, unless .git directory exists
#### github
Create public or private GitHub project, named "module-name" or "node-module-name", unless local git already has configured remotes. Asks for access token and repository owner (which defaults to the owner of the token), skips creation if the repository already exists, adds URLs to package.json and adds remote origin.
#### travis
Add .travis.yml for node 0.10 and iojs, setup GitHub hook. The travis tool asks for username and password.
#### appveyor
Add appveyor.yml for node 0.10 and iojs, setup GitHub hook. Asks for access token.
#### gulp
Create an ES6 gulpfile and tasks directory.
#### style (still to come)
Add standard or xo as a pretest script
#### readme
Add readme.md with common sections and shield.io badges for npm and david. If you did the travis and/or appveyor setup, badges for those services will be added as well.

<img src="https://github.com/ironSource/node-generator-nom/raw/master/demo.gif" style="max-width: 400px; width: 100%; position:static;">

To use a specific generator you can select it like this:

```bash
yo nom:<generator>
```

To run them all use:
```bash
yo nom:*
```
That's it.

I've tried this out and will probably be using this to make my workflow a bit more DRY and hope that other people will also consider to optimize their workflow with modules like `nom`.
