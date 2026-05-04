import express from "express";
import 'dotenv/config';
import aiRouter from "./routes/ai.routes.js";
import cors from "cors";
import authRouter from "./routes/authRoute.js";

export const app = express()
app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Connected to the app')
})

app.use('/ai', aiRouter);
app.use('/api', authRouter)

app.use((req, res) => {
  return res.status(404).json({message: 'Endpoint not found'})
  }
)