const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({ // new class model
    roomNumber: {
        type: Number,
        required: true,
        unique: true, 
        min: [1, "Room number must be at least 1"]
    },
    pricePerNight: {
        type: Number,
        required: true,
        min: [100, "Price per night must be at least $100"] 
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    reservations: [{
        guestId: { type: mongoose.Schema.Types.ObjectId, ref: "Guests" }, // connects to the 'Guests' schema
        checkInDate: { type: Date, required: true },
        checkOutDate: { type: Date, required: true }
    }]},
{ timestamps: true });

module.exports = mongoose.model("Rooms", roomsSchema); // defining the 'Rooms' model

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://www.mongodb.com/community/forums/t/how-to-design-my-schema-for-returning-rooms-and-hotels-not-booked-in/133797 // https://stackoverflow.com/questions/58064916/how-to-connect-schemas-with-each-other-in-mongoosejs
    5) https://mongoosejs.com/docs/timestamps.html // https://www.geeksforgeeks.org/mongoose-timestamps/
    6) https://mongoosejs.com/docs/tutorials/dates.html
*/