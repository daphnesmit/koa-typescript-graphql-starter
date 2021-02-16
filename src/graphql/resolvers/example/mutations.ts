import { MutationResolvers } from '@/types'

export const updateExample: MutationResolvers['updateExample'] = async (
  _,
  { input },
  __,
) => {
  const { id, title } = input
  return { id, title }
}
