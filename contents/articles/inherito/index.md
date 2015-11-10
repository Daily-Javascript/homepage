---
title: 'inHerito'
date: '2015-11-05'
author: ramon
template: article.jade
---

### inHerito

inHerito (GitHub: [Ositoozy/inherito](Ositoozy/inherito), License: BSD, bower: rot.js)

inHerito is a compostable factory that allows you create objects you want ease and "correct" inheritance. It allows you to use properties and function methods from other objects without overusing and over inheriting. Every object that is created gets it's own logging information if option is set to true and allows you to keep a mindful eye on your objects. This is my take on solving the original OOP problem of over inheriting. Now you have "Objects Linked to Other Objects" and inherit only if you say so.

Then the first question that popped into my head was do we need yet another design pattern, well no ofcourse not but it could be useful for bootstrapping a new application to set the tone and get the correct mindset.

As the developer claims:
> Never be affraid again to have more than one level deep of inherited object inheritance tree. In OOP we usually create newer objects for the sake of inheritance and not for the sake of semantical correctness.
> - Ex: Let's consider a dog. A good and sane OOP developer would most likely create an abstract tree that resides the dog animal this way
> ```javascript
Animal // And Followed by animal properties (ex blood, heart, etc.)
 Animal.k9.dog // And Followed by dog properties (bark, bite, age, how many legs, etc.)```

But let's say in that same program we want to make the robot dog, which semantically inherits a of the dog's properties to begin with. But we know semantically that robot dog belongs basically from two classes. It's not an Animal anymore but shares a lot with dog.

```javascript
let robotDog = dog.create({
    inherit: [bite, bark],
    material: metal
});

Is it a dog? true
Is it a robot? true
```

This project currently is very young but I like the direction where it is going. Momentairley it can be used as a base template by just cloning the repo. Sadly there are no other ways to generate a project holding this methodologies but as the developer tells me there will be in the future.
