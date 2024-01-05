const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('../Routes/routes')
const userRouter = express.Router()
const newsRouter = express.Router()

const setupServer = (config) => {
    app.use(bodyParser.json(config.bodyParser.json))
    app.use(bodyParser.json(config.bodyParser.urlEncoded))
    app.use('/news',newsRouter)
    app.use('/user',userRouter)
    routes(userRouter,newsRouter);

    const startServer = () => {
        app.listen(config.port, () => {
            });
        };

    return { startServer };

}

module.exports = setupServer