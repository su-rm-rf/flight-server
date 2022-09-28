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
  meta: {
    createTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
    updateTime: { type: String, value: moment().format('YYYY-MM-DD hh:mm:ss') },
  },
})

export default model('User', UserSchema)