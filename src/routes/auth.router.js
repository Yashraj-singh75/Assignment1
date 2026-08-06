const express = require('express');
const authRouter = express.Router();

authRouter.post('/register', validationMiddleware(registerSchema),authConroller.register)