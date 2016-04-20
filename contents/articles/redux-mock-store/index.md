---
title: redux-mock-store
date: '2016-04-20'
author: ramon
template: article.jade
---

redux-mock-store (GitHub: [arnaudbenard/redux-mock-store](https://github.com/arnaudbenard/redux-mock-store), License: MIT, npm: redux-mock-store)

When you are working on an application with a Redux architecture and you want to test if your actions triggered correctly.
Doing this with the default Redux store is a very hard thing. In the project I recently joined we solve this problem by using `redux-mock-store`, which stores the actions that got triggered. By suppling a `getActions()` method we can access the previously called actions in the form of an Array.

By example:

```javascript
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should dispatch action', () => {
  const getState = {};
  const addTodo = { type: 'ADD_TODO' };

  const store = mockStore(getState);
  store.dispatch(addTodo);

  const actions = store.getActions();

  expect(actions).toEqual([addTodo]);
});

it('should execute promise', () => {
    function success() {
      return {
        type: 'FETCH_DATA_SUCCESS'
      };
    }

    function fetchData() {
      return dispatch => {
        return fetch('/users.json')
          .then(() => dispatch(success()));
      };
    }

    const store = mockStore({});

    return store.dispatch(fetchData())
      .then(() => {
        expect(store.getActions()[0]).toEqual(success())
      });
})
```
In the [Redux docs](http://redux.js.org/docs/recipes/WritingTests.html) you can find a more extensive explanation and best best practices on how to approach this problem.
