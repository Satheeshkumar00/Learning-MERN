const asyncHanlder = require('express-async-handler');
const todo = require("../models/toDoSchema")
const User = require("../models/userSchema")

const get = asyncHanlder(async (request,response) => {
    const todoObj = await todo.find({user: request.user.id})
    response.set(200).json(todoObj)
})
const update = asyncHanlder(async (request,response) => {

    const user = await User.findById(request.params.id)

    if(!user){
        response.status(401)
        throw new Error('Invalid user')
    }

    const todoObj = await todo.findById(request.params.id)

    if(!todoObj){
        response.set(400)
        throw new Error("Todo item not found")
    }

    if(todoObj.user.toString() !== user.id){
        response.status(401)
        throw new Error('User is not authorized to access this todo item')
    }

    const updatedTodo = await todo.findByIdAndUpdate(request.params.id,request.body,{
        new: true, //will return updated document, if this tag is not included, original doc before update will be returned
    })

    response.set(200).json(updatedTodo)
})
const set = asyncHanlder(async (request,response) => {
    console.log(request.body)
    if(!request.body.text){
        response.status(400)
        throw new Error("Please provide the necessary text")
    }
    const data = await todo.create({
        text : request.body.text,
        user : request.user.id,
    })
    response.set(200).json(data)
})
const deleteToDo = asyncHanlder(async (request,response) => {

    const user = await User.findById(request.params.id)

    if(!user){
        response.status(401)
        throw new Error('Invalid user')
    }

    const todoObj = await todo.findById(request.params.id)

    if(!todoObj){
        response.set(400)
        throw new Error("Todo item not found")
    }

    if(todoObj.user.toString() !== user.id){
        response.status(401)
        throw new Error('User is not authorized to access this todo item')
    }

    await todo.findByIdAndDelete(request.params.id)    // this functions take id as parameter and deletes the respective object in the DB

    response.set(200).json({
        'message' : 'deleted',
        'id' : request.params.id
    })
})

module.exports = {
    get,
    set,
    update,
    deleteToDo
}