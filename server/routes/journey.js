const express = require('express');
const router = express.Router();

const {getJourneysById, createJourney} = require('../controllers/journeyController');

router.get('/:id', getJourneysById );
router.post('/create', createJourney);

module.exports = router;