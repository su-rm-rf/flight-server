import SeatModel from "../models/SeatModel.js"

import { SEATS } from '../util/enums.js'

export default class SeatController {
  async seatList(ctx) {
    const fid = ctx.request.query.fid
    const seats = await SeatModel.find({ flight: fid })
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

  async seat(ctx) {
    const seat = await SeatModel.findById(ctx.request.params.sid)
    ctx.body = seat
  }

  async seatAddOrUpdate(ctx) {
    const body = ctx.request.body, sid = body.sid
    let seat2 = null
    if (!sid) {
      seat2 = await new SeatModel(body).save(sid)
    } else {
      seat2 = await SeatModel.findByIdAndUpdate(sid, body)
    }
    ctx.body = seat2
  }
}