---
title: 'Smartcrop.js'
date: '2015-10-14'
author: ramon
template: article.jade
---

### Smartcrop.js

Smartcrop (GitHub: [jwagner/smartcrop.js](https://github.com/jwagner/smartcrop.js), License: MIT, npm: smartcrop, bower: smartcrop)

Smartcrop.js is not just another image cropping library. It detects the primary region of an image such as faces.
It does this using the following algorithm.

1. Find edges using [Laplace method](https://en.wikipedia.org/wiki/Laplace's_method)
2. Find regions with a color like skin
3. Find regions high in saturation
4. Generate a set of candidate crops using a sliding window
5. Rank them using a importance function to focus the detail in the center and avoid it in the edges.
6. Output the candidate crop with the highest rank

Using it in a simple example:

```javascript
SmartCrop.crop(image, {width: 100, height: 100}, result => console.log(result) );
// Which will return
// -> {topCrop: {x: 300, y: 200, height: 200, width: 200}}
```

When you wanna use it within node.js you would have to do something like this:

```javascript
import fs from 'fs';
import Canvas from 'canvas';
import SmartCrop from 'smartcrop';

SmartCrop.crop(img, options, result => {
    console.log(JSON.stringify(result, null, 2));
    if(output && options.width && options.height){
        var canvas = new Canvas(options.width, options.height),
            ctx = canvas.getContext('2d'),
            crop = result.topCrop,
            f = fs.createWriteStream(output);
        ctx.patternQuality = 'best';
        ctx.filter = 'best';
        ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
        canvas.syncJPEGStream({quality: quality}).pipe(f);
    }
});
```
Smartcrop.js also offers a command line interface under the npm package name [`smartcrop-cli`](https://github.com/jwagner/smartcrop-cli). Which based uses node-canvas.

That one you would use like this:

```bash
npm i smartcrop-cli -g
smartcrop-cli --width 100 --height 100 photo.jpg square-thumbnail.jpg
```
Smartcrop-cli does requires [node-canvas](https://github.com/Automattic/node-canvas) which requires local libraries to be installed. Refer to the [node-canvas wiki](https://github.com/Automattic/node-canvas/wiki/_pages) installation instructions.
