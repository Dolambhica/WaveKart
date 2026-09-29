# WeaveKart Backend API

Express.js backend for **WeaveKart** (Direct Handloom Marketplace for West Godavari Artisans).

## Features
- **Products API**: GET /api/products, POST /api/products, GET /api/products/:id
- **Artisans API**: GET /api/artisans, GET /api/artisans/:id
- **Telugu AI Assistant API**: 
  - `POST /api/ai/fair-price` (Fair pricing algorithm for weavers)
  - `POST /api/ai/voice-listing` (Telugu voice transcript listing processor)
  - `POST /api/ai/generate-description` (English description auto-generator)
- **Orders API**: GET /api/orders, POST /api/orders
- **Auth API**: POST /api/auth/login

## How to Run
```bash
cd backend
npm install
npm start
```
Server runs at `http://localhost:5000`.
