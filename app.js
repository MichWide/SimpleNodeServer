const http = require('http');
const router = require('./routes/router');


const port = process.env.PORT || 8000;

const server = http.createServer(router);

server.listen(port);