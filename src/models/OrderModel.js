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
  deleteFlag: { type: String, default: 'N' },
  meta: {
    createTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updateTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    deleteTime: { type: String, default: '' },
  },
})

export default model('Order', OrderSchema)