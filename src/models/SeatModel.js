import DB from '../db/index.js'

const { Schema, model } = DB

const SeatSchema = new Schema({
  type: String,
  number: String,
  price: String,
  flightID: [{ type: Schema.Types.ObjectId, ref: 'Flight' }],
})

export default model('Seat', SeatSchema)