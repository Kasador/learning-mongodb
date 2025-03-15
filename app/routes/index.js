const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({sucess: true, message: `Request Made: ${req.method}`});
})

module.exports = router;