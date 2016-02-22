---
title: 'Realm React Native'
date: '201-02-22'
author: ramon
template: article.jade
---

Realm (GitHub: [realm/realm-js](https://github.com/realm/realm-js), License: Apache-2.0, npm: realm)

Today at Facebook’s React.js Conference, The Realm team launched a new Realm mobile database designed for React Native.
This database should offers easy object persistence and full query capabilities.
The performance profile is usually 2–10x faster than existing options such as SQLite and CoreData.

When you are not familiar with Realm then you don't know that, it was designed from the ground up to enable reactive app development.
This is possible via live objects, change events, and support for [unidirectional data flows](https://realm.io/news/unidirectional-data-flow-in-swift/).

By example:


```javascript
const Realm = require('realm');

class Person {}
Person.schema = {
    name: 'Person',
    primaryKey: 'name',
    properties: {
        name: 'string',
        age: {type: 'int', default: 0},
    },
};

const realm = new Realm({schema: [Person]});

// Query
let people = realm.objects('Person', 'age >= 17');
people.length // => 0

// Write
realm.write(() => {
    savedPerson = realm.create('Person', {
        name: 'Hal Incandenza',
        age: 17,
    });
});

// Queries are updated in real-time
people.length // => 1
```

For more information and full documentation check the [Realm website](https://realm.io/) where the developer have posted a lot of amazing examples to help you get started.

Don't forget to check out the challenge section. [This weeks challenge](http://http://daily-javascript.com/challenges/websocket-challenge-part-two) extends on last weeks challenge so if you didn't do that challenge you have some catching up to do. If you have great ideas for next challenges please reach out to me on twitter [@DailyJavascript](http://twitter.com/DailyJavascript).
