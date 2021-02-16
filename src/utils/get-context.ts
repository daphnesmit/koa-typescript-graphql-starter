import { ContextCallback } from '@/types/context'

export const getContext: ContextCallback = async ({ ctx }) => {
  return { ctx }
}
