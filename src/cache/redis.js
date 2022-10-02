import redis from 'redis'
import { REDIS_CONFIG } from '../db/index.js'

const redisClient = redis.createClient(...REDIS_CONFIG)

redisClient.on('error', err => {
  console.error(`redis error: ${ err }`)
})

export function set(key, value, timeout=60*60) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value)
  redisClient.expire(key, timeout)
}

export async function get(key) {
  const value = await redisClient.get(key)
  return value
}