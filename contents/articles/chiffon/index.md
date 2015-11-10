---
title: 'Chiffon'
date: '2015-10-14'
author: ramon
template: article.jade
---

### Chiffon

Chiffon (GitHub: [polygonplanet/Chiffon](https://github.com/trueadm/Chiffon), License: MIT, npm: chiffon, bower: chiffon)

Chiffon is a very small ECMAScript parser, tokenizer and minifier.
Sometimes we come across an idea where you will need to parse or tokenize Javascript files for, for instance to do analysis on the code.

When using Chiffon for tokenizing you will get an Array of each "element" of the input code like this:

```javascript
let tokens = Chiffon.tokenize('var a = 1');
```
Which would then return:

```javascript
[ { type: 'Keyword',    value: 'var' },
  { type: 'Identifier', value: 'a' },
  { type: 'Punctuator', value: '=' },
  { type: 'Numeric',    value: '1' } ]
```
Here is a list of all possible tokens:

- Comment
- LineTerminator
- Template
- String
- Punctuator
- RegularExpression
- Numeric
- UnicodeEscapeSequence
- Identifier
- Null
- Boolean
- Keyword

Sadly JavaScript AST is not currently supported.

When you wish to "untokenize" the Array, you can pass it into the `untokenize` method like this:
```javascript
Chiffon.untokenize
```

When you want to use the minification, you would do something like this:

```javascript
Chiffon.minify('var a = 1 + 1; // comment');
```

Which is a simple implementation of `untokenize` and `tokenize` together like this:
```javascript
function minify(code) {
    return untokenize(tokenize(code, { lineTerminator: true }));
}
```
