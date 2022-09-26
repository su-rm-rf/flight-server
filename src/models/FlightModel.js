import DB from '../db/index.js'

const { Schema, model } = DB

const FlightSchema = new Schema({
  name: String,
  depature: String,
  destination: String,
  date: String,
  leaveTime: String,
  arriveTime: String,
  airlineID: [{ type: Schema.Types.ObjectId, ref: 'Airline'}],
})

export default model('Flight', FlightSchema)