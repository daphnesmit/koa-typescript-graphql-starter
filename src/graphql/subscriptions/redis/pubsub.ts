// This is an example of a Redis Graphql pubsub instance
import { RedisPubSub } from 'graphql-redis-subscriptions'

import { createRedisClient } from '@/config'
import { GQL } from '@/generated/graphql'

type Subscription = Exclude<keyof GQL.Subscription, '__typename' | 'root'>
type PublishWithTypeSafety = <T extends Subscription>(trigger: T, payload: Partial<Pick<GQL.Subscription, Subscription>>) => Promise<void>
type AsyncIteratorWithTypeSafety<T = any> = (trigger: Subscription, options?: any) => AsyncIterator<T>
type RedisPubSubWithTypeSafety = Omit<RedisPubSub, 'publish' | 'asyncIterator'> & {
  asyncIterator: AsyncIteratorWithTypeSafety;
  publish: PublishWithTypeSafety;
}

export const redisPubSub = new RedisPubSub({
  publisher: createRedisClient(),
  subscriber: createRedisClient(),
})

const publishWithTypeSafety: PublishWithTypeSafety = (...args) => redisPubSub.publish(...args)
const asyncIteratorWithTypeSafety: AsyncIteratorWithTypeSafety = (...args) => redisPubSub.asyncIterator(...args)

export const pubsub = {
  ...redisPubSub,
  asyncIterator: asyncIteratorWithTypeSafety,
  publish: publishWithTypeSafety,
} as RedisPubSubWithTypeSafety
