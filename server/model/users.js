const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    "name":String,
    "email":String,
    "reg_no":String,
    "password":String
});
module.exports = mongoose.model("Users",usersSchema);