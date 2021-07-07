const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    "userId": String,
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
    "zipCode": String
});

module.exports = mongoose.model('Address',addressSchema);
