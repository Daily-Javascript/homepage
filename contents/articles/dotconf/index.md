---
title: 'dotconf'
date: '2015-12-01'
author: ramon
template: article.jade
---

dotconf (GitHub: [yoannmoinet/dotconf](https://github.com/yoannmoinet/dotconf), License: MIT, npm: dotconf)


![demo](https://github.com/yoannmoinet/dotconf/raw/master/media/demo.gif)

Are you also tired of all the `.something` config files for all the tooling we need which is cluttering up your tree? Well [Yoann Moinet](https://github.com/yoannmoinet) made a solution for this problem, dotconf.

What is does is bundle all your existing `.something` files and directories into one `.conf`.
Yoann uses the term "One config to rule them all". Since I'm a big Lord of the Rings fan, this slogan catch my attention. After trying it our in some projects I really enjoyed how it cleans up all the config files in my tree view.

The CLI is very easy, use `-a` to 'archive' all the `.something` files and `-e` to extract them again.
Besides that it comes with a bunch more options to specify that way it should behave such as: destination, pattern, safe mode and what to ignore.
