const mongoose = require('mongoose');



const dvSchema = mongoose.Schema({
    name: { type: String, required: true },
    typeOfVictim: { type: String, required: true },
    serviceProvided: {type: String, required: true}

},{
    timestamps: true
});

module.exports = mongoose.model('DV', dvSchema);