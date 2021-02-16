import { GraphQLFormattedError, GraphQLError } from 'graphql/error'

export const graphqlErrorHandler = (error: GraphQLError): GraphQLFormattedError => {
  // Handle specific graphql Errors
  return error
}
