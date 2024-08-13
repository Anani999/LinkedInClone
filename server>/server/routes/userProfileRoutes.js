const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');
const { isAuthorized } = require('../midleware/authMiddleware');

// Create a new user profile
router.post('/', isAuthorized, userProfileController.createUserProfile);

// Get a user profile by ID
router.get('/', isAuthorized, userProfileController.getUserProfile);

// Get a user profile by ID
router.get('/:id', isAuthorized, userProfileController.getProfileByName);

// Update a user profile
router.put('/:id', isAuthorized, userProfileController.updateUserProfile);

// Delete a user profile
router.delete('/:id', isAuthorized, userProfileController.deleteUserProfile);

module.exports = router;