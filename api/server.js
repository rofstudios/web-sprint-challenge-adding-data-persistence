// build your server here and require it from index.js
let express = require('express');
let server = express();

server.use(express.json());
server.use('/', (req, res) => {
    res.status(200).json({ on: "This is on" })
})
module.exports = server;