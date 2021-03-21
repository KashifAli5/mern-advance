function index(req, res) {
    const posts = "Post List";
    res.send(posts);
}

// exporting this method so it can be accesable 
module.exports = {
    index: index
}