import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ChevronDown, Heart, LayoutDashboard, Menu, Mic, Package, Play, QrCode, Search, Send, ShoppingBag, Sparkles, Upload, UserRound, Users, X } from 'lucide-react'
import './styles.css'

const products = [
  { name: 'Traditional Handloom Masterwork', artisan: 'Lakshmi Devi', place: 'Narsapur', price: '₹2,499', tag: 'Bestseller', image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/XE/ZI/WT/30071478/handicraft-and-handloom-products-500x500.jpg' },
  { name: 'Red Border Chenetha Classic', artisan: 'S. Ramana', place: 'Tadepalligudem', price: '₹1,899', tag: 'New Weave', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39iBGqOO3lGKvPsdR2272zs7JUq_U8rzHiJ69KW4hWQ&s=10' },
  { name: 'Pure Handwoven Soft Cotton', artisan: 'Anitha', place: 'Bhimavaram', price: '₹2,199', tag: 'Handwoven', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsM5JVVoc8qiiiBgHyFHZz9aLNxAFLs-XXklCiZjMcCw&s=10' },
  { name: 'West Godavari Mulberry Silk', artisan: 'Ravi Kumar', place: 'Palakollu', price: '₹2,799', tag: 'Royal Silk', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCCCKehmCyu3eKgkCw4TlUaNHTTI2UTZ-wt4IbhL8pQ&s' },
  { name: 'Herbal Natural Dye Saree', artisan: 'Kavitha Rao', place: 'Tanuku', price: '₹2,350', tag: 'Natural Dye', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTud4VtzKzg-RVc9BbkcS8snjcgJ9LXJO1-T217DjRcw&s' },
  { name: 'Everyday Luxury Cotton Weave', artisan: 'Madhavi', place: 'Eluru', price: '₹1,750', tag: 'Pure Cotton', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURp3SEpeYCE99BVckdL1Vvh161lxwkadifgS83qZK5g&s' },
  { name: 'Artisan Temple Border Saree', artisan: 'Vijaya Lakshmi', place: 'Narsapur', price: '₹2,650', tag: 'Mastercraft', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLRGcny-gexghLcp4pQP-lKFtvwTogoybFRZePZpXDg&s=10' },
]

function App() {
  const [identity, setIdentity] = useState(null)
  const [assistant, setAssistant] = useState(false)
  const [signin, setSignin] = useState(false)
  const [weaverPortal, setWeaverPortal] = useState(false)
  const [weaverTab, setWeaverTab] = useState('Dashboard')
  const [authenticated, setAuthenticated] = useState(false)
  const [menu, setMenu] = useState(false)
  const [language, setLanguage] = useState('EN')
  const [liked, setLiked] = useState([])
  const [toast, setToast] = useState('')

  const notify = (text) => { setToast(text); setTimeout(() => setToast(''), 2400) }
  const toggleLike = (index) => setLiked(liked.includes(index) ? liked.filter(item => item !== index) : [...liked, index])

  if (!authenticated) {
    return (
      <div className="signin-page">
        <div className="signin-page-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">⌁</span>
            <span>weave<span>kart</span><small>WEST GODAVARI</small></span>
          </a>
          <span className="signin-language">తెలుగు + English Marketplace</span>
        </div>
        <div className="signin-page-content">
          <div className="signin-page-copy">
            <p className="eyebrow">Direct Loom-to-Living Room Marketplace</p>
            <h1>Every Thread Has A Voice.<br /><em>Every Saree Tells A Legend.</em></h1>
            <p>Authentic Chenetha vasthralu handcrafted in West Godavari. Shared directly by the master weavers who poured their soul into every weave.</p>
            <div className="signin-page-note">
              <span>✦</span>
              <small>Buy Directly. Empower Weavers Fairly.<br />Keep Ancestral Heritage Alive.</small>
            </div>
          </div>
          <div className="signin-page-card">
            <p className="eyebrow">Welcome to WeaveKart</p>
            <h2>Choose Your Workspace</h2>
            <p className="signin-intro">Select how you want to experience the West Godavari handloom ecosystem.</p>
            <button className="signin-entry" onClick={() => setAuthenticated(true)}>
              <span className="entry-icon"><UserRound size={20} /></span>
              <span>
                <b>Customer / Craft Collector</b>
                <small>Browse authentic sarees and meet master artisans</small>
              </span>
              <ArrowRight size={17} />
            </button>
            <button className="signin-entry weaver-entry" onClick={() => { setAuthenticated(true); setWeaverPortal(true) }}>
              <span className="entry-icon"><Mic size={20} /></span>
              <span>
                <b>Weaver / Artisan Portal (చేనేత వర్క్ స్పేస్)</b>
                <small>List sarees using Telugu Voice AI & earn 100% fair pay</small>
              </span>
              <ArrowRight size={17} />
            </button>
            <div className="signin-demo">
              <b>Instant Demo Access:</b>
              <span>Customer: customer@weavekart.demo</span>
              <span>Weaver: artisan@weavekart.demo</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Announcement Bar */}
      <div className="announcement">
        <span className="live-dot" />
        <span>Direct Loom Marketplace · 1,250+ Master Artisans across West Godavari</span>
        <span onClick={() => notify('Direct artisan connectivity active')}>
          Zero Middlemen · 100% Handwoven Soul <ArrowRight size={14} />
        </span>
      </div>

      {/* Navigation Header */}
      <header className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">⌁</span>
          <span>weave<span>kart</span><small>WEST GODAVARI</small></span>
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
          <Menu size={20} />
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#shop" onClick={() => setMenu(false)}>Collection</a>
          <a href="#artisans" onClick={() => setMenu(false)}>Master Weavers</a>
          <a href="#identity" onClick={() => setMenu(false)}>Loom Identity</a>
          <a href="#impact" onClick={() => setMenu(false)}>Our Legacy</a>
        </nav>
        <div className="nav-actions">
          <button className="language" onClick={() => setLanguage(language === 'EN' ? 'తె' : 'EN')}>
            {language === 'EN' ? 'English' : 'తెలుగు'} <ChevronDown size={14} />
          </button>
          <button className="icon-btn" aria-label="Search" onClick={() => notify('Search catalog enabled')}>
            <Search size={18} />
          </button>
          <button className="icon-btn" aria-label="Cart" onClick={() => notify('2 Saree items in your cart')}>
            <ShoppingBag size={18} />
            <b>2</b>
          </button>
          <button className="login" onClick={() => setSignin(true)}>
            Sign In / Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> West Godavari Loom Legacy</p>
            <h1>Woven With Heart.<br /><em>Worn With Pride.</em></h1>
            <p className="hero-text">
              Discover the hands, stories, and centuries of Chenetha tradition woven into every thread. No middlemen, no fast fashion—just pure handloom masterpieces.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#shop">
                Explore The Collection <ArrowRight size={17} />
              </a>
              <button className="play-btn" onClick={() => notify('Playing Narsapur Artisan Story Video')}>
                <span><Play size={13} fill="currentColor" /></span> Watch Loom Journey
              </button>
            </div>
            <div className="trust-row">
              <div>
                <strong>01</strong>
                <span>100% Direct From<br />Master Weaver</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Verified Digital<br />Loom Identity</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Fair Price &<br />Zero Broker Fees</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/handloom.png" alt="Master Weaver Handloom in West Godavari" />
            <div className="image-note">
              <span className="pin">✦</span>
              <span>Handcrafted in<br /><strong>Narsapur, Andhra Pradesh</strong></span>
            </div>
            <div className="vertical-label">AUTHENTIC · CHENETHA · HERITAGE</div>
          </div>
        </section>

        {/* Value Signals */}
        <section className="signal">
          <div>
            <span className="signal-icon">✦</span>
            <p><b>Crafted by Human Hands</b><br />Never by automated factories</p>
          </div>
          <div>
            <span className="signal-icon">◒</span>
            <p><b>Digital Loom Passport</b><br />Scan to meet your weaver</p>
          </div>
          <div>
            <span className="signal-icon">◌</span>
            <p><b>Telugu Voice AI Assistant</b><br />Empowering every artisan</p>
          </div>
          <div>
            <span className="signal-icon">↗</span>
            <p><b>Fair Wealth Transfer</b><br />92% value reaches the maker</p>
          </div>
        </section>

        {/* Product Collection */}
        <section className="collection" id="shop">
          <div className="section-head">
            <div>
              <p className="eyebrow">West Godavari Masterworks</p>
              <h2>Wearable Poetry. <em>Sculpted on the Loom.</em></h2>
            </div>
            <a className="text-link" href="#shop">
              Explore All Crafts <ArrowRight size={16} />
            </a>
          </div>
          <div className="category-row">
            <button className="active">All Masterworks</button>
            <button onClick={() => notify('Filter applied: Handloom Sarees')}>Handloom Sarees</button>
            <button onClick={() => notify('Filter applied: Mulberry Silks')}>Mulberry Silks</button>
            <button onClick={() => notify('Filter applied: Natural Dyes')}>Natural Dyes</button>
            <button onClick={() => notify('Filter applied: Temple Borders')}>Temple Borders</button>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="tag">{product.tag}</span>
                  <button className="heart" onClick={() => toggleLike(index)} aria-label="Wishlist">
                    <Heart size={17} fill={liked.includes(index) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="product-meta">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.artisan} <span>·</span> {product.place}</p>
                  </div>
                  <strong>{product.price}</strong>
                </div>
                <button className="story-link" onClick={() => setIdentity(product)}>
                  Inspect Craft Story <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Digital Identity Band */}
        <section className="identity-band" id="identity">
          <div className="identity-art">
            <div className="identity-card">
              <div className="qr">
                <QrCode size={56} />
              </div>
              <p>Verified Digital Identity</p>
              <strong>WK · WG · 2026 · 00125</strong>
              <small>Scan QR code to trace loom & maker</small>
            </div>
          </div>
          <div className="identity-copy">
            <p className="eyebrow">Transparency Code</p>
            <h2>Know the Hands & Heart<br />behind <em>the Weave.</em></h2>
            <p>
              No more anonymous fast fashion. Every WeaveKart piece carries a living digital passport—documenting where the yarn originated, who handwove it, and how many days it took.
            </p>
            <div className="journey">
              <span><b>01</b><small>Organic Yarns</small></span>
              <i />
              <span><b>02</b><small>4 Days Looming</small></span>
              <i />
              <span><b>03</b><small>Artisan Verified</small></span>
              <i />
              <span><b>04</b><small>At Your Door</small></span>
            </div>
            <button className="outline" onClick={() => setIdentity(products[0])}>
              Inspect Digital Loom Passport <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Direct Flow Section */}
        <section className="direct-section">
          <div className="direct-heading">
            <p className="eyebrow">The Direct Craft Movement</p>
            <h2>From the Weaver’s Hands.<br /><em>Directly To You.</em></h2>
            <p>
              By eliminating brokers and markups, your purchase goes directly into the weaver's household—preserving West Godavari's heritage crafts for generations to come.
            </p>
            <button className="primary" onClick={() => notify('Direct Artisan connection activated')}>
              Support Master Artisans <ArrowRight size={16} />
            </button>
          </div>
          <div className="direct-flow">
            <div className="flow-line" />
            <div className="flow-step">
              <span>01</span>
              <div>
                <strong>Artisan Handweaves</strong>
                <small>Lakshmi Devi weaves your saree in Narsapur with hand-dyed yarns.</small>
              </div>
            </div>
            <div className="flow-step">
              <span>02</span>
              <div>
                <strong>You Discover & Connect</strong>
                <small>Read her craft journey, trace yarn origin, and choose her creation.</small>
              </div>
            </div>
            <div className="flow-step">
              <span>03</span>
              <div>
                <strong>Fair Earnings Delivered</strong>
                <small>92% of the payment goes directly into Lakshmi's bank account.</small>
              </div>
            </div>
            <div className="flow-step">
              <span>04</span>
              <div>
                <strong>Delivered With Story Card</strong>
                <small>Receive a hand-packed masterpiece with an authenticated story certificate.</small>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="ai-section">
          <div>
            <p className="eyebrow">Telugu Voice Technology</p>
            <h2>Technology That Speaks<br /><em>The Language Of The Loom.</em></h2>
            <p>
              Our intuitive Telugu AI companion empowers non-tech artisans to list sarees by voice, calculate fair prices based on labor effort, and reach global buyers effortlessly.
            </p>
            <button className="primary" onClick={() => setAssistant(true)}>
              Launch Telugu AI Assistant <Sparkles size={16} />
            </button>
          </div>
          <div className="assistant-preview">
            <div className="assistant-top">
              <span className="ai-avatar"><Sparkles size={18} /></span>
              <div>
                <b>WeaveKart Telugu AI</b>
                <small>తెలుగు + English Voice Assistant · Active</small>
              </div>
              <span className="online" />
            </div>
            <p className="telugu">
              నమస్కారం! మీ చేనేత చీరను వాయిస్ ద్వారా లిస్ట్ చేయండి లేదా న్యాయమైన ధరను లెక్కించండి.
            </p>
            <div className="ai-options">
              <button onClick={() => notify('Telugu Voice recognition started')}>
                <Mic size={16} /> Speak in Telugu (మాట్లాడండి)
              </button>
              <button onClick={() => notify('Fair Weaver Price: ₹2,450 – ₹2,800')}>
                <span>₹</span> Calculate Fair Price
              </button>
            </div>
          </div>
        </section>

        {/* Artisans Feature */}
        <section className="artisans" id="artisans">
          <div className="section-head">
            <div>
              <p className="eyebrow">Meet The Masters</p>
              <h2>Not Anonymous.<br /><em>Always Celebrated.</em></h2>
            </div>
            <a className="text-link" href="#artisans">
              Meet All 1,250+ Artisans <ArrowRight size={16} />
            </a>
          </div>
          <div className="artisan-strip">
            <div className="artisan-main">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85" alt="Master Weaver Lakshmi Devi" />
              <div>
                <span>Master Artisan · Narsapur</span>
                <h3>Lakshmi Devi</h3>
                <p>Traditional Handloom Weaver<br />Narsapur · 25 Years of Loom Mastery</p>
                <button className="story-link" onClick={() => notify('Opening Lakshmi Devi story timeline')}>
                  Read Her Craft Journey <ArrowRight size={14} />
                </button>
              </div>
            </div>
            <div className="quote">
              <span>“</span>
              <p>My mother taught me the first warp thread. Every saree I weave carries a piece of our river, our soil, and our family legacy.</p>
              <small>— Lakshmi Devi, Master Handloom Artisan</small>
            </div>
          </div>
        </section>

        {/* Impact Counters */}
        <section className="impact" id="impact">
          <p className="eyebrow">Our Collective Impact</p>
          <h2>A Marketplace Built On<br /><em>Integrity & Memory.</em></h2>
          <div className="impact-grid">
            <div>
              <strong>1,250+</strong>
              <span>Master Artisans with<br />Direct Digital Storefronts</span>
            </div>
            <div>
              <strong>25+</strong>
              <span>Heirloom Weaving Traditions<br />Preserved in West Godavari</span>
            </div>
            <div>
              <strong>₹4.2 Cr+</strong>
              <span>Direct Income Delivered<br />Straight to Weaver Families</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">⌁</span>
          <span style={{ color: '#fff' }}>weave<span>kart</span><small style={{ color: '#a09486' }}>WEST GODAVARI</small></span>
        </a>
        <p>From the hands of master weavers<br />straight to your heart and home.</p>
        <span>© 2026 WeaveKart Marketplace. All rights reserved.</span>
      </footer>

      {/* Floating AI Assistant Trigger */}
      <button className="floating-ai" onClick={() => setAssistant(true)}>
        <Sparkles size={19} />
        <span>Telugu AI Companion</span>
      </button>

      {/* Weaver Specific AI Launch Floating Trigger */}
      {weaverPortal && (
        <button className="weaver-ai-launch" onClick={() => setAssistant(true)}>
          <Mic size={18} />
          <span>
            <b>తెలుగు AI సహాయకుడు</b>
            <small>వాయిస్ ద్వారా చీరను లిస్ట్ చేయండి</small>
          </span>
        </button>
      )}

      {/* Signin Modal */}
      {signin && (
        <div className="modal-backdrop" onClick={() => setSignin(false)}>
          <div className="signin-modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setSignin(false)}><X size={18} /></button>
            <p className="eyebrow">Welcome To WeaveKart</p>
            <h3>Choose Your Workspace</h3>
            <p className="signin-intro">Purchase authentic Chenetha vasthralu directly from artisans, or access the weaver workspace to list your sarees.</p>
            <div className="signin-grid">
              <div className="signin-card">
                <span className="signin-number">01</span>
                <UserRound size={26} />
                <h4>Customer / Craft Collector</h4>
                <p>Discover rare handwoven sarees, trace yarn provenance, and order directly from weavers.</p>
                <input aria-label="Customer email" placeholder="Email address" defaultValue="customer@weavekart.demo" />
                <input aria-label="Customer password" placeholder="Password" type="password" defaultValue="••••••••" />
                <button className="primary" onClick={() => { setSignin(false); notify('Signed in as Customer') }}>
                  Enter As Customer <ArrowRight size={15} />
                </button>
              </div>
              <div className="signin-card weaver-card">
                <span className="signin-number">02</span>
                <Mic size={26} />
                <h4>Weaver Workspace (చేనేత పోర్టల్)</h4>
                <p>List sarees using Telugu voice AI, track customer orders, and receive 100% fair payout.</p>
                <input aria-label="Weaver email" placeholder="Email address" defaultValue="artisan@weavekart.demo" />
                <input aria-label="Weaver password" placeholder="Password" type="password" defaultValue="••••••••" />
                <button className="primary" onClick={() => { setSignin(false); setWeaverPortal(true) }}>
                  Enter Artisan Workspace <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Dialog Modal */}
      {assistant && (
        <div className="modal-backdrop" onClick={() => setAssistant(false)}>
          <div className="ai-modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setAssistant(false)}><X size={18} /></button>
            <div className="ai-modal-head">
              <span className="ai-avatar"><Sparkles size={19} /></span>
              <div>
                <p className="eyebrow">Craft Companion</p>
                <h3>WeaveKart Telugu AI</h3>
              </div>
            </div>
            <p className="telugu">
              నమస్కారం! మీ చేనేత ఉత్పత్తి వివరాలు మాట్లాడండి. నేను మీ చీరను ఆటోమాటిక్‌గా లిస్ట్ చేస్తాను.
            </p>
            <p className="modal-intro">Turn your handloom craft into a captivating digital story buyers across India will love.</p>
            <button onClick={() => notify('Telugu voice recognition started...')} className="ai-action">
              <Mic size={20} />
              <span>
                <b>Telugu Voice Product Draft (వాయిస్ లిస్టింగ్)</b>
                <small>Speak naturally in Telugu about your saree</small>
              </span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => notify('Suggested Fair Price: ₹2,450 – ₹2,800')} className="ai-action">
              <span className="rupee">₹</span>
              <span>
                <b>Fair Price Estimator (న్యాయమైన ధర)</b>
                <small>Calculates labor days + thread material costs</small>
              </span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => notify('Generated English craft description!')} className="ai-action">
              <Sparkles size={20} />
              <span>
                <b>Auto-Generate English Description</b>
                <small>Transforms Telugu notes into customer-ready English</small>
              </span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Digital Product Identity Inspection Modal */}
      {identity && (
        <div className="modal-backdrop" onClick={() => setIdentity(null)}>
          <div className="identity-modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setIdentity(null)}><X size={18} /></button>
            <img src={identity.image} alt={identity.name} />
            <div className="modal-content">
              <p className="eyebrow">Verified Digital Passport</p>
              <h3>{identity.name}</h3>
              <p className="maker-line">Handcrafted by <b>{identity.artisan}</b> · {identity.place}</p>
              <div className="id-code">
                <QrCode size={40} />
                <span>
                  <small>Loom Passport ID</small>
                  <b>WK-WG-2026-00125</b>
                </span>
              </div>
              <div className="timeline">
                <p><b>Yarn Provenance</b><span>Organic Natural Cotton</span></p>
                <p><b>Loom Crafting</b><span>Handwoven over 4 Days</span></p>
                <p><b>Master Quality Check</b><span>Artisan Verified</span></p>
                <p><b>Fair Pay Direct</b><span>92% to Lakshmi's Household</span></p>
              </div>
              <button className="primary" onClick={() => { setIdentity(null); notify(`Added ${identity.name} to cart!`) }}>
                Add Handloom Saree to Cart <ShoppingBag size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Artisan Portal Workspace */}
      {weaverPortal && (
        <div className="portal-backdrop">
          <div className="weaver-portal">
            <header className="portal-header">
              <div>
                <p className="eyebrow">Artisan Workspace (చేనేత డాష్‌బోర్డ్)</p>
                <h3>Namaste, Lakshmi Devi</h3>
                <p>Manage your handwoven sarees, view direct customer orders, and track your fair earnings.</p>
              </div>
              <button className="close" onClick={() => setWeaverPortal(false)}><X size={20} /></button>
            </header>

            <div className="portal-stats">
              <div>
                <Package size={20} />
                <strong>24</strong>
                <span>Published Sarees</span>
              </div>
              <div>
                <Users size={20} />
                <strong>96</strong>
                <span>Direct Buyers</span>
              </div>
              <div>
                <LayoutDashboard size={20} />
                <strong>₹1,84,500</strong>
                <span>Total Fair Earnings</span>
              </div>
            </div>

            <div className="portal-grid">
              <section className="upload-panel">
                <div className="panel-title">
                  <div>
                    <p className="eyebrow">Publish New Craft</p>
                    <h4>Upload Handwoven Saree</h4>
                  </div>
                  <span className="telugu-label">మీ చీరను మార్కెట్‌ప్లేస్‌లో చేర్చండి</span>
                </div>
                <label className="upload-box">
                  <Upload size={24} />
                  <b>Drop saree photograph here</b>
                  <small>or click to upload from your smartphone</small>
                  <input type="file" accept="image/*" />
                </label>

                <div className="form-row">
                  <label>Saree Name (ఉత్పత్తి పేరు)<input placeholder="Ex: Narsapur Chenetha Saree" /></label>
                  <label>Price (ధర)<input placeholder="₹ 2,499" /></label>
                </div>

                <div className="form-row">
                  <label>Craft Category
                    <select defaultValue="Handloom Saree">
                      <option>Handloom Saree</option>
                      <option>Cotton Saree</option>
                      <option>Mulberry Silk</option>
                      <option>Natural Dye</option>
                    </select>
                  </label>
                  <label>Weave Time (Days)<input placeholder="4 Days" /></label>
                </div>

                <label>Description & Story (వివరణ)<textarea placeholder="Describe thread colors, border design, and weaving details..." /></label>

                <div className="upload-actions">
                  <button className="outline" onClick={() => setAssistant(true)}>
                    <Mic size={15} /> Speak in Telugu (మాట్లాడండి)
                  </button>
                  <button className="primary" onClick={() => notify('Saree successfully published to WeaveKart!')}>
                    Publish Product To Marketplace <ArrowRight size={15} />
                  </button>
                </div>
              </section>

              <aside className="customer-panel">
                <div className="panel-title">
                  <div>
                    <p className="eyebrow">Direct Relationship</p>
                    <h4>Customer Messages</h4>
                  </div>
                  <span className="message-count">3 New</span>
                </div>

                <div className="customer-message">
                  <span className="customer-avatar">A</span>
                  <div>
                    <b>Anjali · Hyderabad</b>
                    <p>Is the red border cotton saree soft for summer wear?</p>
                    <small>2 min ago</small>
                  </div>
                  <button onClick={() => notify('Opened response composer')} aria-label="Reply">
                    <Send size={15} />
                  </button>
                </div>

                <div className="customer-message">
                  <span className="customer-avatar peach">R</span>
                  <div>
                    <b>Rohit · Vijayawada</b>
                    <p>Can you share the story behind this temple border motif?</p>
                    <small>18 min ago</small>
                  </div>
                  <button onClick={() => notify('Opened response composer')} aria-label="Reply">
                    <Send size={15} />
                  </button>
                </div>

                <div className="direct-note">
                  <span>✦</span>
                  <p>
                    <b>Your Customer. Your Legacy.</b><br />
                    WeaveKart keeps all conversation and transactions direct between you and the customer.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}

      {/* Portal Navigation & Tab Views */}
      {weaverPortal && (
        <>
          <nav className="portal-nav">
            <button className={weaverTab === 'Dashboard' ? 'selected' : ''} onClick={() => setWeaverTab('Dashboard')}>
              <LayoutDashboard size={15} /> Workspace
            </button>
            <button className={weaverTab === 'My Products' ? 'selected' : ''} onClick={() => setWeaverTab('My Products')}>
              <Package size={15} /> Published Sarees
            </button>
            <button className={weaverTab === 'Orders' ? 'selected' : ''} onClick={() => setWeaverTab('Orders')}>
              <ShoppingBag size={15} /> Direct Orders
            </button>
          </nav>

          {weaverTab === 'My Products' && (
            <div className="portal-view">
              <div className="portal-view-card">
                <button className="close" onClick={() => setWeaverTab('Dashboard')}><X size={18} /></button>
                <p className="eyebrow">Artisan Catalog</p>
                <h3>My Published Crafts</h3>
                <p className="view-intro">Your Chenetha vasthralu currently live in the global marketplace.</p>
                <div className="my-products">
                  {products.map(product => (
                    <div className="my-product" key={product.name}>
                      <img src={product.image} alt={product.name} />
                      <div>
                        <b>{product.name}</b>
                        <small>{product.place} · {product.price}</small>
                        <span>Live · 24 Views today</span>
                      </div>
                      <button onClick={() => notify('Opened product editor')}>Edit</button>
                    </div>
                  ))}
                </div>
                <button className="primary" onClick={() => setWeaverTab('Dashboard')}>
                  <Upload size={15} /> Publish Another Handloom Saree
                </button>
              </div>
            </div>
          )}

          {weaverTab === 'Orders' && (
            <div className="portal-view">
              <div className="portal-view-card">
                <button className="close" onClick={() => setWeaverTab('Dashboard')}><X size={18} /></button>
                <p className="eyebrow">Direct Marketplace Orders</p>
                <h3>Incoming Saree Orders</h3>
                <p className="view-intro">Track purchases made directly by customers across India.</p>
                <div className="order-table">
                  <div className="order-head">
                    <span>Order ID</span>
                    <span>Customer</span>
                    <span>Saree Ordered</span>
                    <span>Shipment Status</span>
                  </div>
                  <div>
                    <b>#WK-1048</b>
                    <span>Anjali · Hyderabad</span>
                    <span>Red Border Chenetha</span>
                    <em>Ready to ship</em>
                  </div>
                  <div>
                    <b>#WK-1042</b>
                    <span>Rohit · Vijayawada</span>
                    <span>Handwoven Soft Cotton</span>
                    <em>In transit</em>
                  </div>
                  <div>
                    <b>#WK-1037</b>
                    <span>Meera · Chennai</span>
                    <span>Mulberry Silk Weave</span>
                    <em>Delivered</em>
                  </div>
                </div>
                <div className="direct-note" style={{ marginTop: 24 }}>
                  <span>✦</span>
                  <p>
                    <b>100% Direct Payout Guarantee</b><br />
                    Payouts are credited directly to your bank account upon dispatch.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Global Notification Toast */}
      {toast && (
        <div className="toast">
          <span>✓</span> {toast}
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
