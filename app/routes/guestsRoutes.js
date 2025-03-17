const router = require('express').Router();
const { getAllGuests, getGuestById, createGuest, updateGuestById, deleteGuestById } = require('../controller/guestsController');

router.get('/', getAllGuests);

router.get('/:id', getGuestById);

router.post('/', createGuest);

router.put('/:id', updateGuestById);

router.delete('/:id', deleteGuestById);

module.exports = router;
