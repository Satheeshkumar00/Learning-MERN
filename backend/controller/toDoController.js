const asyncHanlder = require('express-async-handler');

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
    else response.set(200).json({message: 'set'})
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