let mongoose = require('mongoose')

let enquiryForms = new mongoose.Schema({
    PersonalDetails: {
        Fullname: String,
        Emailaddress: String,
        CountryCode: Number,
        ContactNumber: Number,
        Gander: String,
        DateofBirth: Date,
        address: String,
        Area: String,
        city: String,
        Profession: String,
    },
    Scheduleenquiryfollowup: {
        StaffName: String,
        CenterName: String,
        CallStatus: String,
        Message: String,
    },
    EmergencyContact: {
        person_Name: String,
        Relation: String,
        CountryCode: Number,
        ContactNumber: Number,
    },
    LeadInformation: {
        EnquiryDate: Date,
        ServiceName: { type: mongoose.Schema.Types.ObjectId },
        Customertype: String,
        enquirytype: String,
        appointmentDate: Date,
        appointmentTime: String,
        appointmentfor: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('enquiryForms', enquiryForms);