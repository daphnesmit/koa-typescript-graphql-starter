import { GQL } from '../generated/graphql'
import { Context } from './context'

type ResolverFnOf<TWhere> = TWhere extends (parent: infer Parent, args: infer Args, context: Context, info: infer Info) => infer Result ? (p: Parent, args: Args, context: Context, info: Info) => Result : never

export type QueryResolvers = { [P in keyof GQL.QueryResolvers]-?: ResolverFnOf<GQL.QueryResolvers[P]> }
export type MutationResolvers = { [P in keyof GQL.MutationResolvers]-?: ResolverFnOf<GQL.MutationResolvers[P]> }
