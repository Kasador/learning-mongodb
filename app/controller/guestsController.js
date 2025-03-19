const Guests = require('../models/Guests'); // import the Guests model
const Rooms = require('../models/Rooms'); // import the rooms model

const getAllGuests = async (req, res) => { // get all guests func
    try {
        const guests = await Guests.find({});
        
        res.status(200).json({
            data: guests,
            success: true,
            message: `Request Made: ${req.method} from Guests endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const getGuestById = async (req, res) => { // get guests by id func
    const { id } = req.params;

    try {
        const guest = await Guests.findById(id);

        res.status(200).json({
            data: guest,
            success: true,
            message: `Request Made: ${req.method} from Guests endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const createGuest = async (req, res) => { // create new guest func
    const { guest } = req.body;

    try {
        const newGuest = await Guests.create(guest); // name of schema - "Guests"
        console.log("data: ", newGuest); 

        res.status(200).json({
            data: guest,
            success: true,
            message: `Request Made: ${req.method} from Guests endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const updateGuestById = async (req, res) => { // update guests by id func
    const { id } = req.params;

    try {
        const guest = await Guests.findByIdAndUpdate(id, req.body, { new: true }); // 3 params - schema, data, new set to true (new version, not old)

        res.status(200).json({
            data: guest,
            success: true,
            message: `Request Made: ${req.method} from Guests endpoint.`
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

const deleteGuestById = async (req, res) => { // delete guests by id func
    const { id } = req.params;

    try {
        const guest = await Guests.findByIdAndDelete(id);

        res.status(200).json({
            data: guest,
            success: true,
            message: `Request Made: ${req.method} from Guests endpoint.`,
            id
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error('Invalid', error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
}

module.exports = { // export all funcs
    getAllGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}
