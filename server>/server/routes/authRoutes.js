const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const authMiddleware = require('../midleware/authMiddleware');

router.post('/register',authControllers.registerUser);
router.post('/login',authControllers.loginUser);
router.post('/logout', authControllers.logoutUser);
router.get('/user',authMiddleware.isAuthorized,authControllers.getUser);

module.exports = router;