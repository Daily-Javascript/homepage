---
title: 'React Image Crop'
date: '2015-10-12'
author: ramon
template: article.jade
---

react-image-crop (GitHub: [DominicTobias/react-image-crop](https://github.com/DominicTobias/react-image-crop), License: ISC, npm: react-image-crop)

<img src="https://raw.githubusercontent.com/DominicTobias/react-image-crop/master/crop-demo.gif" style="max-width: 400px;width: 100%;left: 0;">

React-image-crop is a React component for client side cropping of images. This mainly got my interest because I had several moments where I needed to implement something similar.
This will take away that work in the future. I used to do the cropping server side which was a hassle. Upload the image, Getting the dimensions, crop with imagemagick then communicate that back to the browser.

In hindsight I now know that there are a lot of different ways to approach this problem.

What I like about react-image-crop is that it's the basics of what you need to crop images.
It gives you an object which can be used to render the cropped image in canvas to get a base64 encoded image. Another way to display this would be via clipping it with CSS.

And you guys can probably come up with a few more ways.
Let's take a look at the setup for this component.

```javascript
import ReactCrop from 'react-image-crop';

<ReactCrop src='path/to/image.jpg' />
```

When you already want to add a crop, you just pass it as a prop like this:

```javascript
var crop = {
    x: 20,
    y: 10,
    width: 30,
    height: 10
}

<ReactCrop src='path/to/image.jpg' crop={crop} />
```
The `crop` object also has a property called `aspect`. With that you can lock the aspect if the cropped area.

If you want to get the dimensions to where to crop you use the `onChange` or `onComplete` props.
