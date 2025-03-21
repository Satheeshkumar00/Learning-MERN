const express = require('express')
const route = express.Router()
const {get,set,update,deleteToDo} = require('../controller/toDoController')

route.route('/').get(get).post(set)
route.route('/:id').put(update).delete(deleteToDo)

module.exports = route;