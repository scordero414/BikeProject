const express = require('express');
const router = express.Router();

const {createEvent} = require('../controllers/eventController');

// router.get('/', getUsers );
router.post('/create', createEvent);

module.exports = router;