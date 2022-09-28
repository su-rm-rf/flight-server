import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const CitySchema = new Schema({
  name: { type: String },
  code: { type: String },
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  },
})

export default model('City', CitySchema)