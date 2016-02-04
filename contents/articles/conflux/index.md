---
title: 'Conflux'
date: '2016-02-01'
author: ramon
template: article.jade
---

Conflux (GitHub: [ben-ng/conflux](https://github.com/ben-ng/conflux), License: MIT, npm: conflux)

Conflux is Redux implantation for distributed systems.
As the developer says: Distributed systems are hard. Conflux tries to make distributed systems more understandable.
It aims to do what [Redux](http://redux.js.org/) did for [Flux](https://facebook.github.io/flux), and what [Raft](http://raft.github.io/) did for [Paxos](http://www.wikiwand.com/en/Paxos_%28computer_science%29).
Natrually, it does this by composing the two ideas.

### So what does it really do?
You can build serverless applications. Which does not mean ["serverless"](https://github.com/serverless/serverless) as in it uses AWS [Lambda](https://github.com/serverless/serverless).
Serverless as in there is no central server, like how BitTorrent works just a cluster of nodes that coordinate with each other.
The developer let's know that he is working an a few example applications to help you get going.

A quick example provided by the developer:

```javascript
var node = conflux({
    id: uuid.v4(),
    // how many nodes are in the cluster?
    clusterSize: 5,
    // how should nodes communicate?
    channel: {
        name: 'redis'
    },
    // define your action creators
    methods: {
        append(thing){
            return thing;
        }
    },
    // define your reducer
    reduce(state, action) {
        state = state == null ? [] : state;
        return state.concat(action);
    },
});

// subscribe to changes
node.subscribe(() => {
    console.log(nodeB.getState().log.join(' '));
});

// perform an action
node.perform('append', ['foo']);
```
When you have worked with Redux before Conflux should feel very familiar.
You `subscribe()` to a Conflux instance, and call `getState()` inside to get the current state.
Instead of dispatching actions directly, you `perform()` methods that `dispatch()` them.
The methods are declared when you construct a Conflux instance which is the equivalent to how Action Creators work in Redux.
