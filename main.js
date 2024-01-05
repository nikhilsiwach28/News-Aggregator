const serverConfig = require('./Config/config.js')
const setupServer = require('./Server/server.js')
const server = setupServer(serverConfig);

server.startServer();