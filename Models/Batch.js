let mongoose = require('mongoose')
let Batch = new mongoose.Schema({
	service_name: String,
	service_variation: String,
	Batch_Duration: String,
	batch_timing: String,
	status: Boolean,
}, { timestamps: true })
module.exports = mongoose.model('Batch', Batch);