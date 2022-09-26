import Airline from '../models/AirlineModel.js'
import Flight from '../models/FlightModel.js'
import Seat from '../models/SeatModel.js'
import User from '../models/UserModel.js'

export default class FlightController {
  async list(ctx) {
    ctx.body = await Airline.find()
  }
}