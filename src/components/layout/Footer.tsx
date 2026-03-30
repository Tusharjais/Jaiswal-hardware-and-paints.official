import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white leading-none">JAISWAL</span>
              <span className="text-sm font-bold tracking-widest text-orange-500 leading-none mt-1">HARDWARE & PAINTS</span>
            </Link>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              Serving Sadruddinpur and nearby areas for 27+ years. Your trusted local destination for premium paints, reliable hardware, and quality construction materials.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/jaiswal_hardware_and_paints" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Our Products</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/share" className="hover:text-orange-500 transition-colors">Share Website</Link></li>
              <li><Link to="/quote" className="hover:text-orange-500 transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=tiles" className="hover:text-orange-500 transition-colors">Tiles & Marble</Link></li>
              <li><Link to="/products?category=paints" className="hover:text-orange-500 transition-colors">Paints & Coatings</Link></li>
              <li><Link to="/products?category=hardware" className="hover:text-orange-500 transition-colors">Hardware & Tools</Link></li>
              <li><Link to="/products?category=plywood" className="hover:text-orange-500 transition-colors">Plywood & Doors</Link></li>
              <li><Link to="/products?category=iron" className="hover:text-orange-500 transition-colors">Iron & Roofing</Link></li>
              <li><Link to="/products?category=aluminium" className="hover:text-orange-500 transition-colors">Aluminium Sections</Link></li>
              <li><Link to="/products?category=plumbing" className="hover:text-orange-500 transition-colors">Plumbing & Tanks</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Sadruddinpur main road,<br />
                  Barabanki, Uttar Pradesh - 225203<br />
                  <span className="text-gray-400 mt-1 inline-block">GSTIN: 09BXBPK5290F1ZE</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918081250035" className="hover:text-white transition-colors">+91 80812 50035</a>
                  <a href="tel:+919415374772" className="hover:text-white transition-colors">+91 94153 74772</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                <a href="mailto:sj2544789@gmail.com" className="hover:text-white transition-colors">sj2544789@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jaiswal Hardware & Paints. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
