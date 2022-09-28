import DB from '../db/index.js'

const { Schema, model } = DB

const AirlineSchema = new Schema({
  name: { type: String, required: true, default: '' }, // 中文名称
  code: { type: String, } // 拼音首字母简写
})

export default model('Airline', AirlineSchema)