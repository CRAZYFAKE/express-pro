var app = require('express')
var router = app.Router()
const userController = require('../controllers/userController.js')

router.post('/register', userController.api.register)

router.post('/update', userController.api.update)

module.exports = router