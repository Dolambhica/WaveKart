import express from 'express';
import { initialArtisans } from '../data/seedData.js';

const router = express.Router();
let artisansStore = [...initialArtisans];

// GET /api/artisans
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: artisansStore.length,
    artisans: artisansStore
  });
});

// GET /api/artisans/:id
router.get('/:id', (req, res) => {
  const artisan = artisansStore.find(a => a.id === req.params.id);
  if (!artisan) {
    return res.status(404).json({ success: false, message: 'Artisan not found' });
  }
  res.json({ success: true, artisan });
});

export default router;
