---
title: 'React Storybook'
date: '2016-04-06'
author: ramon
template: article.jade
---

React Storybook (GitHub: [kadirahq/react-storybook](https://github.com/kadirahq/react-storybook), License: MIT, npm: @kadira/storybook)

After having worked on several React projects, I started noticing that in reality it's still hard to keep your components completely contained. So when, few days ago, I came across ["Introducing React Storybook"](https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.de0hjvlbf) I was really intrigued by this approach to developing your components.

![Storybook](https://cdn-images-1.medium.com/max/2000/1*BxhrR0DB8uooDqLLzdkAvg.png)

With React Storybook, you can develop and design UI components outside your app in an isolated environment.
Once you've installed it using:
```bash
npm i @kadira/storybook
```
You will need to add a storybook run script in your `package.json` like so:

```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001"
  }
}
```
Now you can start writing stories. There are some [guidelines](https://github.com/kadirahq/react-storybook/blob/master/docs/guidelines.md) on how to write stories which also enforce a clean way of working in general.
For a component like this:
```javascript
import React from 'react';

function MyAwesomeButton(props){
  return (<button onClick={props.onClick}>{props.title}</button>);
}
```
Would look something like this:

```javascript
import React from 'react';
import MyAwesomeButton from '../path/to/MyAwesomeButton';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .add('with a text', () => (
    <MyAwesomeButton onClick={action('clicked')} title="My Awesome Button" />
  ))
  .add('with no text', () => (
    <MyAwesomeButton />
  ));
```
