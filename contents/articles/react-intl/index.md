---
title: 'React Intl'
date: '2016-03-30'
author: ramon
template: article.jade
---

React Intl (GitHub: [yahoo/react-intl](https://github.com/yahoo/react-intl), License: BSD-3-Clause, npm: react-intl)

A very common problem to solve is internationalization or "i18n".
> Fun fact. <br /> i18n stands of i- eighteen letters -n.

Doing i18n in React or any other modern framework is different from how we used to do this. This also requires newer tools. Luckily the nice people of Yahoo to the rescue with React Intl.

React Intl is a part of FormatJS which is a collection of libraries for internationalization that are focused on formatting numbers, dates, and strings for displaying to people.

One of the features I was missing when I was using i18next was plurarization. I would find myself adding prefixed keys to my translation documents and checking the length and on bases of that show the singular or plural version of that translation.

Now we don't have to do that anymore, because React Intl takes care of all of that.
Let's take a look on how to get started.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, FormattedNumber, FormattedPlural } from 'react-intl';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name       : 'Eric',
            unreadCount: 1000,
        };
    }

    render() {
        const { name, unreadCount } = this.state;

        return (
            <p>
                Hello <b>{name}</b>, you have {' '}
                <FormattedNumber value={unreadCount} /> {' '}
                <FormattedPlural value={unreadCount}
                    one="message"
                    other="messages"
                />.
            </p>
        );
    }
}

ReactDOM.render(
    <IntlProvider locale="en">
        <App />
    </IntlProvider>,
    document.getElementById('container')
);
```

This example would render "Hello Eric, you have 1,000 messages".
As you can see it picks the plural version of the string 'cause the `unreadCount` is set to a thousand.
When working with multiple languages, there is also the problem of different grammar rules when pluralizing. For instance in Russian there are multiple plural rules:

- `one`
- `few`
- `many`
- `other`

While in English only `one` and `other` are relevant.

If this library intrigues you head over to the [FormatJS website](http://formatjs.io/) and check all the other capabilities.
