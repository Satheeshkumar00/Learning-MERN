const express = require('express')
const route = express.Router()

const {registerUser,loginUser,getLoggedInUser} = require ("../controller/userController")

route.route('/').post(registerUser)
route.route('/login').post(loginUser)
route.route('/me').get(getLoggedInUser)

module.exports = route;