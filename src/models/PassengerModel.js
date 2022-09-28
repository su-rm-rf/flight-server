import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const PassengerSchema = new Schema({
  name: String,
  cardID: Number,
  telephone: Number,
  email: String,
  userID: { type: Schema.Types.ObjectId, ref: 'User' },
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  },
})

export default model('Passenger', PassengerSchema)