var mongoose = require('mongoose');

module.exports = mongoose.model('Watch', {
    name: String,
    brand: String,
    price: Number,
    colour: String
});