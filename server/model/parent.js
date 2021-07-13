const mongoose = require('mongoose');

const parentSchema = mongoose.Schema({
    "fatherName":String,
    "motherName":String,
    "fOccupation": String,
    "mOccupation":String,
    "religion": String,
    "phone1": String,
    "phone2": String,
    "email1":String,
    "email2": String
})

module.exports = mongoose.model('Parent',parentSchema);