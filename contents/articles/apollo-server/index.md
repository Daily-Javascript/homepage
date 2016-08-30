---
title: "Apollo Server"
date: '2016-08-29'
author: stefan
template: article.jade
---
Apollo Server (GitHub: [apollostack/apollo-server][github], License: MIT, npm: [apollo-server][npm])

Apollo Server is an easy to set up GraphQL server that works with all the major Node.js HTTP server frameworks: Connect, Express, hapi and Koa. Contrary to Facebook's own `express-graphql` middleware, which serves mainly as a reference implementation, Apollo Server's goal is to be a complete production-ready GraphQL server.

In case you're not familiar with GraphQL: GraphQL is a data query language created by Facebook that's meant to solve the drawbacks of REST APIs. For a more in-depth introduction I recommend heading over to the [GraphQL website][website].

In order to get started with Apollo Server, you need to install it first:

```bash
npm i apollo-server --save
```
To use Apollo Server with hapi, you can configure your server like:

```javascript
import hapi from 'hapi';
import { ApolloHAPI } from 'apollo-server';

const server = new hapi.Server();

const myGraphQLSchema = // ... define or import your schema here!
const HOST = 'localhost';
const PORT = 3000;

server.connection({
  host: HOST,
  port: PORT,
});

server.register({
  register: new ApolloHAPI(),
  options: { schema: myGraphQLSchema },
  routes: { prefix: '/graphql' },
});
```

Configuring Apollo Server is done by passing an object with the following properties:

```javascript
const ApolloOptions = {
  schema: GraphQLSchema,
  context?: any, // value to be used as context in resolvers
  rootValue?: any,
  formatError?: Function, // function used to format errors before returning them to clients
  validationRules?: Array<ValidationRule>, // additional validation rules to be applied to client-specified queries
  formatParams?: Function, // function applied for each query in a batch to format parameters before passing them to `runQuery`
  formatResponse?: Function, // function applied to each response before returning data to clients
});
```

Apollo Server also comes with its own interactive, configurable [in-browser GraphiQL IDE][grapiql] implementation that makes it easy to test your GraphiQL queries.

For more on Apollo Server (and the complete Apollo Data Stack) and to learn how to run your own GraphQL server, head over to the [website][docs].

[github]: https://github.com/apollostack/apollo-server
[npm]: https://www.npmjs.com/package/apollo-server
[website]: http://graphql.org/blog/graphql-a-query-language/
[grapiql]: http://docs.apollostack.com/apollo-server/graphiql.html
[docs]: http://docs.apollostack.com/apollo-server/
