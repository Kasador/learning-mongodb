const router = require('express').Router();
const guestRoutes = require('./guestsRoutes'); // guests routes api/v1/guests >>> Request Methods 
const roomRoutes = require('./roomsRoutes'); // rooms routes api/v1/guests >>> Request Methods 

router.get('/', (req, res) => { // main route to api/v1
    res.status(200).json({sucess: true, message: `Request Made: ${req.method}`});
})

router.use('/guests', guestRoutes); // guests routes api/v1/guests
router.use('/rooms', roomRoutes); // rooms routes api/v1/guests


module.exports = router;