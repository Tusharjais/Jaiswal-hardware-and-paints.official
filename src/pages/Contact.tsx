import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We're here to help with your hardware, paint, and construction needs in Barabanki.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mb-8">Get In Touch</h2>
            <div className="h-1 w-20 bg-orange-500 mb-10"></div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mr-6 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Store Address</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Jaiswal Hardware and Paints<br/>
                    Sadruddinpur main road,<br/>
                    Barabanki, Uttar Pradesh - 225203<br/>
                    <span className="font-semibold mt-2 inline-block text-gray-800">GSTIN:</span> 09BXBPK5290F1ZE
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-orange-600 font-bold uppercase tracking-wide hover:text-orange-700 transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mr-6 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Numbers</h3>
                  <div className="flex flex-col space-y-2 text-gray-600 text-lg">
                    <a href="tel:+918081250035" className="hover:text-orange-600 transition-colors">+91 80812 50035</a>
                    <a href="tel:+919415374772" className="hover:text-orange-600 transition-colors">+91 94153 74772</a>
                    <a href="tel:+919170175146" className="hover:text-orange-600 transition-colors">+91 91701 75146</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mr-6 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                  <div className="flex flex-col space-y-2 text-gray-600 text-lg">
                    <a href="mailto:sj2544789@gmail.com" className="hover:text-orange-600 transition-colors">sj2544789@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-50 p-4 rounded-full text-orange-600 mr-6 shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 text-lg">
                    Every Day: 8:00 AM - 8:00 PM<br/>
                    Online Service: 24x7
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/918081250035"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-green-500 transition-colors shadow-lg"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Product/Service Required</label>
                <input 
                  type="text" 
                  id="product" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="e.g. Asian Paints Royale, CPVC & UPVC Pipes"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gray-900 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="w-full h-96 bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.29338087816!2d81.0827116!3d26.9300643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399961705353112f%3A0x6b4457313c41525!2sBarabanki%2C%20Uttar%2C%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Jaiswal Hardware Location"
        ></iframe>
      </div>
    </div>
  );
}
