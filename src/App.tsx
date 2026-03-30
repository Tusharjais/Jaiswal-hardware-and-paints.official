/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import ScanQR from './pages/ScanQR';
import Wishlist from './pages/Wishlist';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<RequestQuote />} />
            <Route path="/share" element={<ScanQR />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Layout>
      </Router>
    </WishlistProvider>
  );
}
