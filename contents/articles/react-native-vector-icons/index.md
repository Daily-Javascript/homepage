---
title: 'React Native, Vector Icons'
date: '2016-04-05'
author: ramon
template: article.jade
---

Vector Icons (GitHub: [oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons), License: MIT, npm: react-native-vector-icons)

Icons are all around us. We encounter them in the real world every day. They can communicate a message by association instead of by text.
This is very useful 'cause sometime you will only have enough space for a little image, but you still want to explain or communicate with the consumer of your product.

This is the reason that designers prefer icons over text to indicate user interactions.
In modern web there are multiple approaches to loading and rendering of these icons.

- We could require them in the form of a font in which each character is set to an icon instead of the letter character.
- We could load them in directly as an SVG and use this on the page.
- We could use an SVG as a `background-image` in our CSS and show.

But what if we don't have a CSS or HTML, like in React Native? Then we have a problem.
There are multiple ways to include images and SVG's into a native application but this requires some knowledge of the native platform and is also very labor intensive because every time you want to an icon you will need to import it into your project.

To solve that problem `react-native-vector-icons` was created.
It allows you to import icons very easily into your React Native project.
When installed you have more than 3k of icons to choose from originating from icons sets like Entypo, FontAwesome, Foundation, Ionicons, MaterialIcons, Zocial and more.

Unlike most libraries that I've seen for React Native, it supports Android and iOS.
Once you have installed it and configured react-native-vector-icons via the instructions in the [README](https://github.com/oblador/react-native-vector-icons/blob/master/README.md), you can use it in your components like this:

```javascript
import Icon from 'react-native-vector-icons/FontAwesome';
const rocket = (<Icon name="rocket" size={30} color="#900" />);
```
Since icons often get used inside buttons the developers included an easy way to create basic buttons:

```javascript
const defaultButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
  </Icon.Button>
);
```
