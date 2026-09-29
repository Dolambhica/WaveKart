import express from 'express';
import { initialOrders } from '../data/seedData.js';

const router = express.Router();
let ordersStore = [...initialOrders];

// GET /api/orders
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: ordersStore.length,
    orders: ordersStore
  });
});

// POST /api/orders - Place direct order from customer to artisan
router.post('/', (req, res) => {
  const { customerName, city, productName, price } = req.body;

  if (!productName || !price) {
    return res.status(400).json({ success: false, message: 'productName and price are required' });
  }

  const newOrder = {
    id: `#WK-${1000 + Math.floor(Math.random() * 9000)}`,
    customerName: customerName || 'Valued Customer',
    city: city || 'Hyderabad',
    productName,
    price,
    status: 'Ready to ship',
    createdAt: new Date().toISOString()
  };

  ordersStore.unshift(newOrder);

  res.status(201).json({
    success: true,
    message: 'Direct order placed successfully!',
    order: newOrder
  });
});

export default router;
