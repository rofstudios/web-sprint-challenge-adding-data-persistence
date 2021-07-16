// build your server here and require it from index.js
let express = require('express');
let resourceRouter = require('./resource/router');
let server = express();

server.use(express.json());

// ROUTERS
server.use('/api/resources', resourceRouter);

server.use('/', (req, res) => {
    res.status(200).json({ on: "This is on" })
})
module.exports = server;