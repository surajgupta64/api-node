let mongoose = require('mongoose')

let brandlogoupdate = new mongoose.Schema({
    logoId: String,
    partnerId: { type: mongoose.Schema.Types.ObjectId },
    logoImage: String,

}, { timestamps: true })

module.exports = mongoose.model('brandlogoupdate', brandlogoupdate);