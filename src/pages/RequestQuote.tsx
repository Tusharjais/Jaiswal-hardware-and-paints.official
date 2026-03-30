import React, { useState } from 'react';
import { MessageCircle, CheckCircle } from 'lucide-react';

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or WhatsApp API
    setSubmitted(true);
    
    // Simulate redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open('https://wa.me/918081250035?text=I%20have%20submitted%20a%20quote%20request%20on%20your%20website.', '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Quote Requested!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for reaching out. We are redirecting you to WhatsApp to confirm your details.
          </p>
          <a 
            href="https://wa.me/918081250035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-green-500 transition-colors shadow-lg w-full"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Go to WhatsApp Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase mb-6">Request a Quote</h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below with your requirements, and our team will get back to you with the best wholesale pricing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="location" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Project Location *</label>
                <input 
                  type="text" 
                  id="location" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="e.g. Barabanki City, Lucknow"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Main Category *</label>
                <select 
                  id="category" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="tiles">Tiles & Marble (1x1, 1x1.5, 2x2, 2x4)</option>
                  <option value="paints">Paints & Coatings</option>
                  <option value="hardware">Hardware & Tools</option>
                  <option value="plywood">Plywood & Doors</option>
                  <option value="iron">Iron & Roofing</option>
                  <option value="aluminium">Aluminium Doors & Windows</option>
                  <option value="plumbing">Plumbing & Water Tanks</option>
                  <option value="electrical">Electrical Supplies</option>
                  <option value="sanitary">Sanitary Ware</option>
                  <option value="mixed">Mixed Requirements</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Detailed Requirements *</label>
              <textarea 
                id="requirements" 
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                placeholder="Please list the products, brands, and approximate quantities you need. E.g., 5 buckets of Asian Paints Apex Ultima (20L), 100ft Astral CPVC/UPVC pipe..."
              ></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button 
                type="submit"
                className="w-full bg-orange-600 text-white px-8 py-5 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-orange-700 transition-colors shadow-xl flex items-center justify-center"
              >
                Submit Request
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                We typically respond within 2-4 hours during business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
