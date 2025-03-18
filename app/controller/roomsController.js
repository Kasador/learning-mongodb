const getAllRooms = (req, res) => { // get all rooms func
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`
    })
}

const getRoomById = (req, res) => { // get rooms by id func
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

const createRoom = (req, res) => { // create new room func
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`
    })
}

const updateRoomById = (req, res) => { // update rooms by id func
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

const deleteRoomById = (req, res) => { // delete rooms by id func
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

module.exports = { // export all funcs
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoomById,
    deleteRoomById
}
