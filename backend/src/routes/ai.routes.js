import express from "express";
import { getResponse } from "../controllers/ai.controller.js";
import rateLimiter from "../middlewares/rateLimit.js";
import verifyToken from "../middlewares/verifyToken.js";

const aiRouter = express.Router()

aiRouter.post('/get-response', verifyToken, rateLimiter, getResponse);

export default aiRouter;