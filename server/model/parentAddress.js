const mongoose = require('mongoose');

const parentAddressSchema = mongoose.Schema({
    "phone1": String,
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
    "type": String,
    "zipCode": String
})

module.exports = mongoose.model('ParentAddress',parentAddressSchema)