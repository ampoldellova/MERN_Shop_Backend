const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const { registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile)
router.put('/password/update', isAuthenticatedUser, updatePassword)
router.put('/me/update', updateProfile)
router.get('/admin/users', allUsers)
router.get('/admin/user/:id', getUserDetails )

module.exports = router;