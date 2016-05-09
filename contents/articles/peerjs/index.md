---
title: 'PeerJS'
date: '2016-05-09'
author: ramon
template: article.jade
---

PeerJS (GitHub: [peers/peerjs](https://github.com/peers/peerjs), License: MIT, npm: peerjs)

Last week I was held up in bed with a fever, this is the reason I was not able to provide you with daily javascript updates.
Exactly for moments like that I would like to request if one of my readers would be interested in occasionally writing a post, so I can slow down sometimes.

If you are interested please <a href="mailto:daily-javascript@ra-ge.net">contact me</a>.

On to business, PeerJS wraps the browser's WebRTC implementation to provide a easy-to-use peer-to-peer connection API.
To establish a connection you will need nothing more than a session ID.
This is of course not the first attempt on a good WebRTC library but this comes with an open source server which you can deploy any place you want, in contrast with other parties that's a real leap forwards.

Because this is still a company trying to make money they also have hosted solutions for when you do not want to be bothered with setting up these environments.

Let's look at an example using the hosted solution.

```javascript
import Peer from 'peerjs';

const myPeer = new Peer('pick-an-id', {key: 'myapikey'});
const conn = myPeer.connect('another-peers-id');

conn.on('open', () => {
  conn.send('hi!');
});

myPeer.on('connection', (conn) => {
  conn.on('data', (data) => {
    // Will print 'hi!'
    console.log(data);
  });
});
```
The code for making a call would look something like this:

```javascript
const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

getUserMedia({video: true, audio: true}, (stream) => {
  const call = peer.call('another-peers-id', stream);
  call.on('stream', (remoteStream) => {
    // Show stream in some video/canvas element.
  });
}, (err) => {
  console.log('Failed to get local stream', err);
});

```

And to answer an incoming call you would need to add something like this:

```javascript
const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
peer.on('call', (call) => {
  getUserMedia({ video: true, audio: true }, (stream) => {
    call.answer(stream); // Answer the call with an A/V stream.
    call.on('stream', (remoteStream) => {
      // Show stream in some video/canvas element.
    });
  }, (err) => {
    console.log('Failed to get local stream', err);
  });
});
```
