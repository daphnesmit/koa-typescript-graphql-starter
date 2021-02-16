import Koa from 'koa'

export interface ContextInput {
  ctx: Koa.Context;
  connection?: {
    context?: any;
  };
}

export interface Context {
  ctx: Koa.Context;
}

export type ContextCallback = (context: ContextInput) => Promise<Context>
