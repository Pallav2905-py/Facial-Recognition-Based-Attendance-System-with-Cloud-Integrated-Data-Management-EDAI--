const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/product").then(() => { console.log("Sucessfully Connected To DataBase ") }).catch((e) => { console.log("Error Occured") })

module.exports = mongoose;