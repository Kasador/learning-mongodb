const router = require('express').Router();
const guestRoutes = require('./guestsRoutes');
const roomRoutes = require('./roomsRoutes');

router.get('/', (req, res) => {
    res.status(200).json({sucess: true, message: `Request Made: ${req.method}`});
})

router.use('/guests', guestRoutes);
router.use('/rooms', roomRoutes);

module.exports = router;