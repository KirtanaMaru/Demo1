const mongoose = require("mongoose")
const ressch =  new mongoose.Schema({
    "_id":Number,
    "name":String,
    "gender":String,
    "phno":Number,
    "sub1":Number,
    "sub2":Number,
    "sub3":Number,
    "sub4":Number,

})

const resmodel= new mongoose.model("result",ressch)

module.exports = resmodel