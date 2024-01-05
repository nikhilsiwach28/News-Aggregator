
const NewsRepository = require('../Repository/NewsRepo.js')
// const UserRepository = require('../Repository/UserRepo.js')
const NewsService = require('../Service/NewsService.js')
// const UserService = require('../Service/UserService.js')

const newsRepo = new NewsRepository()
const newsService = new NewsService(newsRepo)
// const userRepo = new UserRepository()
// const userService = new UserService(userRepo)


async function getNewsOnPreferences(req,res){
    const userId = req.decoded.userId
    try{
        const preferences = userService.getUserPreferences(userId)
        const newsData = await newsService.getNewsOnPreferences(preferences)
        res.status(200).send(newsData)
    }catch(e){
        res.status(500).send(e.message)
    }
}



module.exports = {
    getNewsOnPreferences
}

