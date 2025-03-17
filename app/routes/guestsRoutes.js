const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
});

router.post('/', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        sucess: true,
        message: `Request Made: ${req.method} from Guests endpoint.`,
        id
    });
});

module.exports = router;
