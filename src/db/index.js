import mongoose from 'mongoose'

const DB_URL = 'mongodb://localhost:27017/flight'

mongoose.connect(DB_URL)

mongoose.connection.on('connected', () => {
  console.log(`mongoose connection open on ${ DB_URL }`)
})

mongoose.connection.on('error', (err) => {
  console.log(`mongoose connection error: ${ err }`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose connection disconnected`)
})

export const REDIS_CONFIG = {
  port: 6379,
  host: 'localhost'
}

export default mongoose