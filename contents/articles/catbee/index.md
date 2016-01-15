---
title: 'Catbee'
date: '2016-01-12'
author: ramon
template: article.jade
---
Catbee (GitHub: [markuplab/catbee](https://github.com/markuplab/catbee), License: MIT, npm: little-loader)

<p style="text-align: center; display: block;">
<img src="https://raw.githubusercontent.com/markuplab/catbee-todomvc/master/logo.png" style="max-width: 300px; width: 100%;">
</p>
Catbee is an high level isomorphic framework inspired and based on best practices from [Catberry](https://github.com/catberry/catberry), [Baobab](https://github.com/Yomguithereal/baobab) and [Cerebral](https://github.com/cerebral/cerebral).

Catbee is Catberry little brother. Unlike Catberry, Catbee use "Single State Tree" conception.
All state mutations run in signals, and powered by the [AppState](https://github.com/markuplab/appstate) module.

All data focused in Baobab tree, instead of distributed flux stores. The tree contains the full application state, and it has 2 interfaces: modify API also known as "Signals", and read API also known as "Watchers".

Signal is the only way to modify state tree. It looks like middleware, but it is way more flexible and adopted for sync/async operations.
If you want to learn more about signals, checkout [this](http://cerebraljs.com/) and [this](https://github.com/markuplab/appstate).
The developers recommend running signal on each user action, when you need change application state, and also signal automatically run on every url change.

Signals use composition conception, and contains an array of independent functions. It's very simple way to maintain big codebase. Here is an example of a Signal:

```javascript
let signal = [
  setLoading, // Sync function
  [ // Here we run parallel functions
    getUser, { // Async function with 2 outputs success and error
      success: [setUser], // Run if we call output.success in getUser
      error: [setUserError] // Run if we call output.error in getUser
    },
    getNews, { // It's function will run parallel with getUser, like Promise.all
      loaded: [setNews],
      error: [setNewsError]
    }
  ],
  unsetLoading
];
```

Components can access data by [watchers](https://github.com/Yomguithereal/baobab#specialized-getters). There are two main reasons you should use watchers. You'll need data context for template rendering, and you'll also need state update events to rerender your component.
You do not need bind watchers manually, it's inside of Catbee.

```javascript
// Here we use simple Baobab.watch API
module.exports = {
  news: ['news', 'data'],
  isVisible: ['news', 'UIState', 'isVisible']
};

// You can also use Baobab.watch dynamicly
module.exports = function (attributes) {
  // Here attributes is <cat-component id="unique" cat-id="1" watcher= "dynamic"></cat-component>
  var id = attributes['cat-id'];

  return {
    title: ['news', 'data', { id: id }, 'title']
  };
}
```

I really like this library because of my associations with Baobab. My first encounter with it was via the post ["Plant a Baobab tree in your flux application"](http://christianalfoni.github.io/javascript/2015/02/06/plant-a-baobab-tree-in-your-flux-application.html) which was written by [Christian Alfoni](https://twitter.com/christianalfoni). It lead me to think differently about flux and redux, I recommend you read it.

Don't forget to challenge yourself this week. I prepared another weekly challenge which is: ["Implement the Mandelbrot set using Javascript"](http://daily-javascript.com/challenges/mandelbrot/).
