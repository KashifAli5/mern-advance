const express =  require('express');
const bodyParser =  require('body-parser')


const app = express();

const postsRoute = require('./routes/posts'); 

// to pass json body
app.use(bodyParser.json());




// use this the special method
// by using this method we  can run anything as medal ware for incomming request

// we can use function in this method of any code block for incomming requiest

// here "postsRoute" is the medial ware that we are going to use
app.use("/posts", postsRoute);




module.exports = app