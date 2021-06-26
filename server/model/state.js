const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('State',StateSchema);