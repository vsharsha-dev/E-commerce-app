import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

// Configure env
dotenv.config()

// Database configuration
connectDB()

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(morgan('dev'))

// Routes
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
  res.send({message: 'Welcome to ecommerce app'})
})

app.listen(PORT, (req, res) => {
  console.log(`Server listening on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.black);
})

