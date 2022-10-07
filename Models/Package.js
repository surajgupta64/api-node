
let mongoose = require('mongoose')

let Package = new mongoose.Schema({
	Package_Name: String,
	fees: Number,
	duration: String,
	status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('Package', Package);

