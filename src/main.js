import Koa from 'koa'

const server = new Koa()
const port = 6851

server.use(async (ctx) => {
  ctx.body = {
    msg: 'flight server'
  }
})

server.listen(port, () => {
  console.log(`server started at ${ port }`)
})