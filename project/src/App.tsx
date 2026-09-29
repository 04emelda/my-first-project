import { useState, useMemo, useEffect } from 'react';
import {
  Menu, X, ShoppingBag, Scissors, Footprints, Sparkles,
  Search, Heart, ChevronRight, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, MessageCircle, ArrowRight, Star, Truck,
  ShieldCheck, Gift, Check,
} from 'lucide-react';
import {
  products, CATEGORIES, WHATSAPP_NUMBER,
  type Product, type Category,
} from '@/products';

/* ============================ HELPERS ============================ */
function formatGHS(price: number): string {
  return `₵${price.toFixed(0)}`;
}

function whatsappLink(product: Product): string {
  const msg = `Hello Elegant Collections! I'm interested in ordering:%0A%0A*${product.name}*%0APrice: ${formatGHS(product.price)}%0ACategory: ${product.category}%0A%0APlease let me know how to proceed. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function generalWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Elegant Collections! I would like to make an enquiry. Thank you!')}`;
}

/* ============================ NAVBAR ============================ */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md shadow-charcoal-900/5' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-wine-600 to-wine-800 shadow-lg shadow-wine-600/20">
              <Sparkles className="h-6 w-6 text-gold-300" />
            </div>
            <div>
              <p className="font-display text-xl font-bold leading-none text-charcoal-900">Elegant</p>
              <p className="font-display text-xs font-semibold tracking-widest text-wine-600 uppercase">Collections</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-charcoal-600 hover:text-wine-700 hover:bg-wine-50 transition-all">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a href="#products" className="hidden sm:inline-flex btn-primary text-sm">
              Shop Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all">
              <MessageCircle className="h-5 w-5" />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-charcoal-600 hover:bg-charcoal-50">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-charcoal-100 py-4 animate-slide-down">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal-700 hover:bg-wine-50 hover:text-wine-700">
                  {link.label}
                </a>
              ))}
              <a href="#products" onClick={() => setOpen(false)} className="btn-primary mt-2 mx-4">Shop Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-wine-50 via-white to-gold-50">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #d12a5a 1px, transparent 1px), radial-gradient(circle at 80% 80%, #efab1c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-wine-100 px-4 py-1.5 text-xs font-semibold text-wine-700 mb-5">
              <span className="flex h-2 w-2 rounded-full bg-wine-500 animate-pulse" />
              Ghana's Premier Fashion Boutique
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-charcoal-900 text-balance">
              Elegant Fashion for <span className="text-wine-600">Every Occasion</span>
            </h1>
            <p className="mt-5 text-lg text-charcoal-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover our curated collection of premium fabrics, stylish handbags,
              elegant heels, and beautiful accessories. Quality you can afford, style you deserve.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#products" className="btn-primary text-base px-7 py-3.5">
                Shop Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="btn-secondary text-base px-7 py-3.5">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-charcoal-500">
              <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-wine-500" /> Fast delivery nationwide</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-wine-500" /> Quality guaranteed</span>
              <span className="flex items-center gap-1.5"><Gift className="h-4 w-4 text-wine-500" /> Gift wrapping available</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <div className="absolute -top-6 -right-6 h-48 w-48 rounded-full bg-wine-200/40 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-gold-200/40 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Fashionable woman with handbag" className="rounded-2xl shadow-xl object-cover h-72 w-full" />
                  <img src="https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Elegant handbag" className="rounded-2xl shadow-xl object-cover h-44 w-full" />
                </div>
                <div className="space-y-4 pt-10">
                  <img src="https://images.pexels.com/photos/27204266/pexels-photo-27204266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Black stiletto heels" className="rounded-2xl shadow-xl object-cover h-44 w-full" />
                  <img src="https://images.pexels.com/photos/38528495/pexels-photo-38528495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Ankara fabric" className="rounded-2xl shadow-xl object-cover h-72 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FEATURES BAR ============================ */
function FeaturesBar() {
  const features = [
    { icon: Truck, title: 'Nationwide Delivery', desc: 'Fast shipping across Ghana' },
    { icon: ShieldCheck, title: 'Quality Assured', desc: 'Only premium products' },
    { icon: MessageCircle, title: 'Easy WhatsApp Orders', desc: 'Order in seconds' },
    { icon: Gift, title: 'Gift Wrapping', desc: 'Beautiful packaging' },
  ];
  return (
    <section className="border-y border-charcoal-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-100">
          {features.map((f) => (
            <div key={f.title} className="bg-white py-5 px-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine-50 shrink-0">
                <f.icon className="h-5 w-5 text-wine-600" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal-900">{f.title}</p>
                <p className="text-xs text-charcoal-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ PRODUCT CARD ============================ */
function ProductCard({ product, onView }: { product: Product; onView: (p: Product) => void }) {
  return (
    <div className="card overflow-hidden group hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden bg-charcoal-50">
        <img src={product.image} alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className={`absolute top-3 left-3 badge px-3 py-1 shadow-md ${
            product.badge === 'Bestseller' ? 'bg-wine-600 text-white' :
            product.badge === 'New' ? 'bg-gold-500 text-charcoal-900' :
            'bg-charcoal-900 text-white'
          }`}>
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-wine-500">{product.category}</p>
        <h3 className="mt-1 font-medium text-charcoal-900 line-clamp-2 leading-snug min-h-[2.5rem]">{product.name}</h3>
        <p className="mt-2 font-display text-xl font-bold text-wine-700">{formatGHS(product.price)}</p>
        <div className="mt-3 flex gap-2">
          <button onClick={() => onView(product)}
            className="flex-1 rounded-full border border-charcoal-200 px-3 py-2 text-xs font-semibold text-charcoal-700 transition-all hover:border-wine-300 hover:bg-wine-50 hover:text-wine-700">
            View Details
          </button>
          <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#1da851] active:scale-95">
            <MessageCircle className="h-3.5 w-3.5" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================ PRODUCT MODAL ============================ */
function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-all">
          <X className="h-5 w-5 text-charcoal-700" />
        </button>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full min-h-[300px] bg-charcoal-50">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            {product.badge && (
              <span className={`absolute top-4 left-4 badge px-3 py-1.5 shadow-md ${
                product.badge === 'Bestseller' ? 'bg-wine-600 text-white' :
                product.badge === 'New' ? 'bg-gold-500 text-charcoal-900' :
                'bg-charcoal-900 text-white'
              }`}>{product.badge}</span>
            )}
          </div>
          <div className="p-6 sm:p-8 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wide text-wine-500">{product.category}</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-charcoal-900 leading-tight">{product.name}</h2>
            <p className="mt-3 font-display text-3xl font-bold text-wine-700">{formatGHS(product.price)}</p>
            <div className="mt-4 flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />)}
              <span className="ml-1 text-xs text-charcoal-400">(In stock)</span>
            </div>
            <p className="mt-4 text-sm text-charcoal-600 leading-relaxed">{product.description}</p>
            <div className="mt-5 space-y-2">
              {['Quality guaranteed', 'Nationwide delivery available', 'Easy returns within 7 days'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-charcoal-600">
                  <Check className="h-4 w-4 text-wine-500" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6 flex flex-col gap-2.5">
              <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full py-3.5 text-base bg-[#25D366] shadow-[#25D366]/25 hover:bg-[#1da851]">
                <MessageCircle className="h-5 w-5" /> Order on WhatsApp
              </a>
              <button onClick={onClose} className="btn-secondary w-full">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ PRODUCTS SECTION ============================ */
function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, search]);

  const categoryIcons: Record<string, typeof ShoppingBag> = {
    Scissors, ShoppingBag, Footprints, Sparkles,
  };

  return (
    <section id="products" className="bg-charcoal-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-wine-600 mb-2">Our Collection</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal-900">Shop Our Products</h2>
          <p className="mt-3 text-charcoal-500 max-w-2xl mx-auto">
            Browse our carefully curated selection. Order easily via WhatsApp with just one tap.
          </p>
        </div>

        {/* Search + Category filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-charcoal-200 bg-white py-3 pl-11 pr-4 text-sm focus:border-wine-400 focus:outline-none focus:ring-2 focus:ring-wine-500/15" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === 'all' ? 'bg-wine-600 text-white shadow-md' : 'bg-white border border-charcoal-200 text-charcoal-600 hover:border-wine-300'}`}>
              All Products
            </button>
            {CATEGORIES.map(cat => {
              const Icon = categoryIcons[cat.icon] || ShoppingBag;
              return (
                <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat.key ? 'bg-wine-600 text-white shadow-md' : 'bg-white border border-charcoal-200 text-charcoal-600 hover:border-wine-300'}`}>
                  <Icon className="h-4 w-4" /> {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map(p => <ProductCard key={p.id} product={p} onView={setSelected} />)}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-charcoal-400">No products found. Try a different search.</p>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-charcoal-400">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ============================ ABOUT SECTION ============================ */
function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-2xl bg-wine-100 -z-10" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-gold-100 -z-10" />
            <img src="https://images.pexels.com/photos/3762938/pexels-photo-3762938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Fashionable woman" className="rounded-2xl shadow-xl object-cover h-96 w-full" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-wine-600 mb-2">About Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              Where Style Meets Elegance
            </h2>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Elegant Collections is a Ghanaian fashion boutique born from a passion for style and quality.
              We bring you carefully selected fabrics, handbags, heels, and accessories that make every woman
              feel confident and beautiful.
            </p>
            <p className="mt-3 text-charcoal-600 leading-relaxed">
              From traditional Ankara prints to modern designer handbags, our collection celebrates both
              Ghanaian heritage and contemporary fashion. We believe every woman deserves to look and feel
              her best, no matter the occasion.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { num: '500+', label: 'Happy Customers' },
                { num: '50+', label: 'Products Available' },
                { num: '100%', label: 'Quality Guaranteed' },
              ].map(stat => (
                <div key={stat.label} className="text-center rounded-xl bg-charcoal-50 py-4">
                  <p className="font-display text-2xl font-bold text-wine-700">{stat.num}</p>
                  <p className="text-xs text-charcoal-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
            <a href="#products" className="btn-primary mt-8">Browse Our Collection <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ CONTACT SECTION ============================ */
function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Elegant Collections!%0A%0AMy name is ${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setName('');
    setMessage('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-white to-wine-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-wine-600 mb-2">Get In Touch</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
              We'd Love to Hear From You
            </h2>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Have a question about a product? Want to place a custom order? Reach out to us and we'll respond
              as quickly as possible. You can also order directly via WhatsApp.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: 'Call Us', value: '+233 20 000 0000', href: 'tel:+233200000000' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us instantly', href: generalWhatsAppLink() },
                { icon: Mail, label: 'Email', value: 'hello@elegantcollections.gh', href: 'mailto:hello@elegantcollections.gh' },
                { icon: MapPin, label: 'Visit Us', value: 'Oxford Street, Osu — Accra, Ghana', href: '#' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat: 8am to 7pm', href: '#' },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine-50 group-hover:bg-wine-100 transition-colors shrink-0">
                    <item.icon className="h-5 w-5 text-wine-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-charcoal-400">{item.label}</p>
                    <p className="text-sm font-semibold text-charcoal-900 group-hover:text-wine-700 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-charcoal-900 mb-1">Send us a message</h3>
            <p className="text-sm text-charcoal-500 mb-5">Fill in the form and we'll get back to you via WhatsApp.</p>
            {sent && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-wine-50 px-4 py-3 text-sm text-wine-700">
                <Check className="h-4 w-4" /> Opening WhatsApp with your message...
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Your Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Akosua Mensah" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1.5">Message</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="I'm interested in..." rows={4} className="input-field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-wine-600 to-wine-800">
                <Sparkles className="h-5 w-5 text-gold-300" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white leading-none">Elegant</p>
                <p className="font-display text-xs font-semibold tracking-widest text-wine-400 uppercase">Collections</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-charcoal-400">
              Elegant Fashion for Every Occasion. Ghana's premier boutique for fabrics, handbags, heels,
              and women's accessories. Quality you can afford, style you deserve.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href={i === 2 ? generalWhatsAppLink() : '#'} target={i === 2 ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal-800 hover:bg-wine-600 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map(c => (
                <li key={c.key}><a href="#products" className="hover:text-wine-400 transition-colors">{c.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-wine-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-wine-400 transition-colors">Contact</a></li>
              <li><a href="#products" className="hover:text-wine-400 transition-colors">All Products</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-charcoal-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500">
          <p>© 2026 Elegant Collections. Accra, Ghana.</p>
          <p>Made with care for the elegant Ghanaian woman.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================ FLOATING WHATSAPP ============================ */
function FloatingWhatsApp() {
  return (
    <a href={generalWhatsAppLink()} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all"
      aria-label="Chat on WhatsApp">
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

/* ============================ APP ============================ */
function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesBar />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
