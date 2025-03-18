const mongoose = require('mongoose');

const guestsSchema = new mongoose.Schema({ // new class model
    firstName: String,
    lastName: String,
    email: String,
    phone: Number
});

module.exports = mongoose.model("Guests", guestsSchema); // defining the 'Guests' model