const mongoose = require('mongoose');

const district = new mongoose.Schema({
    name: String,
    state: String
});

module.exports = mongoose.model('district',district);