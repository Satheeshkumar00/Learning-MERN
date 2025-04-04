const express = require('express')
const route = express.Router()
const {protect} = require('../middleware/authorizeMiddleware')
const {get,set,update,deleteToDo} = require('../controller/toDoController')

route.route('/').get(protect,get).post(protect,set)
route.route('/:id').put(protect,update).delete(protect,deleteToDo)

module.exports = route;