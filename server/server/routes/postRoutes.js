const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddlware = require('../midleware/authMiddleware');

router.use(authMiddlware.isAuthorized);

router.post('/',postController.createPost);
router.put('/',postController.updatePost);
router.get('/',postController.myPosts);
router.get('/:id',postController.getPostById);
router.delete('/:id',postController.deletePost);

module.exports = router;