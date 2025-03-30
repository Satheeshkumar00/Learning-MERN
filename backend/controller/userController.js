const asyncHanlder = require('express-async-handler')
const User = require("../models/userSchema")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (id) => {
    return jwt.sign(id,process.env.JWT_SECRET,{expiresIn: "30d"});
}

const registerUser = asyncHanlder(async (request,response) => {
    const {name, email, password} =queueMicrotask.body;

    if(!name || !email || !password){
        response.status(400)
        throw new Error("Please add all the required fields")
    }

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if(user){
        response.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user_id),
        })
    }
});

const loginUser = asyncHanlder(async (request,response) => {
    const {email, password} = request.body;

    if(!email || !password){
        response.status(400)
        throw new Error('Please enter both email and password')
    }

    const user = await user.findOne(email)

    if(user && (await bcrypt.compare(password,user.password))){
        response.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user_id),
        })
    }

    else{
        response.status(400)
        throw new Error("Invalid user credentials")
    }
});

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