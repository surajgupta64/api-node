
let mongoose = require('mongoose')

let service = new mongoose.Schema({
    ServiceName: String,
    fees: Number,
    duration: String,
    status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('service', service);