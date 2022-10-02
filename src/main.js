import Koa from 'koa'
import Router from 'koa-router'
import KoaBody from 'koa-body'

import redisStore from 'koa-redis'
import session from 'koa-generic-session'

import { getKeys } from './util/common.js'
import logger from './util/logger.js'

import FlightRouter from './router/index.js'

const port = 6851
const server = new Koa()
const router = new Router()

// const options = { redisClient, db: 1 }
// const store = redisStore(options)
server.keys = [getKeys()]
// server.use(session({
//   key: 'flight.sid',
//   prefix: 'flight.sess:',
//   cookie: {
//     path: '/',
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000
//   },
//   store: redisStore({
//     all: 'localhost:6379'
//   })
// }))

// server.use(session({
//   key: 'flight.sid',
//   prefix: 'flight.sess:',
//   store: new redisStore()
// }))

server.use(logger())

router.get('/', async ctx => {
  ctx.body = 'connected.'
})

server.use(KoaBody())

router.use('/backend', FlightRouter.routes())
server.use(router.routes()).use(router.allowedMethods())

server.listen(port, () => {
  console.log(`server started at ${ port }`)
})