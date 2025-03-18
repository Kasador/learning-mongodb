const mongoose = require('mongoose');

const guestsSchema = new mongoose.Schema({ // new class model
    firstName: {
        type: String,
        required: [true, 'You are required to have a name.'],
        trim: true,
        maxlength: [50, 'Your name is too long! Get a different name?'],
    },
    lastName: {
        type: String,
        required: [true, 'You are required to have a name.'],
        trim: true,
        maxlength: [50, 'Your name is too long! Get a different name?'],
    },
    email: {
        type: String,
        match: [
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "That's not an email. Try again."
        ],
        required: true,
        unique: true
    },
    phone: {
        type: String,
        match: [
          /^(\+1\s?)?(\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
          "Is that even a real phone number? Try again."
        ],
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: [18, "18+! Sorry."],
        max: [120, "No way you're that old. Try again."]
    }
});

module.exports = mongoose.model("Guests", guestsSchema); // defining the 'Guests' model

/* References >>>
    1) https://www.w3schools.com/mongodb/mongodb_schema_validation.php
    2) https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
    3) https://www.mongodb.com/docs/manual/core/schema-validation/
    4) https://stackoverflow.com/questions/66383516/add-mongoose-validation-for-phone-numbers
*/