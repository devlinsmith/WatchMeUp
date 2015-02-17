var mongoose = require('mongoose');

// Mongoose is scalable so this would like lead into a custom repository layer,
// that would then deal with the underlying documents
module.exports = mongoose.model('Watch', {
    name: String,
    brand: String,
    price: Number,
    colour: String
});

// Normalized data model (below) vs embedded data models ? Pros/Cons?

//module.exports = mongoose.model('Order', {
//    name: String,
//    watchId: String,
//    salesPersonId: String,
//    quantity: Number,
//    orderDate: Date,
//    deliveryDate: Date,
//    location: String,
//    totalCost: Number
//});

//module.exports = mongoose.model('SalesPerson', {
//    firstName: String,
//    lastName: String,
//    dateOfBirth: String

//});