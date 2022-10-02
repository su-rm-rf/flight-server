export default function logger(ctx, next) {
  return async function(ctx, next) {
    console.log(ctx.path)
    await next()
  }
}