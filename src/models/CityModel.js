import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const CitySchema = new Schema({
  name: { type: String },
  code: { type: String },
  deleteFlag: { type: String, default: 'N' },
  meta: {
    createTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updateTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    deleteTime: { type: String, default: '' },
  },
})

export default model('City', CitySchema)