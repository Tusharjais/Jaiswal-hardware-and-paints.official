import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, Search, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useWishlist } from '../../context/WishlistContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Share', path: '/share' },
  ];

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-orange-500" />
              <span>Sadruddinpur main road, Barabanki - 225203</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1 text-orange-500" />
              <span>Every Day: 8:00 AM - 8:00 PM | Online 24x7</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="tel:+918081250035" className="flex items-center hover:text-white transition-colors">
              <Phone className="h-3 w-3 mr-1 text-orange-500" />
              <span>+91 80812 50035</span>
            </a>
            <a 
              href="https://wa.me/918081250035" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-3 py-1 rounded-full font-medium hover:bg-green-500 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn(
        "bg-white transition-all duration-300 border-b border-gray-100",
        isScrolled ? "shadow-md py-3" : "py-4"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-gray-900 leading-none">JAISWAL</span>
              <span className="text-sm font-bold tracking-widest text-orange-600 leading-none mt-1">HARDWARE & PAINTS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-32 lg:w-48 xl:w-64 pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full text-sm transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>

            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors hover:text-orange-600",
                  location.pathname === link.path ? "text-orange-600" : "text-gray-700"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-600 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link 
              to="/quote"
              className="bg-orange-600 text-white px-5 py-2.5 rounded font-bold uppercase text-sm tracking-wide hover:bg-orange-700 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg text-base transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wide",
                  location.pathname === link.path ? "bg-orange-50 text-orange-600" : "text-gray-900 hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/wishlist"
              className={cn(
                "block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wide flex items-center justify-between",
                location.pathname === '/wishlist' ? "bg-orange-50 text-orange-600" : "text-gray-900 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-3" />
                Wishlist
              </div>
              {wishlist.length > 0 && (
                <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/quote"
              className="mt-4 block w-full text-center bg-orange-600 text-white px-5 py-3 rounded font-bold uppercase tracking-wide"
            >
              Get a Quote
            </Link>
            <a
              href="https://wa.me/918081250035"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full text-center bg-green-600 text-white px-5 py-3 rounded font-bold uppercase tracking-wide"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
