const express = require('express')
const route = express.Router()
const {registerUser,loginUser,getLoggedInUser} = require ("../controller/userController")
const {protect} = require('../middleware/authorizeMiddleware')

route.route('/').post(registerUser)
route.route('/login').post(loginUser)
route.get('/me',protect,getLoggedInUser)

module.exports = route;