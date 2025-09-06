import express from 'express';
import { clerkWebhooks } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/webhooks', userRouter);

export default userRouter