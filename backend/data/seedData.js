export const initialProducts = [
  {
    id: "WK-WG-001",
    name: "Traditional Handloom Collection",
    artisan: "Lakshmi Devi",
    place: "Narsapur",
    price: 2499,
    formattedPrice: "₹2,499",
    tag: "Bestseller",
    category: "Handloom",
    material: "Pure Handcrafted Cotton",
    weaveTimeDays: 4,
    digitalId: "WK-WG-2026-00125",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/XE/ZI/WT/30071478/handicraft-and-handloom-products-500x500.jpg",
    description: "Authentic handloom woven in Narsapur using traditional techniques passed down through generations."
  },
  {
    id: "WK-WG-002",
    name: "Red Border Chenetha Saree",
    artisan: "S. Ramana",
    place: "Tadepalligudem",
    price: 1899,
    formattedPrice: "₹1,899",
    tag: "New",
    category: "Handloom",
    material: "Chenetha Fine Cotton",
    weaveTimeDays: 3,
    digitalId: "WK-WG-2026-00126",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39iBGqOO3lGKvPsdR2272zs7JUq_U8rzHiJ69KW4hWQ&s=10",
    description: "Vibrant red border classic saree handcrafted in Tadepalligudem."
  },
  {
    id: "WK-WG-003",
    name: "Handwoven Cotton Saree",
    artisan: "Anitha",
    place: "Bhimavaram",
    price: 2199,
    formattedPrice: "₹2,199",
    tag: "Handwoven",
    category: "Cotton",
    material: "100% Breathable Cotton",
    weaveTimeDays: 3,
    digitalId: "WK-WG-2026-00127",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsM5JVVoc8qiiiBgHyFHZz9aLNxAFLs-XXklCiZjMcCw&s=10",
    description: "Lightweight and breathable handwoven cotton saree from Bhimavaram."
  },
  {
    id: "WK-WG-004",
    name: "West Godavari Silk Weave",
    artisan: "Ravi Kumar",
    place: "Palakollu",
    price: 2799,
    formattedPrice: "₹2,799",
    tag: "Chenetha",
    category: "Silk weave",
    material: "Godavari Mulberry Silk",
    weaveTimeDays: 6,
    digitalId: "WK-WG-2026-00128",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCCCKehmCyu3eKgkCw4TlUaNHTTI2UTZ-wt4IbhL8pQ&s",
    description: "Exquisite silk weave with metallic thread motifs handcrafted in Palakollu."
  },
  {
    id: "WK-WG-005",
    name: "Natural Dye Handloom Saree",
    artisan: "Kavitha Rao",
    place: "Tanuku",
    price: 2350,
    formattedPrice: "₹2,350",
    tag: "Natural dye",
    category: "Handloom",
    material: "Organic Cotton & Plant Dyes",
    weaveTimeDays: 5,
    digitalId: "WK-WG-2026-00129",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTud4VtzKzg-RVc9BbkcS8snjcgJ9LXJO1-T217DjRcw&s",
    description: "Colored using natural herbal dyes in Tanuku, zero synthetic chemicals."
  },
  {
    id: "WK-WG-006",
    name: "Traditional Cotton Weave",
    artisan: "Madhavi",
    place: "Eluru",
    price: 1750,
    formattedPrice: "₹1,750",
    tag: "Cotton",
    category: "Cotton",
    material: "Soft Handloom Yarns",
    weaveTimeDays: 3,
    digitalId: "WK-WG-2026-00130",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURp3SEpeYCE99BVckdL1Vvh161lxwkadifgS83qZK5g&s",
    description: "Everyday luxury handloom cotton saree woven in Eluru."
  },
  {
    id: "WK-WG-007",
    name: "Artisan Border Saree",
    artisan: "Vijaya Lakshmi",
    place: "Narsapur",
    price: 2650,
    formattedPrice: "₹2,650",
    tag: "Handmade",
    category: "Handloom",
    material: "Fine Count Cotton",
    weaveTimeDays: 5,
    digitalId: "WK-WG-2026-00131",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLRGcny-gexghLcp4pQP-lKFtvwTogoybFRZePZpXDg&s=10",
    description: "Detailed temple border weave made by master artisans in Narsapur."
  }
];

export const initialArtisans = [
  {
    id: "artisan-1",
    name: "Lakshmi Devi",
    place: "Narsapur",
    district: "West Godavari",
    experienceYears: 25,
    specialty: "Traditional Handloom Weaving",
    publishedProducts: 24,
    totalEarnings: 184500,
    quote: "My mother taught me the first pattern. Every saree I weave carries a little of our river, our soil and our home.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85"
  },
  {
    id: "artisan-2",
    name: "S. Ramana",
    place: "Tadepalligudem",
    district: "West Godavari",
    experienceYears: 18,
    specialty: "Red Border Chenetha Saree",
    publishedProducts: 16,
    totalEarnings: 122000,
    quote: "Chenetha is not just clothing; it is the heartbeat of our heritage in Tadepalligudem.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"
  }
];

export const initialOrders = [
  {
    id: "#WK-1048",
    customerName: "Anjali",
    city: "Hyderabad",
    productName: "Red Border Chenetha Saree",
    price: 1899,
    status: "Ready to ship",
    createdAt: "2026-09-28T10:30:00Z"
  },
  {
    id: "#WK-1042",
    customerName: "Rohit",
    city: "Vijayawada",
    productName: "Handwoven Cotton Saree",
    price: 2199,
    status: "In transit",
    createdAt: "2026-09-27T14:15:00Z"
  },
  {
    id: "#WK-1037",
    customerName: "Meera",
    city: "Chennai",
    productName: "West Godavari Silk Weave",
    price: 2799,
    status: "Delivered",
    createdAt: "2026-09-25T09:00:00Z"
  }
];
