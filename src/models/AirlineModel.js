import DB from '../db/index.js'

const { Schema, model } = DB

const AirlineSchema = new Schema({
  name: { type: String, required: true, default: '' }
})

export default model('Airline', AirlineSchema)