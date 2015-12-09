---
title: 'bigfloat'
date: '2015-12-09'
author: ramon
template: article.jade
---

bigfloat (GitHub: [charto/bigfloat](https://github.com/charto/bigfloat), License: MIT, npm: bigfloat)

bigfloat is an arbitrary precision math library optimized for computation on geometry and geoinformatics. It provides a base 2 floating point.
It can covert Javascript float's, add, subtract, multiply and convert it back to a Javascript String. It can do all this whiteout losing any significant bits. Numbers are  treaded as immutable and will return a new BigFloat.

So how does it do this?
Numbers are represented in 32-bit limbs (digits in base 2^32).
The least significant limb is stored first. This because basic algorithms for arithmetic operations progress from the least to most significant digit while propagating carry. If carry causes the output to grow, adding a new limb at the end of the Array is faster than adding it in the beginning.
The library was optimized for exponents relatively close to zero, so the location of the decimal point is always present in the limb array, even if that introduces otherwise insignificant leading or trailing zero digits.

Let's look at a quick example if I would run this:
```javascript
const x = Math.pow(2, 53),
	result = x + 1 - x;

console.log( result );
```
It will give me back `0`. But we would expect to get `1`. If we would do the same using bigfloat:

```javascript
const BigFloat = require('bigfloat').BigFloat,
 	  x = Math.pow(2, 53),
	  result = new BigFloat(x).add(1).sub(x).toString();

console.log(result);
```
It would log `1`, as we would suspect.
