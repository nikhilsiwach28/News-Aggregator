const express = require('Express')
const bodyParser = require('body-parser')
const routes = require('Routes/routes')
const app = express()
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
        console.log(`Server is running on port ${config.port}`);
            });
        };

    return { startServer };

}

module.exports = setupServer