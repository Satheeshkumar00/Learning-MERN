const get = (request,response) => {
    response.set(200).json({message: 'get'})
}
const update = (request,response) => {
    response.set(200).json({message: 'update'})
}
const set = (request,response) => {
    if(!(request.body.text)){
        response.status(400)
        throw new Error("Please provide the necessary text")
    }
    else response.set(200).json({message: 'set'})
}
const deleteToDo = (request,response) => {
    response.set(200).json({message: 'delete'})
}

module.exports = {
    get,
    set,
    update,
    deleteToDo
}