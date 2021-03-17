import { pubsub } from '@/graphql/subscriptions/graphql/pubsub'
import { MutationResolvers } from '@/types'

export const updateExample: MutationResolvers['updateExample'] = async (
  _,
  { input },
  __,
) => {
  const { id, title } = input

  pubsub.publish('exampleUpdated', { exampleUpdated: { id, title } })

  return { id, title }
}
