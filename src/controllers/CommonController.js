import CityModel from "../models/CityModel.js"
import UserModel from "../models/UserModel.js"

import { getToken } from "../util/common.js"

export default class CommonController {
  async cityList(ctx) {
    ctx.body = await CityModel.find()
  }

  async signin(ctx) {
    const body = ctx.request.body
    const user = await UserModel.findOne(body)
    if (!user) {
      ctx.body = {
        status: 404
      }
    } else {
      ctx.body = {
        user,
        token: getToken()
      }
    }
  }

  async signup(ctx) {
    const body = ctx.request.body
    let userModel = {
      name: body.userName,
      password: body.password,
      cardID: body.cardID,
      telephone: body.telephone,
      email: body.email,
      role: 2
    }
    const user = await new UserModel(userModel).save()
    ctx.body = {
      user,
      token: getToken()
    }
  }

  async getUser(ctx) {
    const user = await UserModel.findById(ctx.request.params.uid)
    ctx.body = user
  }
}