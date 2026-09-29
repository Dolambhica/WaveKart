import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRouter from './routes/products.js';
import artisansRouter from './routes/artisans.js';
import aiRouter from './routes/ai.js';
import ordersRouter from './routes/orders.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to WeaveKart Backend API (West Godavari Handloom Direct Marketplace)',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      artisans: '/api/artisans',
      aiAssistant: '/api/ai',
      orders: '/api/orders',
      auth: '/api/auth'
    }
  });
});

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/artisans', artisansRouter);
app.use('/api/ai', aiRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\x1b[32m[WeaveKart Backend]\x1b[0m Server running at http://localhost:${PORT}`);
});
