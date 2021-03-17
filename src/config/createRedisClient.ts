import Redis from 'ioredis'

const defaultOptions: Redis.RedisOptions = {
  retryStrategy: (times: number) => {
    // reconnect after
    return Math.min(times * 50, 20000)
  },
}

export const createRedisClient = (options: Redis.RedisOptions = defaultOptions) => new Redis(process.env.REDIS_URL, options)
