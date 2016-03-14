---
title: 'Quiet.js'
date: '2016-03-14'
author: ramon
template: article.jade
---

Quiet.js (GitHub: [brian-armstrong/quiet-js](https://github.com/brian-armstrong/quiet-js), License: MIT)

Quiet.js is a javascript binding for `libquiet`.
In other words it's a library for sending and receiving data via sound card.
It can functions via either speakers or a cable, for instance a 3.5mm mini jack.
Quiet comes included with a few transmissions profiles which configure quiet's transmitter and receiver.
For speaker transmission, there is a profile which transmits around the 19kHz range.
For transmissions via cable, quiet.js has profiles which offer speeds of at least 40 kbps.

The transmission functionality is available for all [evergreen browsers](https://www.techopedia.com/definition/31094/evergreen-browser).
Because this project is still very young it is not available via `npm` yet. There is already an issue logged by the developer himself to implement `exports` so it can be published to `npm`.

Quiet-js includes a blob of libquiet as well as a javascript binding, which are compiled by [Emscripten](https://github.com/kripken/emscripten).
The bindings must be loaded before the compiled portion. The recommended way to include Quiet in your project is:

```html
<script type="text/javascript" src="quiet.js"></script>
<script type="text/javascript" src="my_app.bundle.js"></script>
<script async type="text/javascript" src="quiet-emscripten.js"></script>
```

The developer highly recommends to also include [libfec.js](https://github.com/brian-armstrong/libfec). An enscripted version of `libfec` which can be installed using `npm`. When libfec is not included, quiet.js will not be able to use any profiles which use convolutional codes or Reed-Solomon error correction.
