import express from 'express';
import { initialProducts } from '../data/seedData.js';

const router = express.Router();
let productsStore = [...initialProducts];

// GET /api/products - list all products or filter by category/tag
router.get('/', (req, res) => {
  const { category, tag, search } = req.query;
  let filtered = productsStore;

  if (category && category !== 'All crafts') {
    filtered = filtered.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (tag) {
    filtered = filtered.filter(p => p.tag.toLowerCase() === tag.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.artisan.toLowerCase().includes(q) ||
      p.place.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: filtered.length,
    products: filtered
  });
});

// GET /api/products/:id - get product details with digital identity
router.get('/:id', (req, res) => {
  const product = productsStore.find(p => p.id === req.params.id || p.digitalId === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, product });
});

// POST /api/products - upload new saree/craft by artisan
router.post('/', (req, res) => {
  const { name, artisan, place, price, tag, category, image, description, weaveTimeDays } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Name and Price are required.' });
  }

  const numericPrice = typeof price === 'number' ? price : parseInt(String(price).replace(/[^0-9]/g, '')) || 2499;

  const newProduct = {
    id: `WK-WG-00${productsStore.length + 1}`,
    name,
    artisan: artisan || 'Lakshmi Devi',
    place: place || 'Narsapur',
    price: numericPrice,
    formattedPrice: `₹${numericPrice.toLocaleString('en-IN')}`,
    tag: tag || 'Handcrafted',
    category: category || 'Handloom',
    material: 'Pure Handcrafted Cotton',
    weaveTimeDays: weaveTimeDays || 4,
    digitalId: `WK-WG-2026-00${125 + productsStore.length}`,
    image: image || 'https://5.imimg.com/data5/SELLER/Default/2022/2/XE/ZI/WT/30071478/handicraft-and-handloom-products-500x500.jpg',
    description: description || 'Handwoven Chenetha craft directly from artisan.'
  };

  productsStore.unshift(newProduct);

  res.status(201).json({
    success: true,
    message: 'Product published successfully to the marketplace!',
    product: newProduct
  });
});

export default router;
