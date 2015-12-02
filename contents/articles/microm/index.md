---
title: 'Microm'
date: '2015-11-30'
author: ramon
template: article.jade
---

Microm (GitHub: [zzarcon/microm](https://github.com/zzarcon/microm), License: MIT, npm: microm, bower: microm)

Microm is a wrapper of few audio converting libraries to expose a Promise and Event oriented API.
The goal of the library is to make it more trivial to play and convert audio in the browser. Besides that I would say this work in some [Electron](http://electron.atom.io/) application.

Microm uses the following libs:

- [lamejs](https://github.com/zhuker/lamejs) mp3 encoder in javascript
- [webrtc-adapter](https://github.com/webrtc/adapter) Shim to insulate apps from spec changes and prefix differences
- [RecordRTC](https://github.com/muaz-khan/RecordRTC) record WebRTC audio/video media streams
- [RSVP](https://github.com/tildeio/rsvp.js/) Provides tools for organizing asynchronous code

In order to get the user recorded data, it use webrtc-adapter and RecordRTC to provide some shims and tools to make it easy to work with multiple browsers.
Next they use lamejs to convert Wav to Mp3 and finally to provide a Promise based API, it uses RSVP to support the [Promises/A+](https://promisesaplus.com/).

Let's look at some example code. When you want to record the browsers microphone you can use the `startRecording` like so:

```javascript
const microm = new Microm();

microm.startRecording()
      .then(() => { console.log('recording...')})
      .catch(() => { console.log('error recording')});
```
Because we want to do a bit more then just record, let's play it back to the user. To do that we need to do this:
We do this like so:

```javascript
microm.stop()
      .then((result) => { microm.play() });
```

If you want to provide you user with a download of the recording can use the `download` method like so:
```javascript
microm.stop()
      .then((result) => { microm.download('my-voice') });
```
Alternatively you could save the recording to a server by posting a base64 encoding of it.

```javascript
microm.getBase64().then((base64string) => {
    $.ajax({
        type: 'POST',
        contentType: 'application/octet-stream',
        mimeType: 'audio/mpeg',
        processData: false,
        url: 'http://some.serv.er/upload-audio',
        data: base64string,
        success: someSuccessCallBack
    });
});

```

Besides recording, playing and downloading you want to give the user some feedback.
We can use the events emitted by the library to present the user with feedback.

By attaching the `on` listener we can listen for this list of events:

- `timeupdate`
- `loadedmetadata`
- `play`
- `pause`
- `ended`

By example:
```javascript
microm.on('timeupdate', updateCurrentTime);
function updateCurrentTime(time) { console.log(time); }
```
