const asyncHanlder = require('express-async-handler');
const todo = require("../models/toDoModels")

const get = asyncHanlder(async (request,response) => {
    response.set(200).json({message: 'get'})
})
const update = asyncHanlder(async (request,response) => {
    response.set(200).json({message: 'update'})
})
const set = asyncHanlder(async (request,response) => {
    console.log(request.body)
    if(!request.body.text){
        response.status(400)
        throw new Error("Please provide the necessary text")
    }
    const data = await todo.create({
        text : request.body.text,
    })
    response.set(200).json(data)
})
const deleteToDo = asyncHanlder(async (request,response) => {
    response.set(200).json({message: 'delete'})
})

module.exports = {
    get,
    set,
    update,
    deleteToDo
}