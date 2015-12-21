---
title: 'Inspire Tree'
date: '2015-12-21'
author: ramon
template: article.jade
---

Inspire Tree (GitHub: [helion3/inspire-tree](https://github.com/helion3/inspire-tree), License: MIT, npm: inspire-tree)

First of all I would like to thank everybody that took the time to look at the [Weekly Challenges](http://daily-javascript.com/challenges) over the weekend. If you have not looked at the challenge of last week you can still submit until Thursday night.

Now to business, [Mike Botsko](https://github.com/viveleroi) sent in Inspire Tree which is a un-opinionated collapsable tree UI library.
The need for the library grew with the developers because the alternatives already out there where not extensive enough or just took to much hacking to make it listen to what they wanted.

Some of the features that jumped out to me are:

- Events everywhere
- ~40k minified, uncompressed
- No external dependencies
- Load data directly, via promises, callbacks, etc
- Load child nodes upfront or dynamically (or a mix of both)
- Tri-state checkboxes (optional)
- Multiselect (optional)
- Search by plain string, RegExp, custom matcher, or external resources (optional)

The renderer used by the library can be replaced with a custom renderer for framework support.
Sadly there is only one example listed within the docs but it will be easy it would be to include it within React or Riot due to the Virtual DOM.

To work with this library you need to have an element on the page to target:
```html
<div class="myTree"></div>
```
Now we can init tree functionality and fetch the data at the same time like so:
```javascript
const tree = new InspireTree({
    target: '.tree',
    data: $.getJSON('http://example.com/some-data.json')
});
```
When custom behavior is needed you can attach this to be fired when curtain events are emitted. There is a list of events present on the Github page for reference. This is an example of how a click handler would look like:

```javascript
tree.on('node.click', (evt, node) => {
    // node clicked!
    console.log(['node clicked', evt, node]);
});
```

The rest of the API is very well documented so I would suggest you browse through it if you need more convincing that this is one of the most extensive UI tree library out there.
