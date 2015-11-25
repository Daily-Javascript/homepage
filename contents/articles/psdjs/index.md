---
title: 'PSD.js'
date: '2015-11-23'
author: ramon
template: article.jade
---

PSD.js (GitHub: [meltingice/psd.js](https://github.com/meltingice/psd.js), License: MIT, npm: psd)

PSD.js is a general purpose PSD parser written in Coffeescript. I was inspired by PSD.rb which allows you to work with a Photoshop document in a manageable tree structure and find out data such as:

- Document structure
- Document size
- Layer/folder size + positioning
- Layer/folder names
- Layer/folder visibility and opacity
- Font data (via psd-enginedata)
    - Text area contents
    - Font names, sizes, and colors
- Color mode and bit-depth
- Vector mask data
- Flattened image data
- Layer comps

Although there are still some pieces missing that are present in PSD.rb, the eventual goal is to have all the features PSD.rb offers.
So let's look at an example for converting `.psd` as a `.png`.

```javascript
import PSD from 'psd';

const psd = PSD.fromFile('my/awesome/file.psd');

psd.parse();

// Log the tree structure of the .psd
console.log(psd.tree().export());

// You can use promises syntax for opening and parsing
PSD.open('my/awesome/file')
    .then(psd => psd.image.saveAsPng('./output.png'))
    .then(() => console.log('Finished!'));

```

There is a very extensive API for traversing the document. If you would know the path to a group or layer within the tree, there is a way you can search by that path.
That would look something like this:

```javascript
psd.tree().childrenAtPath('Version A/Matte');
psd.tree().childrenAtPath(['Version A', 'Matte']);
```

Once you have the layer you are interested in you can access the data like so:

```javascript
// Get the first layer
const node = psd.tree().descendants()[0];

// Read the name
node.get('name');
// Read the width
node.get('width');
```

Here is an example of the output `tree().export()` would give you:

```javascript
{
    children: [
        {
            type: 'group',
            visible: false,
            opacity: 1,
            blendingMode: 'normal',
            name: 'VersionD',
            left: 0,
            right: 900,
            top: 0,
            bottom: 600,
            height: 600,
            width: 900,
            children: [
                {
                    type: 'layer',
                    visible: true,
                    opacity: 1,
                    blendingMode: 'normal',
                    name: 'Makeachangeandsave.',
                    left: 275,
                    right: 636,
                    top: 435,
                    bottom: 466,
                    height: 31,
                    width: 361,
                    mask: {

                    },
                    text: {
                        value: 'Makeachangeandsave.',
                        font: {
                            name: 'HelveticaNeue-Light',
                            sizes: [
                                33
                            ],
                            colors: [
                                [
                                    85,
                                    96,
                                    110,
                                    255
                                ]
                            ],
                            alignment: [
                                'center'
                            ]
                        },
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        transform: {
                            xx: 1,
                            xy: 0,
                            yx: 0,
                            yy: 1,
                            tx: 456,
                            ty: 459
                        }
                    },
                    image: {

                    }
                }
            ]
        }
    ],
    document: {
        width: 900,
        height: 600,
        resources: {
            layerComps: [
                {
                    id: 692243163,
                    name: 'VersionA',
                    capturedInfo: 1
                },
                {
                    id: 725235304,
                    name: 'VersionB',
                    capturedInfo: 1
                },
                {
                    id: 730932877,
                    name: 'VersionC',
                    capturedInfo: 1
                }
            ],
            guides: [

            ],
            slices: [

            ]
        }
    }
}

```
