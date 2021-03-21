const express =  require('express');
const postsController = require('../controllers/post.controller');


const router = express.Router();

// here index is an method defined into post.controller file
router.post('/', postsController.save);

router.get('/', postsController.index);

router.get('/:id', postsController.show);

module.exports = router;