---
title: 'React Helmet'
date: '2016-03-24'
author: ramon
template: article.jade
---

React Helmet (GitHub: [nfl/react-helmet](https://github.com/nfl/react-helmet), License: MIT, npm: react-helmet)

First if all I'd like to start out with giving you guys an explanation for why I have not being posted as regularly as normal.
Me and my girlfriend are currently in the process of buying an apartment. This costs a lot of time and effort to get all the paperwork done in time.
Once this is resolved I will be back on the daily posts as usual.

Let's get on with the show. Maybe you are already familiar with the library/component because it is not exactly new anymore.
However when I started asking around about how colleagues and friends of mine solve the problem Helmet is trying to solve, they came up with a few useful and working solutions but non as elegant as Helmet without making something like Helmet yourself.

What it does is give you a component to manage the SEO, share and other meta tags. So you don't have to put that into your `index.html`.
Let's assume you have an application which has `App` as an entry point component like so:

```javascript
function App(){
  return (<div className="app">
    <SomeComponent />
    <SomeOtherComponent>
      <ChildComponent />
      <SecondChildComponent />
    </SomeOtherComponent>
    //.. etc
  </div>);
}
```
And you want the title to be set to "My Awesome Application", you can add Helmet like so:

```javascript
function App(){
  return (<div className="app">
    <Helmet title="My Awesome Application" />
    <SomeComponent />
    <SomeOtherComponent>
      <ChildComponent />
      <SecondChildComponent />
    </SomeOtherComponent>
    //.. etc
  </div>);
}
```

There are way to much features to this component than I care to mention here, so if it peaked your interest I suggest you head over to the [Github Page](https://github.com/nfl/react-helmet) and check out all it has to offer.
