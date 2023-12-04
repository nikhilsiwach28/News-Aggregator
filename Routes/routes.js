const validator = require('Validator/validate.js')
const userHandler = require('Handler/userHandler.js')

const setRoutes = (userRouter,newsRouter) =>{
    registerUserEndpoints(userRouter)
    registerNewsEndpoints(newsRouter)
}


registerUserEndpoints = (userRouter) => {
    userRouter.get('/',userHandler.getUserDetails)
    userRouter.get('/preferences/:userId',userHandler.getUserPreferences)
    userRouter.post('/register',validator.validateNewUser,userHandler.registerNewUser)
    userRouter.post('/login',userHandler.loginUser)
    userRouter.put('/preferences/:userId',userHandler.updateUserPreferences)

}

registerNewsEndpoints = (newsRouter) => {
    newsRouter.get('/',getNewsOnPreference)
    newsRouter.get('/read',getAllReadArticles)
    newsRouter.get('/favorite',getFavArticles)
    newsRouter.post('/:id/favorite',markNewsAsFav)
    newsRouter.post('/:id/read',markNewsAsRead)
}

module.exports = setRoutes;