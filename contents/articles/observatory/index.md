---
title: 'Observatory'
date: '2015-10-22'
author: ramon
template: article.jade
---

### Observatory

Observatory (GitHub: [mikesizz/observatory](https://github.com/mikesizz/observatory), License: MIT, npm: observatoryjs)

When you are following the spec proposals or read any other blog you have probably heard about [Object.observe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe), which is used for asynchronously observing the changes to an object.

Observatory is an attempt to provide javascript developers an interface for Object.observe with mongodb style querying for specificity.

In order to use it we need to create a new instance of Observatory.

```javascript
import Observatory from 'Observatory';
const observer = new Observatory();
```
Now we can observe an object by binding an event to it like so:
```javascript
observer.on( object , query , callback );
```
Currently it supports the following events:

- $update which observes events that include an update to a queried property
- $add which observes events that include an addition to a queried property
- $delete which observes events that include an deletion from a queried property

The real power is within the query expressions, by using different selectors you can create an expression for more specific event handling.

```javascript
let cat = {
    age: 3
};

observer.on( cat , { $update: { "age": { $gt: 10 } } } , () => {
    console.log("Your cat is older than 10");
});
```
It provides the following value selectors:
- $lt - check if the property is less than the query value
- $gte - check if the property is greater than or equal to the query value
- $lte - check if the property is less than or equal to the query value
- $eq - check if the property is equal to the query value

For arrays it has a couple extra:
- $in - check if the target array contains any of the query values after the event fires
- $all - check if the target array contains all of the query values after the event fires
