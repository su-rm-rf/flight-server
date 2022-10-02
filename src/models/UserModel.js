import DB from '../db/index.js'
import moment from 'moment'

const { Schema, model } = DB

const UserSchema = new Schema({
  name: String,
  password: String,
  cardID: Number,
  telephone: Number,
  email: String,
  role: Number,
  deleteFlag: { type: String, default: 'N' },
  meta: {
    createTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    updateTime: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
    deleteTime: { type: String, default: '' },
  },
})

export default model('User', UserSchema)