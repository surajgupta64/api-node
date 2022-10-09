
let mongoose = require('mongoose')

let memberFroms = new mongoose.Schema({
    PersonalDetails:
    {
        Fullname: String,
        CountryCode: String,
        ContactNumber: Number,
        WhatsappNumber: Number,
        Email: String,
        Gender: String,
        DateofBirth: Date,
        Anniversarydate: Date,
        Address: String,
        Area: String,
        city: String,
        BloodGroup: String,
        FacebookID: String,
        Pincode: Number,
        SchoolName: String,
        SchoolTimings: String,
        Mothersname: String,
        MothersProfession: String,
        Fathersname: String,
        FathersProfession: String,
        Vaccinated: Boolean
    },
    Level: {
        level: Number
    },
    CommunicationPreferenceSettings: {
        sms: Boolean,
        mail: Boolean,
        pushnotification: Boolean,
    },
    Emergencycontact: {
        Name: String,
        CountryCode: String,
        ContactNumber: Number,
        Relationship: String,
    },
    LeadInformation: {
        Customertype: String,
        Leadsource: String,
        EnquiryType: String,
    },
    MemberManager: {
        AssignStaff: String,
        MemberManager: String,
        Batch: String,
        GeneralTrainer: String,
    },
    IDs: {
        AttendanceID: String,
        ClubID: String,
        NationalID: String,
        LockerKeyNo: Number,
        PAN: String,
    },
    Secondarycontactdetails: {
        SecondaryName: String,
        SecondaryNumber: Number,
    },
    ApparelandShoes: {
        TShirtSize: Number,
        ShoesSize: Number,
        ShortsSize: Number,
    },
    Injuriesandconditions: {
        AsthmaCOPD: Boolean,
        BackPain: Boolean,
        BoneFracture: Boolean,
        CarpalTunnel: Boolean,
        Diabetes: Boolean,
        DigestiveDisorder: Boolean,
        Epilepsy: Boolean,
        FootPain: Boolean,
        Glaucoma: Boolean,
        HeartDiseaseCondition: Boolean,
        HerniaDiastasisRecti: Boolean,
        HighBloodPressure: Boolean,
        Other: String,
    },
    Measurement: {
        Weight: String,
        Height: String,
        fitnessLevel: String,
        fitnessGoal: String,
        idealWeight: String,
        suggestion: String,
        comments: String
    }
}, { timestamps: true })

module.exports = mongoose.model('memberFroms', memberFroms);

