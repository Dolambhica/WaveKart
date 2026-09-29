import express from 'express';

const router = express.Router();

// POST /api/ai/fair-price - Calculate fair price based on material & days spent
router.post('/fair-price', (req, res) => {
  const { materialType, daysSpent, weaveComplexity } = req.body;

  const days = daysSpent || 4;
  const baseRatePerDay = 450; // fair daily wage for artisan
  const rawMaterialCost = materialType === 'Silk' ? 1200 : 700;
  const complexityMultiplier = weaveComplexity === 'high' ? 1.3 : 1.1;

  const estimatedCost = Math.round((rawMaterialCost + (days * baseRatePerDay)) * complexityMultiplier);
  const minPrice = Math.round(estimatedCost * 0.95);
  const maxPrice = Math.round(estimatedCost * 1.15);

  res.json({
    success: true,
    fairPriceRange: `₹${minPrice.toLocaleString('en-IN')} – ₹${maxPrice.toLocaleString('en-IN')}`,
    recommendedPrice: estimatedCost,
    breakdown: {
      artisanFairWage: days * baseRatePerDay,
      rawMaterialCost,
      estimatedCost
    },
    teluguMessage: `మీ కష్టానికి తగిన న్యాయమైన ధర: ₹${minPrice} - ₹${maxPrice}`
  });
});

// POST /api/ai/voice-listing - Process voice audio or raw Telugu text transcript into listing fields
router.post('/voice-listing', (req, res) => {
  const { teluguTranscript } = req.body;

  // Mock NLP processing of voice transcript
  res.json({
    success: true,
    processedListing: {
      name: "నర్సాపురం చేనేత చీర (Narsapur Handloom Saree)",
      price: 2450,
      craftType: "Handloom saree",
      description: "నర్సాపురంలో సహజ కాటన్ నూలుతో 4 రోజులలో నేసిన సాంప్రదాయ చేనేత చీర.",
      englishDescription: "Traditional handloom saree woven with natural cotton yarn over 4 days in Narsapur."
    },
    message: "Voice transcript successfully converted to product draft."
  });
});

// POST /api/ai/generate-description - Generate rich English product description from Telugu prompt
router.post('/generate-description', (req, res) => {
  const { title, color, weaveType, artisanName } = req.body;

  const description = `This authentic ${color || 'vibrant'} ${weaveType || 'handloom'} saree was handcrafted by master weaver ${artisanName || 'Lakshmi Devi'} in West Godavari. Woven with pure breathable threads, it reflects centuries of Chenetha heritage and meticulous artisan devotion.`;

  res.json({
    success: true,
    description,
    teluguSummary: "మీ ఉత్పత్తి కోసం ఇంగ్లీష్ వివరణ సిద్ధంగా ఉంది."
  });
});

export default router;
