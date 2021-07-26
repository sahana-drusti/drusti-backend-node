const mongoose = require('mongoose');

const facultyAddressSchema = mongoose.Schema({
    "addressLine1": String,
    "addressLine2": String,
    "taluk":String,
    "district":String,
    "state": String,
    "country": String,
    "email1": String,
    "email2": String,
    "landline": String,
    "phone1": String,
    "phone2": String,
    "type": String
})

module.exports = mongoose.model('FacultyAddress',facultyAddressSchema)