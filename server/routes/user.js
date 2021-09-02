const express = require('express');
const router = express.Router();

const {getUsers, createUser, getUserById} = require('../controllers/userController');

router.get('/', getUsers );
router.get('/:id', getUserById );
router.post('/create', createUser);

module.exports = router;