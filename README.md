# koa-typescript-graphql-starter
KOA server, GraphQL and Typescript starter.


## Installation

### Dependencies

Start installing the dependencies by running `npm i`

### Environment Variables
Check out the `example.env` for available env variables.

We are using dotenv.

Create a `.env` file and fill in your env variables.

## Start Development Server

Start the development server and the worker by running:

```
npm run dev
```


This will run ts-node-dev to start the development server.

The development server will be served from the port set in your env file (default 4000).
On that port you will now see the GraphQL playground.

## Run Production Build

Build and start a production server and the worker by running:

```
npm run build && npm run start
```

This will build the .js files to the ./dist folder and start node in production mode.


## Examples

### Example Query
To trigger the example query use the following GraphQL query in the GraphQL Playground.

```gql
fragment Example on Example {
  id
  title
}

query GetExample($id: String!) {
  example(id: $id) {
    ...Example
  }
}
```
### Example Mutation
To make the example mutation use the following GraphQL query in the GraphQL Playground.

```gql
mutation UpdateExample($input: ExampleInput!) {
  updateExample(input: $input) {
    id
  }
}
```

### Example Subscription
I added 2 pubsub mechanisms as examples to use for you as inspiration. One is based on redis and the other one is based on Apollo Server pubsub.
You can find them in the folders `src/graphql/subscriptions/redis` and  `src/graphql/subscriptions/graphql`.

To start listening to the example subscription use the following GraphQL query in the GraphQL Playground.
(Our example triggers a pubsub update when you're firing the example mutation for testing purposes. See `src/graphql/resolvers/example/mutations.ts`)

```gql
subscription ExampleUpdated {
  exampleUpdated {
    id
    title
  }
}
```
