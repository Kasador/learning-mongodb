const getAllGuests = (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    })
}

const getGuestById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

const createGuest = (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    })
}

const updateGuestById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

const deleteGuestById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

module.exports = {
    getAllGuests,
    getGuestById,
    createGuest,
    updateGuestById,
    deleteGuestById
}
