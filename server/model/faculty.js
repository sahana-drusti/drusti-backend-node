const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "middleName": String,
    "DOB": String,
    "gender": String,
    "class": String,
    "userId": String,
    "religion":String
});
module.exports = mongoose.model('Faculty', facultySchema);