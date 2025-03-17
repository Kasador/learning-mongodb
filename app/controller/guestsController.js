const getAllGuests = (req, res) => { // get all guests func
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    })
}

const getGuestById = (req, res) => { // get guests by id func
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

const createGuest = (req, res) => { // create new guest func
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    })
}

const updateGuestById = (req, res) => { // update guests by id func
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
}

const deleteGuestById = (req, res) => { // delete guests by id func
    const { id } = req.params;

    res.status(200).json({
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
