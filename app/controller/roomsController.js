const Rooms = require('../models/Rooms'); // import the rooms model
const Guests = require('../models/Guests'); // import the Guests model

const getAllRooms = async (req, res) => { // get all rooms func
    try {
        const rooms = await Rooms.find({});
        
        res.status(200).json({
            data: rooms,
            success: true,
            message: `Request Made: ${req.method} from Rooms endpoint.`
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

const getRoomById = async (req, res) => { // get rooms by id func
    const { id } = req.params;

    try {
        const rooms = await Rooms.findById(id);

        res.status(200).json({
            data: rooms,
            success: true,
            message: `Request Made: ${req.method} from Rooms endpoint.`,
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

const createRoom = async (req, res) => { // create new room func
    try {
        const { room } = req.body;
        const user = await Guests.findById(room.guests);
        room.guests = user;

        const guestData = new Rooms(room);
        user.rooms.push(guestData._id);

        const queries = [guestData.save(), user.save()];
        await Promise.all(queries);

        res.status(200).json({
            data: guestData,
            success: true,
            message: `Request Made: ${req.method} from Rooms endpoint.`
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

const updateRoomById = async (req, res) => { // update rooms by id func
    const { id } = req.params;

    try {
        const room = await Rooms.findByIdAndUpdate(id, req.body, { new: true }); // 3 params - schema, data, new set to true (new version, not old)
        console.log(room);
        res.status(200).json({
            data: room,
            success: true,
            message: `Request Made: ${req.method} from Rooms endpoint.`
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

const deleteRoomById = async (req, res) => { // delete rooms by id func
    const { id } = req.params;

    try {
        const room = await Rooms.findByIdAndDelete(id);

        res.status(200).json({
            data: room,
            success: true,
            message: `Request Made: ${req.method} from Rooms endpoint.`,
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
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoomById,
    deleteRoomById
}
