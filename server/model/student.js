const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "middleName": String,
    "DOB": Date,
    "gender": String,
    "class": String,
    "userId": String,
    "parentId":String,
});
module.exports = mongoose.model('Student', studentSchema);