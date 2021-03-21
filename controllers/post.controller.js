const models = require('../models');

// method to save posts
function save(req, res){
    //creating object
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    }

    // passing post object to create method
    // create method return promis... so we are using then keyword 
    models.Post.create(post).then(result => {

        //if the promis have successful results
        res.status(200).json({
            message: " Post has created successfully",
            post: result
        });



    }).catch(error => {
        // if promis have not successful results 
        // then we have to "catch" errors

        res.status(500).json({
            message: " something went wrong",
            error:error
        });

    });
}




// get result OR read
function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}




// getting all the records
function index(req, res){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Some thing went wrong!!!"
        });
    });
}



// update post
function update(req, res){
    const id = req.params.id;
    const updatePost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,

        // we are not adding user id because it's not editing able
    }
    const userId = 1;

    // id-> coulmn name ... id-> coulmn value
    models.Post.update(updatePost, {where: {id:id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Post has updated",
            post: updatePost
        })
    }).catch(error => {
        res.status(500).json({
            message: "Some thing went wrong!!!",
            error: error
        });
    })
}


// exporting this method so it can be accesable 
module.exports = {
    save: save,
    show: show,
    index: index,
    update: update
}