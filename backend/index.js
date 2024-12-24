import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import jobRoutes from './routes/jobRoutes.js';
import connectDB from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
