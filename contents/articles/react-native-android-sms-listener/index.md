---
title: 'React Native SMS Listener'
date: '2016-02-10'
author: ramon
template: article.jade
---

SmsListener (GitHub: [CentaurWarchief/react-native-android-sms-listener](https://github.com/CentaurWarchief/react-native-android-sms-listener), License: MIT, npm: react-native-android-sms-listener)

When you are building an app which requires some form of account validation like Whats App and Telegram using React Native.
There is gonna be a moment that you want to verify on bases of a text message.
CentaurWarchief has created a module so you don't need to worry about listening for incoming texts.

If works pretty straight forward, you attach an event listener and respond to incoming events like so:

```javascript
import SmsListener from 'react-native-android-sms-listener'

const mySubScription = SmsListener.addListener(myMessageHandler);

function myMessageHandler(message){
    console.log(message);
}

```

This should not be unfamiliar.
In contrast with the event listener API which get's provided by the DOM, removing event listener works differently.

```javascript
mySubScription.remove()
```

This is an example provided by the developer which demonstrates how to do authorization in the same manner as Whats App or Telegram do it:

```javascript
let subscription = SmsListener.addListener(message => {
  let verificationCodeRegex = /Your verification code: ([\d]{6})/;

  if (verificationCodeRegex.test(message.body)) {
    let verificationCode = message.body.match(verificationCodeRegex)[1];

    YourPhoneVerificationApi.verifyPhoneNumber(
      message.originatingAddress,
      verificationCode
    ).then(verifiedSuccessfully => {
      if (verifiedSuccessfully) {
        subscription.remove();
        return;
      }

      if (__DEV__) {
        console.info(
          'Failed to verify phone `%s` using code `%s`',
          message.originatingAddress,
          verificationCode
        );
      }
  });
  }
});
```
Sadly it only has support for Android at this point, hopefully somebody will implement the same for iOS.
For more API reference check the [README](https://github.com/CentaurWarchief/react-native-android-sms-listener) and don't forget to [challenge yourself trying to duplicate the randomization algorithm used by Tetris](http://daily-javascript.com/challenges/tetris-bag/)
