const User = require('../Models/UserModel.js')
const bcrypt = require('bcrypt');



function getAllUserDetails(req,res){
    const allusers = userService.getAllUserDetails()
    res.send(allusers)
}
function getUserDetails(req, res){
    const id = req.params.userId
    user = userService.getUserDetails(id)
}

function registerNewUser(req,res){
    const {userId,name,password,email,preferences} = req.body
    const hashedPassword = bcrypt.hashSync(password, 10); 
    user = new User(userId,name,hashedPassword,email,preferences)
    try{
    userService.registerUser(user)
    res.status(200).send("Registration Successful");
    }catch(e){
        res.status(400).send(e.message)
    }
    
}

function loginUser(req,res){
    const {userId,password} = req.body
    try{
        token = userService.loginUser(userId,password)
        res.status(200).send(token)
    }catch(e){
        res.status(400).send(e.message)
    
    }
}

function getUserPreferences(req,res){
    const id = req.params.userId
    try{
        const preferences = userService.getUserPreferences(id)
        res.status(200).send(preferences)
    }catch(e){
        res.status(500).send(e.message)
    }
}

function updateUserPreferences(req,res){
    const id = req.params.userId
    return userService.userRepository.updateUserPreferences(id)
}

module.exports = {
    getAllUserDetails,
            getUserDetails,
            registerNewUser, 
            loginUser, 
            getUserPreferences,
            updateUserPreferences
        }