---
title: 'Runjs'
date: '2015-12-15'
author: ramon
template: article.jade
---

Runjs (GitHub: [pawelgalazka/runjs](https://github.com/pawelgalazka/runjs), License: MIT, npm: runjs)

Back in the days we used to do everything with Makefile's now we have Gulpfile's, Gruntfile's and probably too much to put in a list.
Now there is a new friend in the build family, Runjs, which is a minimalistic framework for executing build tasks.

It's API consists of just a few functions run, watch, generate and call. With these functions you would create a runfile.js.
A simple runfile would look something like this:

```javascript
import {run} from 'runjs';

export function showFiles(){
    run('ls');
}

export function mkdir(name){
    run(`mkdir ${name}`);
}
```

These tasks can be executed via the Runjs cli like so:

```bash
run showFiles
run mkdir someDirName
```

It can do everything from watching files to generating new files based on configured templates etc.
What I like about this little framework is that it does not require plugins but just Node packages for extra functionality. This in contrast to Gulp where most plugins are wrapped as a gulp-plugin and using libraries that do not have this is as hassle.

To help you get started this is what full runfile would look like:

```javascript
import {run, generate, watch} from 'runjs';
import fs from 'fs';
import crypto from 'crypto';
import {sleep} from 'sleep';
import express from 'express';

let task = {};

function timeHash(){
    let time = Date.now();
    return crypto.createHash('sha1').update(time.toString()).digest('hex');
}

function exist(path){
    try {
        fs.accessSync(path, fs.F_OK);
        return true;
    } catch(e){
        return false;
    }
}

task.echo = () => {
    console.log('echo');
};

task.install = () => {
    run('npm install');
    run('jspm install');
    task['build:dev:configure'](true);
};

task.uninstall = () => {
    task['clean:dist']();
    task['clean:cache']();
    run('rm -rf node_modules');
};

task.test = () => {
    run('mocha');
};

task['clean:dist'] = () => {
    run('rm -rf dist/*');
};

task.cmd = (...args) => {
    run(args.join(' '));
};

task['build:dev:configure'] = (force) => {
    if(!exist('dist/react.bundle.js') || force){
        run('jspm bundle react + react-dom dist/react.bundle.js --inject');
    }
};

task.watch = () => {
    watch('src/app.less', () => {
        run('lessc src/app.less dist/app.css --source-map');
    });

    watch('src/*.jsx', (path) => {
        let outPath = path.split('/');
        outPath.shift();
        outPath.unshift('dist');
        outPath = outPath.join('/');
        outPath = outPath.split('.');
        outPath.pop();
        outPath.push('js');
        outPath = outPath.join('.');
        run(`babel ${path} --out-file ${outPath} --source-maps inline`);
    });
};

task['build:template'] = (src, dst, context) => {
    generate(src, dst, context);
};

task['build:dev'] = () => {
    run('lessc src/app.less dist/app.css --source-map-map-inline');
    run('babel src --out-dir dist --source-maps inline');
    run('rm dist/config.js');
    task['build:template']('src/index.tpl.html', 'dist/index.html', {compiled: false});
    task['build:dev:configure']();
};

task['build:dist'] = () => {
    task['clean:dist']();
    let fingerprint = timeHash();
    task['build:template']('src/index.tpl.html', 'dist/index.html', {compiled: true, fingerprint: fingerprint});
    run(`jspm bundle-sfx app dist/app.${fingerprint}.js --minify`);
    run(`cleancss src/app.css -o dist/app.${fingerprint}.css`);
};

task['serve:express'] = (prod) => {
    let port = 9090;
    let app = express();
    app.use(express.static('dist', {etag: true}));
    if(!prod){
        app.use(express.static('src', {etag: true}));
    }
    let server = app.listen(port);
    console.log('Express static server listening at http://localhost:%s', port);
};

task['serve:dev'] = () => {
    task['build:dev']();
    task['serve:express']();
    run('live-reload --port 9091 dist', {async: true});
    sleep(1);
    run('open -a "Google Chrome" http://localhost:9090');
    task.watch();
};

task['serve:dist'] = () => {
    task['build:dist']();
    task['serve:express'](true);
    sleep(1);
    run('open -a "Google Chrome" http://localhost:9090');
};


export default task;
```
