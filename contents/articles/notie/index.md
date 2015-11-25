---
title: 'Notie.js'
date: '2015-11-11'
author: ramon
template: article.jade
---

Notie.js (GitHub: [jaredreich/notie.js](https://github.com/jaredreich/notie.js), License: MIT)

Notie.js is a simple notification plugin. It does not have any dependencies, which makes it very light and easy to work with.
Throughout time I've seen multiple libraries and UI frameworks implement something similar,
but what I like about this little library is that when you have a very small project, it can save you some time on implementing feedback to the user.

Sadly it's not available via npm or bower, but I think that is kind of the point this library is trying to make.
Everything nowadays is bundled and transpiled, which I like very much, but it is nice to see that some people still take this approach.

So let's include it in our markup like this:
```html
<body>
  ...
  <script src="/path/to/notie.js"></script>
</body>
```

Now when you want to send a notification or confirm something with your user you can use it like this:
```javascript

notie.alert(style, 'message', time_in_seconds);

notie.confirm('Title text', 'Yes button text', 'No/cancel button text', function(){
    // User choose Yes.
});
```
The style in this example would be the "theme" of the alert. By default these would be:
1. OK ( Green )
2. Warning ( Yellowish )
3. Error ( Red )
4. Notice ( Blue )
