# 启动命令
+ npm i
+ npm run server

# flight服务端
* Koa
* MongoDB
* Redis

# 表字段
* 城市City: id, name, code
* 航司Airline: aid, name, code
* 航班Flight: fid, code, depature(cid), destination(cid), leaveDate, leaveTime, arriveTime, airlineID
* 座位Seat: sid, type, number, price, flightID
* 用户User: uid, userName, password, role, cardID, telephone, email
* 游客Passenger：pid, name, cardID, telephone, email
* 订单Order：oid, seat, flight, passenger, user, status

# Koa
- koa-router
-   server -> router -> routes -> Controller -> * Model -> Schema -> mongoose
- koa-body

# MongoDB
* DB = mongoose.connect(URL)
* Schema = new mongoose.Schema({字段列表})
* Model = mongoose.model(name, Schema)

+ database <——> database
+ collection <——> table
+ document <——> row
+ field <——> column

+ 外键 population [{ type, ref: ModelName }]

# Redis
+ 内存数据库
+ 记录：用户session，页面访问数

+ redis-server
+ RESP

