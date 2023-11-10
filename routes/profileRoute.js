const express = require('express');
const { renderUserProfile } = require('../controllers/profileController');


const router = express.Router();


router.get('/get-profile-of-user', renderUserProfile);


module.exports = router;