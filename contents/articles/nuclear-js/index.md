---
title: 'NuclearJS'
date: '2016-01-07'
author: ramon
template: article.jade
---

NuclearJS (GitHub: [optimizely/nuclear-js](https://github.com/optimizely/nuclear-js), License: MIT, npm: nuclear-js)

NuclearJS is a reactive flux implementation build with [ImmutableJS](https://facebook.github.io/immutable-js/) data structures.
It has been developed by [Optimizely](https://www.optimizely.com/), which is a company that provides A/B testing suite and more as a service.

NuclearJS was designed first for large scale production apps. For a much more lightweight Flux implementation that shares many of the same ideas and design principles, as check out [Microcosm](https://github.com/vigetlabs/microcosm).

As we have seen many Flux implementations already we have grown skeptical about new implementations.
So that bears the question: "How NuclearJS differs from other Flux implementations?".

Well all app state is in a singular immutable map. In development you can see your entire application state at every point in time thanks to awesome debugging tools built into NuclearJS.

State is not spread out through stores, instead stores are a declarative way of describing some top-level domain of your app state. For each key in the app state map a store declares the initial state of that key and how that piece of the app state reacts over time to actions dispatched on the flux system.

Stores are not reference-able nor have any getX methods on them. Instead NuclearJS uses a functional lens concept called getters. In fact, the use of getters obviates the need for any store to know about another store, eliminating the confusing store.waitsFor method found in other flux implementations.

NuclearJS is insanely efficient - change detection granularity is infinitesimal, you can even observe computed state where several pieces of the state map are combined together and run through a transform function. NuclearJS is smart enough to know when the value of any computed changes and only call its observer if and only if its value changed in a way that is orders of magnitude more efficient than traditional dirty checking. It does this by leveraging ImmutableJS data structure and using a state1 !== state2 reference comparison which runs in constant time.

Automatic data observation / rendering -- automatic re-rendering is built in for React in the form of a very lightweight mixin. It is also easily possible to build the same functionality for any UI framework such as VueJS, AngularJS and even Backbone.

NuclearJS is not a side-project, it's used as the default Flux implementation that powers all of Optimizely. It is well tested and will continue to be maintained for the foreseeable future. Our current codebase has over dozens of stores, actions and getters, we even share our prescribed method of large scale code organization and testing strategies.

For examples I would refer you to [project homepage](https://optimizely.github.io/nuclear-js/) because there you can find better explaintions than I can give it in my daily posts.
