---
title: 'WebSocket chat server'
date: '2016-02-12'
author: ramon
template: challenge.jade
---

<img style="width: 100%; display:block;" src="http://daily-javascript.com/challenges/websocket-challenge/header.png" >

Sadly this weeks challenge did also not get a very good turn out. I know it should not have been to hard to complete this challenge, still I received two submissions for it. [The results can be found here](). If you have an idea how we could get more people to sent in their submissions, please reach out to me via twitter: [@DailyJavascript](https://twitter.com/DailyJavascript).

For this weeks challenge you will be putting together a WebSocket server to handle chat messages.
This is gonna be the first challenge in a three week series. The additions to the project will still be a surprise for now.
To make sure you implement these challenges correctly I will provide you with some tests.

For this weeks challenge your server needs to pass the following tests:

```javascript
'use strict';

const should = require('should');
const io = require('socket.io-client');

const socketURL = 'http://localhost:5000';

const options = {
  transports: ['websocket'],
  'force new connection': true
};

const chatUser1 = {'name':'Tom'};
const chatUser2 = {'name':'Sally'};
const chatUser3 = {'name':'Dana'};

describe('Testing The Chat Server', () => {

  it('Should broadcast new user once they connect', (done) => {
    let client = io.connect(socketURL, options);

    client.on('connect', (data) => {
      client.emit('connection name',chatUser1);
    });

    client.on('new user', (usersName) => {
      usersName.should.be.type('string');
      usersName.should.equal(chatUser1.name + ' has joined.');
      client.disconnect();
      done();
    });
  });


  it('Should broadcast new user to all users', (done) => {
    let client1 = io.connect(socketURL, options);

    client1.on('connect', (data) => {
      client1.emit('connection name', chatUser1);
      let client2 = io.connect(socketURL, options);

      client2.on('connect', (data) => {
        client2.emit('connection name', chatUser2);
      });

      client2.on('new user', (usersName) => {
        usersName.should.equal(chatUser2.name + ' has joined.');
        client2.disconnect();
      });

    });

    let numberOfUsers = 0;
    client1.on('new user', (usersName) => {
      numberOfUsers += 1;

      if(numberOfUsers === 2){
        usersName.should.equal(chatUser2.name + ' has joined.');
        client1.disconnect();
        done();
      }
    });
  });

  it('Should be able to broadcast messages', (done) => {
    let client1, client2, client3;
    let message = 'Hello World';
    let messages = 0;

    let checkMessage = (client) => {
      client.on('message', (msg) => {
        message.should.equal(msg);
        client.disconnect();
        messages++;
        if(messages === 3){
          done();
        };
      });
    };

    client1 = io.connect(socketURL, options);
    checkMessage(client1);

    client1.on('connect', (data) => {
      client2 = io.connect(socketURL, options);
      checkMessage(client2);

      client2.on('connect', (data) => {
        client3 = io.connect(socketURL, options);
        checkMessage(client3);

        client3.on('connect', (data) => {
          client2.send(message);
        });
      });
    });
  });


  it('Should be able to send private messages', (done) => {
    let client1, client2, client3;
    let message = {to: chatUser1.name, txt:'Private Hello World'};
    let messages = 0;

    let completeTest = () => {
      messages.should.equal(1);
      client1.disconnect();
      client2.disconnect();
      client3.disconnect();
      done();
    };

    let checkPrivateMessage = (client) => {
      client.on('private message', (msg) => {
        message.txt.should.equal(msg.txt);
        msg.from.should.equal(chatUser3.name);
        messages++;
        if(client === client1){
          setTimeout(completeTest, 40);
        };
      });
    };

    client1 = io.connect(socketURL, options);
    checkPrivateMessage(client1);

    client1.on('connect', (data) => {
      client1.emit('connection name', chatUser1);
      client2 = io.connect(socketURL, options);
      checkPrivateMessage(client2);

      client2.on('connect', (data) => {
        client2.emit('connection name', chatUser2);
        client3 = io.connect(socketURL, options);
        checkPrivateMessage(client3);

        client3.on('connect', (data) => {
          client3.emit('connection name', chatUser3);
          client3.emit('private message', message)
        });
      });
    });
  });
});
```
The requirements for this challenge are pretty straight forward.
- You need to be able to connect with a single user.
- You need to be able to connect two users or more.
- A user should be able to send a message to a chatroom
- A user should be able to send private messages to other users

The tests can be copied form this page but I also setup [a repo which you can fork](https://github.com/Daily-Javascript/WebSocket-Challenge)
Please deploy your server to [Heroku](https://www.heroku.com/). You can create a free account here and follow [a very simple tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) if you are not familiar with how to deploy on Heroku.
Submit the URL where your server is running to this [Google Form](https://docs.google.com/forms/d/13RzwE7HJmLyv-UaxdJqq7PGQGp82xAk9HyTyNKVLmdw/viewform?c=0&w=1) before Friday next week.

I hope you guys will find this more challenging then last week. Happy coding.
