let mongoose = require('mongoose')

let subservice = new mongoose.Schema({
    sub_Service_Name: String,
    selected_service: String,
    fees: Number,
    duration: String,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('subservice', subservice);