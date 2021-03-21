const http =  require('http');
const app = require('./app');
const port = 8014;

const server = http.createServer(app);


server.listen(port);
console.log('Node server running on port 8000');