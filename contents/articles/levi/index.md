---
title: "Levi"
date: '2015-09-28'
author: ramon
template: article.jade
---

Levi (GitHub: [cshum/levi](https://github.com/cshum/levi), License: MIT, npm: levi)

Levi is a streaming full-text search for Node.js and browsers which used LevelDB for storage.
The search implementation is done by using [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) and [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity), and it’s provided with configurable text processing pipelines: Tokenizer, Porter Stemmer and Stopwords filter.

Levi is built on [LevelUP](https://github.com/Level/levelup) which is a fast, asynchronous, transactional storage interface. By default it uses LevelDB on Node.js, when in running in the browser it uses [IndexedDB](https://github.com/maxogden/level.js). Levi supports with a variety of LevelDOWN compatible backends.

In addition, Levi provides relevancy scoring for live changing data using TF-ICF - a TF-IDF approximation based on existing corpus. Such scoring matches are comparably close to TF-IDF when existing corpus is sufficiently large, with significantly better performance O(N) instead of O(N^2).

Let's take a look at the API. To get started, we need to create a new Levi instance. We do that like this:

```javascript
import levi from 'levi';

const lv = levi('db')
.use(levi.tokenizer())
.use(levi.stemmer())
.use(levi.stopword());
```
The text processing pipeline `levi.tokenizer()`, `levi.stemmer()`, `levi.stopword()` are required for indexing. These are exposed as [ginga](https://github.com/cshum/ginga) plugins so that they can be swapped for different language configurations.

Now that we have an instance we can use it to talk to the API like this:

```javascript
lv.put('a', 'Lorem Ipsum is simply dummy text.', err => {
    // ...
 });

// object fields as value
lv.put('b', {
  id: 'b',
  title: 'Lorem Ipsum',
  body: 'Dummy text of the printing and typesetting industry.'
}, (err) => {
    //...
});
```

Or retrieve it like:
```javascript
lv.get('b', res => {
    // res here;
});
```

To actually search we need to use Levi's main interface which would be `searchStream`. We use that like this.

```javascript
lv.searchStream('lorem ipsum').toArray(function (results) { ... }) // highland method

lv.searchStream('lorem ipsum', {
  fields: { title: 10, '*': 1 } // title field boost. '*' means any field
}).pipe(...)

lv.searchStream('lorem ipusm', {
  fields: { title: 1 }, // title only
}).pipe(...)

// ltgt
lv.searchStream('lorem ipusm', {
  gt: '!posts!',
  lt: '!posts!~'
}).pipe(...)

// document as query
lv.searchStream({
  title: 'Lorem Ipsum',
  body: 'Dummy text of the printing and typesetting industry.'
}).pipe(...)

```

Because I do not fully understand everything that is going on here, I need to refer you to the extensive documentation on the [GitHub page](https://github.com/cshum/levi). The reason I still mention this library is that I understand from the explanation a colleague gave me that this library will have a significant impact on the speed of your text search.
