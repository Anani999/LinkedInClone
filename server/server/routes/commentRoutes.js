const express = require('express');
const router = express.Router();
const authMiddleware = require('../midleware/authMiddleware');
const commentController = require('../controllers/commentController');

router.use(authMiddleware.isAuthorized);

router.post('/',commentController.createComment);

router.get('/:id',commentController.getComments);

module.exports = router;