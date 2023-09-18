const express = require('express');
const { registerUser } = require('../controller/userController');


const router = express.Router()

router.get('/', (req, res) => {
    res.send('post user');
})

router.post('/add', registerUser);


module.exports = router