const express =  require('express');
const postsController = require('../controllers/post.controller');


const router = express.Router();

// here index is an method defined into post.controller file
router.get('/', postsController.index);

module.exports = router;