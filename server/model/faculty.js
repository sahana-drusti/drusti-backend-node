const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    "registerNumber":String,
    "firstName": String,
    "lastName": String,
    "middleName": String,
    "DOB": Date,
    "gender": String,
    "class": String,
    "userId": String,
    "religion":String,
    "phone1":String
});
module.exports = mongoose.model('Faculty', facultySchema);