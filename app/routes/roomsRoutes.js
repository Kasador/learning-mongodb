const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
});

router.post('/', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Rooms endpoint.`,
        id
    });
});

module.exports = router;