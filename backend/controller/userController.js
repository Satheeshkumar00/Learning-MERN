const asyncHanlder = require('express-async-handler')
const user = require("../models/userSchema")

const registerUser = (request,response) => {
    response.json({
        message: 'Register User',
    });
};

const loginUser = (request,response) => {
    response.json({
        message: 'User loggin',
    })
};

const getLoggedInUser = (request,response) => {
    response.json({
        message: 'logged in user',
    })
};

module.exports = {
    registerUser,
    loginUser,
    getLoggedInUser,
}