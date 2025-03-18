const Guests = require('../models/Guests'); // import the Guests model

const getAllGuests = async (req, res) => { // get all guests func
    const guests = await Guests.find({});

    // console.log("data: ", guests); 

    res.status(200).json({
        data: guests,
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    });
}

const getGuestById = async (req, res) => { // get guests by id func
    const { id } = req.params;
    const guest = await Guests.findById(id);

    res.status(200).json({
        data: guest,
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

const createGuest = async (req, res) => { // create new guest func
    const { guest } = req.body;
    const newGuest = await Guests.create(guest); // name of schema - "Guests"

    console.log("data: ", newGuest); 

    res.status(200).json({
        data: guest,
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    });
}

const updateGuestById = async (req, res) => { // update guests by id func
    const { id } = req.params;
    const guest = await Guests.findByIdAndUpdate(id, req.body, { new: true }); // 3 params - schema, data, new set to true (new version, not old)

    res.status(200).json({
        data: guest,
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    });
}

const deleteGuestById = async (req, res) => { // delete guests by id func
    const { id } = req.params;
    const guest = await Guests.findByIdAndDelete(id);

    res.status(200).json({
        data: guest,
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

module.exports = { // export all funcs
    getAllGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}
