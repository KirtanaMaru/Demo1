const express = require("express")
const { add, getdata, getbyid, delbyid } = require("../contorller/rescont")
const route = express.Router()

route.post("/add",add)
route.get("/getdata",getdata)
route.get("/getbyid/:hno",getbyid)
route.delete("/deldata/:hno",delbyid)

module.exports = route