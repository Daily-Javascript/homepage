---
title: 'λJSON'
date: '2015-10-20'
author: ramon
template: article.jade
---

λJSON (GitHub: [MaiaVictor/LJSON](https://github.com/MaiaVictor/LJSON), License: MIT, npm: ljson)

λJSON is a drop-in replacement for JSON which also allows you to parse and stringify pure functions and their contents. There are good security reasons for functions to be out of the JSON specs, but most of those are only significant when you allow arbitrary, side-effective programs.
With pure functions, one is able to interchange code while still being as safe as with regular JSON.

```javascript
var LJSON = require("LJSON");

// `newPlayer` is a function and couldn't be serialized with JSON.
function newPlayer(name){
    return {
        name      : name,
        hp        : 12,
        atk       : 5,
        def       : 5,
        inventory : []}
};

// LJSON has no trouble doing it because `newPlayer` is pure.
var newPlayerSource = LJSON.stringify(newPlayer);
var John            = LJSON.parse(newPlayerSource)("John");

console.log("Serialized λJSON: " + newPlayerSource);
console.log("Parsed and applied: " + John);
```
Outputs:
```javascript

//Serialized λJSON: (function(v0){return {name:v0,hp:12,atk:5,def:5,inventory:[]}})
//Parsed and applied: { name: 'John', hp: 12, atk: 5, def: 5, inventory: [] }

```

The fact you have to explicitly provide primitives to LJSON functions is what gives you confidence they won't do any nasty thing such as stealing your password, mining bitcoins or launching missiles. LJSON functions can only do what you give them power to. You are still able to serialize side-effective functions, but the side effects will happen on the act of the serialization and get stripped from the serialized output.

```javascript
function nastyPair(a,b){
    console.log("booom");
    return {
        fst : a,
        snd : (function nastyId(x){
            for (var i=0; i<3; ++i)
                console.log("mwahahhahha");
            return x;
        })(b)};
};

// output:
// booom
// mwahahhahha
// mwahahhahha
// mwahahhahha
// (function(v0,v1){return {fst:v0,snd:v1})
```
