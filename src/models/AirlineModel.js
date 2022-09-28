import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const AirlineSchema = new Schema({
  name: { type: String, required: true, default: '' }, // 中文名称
  code: { type: String, }, // 拼音首字母简写
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  },
})

export default model('Airline', AirlineSchema)