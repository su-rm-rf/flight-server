import Router from 'koa-router'

import CommonController from '../controllers/CommonController.js'
import AirlineController from '../controllers/AirlineController.js'
import FlightController from '../controllers/FlightController.js'
import SeatController from '../controllers/SeatController.js'
import OrderController from '../controllers/OrderController.js'

const router = new Router()

const { cityList, signin, signup, getUser } = new CommonController()
const { airlineList, airlineAdd } = new AirlineController()
const { flightList, flightSeats, flightAdd } = new FlightController()
const { seatList, seat, seatAddOrUpdate, seatInfo } = new SeatController()
const { checkout, orderDetail, orderPay, orderList } = new OrderController()

router.get('/city/list', cityList)

router.post('/user/signin', signin)
router.post('/user/signup', signup)
router.get('/user/:uid', getUser)

router.get('/airline/list', airlineList)
router.post('/airline/add', airlineAdd)

router.get('/flight/list', flightList)
router.get('/flight/seats', flightSeats)
router.post('/flight/add', flightAdd)

router.get('/seat/list', seatList)
router.get('/seat/:sid', seat)
router.post('/seat/add', seatAddOrUpdate)
router.get('/flight/seatinfo', seatInfo)

router.post('/flight/checkout', checkout)
router.get('/flight/order', orderDetail)
router.post('/order/update', orderPay)
router.get('/order/list', orderList)

export default router