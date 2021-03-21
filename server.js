const http =  require('http');
const app = require('./app');
const port = 8015;

const server = http.createServer(app);


server.listen(port);
console.log('Node server running on port 8015');