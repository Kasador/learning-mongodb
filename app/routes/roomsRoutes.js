const router = require('express').Router();
const { getAllRooms, getRoomById, createRoom, updateRoomById, deleteRoomById } = require('../controller/roomsController');

router.get('/', getAllRooms);

router.get('/:id', getRoomById);

router.post('/', createRoom);

router.put('/:id', updateRoomById);

router.delete('/:id', deleteRoomById);

module.exports = router;