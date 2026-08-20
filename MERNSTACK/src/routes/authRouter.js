const express = require('express');
const authRouter = express.Router();
const validationMiddleware = require("../middlewares/validationMiddleware");
const checkToken = require('../middlewares/checktoken');
const { registerUser, loginUser, logoutUser } = require('../controller/authController');

const {
    registerSchema,
    loginSchema
} = require("../validationSchema/authValidation");


authRouter.post('/register', validationMiddleware(registerSchema),registerUser);
authRouter.post('/login', validationMiddleware(loginSchema),loginUser);
authRouter.get('/logout', checkToken, logoutUser);

module.exports = authRouter;