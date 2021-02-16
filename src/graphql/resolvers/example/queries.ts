import { QueryResolvers } from '@/types'

export const example: QueryResolvers['example'] = async (
  _parent,
  { id },
  __,
) => {
  return { id, title: 'example' }
}
