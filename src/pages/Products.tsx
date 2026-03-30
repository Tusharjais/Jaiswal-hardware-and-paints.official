import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PaintBucket, Wrench, Droplet, Zap, Hammer, Bath, MessageCircle, PhoneCall, DoorClosed, Layers, AppWindow, Grid, Search, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { useWishlist } from '../context/WishlistContext';

export default function Products() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const search = params.get('search');
    
    if (category) {
      setActiveCategory(category);
    }
    if (search) {
      setSearchQuery(search.toLowerCase());
    } else {
      setSearchQuery('');
    }
  }, [location]);

  const categories = [
    { id: 'all', name: 'All Products', icon: null },
    { id: 'tiles', name: 'Tiles & Marble', icon: <Grid className="h-5 w-5" /> },
    { id: 'paints', name: 'Paints', icon: <PaintBucket className="h-5 w-5" /> },
    { id: 'hardware', name: 'Hardware', icon: <Wrench className="h-5 w-5" /> },
    { id: 'plumbing', name: 'Plumbing', icon: <Droplet className="h-5 w-5" /> },
    { id: 'plywood', name: 'Plywood & Doors', icon: <DoorClosed className="h-5 w-5" /> },
    { id: 'iron', name: 'Iron & Roofing', icon: <Layers className="h-5 w-5" /> },
    { id: 'aluminium', name: 'Aluminium', icon: <AppWindow className="h-5 w-5" /> },
    { id: 'electrical', name: 'Electrical', icon: <Zap className="h-5 w-5" /> },
    { id: 'tools', name: 'Tools', icon: <Hammer className="h-5 w-5" /> },
    { id: 'sanitary', name: 'Sanitary', icon: <Bath className="h-5 w-5" /> },
  ];

  const products = [
    { id: 1, category: 'tiles', name: 'Premium Floor Tiles (2x2, 2x4)', brand: 'Kajaria', uses: 'Living room & bedroom flooring', img: 'https://picsum.photos/seed/kajariatiles/400/300' },
    { id: 2, category: 'tiles', name: 'Wall Tiles (1x1, 1x1.5)', brand: 'Johnson', uses: 'Kitchen & bathroom walls', img: 'https://picsum.photos/seed/johnsontiles/400/300' },
    { id: 3, category: 'paints', name: 'Berger WeatherCoat', brand: 'Berger', uses: 'Exterior weather protection', img: 'https://picsum.photos/seed/paint2/400/300' },
    { id: 4, category: 'paints', name: 'Asian Paints Royale Play', brand: 'Asian Paints', uses: 'Interior textured finish', img: 'https://picsum.photos/seed/paint1/400/300' },
    { id: 5, category: 'sanitary', name: 'Premium Bath Fittings', brand: 'Jaguar', uses: 'Luxury bathroom fixtures', img: 'https://picsum.photos/seed/jaguar/400/300' },
    { id: 6, category: 'sanitary', name: 'Watero Sanitary Ware', brand: 'Watero', uses: 'Modern bathroom solutions', img: 'https://picsum.photos/seed/watero/400/300' },
    { id: 7, category: 'iron', name: 'TATA Shaktee Roofing', brand: 'TATA', uses: 'Durable roofing sheets', img: 'https://picsum.photos/seed/tata/400/300' },
    { id: 8, category: 'plywood', name: 'Marigold Plywood', brand: 'Marigold', uses: 'Furniture & interior woodwork', img: 'https://picsum.photos/seed/marigold/400/300' },
    { id: 9, category: 'hardware', name: 'Heavy Duty Door Hinges', brand: 'Godrej', uses: 'Main doors, wooden frames', img: 'https://picsum.photos/seed/hinge/400/300' },
    { id: 10, category: 'plumbing', name: 'CPVC & UPVC Pipes & Fittings', brand: 'Astral', uses: 'All sizes available for hot & cold water supply', img: 'https://picsum.photos/seed/pipe/400/300' },
    { id: 11, category: 'electrical', name: 'Copper Wire 1.5 sq mm', brand: 'Finolex', uses: 'House wiring', img: 'https://picsum.photos/seed/wire/400/300' },
    { id: 12, category: 'tools', name: 'Impact Drill Machine 500W', brand: 'Bosch', uses: 'Concrete & wood drilling', img: 'https://picsum.photos/seed/drill/400/300' },
    { id: 13, category: 'aluminium', name: 'Aluminium Sliding Window', brand: 'Jindal', uses: 'Home & office windows', img: 'https://picsum.photos/seed/window/400/300' },
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery) || 
      p.category.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      p.uses.toLowerCase().includes(searchQuery);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase mb-4">Our Products</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our extensive catalog of genuine paints, durable hardware, and premium construction materials.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center px-3 py-2 rounded-md transition-colors text-left",
                        activeCategory === cat.id 
                          ? "bg-orange-50 text-orange-600 font-bold" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      {cat.icon && <span className="mr-3">{cat.icon}</span>}
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 capitalize">
                  {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                {searchQuery && (
                  <p className="text-sm text-gray-500 mt-1">
                    Search results for "{searchQuery}"
                  </p>
                )}
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{filteredProducts.length} items</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">We couldn't find any products matching your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-6 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow relative">
                  <button
                    onClick={() => {
                      if (isInWishlist(product.id)) {
                        removeFromWishlist(product.id);
                      } else {
                        addToWishlist(product);
                      }
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className={cn("h-5 w-5", isInWishlist(product.id) ? "fill-red-500 text-red-500" : "")} />
                  </button>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">{product.brand}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">Best for: {product.uses}</p>
                    
                    <a 
                      href={`https://wa.me/918081250035?text=I want to know the price of ${product.name} (${product.brand})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 py-2.5 rounded font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Ask Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-400">We have thousands of items in store. Just call or WhatsApp us your requirement.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <a href="tel:+918081250035" className="flex-1 md:flex-none bg-white text-gray-900 px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center justify-center">
              <PhoneCall className="mr-2 h-4 w-4" /> Call
            </a>
            <a href="https://wa.me/918081250035" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none bg-green-600 text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-green-500 transition-colors flex items-center justify-center">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
