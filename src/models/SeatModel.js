import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const SeatSchema = new Schema({
  type: String, // 舱位类型 头等舱F、公务舱C、经济舱Y
  // number: String, // 座位号码
  price: String, // 价格
  flight: { type: Schema.Types.ObjectId, ref: 'Flight' }, // 航班ID
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  },
})

export default model('Seat', SeatSchema)