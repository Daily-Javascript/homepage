---
title: 'Tabguard'
date: '2016-04-18'
author: ramon
template: article.jade
---

react-tabguard (GitHub: [avocode/react-tabguard](https://github.com/avocode/react-tabguard), License: MIT, npm: react-tabguard)

A problem all of face at some point in our career is: A product owner who comes to you with the question to contain the `Tab` navigation to only one form. Something like this for instance:

<img src="https://camo.githubusercontent.com/ecb3f6b835e6a084175f5e8d119d0b719a9b43a8/68747470733a2f2f636c6475702e636f6d2f543961377062536754412e676966" style="max-width: 480px; width: 100%;">

There isn't really an easy way to limit tabbing to a specified area inside your HMTL document.
It’s not desirable to lose focus on the overlay window when tabbing.
Luckily the some developer saw this and started working on React TabGuard to save the day.

Since there is not really an extensive API to discuss I will just give you with an example of how to use is:

```javascript
import React from 'react';
import TabGuard from 'react-tabguard';

function App(props) {
  return (<div className="double-form-container">
    <div className="left">
      <TabGuard>
        <h1>Form A</h1>
        <input type="text" placeholder="Name"/>
        <input type="number" placeholder="Age"/>
        <button>Send</button>
      </TabGuard>
    </div>
    <div className="right">
      <TabGuard>
        <h1>Form B</h1>
        <input type="text" placeholder="Name"/>
        <input type="number" placeholder="Age"/>
        <button>Send</button>
      </TabGuard>
    </div>    
  </div>);
}
```
