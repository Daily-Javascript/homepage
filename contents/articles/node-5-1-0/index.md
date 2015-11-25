---
title: 'Node v5.1.0 Stable'
date: '2015-11-19'
author: ramon
template: article.jade
---

First of all my excuse for not posting the past 2 days. I had a few days off from my day job because I went to a concert of Bullet For My Valentine(for those of you that might me interested). This also caused me to mis this new release of Node.js so here is a small roundup of the notable changes.

### `buffer` ([#3767](https://github.com/nodejs/node/pull/3767))
The `noAssert` option for many buffer functions will now silently drop invalid write values rather than crashing This makes the behavior match what the docs suggest.

### `child_process` ([#3577](https://github.com/nodejs/node/pull/3577))
child.send() now properly returns a boolean like the docs suggest.

### `http_parser` ([#3569](https://github.com/nodejs/node/pull/3569))
update http-parser to 2.6.0 from 2.5.0 (James M Snell) .
Now supports the following HTTP methods: `LINK`, `UNLINK`, `BIND`, `REBIND`, `UNBIND`.
Also added ACL and IPv6 Zone ID support.

### `npm` ([#3685](https://github.com/nodejs/node/pull/3685))
upgrade npm to 3.3.12 from v3.3.6.
See the release notes for [v3.3.7](https://github.com/npm/npm/releases/tag/v3.3.7), [v3.3.8](https://github.com/npm/npm/releases/tag/v3.3.8), [v3.3.9](https://github.com/npm/npm/releases/tag/v3.3.9), [v3.3.10](https://github.com/npm/npm/releases/tag/v3.3.10), [v3.3.11](https://github.com/npm/npm/releases/tag/v3.3.11), and [v3.3.12](https://github.com/npm/npm/releases/tag/v3.3.12) for more details.

### REPL ([#3630](https://github.com/nodejs/node/pull/3630))
The REPL no longer crashes if the persistent history file cannot be opened.

### tls ([#3755](https://github.com/nodejs/node/pull/3755))
The default sessionIdContext now uses SHA1 in FIPS mode rather than MD5.

### v8([#3779](https://github.com/nodejs/node/pull/3779))
Added some more useful post-mortem data.

### Documentation ([#3662](https://github.com/nodejs/node/pull/3662))
All of the API docs have been re-ordered so as to read in alphabetical order.

The known issues that are still in there are:

- Surrogate pair in REPL can freeze terminal. [#690](https://github.com/nodejs/node/issues/690)
- Calling dns.setServers() while a DNS query is in progress can cause the process to crash on a failed assertion. [#894](https://github.com/nodejs/node/issues/894)
- url.resolve may transfer the auth portion of the url when resolving between two full hosts, see [#1435](https://github.com/nodejs/node/issues/1435).
- Unicode characters in filesystem paths are not handled consistently across platforms or Node.js APIs. See [#2088](https://github.com/nodejs/node/issues/2088), [#3401](https://github.com/nodejs/node/issues/3401) and [#3519](https://github.com/nodejs/node/issues/3519).
