---
title: 'rxjs-pubsub'
date: '2016-03-07'
author: ramon
template: article.jade
---

rxjs-pubsub (GitHub: [richardanaya/rxjs-pubsub](https://github.com/richardanaya/rxjs-pubsub), License: MIT, npm: rxjs-pubsub)

In modern applications we use a lot of functional paradigms. We do this via libraries and tools like RxJs, Bacon.js and Ramda.
One of the patterns I really like is the PubSub(publish and subscribe) pattern. Out of the box RxJs does not provide anything to do this.

When I came across this little library I was really happy that someone took the time to package this into a nice little module.
First I shall describe what pubsub is for those who haven't had the pleasure of working with it.

The idea is that when an "action" gets preformed and event gets emitted to whom ever cares.
So first I would create my "event bus":

```javascript
const myEventBus = pubsub.create();
```
On this object we can attach a subscription.

```javascript
myEventBus('some:event').subscribe((msg) => console.log(msg) );
```
Now we are listening for publications on the `some:event` channel.
To trigger the `console.log` which we put as a callback we need to publish something to this channel.

```javascript
myEventBus.publish('some:event', 'Some body');
```
This will log `Some body`. This example uses a string but it's not limited to strings.
That's it. You can probably already see the possibilities with a system like this.

As the developer let's know in a footnote:

> This may seem like a simple library you may want to make yourself.

One of the thing to take into consideration is the error handling, this because the default streams provided by RxJs to not handle errors that gracefully.
