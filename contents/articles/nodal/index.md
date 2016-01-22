---
title: 'Nodal'
date: '2016-01-18'
author: ramon
template: article.jade
---

Nodal (GitHub: [keithwhor/nodal](https://github.com/keithwhor/nodal), License: MIT, npm: nodal)

Nodal is a web server and API framework for Node.js. It is built upon an ideology of a robust, scalable microservice architecture.
It borrows a lot from [Rails](http://rubyonrails.org/) and [Django](https://www.djangoproject.com/) so working with the framework made me feel right at home since I used to do a lot of Rails.
With familiar commands such as: `nodal db:migrate`, `nodal g:controller` et cetra.

One of the features that really blew me away was how a scaffold CRUD handles query parameters.
It uses the `.where(this.params.query)` where the query params will be applied as a filter.
Which uses a very similar syntax as the [filter methods in Django's ORM](https://docs.djangoproject.com/en/1.9/topics/db/queries/#retrieving-specific-objects-with-filters).

The framework is configured to use [Postgresql](http://www.postgresql.org/) as a database, which is a great idea in my opinion.
Especially since the framework tries to aim at developer who want a little more guidance in their development process to get familiar with Node.js and the Javascript eco system in general.

The developer [posted a screencast](https://youtu.be/IxBXkFbUqtk) of him setting up a very simple twitter clone which I recommend you watch.
<iframe width="100%" height="480" src="https://www.youtube.com/embed/IxBXkFbUqtk" frameborder="0" allowfullscreen></iframe>

And there will be more screencast's in the future. This will definitely be part of the next API I'm gonna build.

Don't forget to challenge your self this week. There is still a challenge running which is [Make Tic Tac Toe in Javascript](http://daily-javascript.com/challenges/tic-tac-toe/) but make sure you submit it before Friday is you want it to be shown in the weekly results.
