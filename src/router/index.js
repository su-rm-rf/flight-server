import Router from 'koa-router'
import FlightController from '../controllers/FlightController.js'

const router = new Router()
const { list } = new FlightController()

router.get('/flight/list', list)

export default router