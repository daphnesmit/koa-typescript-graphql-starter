import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const pathToGraphQLSchema = path.join(__dirname, './types')
const typesArray = fileLoader(pathToGraphQLSchema)
const typesMerged = mergeTypes(typesArray)

export default typesMerged
