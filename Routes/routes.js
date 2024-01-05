const validator = require('../Validator/validator.js')
const userHandler = require('../Handler/userHandler.js')
const newsHandler = require('../Handler/newsHandler.js')

const UserRepository = require('../Repository/UserRepo.js')
const UserService = require('../Service/UserService.js')
const userRepo = new UserRepository()
global.userService = new UserService(userRepo)

const setRoutes = (userRouter,newsRouter) =>{
    registerUserEndpoints(userRouter)
    registerNewsEndpoints(newsRouter)
}


registerUserEndpoints = (userRouter) => {
    userRouter.get('/all',userHandler.getAllUserDetails)
    userRouter.get('/',validator.authorizeUser,userHandler.getUserDetails)
    userRouter.get('/preferences/:userId', validator.authorizeUser, userHandler.getUserPreferences)
    userRouter.post('/register',validator.validateUserRegisteration,userHandler.registerNewUser)
    userRouter.post('/login',userHandler.loginUser) 
    userRouter.put('/preferences/:userId',validator.authorizeUser,userHandler.updateUserPreferences)

}


// Todo :: Complete all NewsRelatedEndpoints handlers 

registerNewsEndpoints = (newsRouter) => {
    newsRouter.get('/',validator.authorizeUser,newsHandler.getNewsOnPreferences)
    // newsRouter.get('/read',getAllReadArticles)
    // newsRouter.get('/favorite',getFavArticles)
    // newsRouter.post('/:id/favorite',markNewsAsFav) 
    // newsRouter.post('/:id/read',markNewsAsRead)
}

module.exports = setRoutes;