---
title: 'react-pull-to-refresh'
date: '2015-11-26'
author: ramon
template: article.jade
---

react-pull-to-refresh (GitHub: [bryaneaton13/react-pull-to-refresh](https://github.com/bryaneaton13/react-pull-to-refresh), License: MIT, npm: react-pull-to-refresh)

react-pull-to-refresh is a library that does exactly what the name implies. It gives the pull to refresh behavior.
![demo](https://github.com/bryaneaton13/react-pull-to-refresh/raw/master/docs/demo.gif)

It is based on the [library](https://github.com/apeatling/web-pull-to-refresh) that Andy Peatling made and wrote a post about. You can find that [here](https://github.com/apeatling/web-pull-to-refresh).
So let's take a look at how it works, your refresh handler takes in `resolve` and `reject` to tell the component when it's finished. That would look something like this:

```javascript
handleRefresh(resolve, reject) {
    // do some async code here
    let success = false;
    if (success) {
        resolve();
    } else {
        reject();
    }
}
```
And this is what the component would look like:

```html
<ReactPullToRefresh
    onRefresh={this.handleRefresh}
    className="your-own-class-if-you-want"
    style={{ textAlign: 'center' }}>
        <h3>Pull down to refresh</h3>
        <div>{items}</div>
        <div>etc.</div>
</ReactPullToRefresh>
```
Basically that is all that there is to it. For the American readers I hope you have a nice Thanksgiving.
