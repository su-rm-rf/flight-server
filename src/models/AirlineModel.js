import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const AirlineSchema = new Schema({
  name: { type: String, required: true, default: '' }, // 中文名称
  code: { type: String, }, // 拼音首字母简写
  deleteFlag: { type: String, default: 'N' },
  meta: {
    createTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updateTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    deleteTime: { type: String, default: '' },
  },
})

export default model('Airline', AirlineSchema)