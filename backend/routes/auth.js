import express from 'express';

const router = express.Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password, role } = req.body;

  const isWeaver = role === 'weaver' || (email && email.includes('artisan'));

  res.json({
    success: true,
    message: isWeaver ? 'Welcome artisan!' : 'Welcome customer!',
    user: {
      id: isWeaver ? 'weaver-1' : 'customer-1',
      name: isWeaver ? 'Lakshmi Devi' : 'Anjali',
      email: email || (isWeaver ? 'artisan@weavekart.demo' : 'customer@weavekart.demo'),
      role: isWeaver ? 'weaver' : 'customer',
      token: 'demo-jwt-token-weavekart-2026'
    }
  });
});

export default router;
