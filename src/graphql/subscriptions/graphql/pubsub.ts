// This is an example of a Apollo pubsub instance
import { PubSub } from 'apollo-server-koa'

import { GQL } from '@/generated/graphql'

type Subscription = Exclude<keyof GQL.Subscription, '__typename' | 'root'>
type PublishWithTypeSafety = (trigger: keyof GQL.Subscription, payload: Partial<GQL.Subscription>) => Promise<void>
type AsyncIteratorWithTypeSafety<T = any> = (trigger: Subscription) => AsyncIterator<T>
type RedisPubSubWithTypeSafety = Omit<PubSub, 'publish' | 'asyncIterator'> & {
  asyncIterator: AsyncIteratorWithTypeSafety;
  publish: PublishWithTypeSafety;
}

export const pubSubInstance = new PubSub()

const publishWithTypeSafety: PublishWithTypeSafety = (...args) => pubSubInstance.publish(...args)
const asyncIteratorWithTypeSafety: AsyncIteratorWithTypeSafety = (...args) => pubSubInstance.asyncIterator(...args)

export const pubsub = {
  ...pubSubInstance,
  asyncIterator: asyncIteratorWithTypeSafety,
  publish: publishWithTypeSafety,
} as RedisPubSubWithTypeSafety
