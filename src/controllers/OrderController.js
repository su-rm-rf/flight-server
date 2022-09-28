import CityModel from '../models/CityModel.js'
import AirlineModel from '../models/AirlineModel.js'
import FlightModel from '../models/FlightModel.js'
import OrderModel from '../models/OrderModel.js'
import PassengerModel from '../models/PassengerModel.js'
import SeatModel from '../models/SeatModel.js'

import { SEATS, ORDER_STATUS } from '../util/enums.js'

export default class OrderController {
  async checkout(ctx) {
    const body = ctx.request.body
    const passengerDTO = {
      name: body.name,
      cardID: body.cardID,
      telephone: body.telephone,
      email: body.email,
      userID: body.userID,
    }
    const passenger = await new PassengerModel(passengerDTO).save()
    
    const sid = body.sid
    const seat = await SeatModel.findById(sid)
    const orderDTO = {
      seatID: seat._id,
      flightID: seat.flight,
      passengerID: passenger._id,
      userID: passenger.userID,
      price: seat.price,
      status: 0,
    }
    const order = await new OrderModel(orderDTO).save()
    ctx.body = order
  }

  async orderDetail(ctx) {
    const oid = ctx.request.query.oid
    const order = await OrderModel.findById(oid)
    const sid = order.seatID, pid = order.passengerID
    const seat = await SeatModel.findById(sid)
    const passengerInfo = await PassengerModel.findById(pid)
    const flight = await FlightModel.findById(seat.flight)
    const airline = await AirlineModel.findById(flight.airline)
    const seatInfo = {
      flightName: airline.name + flight.code,
      seatName: SEATS[seat.type],
    }
    ctx.body = {
      oid,
      status: ORDER_STATUS[order.status],
      price: order.price,
      seatInfo,
      passengerInfo
    }
  }

  async orderPay(ctx) {
    const oid = ctx.request.body.oid
    const order = await OrderModel.findByIdAndUpdate(oid, { status: 1 })
    ctx.body = order
  }

  async orderList(ctx) {
    const uid = ctx.request.query.uid
    const orders = await OrderModel.find({ userID: uid })
    let orderList = []
    for (let i=0; i<orders.length; i++) {
      let orderDTO = {}, order = orders[i]
      const seat = await SeatModel.findById(order.seatID)
      const flight = await FlightModel.findById(order.flightID)
      const airline = await AirlineModel.findById(flight.airline)
      const passenger = await PassengerModel.findById(order.passengerID)

      const depatureCity = await CityModel.findOne({ code: flight.depature })
      const destinationCity = await CityModel.findOne({ code: flight.destination })
      const depatureName = depatureCity.name
      const destinationName = destinationCity.name
      
      orderDTO = {
        id: order._id,
        statusCode: order.status,
        status: ORDER_STATUS[order.status],
        price: order.price,
        flight: {
          flightName: airline.name + flight.code,
          depature: flight.depature,
          destination: flight.destination,
          depatureName,
          destinationName,
          leaveDate: flight.leaveDate,
          leaveTime: flight.leaveTime,
          arriveTime: flight.arriveTime,
        },
        seat: {
          name: SEATS[seat.type],
        },
        passenger: {
          name: passenger.name,
          telephone: passenger.telephone,
        }
      }
      orderList.push(orderDTO)
    }
    ctx.body = orderList
  }
}