---
title: 'Slow deps'
date: '2016-08-24'
author: ramon
template: article.jade
---

slow-deps (GitHub: [nolanlawson/slow-deps](https://github.com/nolanlawson/slow-deps), License: Apache-2.0, npm: slow-deps)

When working on a larger Javascript project, over time your dependency tree will grow and with that the installation time will grow as well. With every new dependency of your project, npm needs to fetch it and check if that dependency has other dependencies et cetera.

I think that in all of us the curiosity grows which dependency is slower, so you might want to consider an alternative, dropping it all together or look for other ways of speeding up the installation process to in turn reduce the total build time.

To give insight into which dependency is the bottleneck of your installation process [Nolan Lawson](https://github.com/nolanlawson) created a very nice utility called `slow-deps`.

The easiest way to a quick insight you can install it in a global context like so:

```bash
[sudo] npm i slow-deps -g
```
Now you can go into the project directory you want to test and run:
```bash
slow-deps
```
`slow-deps` will take all your project dependencies, devDependencies and optionalDependencies and installs each one in a temporary directory with a temporary cache and measures the install time per package. Each dependency is then listed from slowest to fastest.

As an example this is what it outputs for the A-frame project:

```
Analyzing 45 dependencies...
[====================] 100% 0.0s
---------------------------------------------------------------
| Dependency                    | Time     | Size    | # Deps |
---------------------------------------------------------------
| semistandard                  | 1m 14.4s | 24 MB   | 242    |
| tween.js                      | 1m 10.7s | 22 MB   | 250    |
| budo                          | 1m 1.4s  | 14 MB   | 275    |
| mozilla-download              | 49.3s    | 26 MB   | 194    |
| karma                         | 39.8s    | 16 MB   | 153    |
| snazzy                        | 36.2s    | 9.7 MB  | 146    |
| karma-coverage                | 26.7s    | 8.0 MB  | 99     |
| browserify                    | 23s      | 6.4 MB  | 118    |
| codecov                       | 17.8s    | 3.9 MB  | 73     |
| istanbul                      | 12.1s    | 6.5 MB  | 55     |
| minifyify                     | 11.4s    | 4.8 MB  | 48     |
| browserify-css                | 10.7s    | 4.0 MB  | 29     |
| document-register-element     | 9.7s     | 62 KB   | 0      |
| browserify-derequire          | 9.5s     | 1.7 MB  | 42     |
| mocha                         | 7.2s     | 1.3 MB  | 34     |
| gh-pages                      | 6.2s     | 3.7 MB  | 22     |
| three                         | 5.5s     | 10.0 MB | 0      |
| sinon                         | 5.3s     | 1.0 MB  | 5      |
| karma-browserify              | 5.2s     | 1.0 MB  | 9      |
| webvr-polyfill                | 4.2s     | 898 KB  | 2      |
| karma-mocha-reporter          | 4s       | 104 KB  | 7      |
| uglifyjs                      | 3.9s     | 752 KB  | 6      |
| rimraf                        | 3.6s     | 157 KB  | 11     |
| karma-sinon-chai              | 3.2s     | 146 KB  | 1      |
| replace                       | 3s       | 341 KB  | 7      |
| chai                          | 2.8s     | 438 KB  | 3      |
| karma-mocha                   | 2.8s     | 18 KB   | 0      |
| karma-chrome-launcher         | 2.6s     | 56 KB   | 5      |
| browserify-istanbul           | 2.5s     | 84 KB   | 5      |
| exorcist                      | 2.5s     | 143 KB  | 6      |
| lolex                         | 2.3s     | 122 KB  | 0      |
| karma-env-preprocessor        | 2.2s     | 5.8 KB  | 0      |
| mkdirp                        | 2s       | 47 KB   | 2      |
| chai-shallow-deep-equal       | 2s       | 17 KB   | 0      |
| husky                         | 2s       | 14 KB   | 1      |
| karma-firefox-launcher        | 1.9s     | 13 KB   | 0      |
| deep-assign                   | 1.9s     | 11 KB   | 1      |
| sinon-chai                    | 1.9s     | 18 KB   | 0      |
| debug                         | 1.5s     | 37 KB   | 1      |
| object-assign                 | 1.3s     | 7.4 KB  | 0      |
| open                          | 1.3s     | 26 KB   | 0      |
| karma-chai-shallow-deep-equal | 1.2s     | 6.8 KB  | 0      |
| present                       | 1.1s     | 12 KB   | 0      |
| promise-polyfill              | 1.1s     | 17 KB   | 0      |
| style-attr                    | 1s       | 6.5 KB  | 0      |
---------------------------------------------------------------
Total time (non-deduped): 9m 2s
Total size (non-deduped): 167 MB
```

For more documentation I would refer you to the [Github repo](https://github.com/nolanlawson/slow-deps).

**Note:** I started asking for a bit more help with generating more content for this page. In the future you will be able to find tricks, tips and tutorials on this site as well.

If you are interested in writing some content for this site please <a href="mailto:daily-javascript@ra-ge.net">contact me</a> with a pitch.
