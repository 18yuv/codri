import express from "express";
import { getResponse } from "../controllers/ai.controller.js";
import rateLimiter from "../middlewares/rateLimit.js";

const aiRouter = express.Router()

aiRouter.post('/get-response', rateLimiter, getResponse);

export default aiRouter;