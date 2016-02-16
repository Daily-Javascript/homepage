---
title: 'jHaml'
date: '2016-02-09'
author: ramon
template: article.jade
---

jHaml (GitHub: [soyuka/jhaml](https://github.com/soyuka/jhaml), License: MIT, npm: @soyuka/jhaml)

jHaml is a Javascript implementation of the [Haml](http://haml.info/) templating engine which was originally written in Ruby.
When I was still doing a lot of Rails I first got introduced to Haml. I was able to change `erb` like this:

```html
<section class=”container”>
  <h1><%= post.title %></h1>
  <h2><%= post.subtitle %></h2>
  <div class=”content”>
    <%= post.content %>
  </div>
</section>
```
Into:

```haml
%section.container
  %h1= post.title
  %h2= post.subtitle
  .content
    = post.content
```

Now we use do the same for our Javascript applications. After searching a bit I noticed that there are a few implementations of this already.
The reason why I like this library is that it's based on streams and because of this it has great support for build tooling [Gulp](http://gulpjs.com/), which is also stream based.
There also is a [nice example](https://github.com/soyuka/jhaml/blob/master/test/express.js) of how to use it in frameworks like [Express](http://expressjs.com/)

For more details and documentation check the [README](https://github.com/soyuka/jhaml) which thoroughly explains how it works and how to use it.

Don't forget the submit [this weeks challenge](http://daily-javascript.com/challenges/tetris-bag/) before Friday on when I will post the results.
