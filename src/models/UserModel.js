import DB from '../db/index.js'

const { Schema, model } = DB

const UserSchema = new Schema({
  name: String,
  password: String,
  cardID: Number,
  telephone: Number,
  email: String,
  role: Number
})

export default model('User', UserSchema)