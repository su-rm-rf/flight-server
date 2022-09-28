import DB from '../db/index.js'

const { Schema, model } = DB

const CitySchema = new Schema({
  name: { type: String },
  code: { type: String }
})

export default model('City', CitySchema)