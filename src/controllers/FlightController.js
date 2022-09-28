import CityModel from '../models/CityModel.js'
import AirlineModel from '../models/AirlineModel.js'
import FlightModel from '../models/FlightModel.js'
import SeatModel from '../models/SeatModel.js'

import { SEATS } from '../util/enums.js'

export default class FlightController {
  async flightList(ctx) {
    const params = ctx.request.query
    // const flights = await FlightModel.find(params)
    const flights = await FlightModel.find()
    let flights2 = []
    for (let i=0; i<flights.length; i++) {
      let flightDTO = {}, flight = flights[i]
      let airline = await AirlineModel.findOne({ _id: flight.airline })
      flightDTO.airlineCode = airline.code
      flightDTO.airlineName = airline.name
      flightDTO.code = flight.code
      flightDTO.depature = flight.depature
      flightDTO.destination = flight.destination
      
      let depatureCity = await CityModel.findOne({ code: flight.depature })
      let destinationCity = await CityModel.findOne({ code: flight.destination })
      flightDTO.depatureName = depatureCity.name
      flightDTO.destinationName = destinationCity.name

      flightDTO.leaveDate = flight.leaveDate
      flightDTO.leaveTime = flight.leaveTime
      flightDTO.arriveTime = flight.arriveTime
      flights2.push(flightDTO)
    }
    ctx.body = flights2
  }
  
  async flightSeats(ctx) {
    const code = ctx.request.query.code
    const flight = await FlightModel.findOne({ code: code })
    const seats = await SeatModel.find({ flight: flight._id })
    let seats2 = []
    for (let i=0; i<seats.length; i++) {
      let seatDTO = {}, seat = seats[i]
      seatDTO.sid = seat._id
      seatDTO.type = seat.type
      seatDTO.name = SEATS[seat.type]
      seatDTO.price = seat.price
      seatDTO.fid = seat.fid
      seats2.push(seatDTO)
    }
    ctx.body = seats2
  }

  async flightAdd(ctx) {
    const flight = await new FlightModel(ctx.request.body).save()
    ctx.body = flight
  }
}