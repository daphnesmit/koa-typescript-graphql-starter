import { ApolloServer } from 'apollo-server-koa'
import { debug } from '@/config'
import dotenv from 'dotenv'
import { resolvers, typeDefs, schemaDirectives } from '@/graphql'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { getContext as context, graphqlErrorHandler as formatError, log } from '@/utils'

// dotenv needs to be initialized before other dependencies are loaded
dotenv.config()

const port = process.env.SERVER_PORT || process.env.PORT || 4000

// Create a GraphQLServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context,
  formatError,
  debug,
  introspection: debug,
  playground: debug,
})

// Start Koa server
const app = new Koa()

// Register middleware
// app.use(cors({ origin: '*', credentials: true }))
app.use(bodyParser())

app.listen({ port }, () => {
  log.info(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})

// TODO: Set CORS here
// Have to use any, bug in vendor type definitions
server.applyMiddleware({ app: app as any, path: '/' })
