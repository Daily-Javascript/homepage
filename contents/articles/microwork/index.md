---
title: 'Microwork.js'
date: '2016-02-03'
author: ramon
template: article.jade
---

Microwork.js (GitHub: [yamalight/microwork](https://github.com/yamalight/microwork), License: MIT, npm: microwork)

Microwork.js is a library for simple creation of distributed micro services using [RabbitMQ](https://www.rabbitmq.com).
If you are not familiar with RabbitMQ, it is a messaging server.
Messaging enables applications to connect and scale.
Applications can connect to each other, as components of a larger application.

An example service that subscribe to messages from `do.stuff` topic and uses incoming data:

```javascript
import Microwork from 'microwork';

// create task runner
const runner = new Microwork({host: 'my.rabbit.host', exchange: 'my.exchange'});

// add worker to specific topic
await runner.subscribe('do.stuff', (msg, reply) => {
    // Capitalize first letter of the message
    reply(msg.charAt(0).toUpperCase() + msg.slice(1));
});

// after work is done - cleanup
await runner.stop();
```
There are a few useful plugin already available such as: a hardware stats plugin which provides basic hardware stats about Node, a health plugin which provides basic keep-alive signal and a subscribers info plugin which provides basic information about subscribers.

For more examples and documentation check out the [Github Page](http://yamalight.github.io/microwork/).
