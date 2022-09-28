import DB from '../db/index.js'

const { Schema, model } = DB

const SeatSchema = new Schema({
  type: String, // 舱位类型 头等舱F、公务舱C、经济舱Y
  // number: String, // 座位号码
  price: String, // 价格
  flight: { type: Schema.Types.ObjectId, ref: 'Flight' }, // 航班ID
})

export default model('Seat', SeatSchema)