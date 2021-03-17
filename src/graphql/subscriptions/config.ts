import { SubscriptionServerOptions } from 'apollo-server-core'

import { log } from '@/utils'

export const subscriptionsConfig: Partial<SubscriptionServerOptions> = {
  path: '/subscriptions',
  onConnect: async (_connectionParams) => {
    log.info('Client connected!')
    return {}
  },
  onDisconnect: async () => {
    log.info('Client disconnected!')
  },
}
