const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    city:String,
    postcode:String
})


const userdb = mongoose.model('userdb',scheme)

module.exports = userdb