import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const OrderSchema = new Schema({
  seatID: { type: Schema.Types.ObjectId, ref: 'Seat' },
  flightID: { type: Schema.Types.ObjectId, ref: 'Flight' },
  passengerID: { type: Schema.Types.ObjectId, ref: 'Passenger' },
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  price: String,
  status: Number,
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  }
})

export default model('Order', OrderSchema)