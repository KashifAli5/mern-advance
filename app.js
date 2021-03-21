const express =  require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/blog', (req, res) => {
    res.send("hello from blog");
});



module.exports = app
