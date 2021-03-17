import { GQL } from '@/generated/graphql'
import { pubsub } from '@/graphql/subscriptions/graphql/pubsub'

export const exampleUpdated: GQL.SubscriptionResolvers['exampleUpdated'] = ({
  subscribe: () => pubsub.asyncIterator('exampleUpdated'),
})
