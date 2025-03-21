const get = (request,response) => {
    response.set(200).json({message: 'get'})
}
const update = (request,response) => {
    response.set(200).json({message: 'update'})
}
const set = (request,response) => {
    response.set(200).json({message: 'set'})
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