# flight服务端
Koa
MongoDB
Redis

# 表字段
城市City: id, name, code
航司Airline: aid, name, code
航班Flight: fid, code, depature(cid), destination(cid), leaveDate, leaveTime, arriveTime, airlineID
座位Seat: sid, type, number, price, flightID
用户User: uid, userName, password, role, cardID, telephone, email


# Koa
koa-router
  server -> router -> routes -> Controller -> Model -> Schema -> mongoose
koa-body

# MongoDB
DB = mongoose.connect(URL)
Schema = new mongoose.Schema({字段列表})
Model = mongoose.model(name, Schema)

database <——> database
collection <——> table
document <——> row
field <——> column

外键 population [{ type, ref: ModelName }]

# Redis
