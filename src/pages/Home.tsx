import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, PaintBucket, Wrench, Droplet, Zap, Hammer, Bath, PhoneCall, MessageCircle, DoorClosed, Layers, AppWindow, ArrowDownCircle, Grid, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { name: 'Tiles & Marble', icon: <Grid className="h-8 w-8" />, desc: '1x1, 1x1.5, 2x2, 2x4 tiles & premium marble', color: 'bg-indigo-50 text-indigo-600' },
    { name: 'Paints', icon: <PaintBucket className="h-8 w-8" />, desc: 'Premium interior & exterior paints', color: 'bg-blue-50 text-blue-600' },
    { name: 'Hardware', icon: <Wrench className="h-8 w-8" />, desc: 'Durable tools & fittings', color: 'bg-orange-50 text-orange-600' },
    { name: 'Plumbing', icon: <Droplet className="h-8 w-8" />, desc: 'Pipes, valves & water tanks', color: 'bg-cyan-50 text-cyan-600' },
    { name: 'Plywood', icon: <DoorClosed className="h-8 w-8" />, desc: 'Doors & shuttering ply', color: 'bg-amber-50 text-amber-600' },
    { name: 'Iron', icon: <Layers className="h-8 w-8" />, desc: 'Pipes, roofing & structural', color: 'bg-slate-50 text-slate-600' },
    { name: 'Aluminium', icon: <AppWindow className="h-8 w-8" />, desc: 'Doors & window sections', color: 'bg-zinc-50 text-zinc-600' },
    { name: 'Electrical', icon: <Zap className="h-8 w-8" />, desc: 'Wires, switches & lighting', color: 'bg-yellow-50 text-yellow-600' },
    { name: 'Tools', icon: <Hammer className="h-8 w-8" />, desc: 'Power & hand tools', color: 'bg-red-50 text-red-600' },
    { name: 'Sanitary', icon: <Bath className="h-8 w-8" />, desc: 'Bathroom fittings & fixtures', color: 'bg-teal-50 text-teal-600' },
  ];

  const brands = [
    { name: 'Johnson', logo: 'https://picsum.photos/seed/johnson/150/80?blur=2' },
    { name: 'Kajaria', logo: 'https://picsum.photos/seed/kajaria/150/80?blur=2' },
    { name: 'Jaguar', logo: 'https://picsum.photos/seed/jaguar/150/80?blur=2' },
    { name: 'Watero', logo: 'https://picsum.photos/seed/watero/150/80?blur=2' },
    { name: 'TATA', logo: 'https://picsum.photos/seed/tata/150/80?blur=2' },
    { name: 'Marigold', logo: 'https://picsum.photos/seed/marigold/150/80?blur=2' },
    { name: 'Berger', logo: 'https://picsum.photos/seed/berger/150/80?blur=2' },
    { name: 'Asian Paints', logo: 'https://picsum.photos/seed/asianpaints/150/80?blur=2' },
  ];

  const faqs = [
    { q: 'Do you offer bulk discounts for contractors?', a: 'Yes, we provide special wholesale pricing and bulk discounts for contractors, builders, and painters. Contact us for a custom quote.' },
    { q: 'Can you help me choose the right paint color?', a: 'Absolutely! We offer expert paint shade guidance and color consultation to help you find the perfect match for your home.' },
    { q: 'Do you deliver materials to the construction site?', a: 'Yes, we offer delivery support for large orders within Barabanki and surrounding areas. Please ask about delivery terms when placing your order.' },
    { q: 'Are your products genuine and branded?', a: '100% genuine. We are authorized dealers for top brands like Asian Paints, Berger, and leading hardware manufacturers.' },
    { q: 'What are your store hours?', a: 'We are open every day from 8:00 AM to 8:00 PM, including Sundays. Our online services and WhatsApp support are available 24x7.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hardwarestore/1920/1080" 
            alt="Hardware Store Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6"
            >
              Premium Paints, Tiles, Marble, <br/>
              Doors & <span className="text-orange-500">Reliable Hardware</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl"
            >
              Serving Sadruddinpur and nearby areas for 27+ years. The most trusted destination for home owners, contractors, and builders. Get genuine products at the best local prices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918081250035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded font-bold uppercase tracking-wide flex items-center justify-center transition-colors shadow-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Quote on WhatsApp
                </a>
                <a 
                  href="tel:+918081250035"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded font-bold uppercase tracking-wide flex items-center justify-center transition-colors shadow-lg"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-gray-300"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                100% Genuine Products
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                Best Price Locally
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                Fast Availability
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                50 Lakh+ Happy & Repeat Customers
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase">Everything You Need</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">From foundation to finish, we stock a comprehensive range of construction materials, paints, and hardware.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link 
                key={idx} 
                to={`/products?category=${cat.name.toLowerCase()}`}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
              >
                <div className={`p-4 rounded-full ${cat.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-500 mb-6">{cat.desc}</p>
                <span className="text-orange-600 font-semibold flex items-center group-hover:text-orange-700">
                  Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Authorized Dealers For Top Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, idx) => (
              <img 
                key={idx} 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Owners Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-100 shadow-sm">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase mb-4">A Legacy of Trust & Quality</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Founded on the principles of honesty and customer satisfaction, our family business has been serving the community with dedication. We take personal pride in every product we sell and every customer we serve.
              </p>
              <div className="flex flex-col border-l-4 border-orange-500 pl-4">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Proudly Owned & Operated By</span>
                <span className="text-2xl font-black text-gray-900">Mr. Sanjay Jaiswal & Mr. Ranjeet Jaiswal</span>
                <span className="text-orange-600 font-bold mt-1">Sons of Mr. Arun Jaiswal</span>
              </div>
            </div>
            <div className="hidden md:flex flex-shrink-0 items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-white flex items-center justify-center border-8 border-orange-100 shadow-xl">
                <ShieldCheck className="h-20 w-20 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight uppercase mb-6">More Than Just A Store</h2>
              <p className="text-gray-400 mb-8 text-lg">We provide expert guidance and specialized services to ensure your project is a success, whether you're a homeowner or a professional contractor.</p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Paint Color Consultation', desc: 'Expert advice on shade selection and combinations.' },
                  { title: 'Contractor Supply & Bulk Pricing', desc: 'Special rates and dedicated support for builders.' },
                  { title: 'Borewell Drilling Services', desc: 'Professional boring services. (Machines for service use, not for sale).' },
                  { title: 'Waterproofing Solutions', desc: 'Professional guidance on protecting your structures.' },
                  { title: 'Delivery Support', desc: 'Convenient material delivery to your site.' }
                ].map((service, idx) => (
                  <li key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/20 text-orange-500">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold">{service.title}</h4>
                      <p className="mt-1 text-gray-400">{service.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link to="/services" className="text-orange-500 font-bold uppercase tracking-wide flex items-center hover:text-orange-400 transition-colors">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/seed/contractor/800/600" 
                alt="Contractor Services" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase">Trusted By 50 Lakh+ Happy & Repeat Customers</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Join our growing family of over 50 lakh happy and loyal customers who return to us for all their building, paint, and hardware needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul S.', role: 'Homeowner', text: 'Best paint shop in Barabanki. They helped me choose the perfect Asian Paints shade for my living room and gave a great discount.' },
              { name: 'Amit Contractor', role: 'Builder', text: 'I buy all my plumbing and electrical supplies from Jaiswal Hardware. Genuine products, fair prices, and they always have stock when I need it urgently.' },
              { name: 'Vikram Singh', role: 'Interior Designer', text: 'Highly professional service. The owner is very knowledgeable about the latest waterproofing chemicals and sanitary fittings.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">Need Paint or Hardware Today?</h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">Skip the wait. Send us your requirement list on WhatsApp and we'll keep your order ready or arrange delivery.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/918081250035"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
            >
              WhatsApp Us Now
            </a>
            <Link 
              to="/quote"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              Request Formal Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
