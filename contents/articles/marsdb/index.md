---
title: 'MarsDB'
date: '2016-01-27'
author: ramon
template: article.jade
---

MarsDB (GitHub: [c58/marsdb](https://github.com/c58/marsdb), License: MIT, npm: mardb)

MarsDB is a very lightweight client-side database.
It is inspired by a Meteor's [minimongo](https://atmospherejs.com/meteor/minimongo) matching/modifying implementation.
The library has a Promise based interface and can be backed with any storage implementation such as:

- In-memory storage (built-in default)
- [LocalForage storage](https://github.com/c58/marsdb-localforage) – fastest in-browser storage (InexedDB, WebSQL and fallback to localStorage)
- [LocalStorage storage](https://github.com/c58/marsdb-localstorage) – not recommended, better prefer LocalForage
- [LevelUP storage](https://github.com/c58/marsdb-levelup) – lightweight server-less Node.js storage
- [MongoDB wrapper](https://github.com/c58/marsdb-mongo) – use MarsDB for comfortable work with MongoDB

Besides all of this MarsDB supports observable cursors which is very nice addition to the toolbelt.
The database supports any kind of find/update/remove operations that Meteor's minimongo would also support.
When you need a reference on how theses queries work go to the Meteor docs for supported [query/modifier operations](https://atmospherejs.com/meteor/minimongo).

Let's first create a collection of `posts`.

```javascript
import Collection from 'marsdb';
import LocalStorageManager from 'marsdb-localstorage';

// Setup different id generator and storage managers
// Default storage is in-memory
Collection.defaultStorageManager(LocalStorageManager);
Collection.defaultIdGenerator(() => {
  return {
    value: Math.random(),
    seed: 0,
  };
});

const posts = new Collection('posts');

```

Now we can populate it with some data:
```javascript
// To insert one
posts.insert({text: 'MarsDB is awesome'}).then(docId => {
  // Invoked after persisting document
});

// To insert a bulk
posts.insertAll(
  {text: 'MarsDB'},
  {text: 'is'},
  {text: 'awesome'}
).then(docsIds => {
    console.log('--->>', docsIds);
});

```

And we can retrieve one of the saved item like so:
```javascript
posts.find({text: 'MarsDB'})
  .sort(['createdAt'])
  .then(docs => {
      console.log('-->>', docs);
  });
```

For more in depth examples and documentation check the [README file](https://github.com/c58/marsdb).

A small reminder to challenge yourself. This week we will be focusing on transferring knowledge using the [workshopper framework](http://daily-javascript.com/articles/workshopper) head over to the [challenge page](http://daily-javascript.com/challenges/workshopper) for more details.
