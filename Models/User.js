let mongoose = require('mongoose')

let Users = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    dashboardAccess: String,
}, { timestamps: true })

module.exports = mongoose.model('Users', Users);