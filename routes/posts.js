const express =  require('express');
const postsController = require('../controllers/post.controller');
const checkAuthMiddleware = require('../midlleware/check-auth'); // calling middelware so only authanticated user can access


const router = express.Router();

// here index is an method defined into post.controller file
router.post("/", checkAuthMiddleware.checkAuth, postsController.save);
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.patch("/:id", checkAuthMiddleware.checkAuth, postsController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, postsController.destroy);

module.exports = router;
