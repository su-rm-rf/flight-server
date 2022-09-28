import AirlineModel from "../models/AirlineModel.js"
import FlightModel from '../models/FlightModel.js'
import CityModel from '../models/CityModel.js'

import AirlineDTO from '../dto/AirlineDTO.js'

export default class AirlineController {
  async airlineList(ctx) {
    let list = await AirlineModel.find()
    let airlines = []
    for (let i=0; i<list.length; i++) {
      let airlineDTO = {}, li = list[i]
      airlineDTO.aid = li._id
      airlineDTO.name = li.name
      airlineDTO.code = li.code

      let flights = await FlightModel.find({ airline: li._id })
      let flights2 = []
      for (let j=0; j<flights.length; j++) {
        let flightDTO = {}, flight = flights[j]
        flightDTO.fid = flight._id
        flightDTO.code = flight.code
        flightDTO.depature = flight.depature
        flightDTO.destination = flight.destination
        flightDTO.leaveDate = flight.leaveDate
        flightDTO.leaveTime = flight.leaveTime
        flightDTO.arriveTime = flight.arriveTime

        let depatureCity = await CityModel.findOne({ code: flight.depature })
        let destinationCity = await CityModel.findOne({ code: flight.destination })
        flightDTO.depatureName = depatureCity.name
        flightDTO.destinationName = destinationCity.name
        flights2.push(flightDTO)
      }
      airlineDTO.flights = flights2
      airlines.push(airlineDTO)
    }
    ctx.body = airlines
  }
  
  async airlineAdd(ctx) {
    const airline = await new AirlineModel(ctx.request.body).save()
    ctx.body = airline
  }
}