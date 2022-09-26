import Koa from 'koa'
import Router from 'koa-router'
import KoaBody from 'koa-body'

import FlightRouter from './router/index.js'

const port = 6851
const server = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'connected.'
})

server.use(KoaBody())

router.use('/backend', FlightRouter.routes())
server.use(router.routes()).use(router.allowedMethods())

server.listen(port, () => {
  console.log(`server started at ${ port }`)
})