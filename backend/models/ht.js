const mongoose = require('mongoose');



const htSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastDateService: { type: Date, required: true },
    dependents: {type: Number, required: true},
    typeOfIndustry: {type: String, required: true },
    continuedPresence: { type: String, required: true},
    immigrationStatus: {type: String, required: true},
    investigation: {type: String, required:true},
    otherFormsOfVictimization: {type: String, required:true},
    housingSituationAtEnrollmentTime: {type: String, required:true},
    goalsAtEnrollmentTime: {type: String, required:true}

},{
    timestamps: true
});

module.exports = mongoose.model('HT', htSchema);