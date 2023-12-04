const UserRepository = require('Repository/UserRepo.js')
const userService = require('Service/userService.js')
const User = require('Models/User.js')

const userRepo = new UserRepository()
const userService = new userService(userRepo)


function registerNewUser(req,res){
    const {id,name,password,preferences} = req.body
    user = new User(id,name,password,preferences)
    return userService.registerUser(user)
}

function loginUser(req,res){
    const {id} = req.body
    return userService.loginUser(id)
}

function getUserPreferences(req,res){
    const id = req.params.userId
    return userService.UserRepository.getUserPreferences(id)
}

function updateUserPreferences(req,res){
    const id = req.params.userId
    return userService.userRepository.updateUserPreferences(id)
}

module.exports = {
            registerNewUser, 
            loginUser, 
            getUserPreferences,
            updateUserPreferences
        }