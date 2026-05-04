import express from 'express'
import verifyToken from '../middlewares/verifyToken.js';
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/auth',verifyToken, authController);

export default authRouter;