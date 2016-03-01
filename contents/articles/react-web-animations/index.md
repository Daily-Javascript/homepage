---
title: 'React Web Animations'
date: '2016-03-01'
author: ramon
template: article.jade
---

react-web-animations (GitHub: [RinconStrategies/react-web-animation](https://github.com/RinconStrategies/react-web-animation), License: MIT, npm: react-web-animation)

In every web application we are animating stuff nowadays. We do this using libraries like [Velocity](http://julian.com/research/velocity/), [Greensock](https://greensock.com/), [jQuery](https://jquery.com/) or we do this with keyframe animating and appending classes to trigger the animations.
If you haven't heard about the [Web animation spec](https://w3c.github.io/web-animations/), it is an API to animate elements without any libraries.
There is already a [Polyfill](https://github.com/web-animations/web-animations-js) available. So you can start using it today.

Now I came across a library which implements this polyfill as a React component called `react-web-animations`.
Why use this over other animation libraries for React? Since react-web-animation uses the Web Animations API polyfill it will eventually use the native browser implementation.
Chrome already has the support for these features today. The rest of the browsers how ever are a bit sad, luckily the polyfill takes care of that for us.

A simple example of how you would use the `Animation` component would look like this:

```javascript
import {Component} from 'react';
import {Animation} from 'react-web-animation';


export default class Basic extends Component {

    getKeyFrames() {
        return [
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
        ];
    }

    getTiming( duration ) {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 2,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    render() {
        return(
            <Animation keyframes={this.getKeyFrames()}
                       timing={this.getTiming(2500)}>
                <div>
                    Web Animations API Rocks
                </div>
            </Animation>);
    }
}
```

For advanced usage you need to check the [great documentation](https://github.com/RinconStrategies/react-web-animation/tree/master/src) which the developer has provided.

A small side note.

Since I haven't received any submissions for the weekly challenges, I have decided to focus on finding great libraries for you guys instead of trying to come up with new challenges to do.
Thanks to the people who did participate, when you still want to be challenged I would suggest you take a look at [/r/DailyProgrammer](https://www.reddit.com/r/dailyprogrammer), [Code Golf](http://codegolf.stackexchange.com/) or [HackerRank](https://www.hackerrank.com/).
