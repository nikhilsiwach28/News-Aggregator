
const NewsRepository = require('Repository/NewsRepo.js')
const UserNewsRepository = require('Repository/UserNewsRepo.js')
const NewsService = require('Service/NewsService.js')
const UserNewsService = require('/Service/UserNewsService.js')

const newsRepo = new NewsRepository()
const userNewsRepo = new UserNewsRepository()
const newsService = new NewsService(newsRepo)
const userNewsService = new UserNewsService(userNewsRepo)


function getNewsOnPreferences(req,res){
    
}


