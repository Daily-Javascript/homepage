---
title: 'embed.js'
date: '2015-12-08'
author: ramon
template: article.jade
---

embed.js (GitHub: [ritz078/embed.js](https://github.com/ritz078/embed.js/), License: MIT, npm: embed-js)

embed.js is plugin which analyses a string and automatically transform is to embeds emojis, media, maps, tweets, code and services.
No more hassle on finding out how different services work, no more putting off features, because the intergration would be complicated. Just transform it using embed.js.

So how do we use it? Imagine having a blog and the content of a post would look like this:

```
This is the blog we al know and :heart:. Url will become clickable like this http://daily-javascript.com.
youtube videos. https://www.youtube.com/watch?v=bQRLVxZHKPs
and embed codepen's like so: http://codepen.io/ThePizzaMan/pen/YwPOVd
```
This would get transformed into a pretty post with all the services embedded. The only thing needed is a Google Auth key which you can get [here](https://console.developers.google.com/)

Then if we want to transform a specific element we would do something like this:

```javascript
function embed() {
	var x = new EmbedJS({
		element: document.getElementById('rawText'),
		googleAuthKey: '<googleAuthKey>',
		videoWidth: 800,
		tweetOptions: {
			hideMedia: true
		},
		codeEmbedHeight:600
	});
	x.render();
};
```
It supports emoji's, Twitter, Gists, Codepen's, photo's, Spotify, Google Maps, Markdown and many more.
For more options and list of supported services check the [project page](http://riteshkr.com/embed.js/).

Here is a small CodePen demo of what it can do with the example code for you to try out.

<iframe height='268' scrolling='no' src='//codepen.io/ThePizzaMan/embed/YwPOVd/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/ThePizzaMan/pen/YwPOVd'>embed.js</a> by Ritesh Kumar (<a href='http://codepen.io/ritz078'>@ritz078</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
