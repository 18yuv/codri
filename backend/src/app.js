import express from "express";
import 'dotenv/config';
import aiRouter from "./routes/ai.routes.js";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Connected to the app')
})

app.use('/ai', aiRouter);
app.use('/api', authRouter)
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use((req, res) => {
  return res.status(404).json({message: 'Endpoint not found'})
  }
)