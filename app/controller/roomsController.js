const getAllRooms = (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`
    })
}

const getRoomById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

const createRoom = (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`
    })
}

const updateRoomById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

const deleteRoomById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
}

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoomById,
    deleteRoomById
}
