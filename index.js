// start your server here
let server = require('./api/server');

let PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
})