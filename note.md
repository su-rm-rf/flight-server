map中不使用await
返回值，用DTO而非Model

# redis
数据类型：string, hash, list, set, zset
session
const Store = new RedisClient().client
Store.hset