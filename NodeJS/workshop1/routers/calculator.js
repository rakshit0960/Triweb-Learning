const express = require('express')
const calcController = require('../controller/calculator')

const router = express.Router();


router.post('/add', calcController.add)
router.post('/sub', calcController.subtract)
router.post('/mul', calcController.multiply)
router.post('/div', calcController.divide)


module.exports = router;