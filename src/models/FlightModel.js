import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const FlightSchema = new Schema({
  code: String, // 编号
  depature: String, // 出发地code
  destination: String, // 目的地code
  leaveDate: String, // 出发日期
  leaveTime: String, // 出发时间
  arriveTime: String, // 抵达时间
  airline: { type: Schema.Types.ObjectId, ref: 'Airline' }, // 航司ID
  deleteFlag: { type: String, default: 'N' },
  meta: {
    createTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updateTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    deleteTime: { type: String, default: '' },
  },
})

export default model('Flight', FlightSchema)