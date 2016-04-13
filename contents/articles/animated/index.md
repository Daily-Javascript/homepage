---
title: 'Animated'
date: '2016-04-13'
author: ramon
template: article.jade
---

Animated (GitHub: [animatedjs/animated](https://github.com/animatedjs/animated), License: MIT, npm: animated)

Animations have always being weak point React. After recognizing this problem, the community has put in a lot of effort to solve this problem.
Tools like React Velocity, TransitionGroup etc emerged. But non of them are quit as flexible as the Animated library.
Animated embraces the declarative aspect of React and obtains performance by using raw DOM manipulation behind the scenes instead of the usual diff.

The developer has posted some [really nice interactive documentation](http://animatedjs.github.io/interactive-docs/) which I recommend you give a look. As a quick example I will show you how the most complete example would work:

```javascript
import React from 'react';

class MyAnimatedComponent extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      anim: new Animated.Value(0),
    }
  }

  handleClick(delta) {
    this.state.anim.stopAnimation(value => {
      Animated.spring(this.state.anim, {
        toValue: Math.round(value) + delta
      }).start();
    });
  }  

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(-1)}>&lt;</button>
        <Animated.div
          style={{
            transform: [
              {rotate: this.state.anim.interpolate({
                inputRange: [0, 4],
                outputRange: ['0deg', '360deg']
              })},
            ],
            position: 'relative'
          }}
          className="circle"
        />
        <button onClick={() => this.handleClick.bind(this, +1)}>&gt;</button>
      </div>
    );
  }
}
```
