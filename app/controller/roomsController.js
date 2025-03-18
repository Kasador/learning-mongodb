const Rooms = require('../models/Rooms'); // import the rooms model

const getAllRooms = async (req, res) => { // get all rooms func
    try {
        const rooms = await Rooms.find({});
        
        res.status(200).json({
            data: rooms,
            sucess: true,
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
            sucess: true,
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
    const { room } = req.body;

    try {
        const newRoom = await Rooms.create(room); // name of schema - "Rooms"
        console.log("data: ", newRoom); 

        res.status(200).json({
            data: newRoom,
            sucess: true,
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

        res.status(200).json({
            data: room,
            sucess: true,
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
            sucess: true,
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
