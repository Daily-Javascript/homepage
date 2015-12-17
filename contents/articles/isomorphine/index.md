---
title: 'isomorphine'
date: '2015-12-17'
author: ramon
template: article.jade
---

isomorphine (GitHub: [d-oliveros/isomorphine](https://github.com/d-oliveros/isomorphine), License: MIT, npm: isomorphine)

Earlier this week I came across [a post](https://medium.com/@MarcFly1103/a-painkiller-for-isomorphic-data-fetching-c829ecc84274#.hqabvytiu) by [Marco Romero](https://medium.com/@MarcFly1103). It was a highlight of isomorphine, which is a Webpack loader that lets you require and use server-side entities from the browser, as if you were in the server.
The browser accesses a proxy of the server’s methods that are being required. The proxy is a mirror of the server-side entity and creates an HTTP request to Isomorphine’s endpoint within the server.

Marco describes it as "A Painkiller for Isomorphic Data Fetching". With which I totally agree. When developing Isomorphic/Universal apps data retrieval can be a real hassle and this little marble will take way a lot of that pain.

Of course there are established libraries and techniques for solving this issue such as: [Relay](https://facebook.github.io/relay/) and [React-Transmit](https://github.com/RickWong/react-transmit). The downside of these approaches is that you are doing a commitment to a framework which could collide with your business philosophy or you just do not like React. Don't get me wrong I love React, but I can understand if some developer do not or need something more agnostic and now you can.

I could go into the details of how you would use it but I doubt that it will be more complete than the great post Marco did. So I won't and instead refer you to the [post on medium](https://medium.com/@MarcFly1103/a-painkiller-for-isomorphic-data-fetching-c829ecc84274#.hqabvytiu) and for more extensive documentation check the [README](https://github.com/d-oliveros/isomorphine).
