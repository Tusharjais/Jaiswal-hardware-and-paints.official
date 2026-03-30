import { CheckCircle, Users, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hardwarestore2/1920/1080" 
            alt="Store Interior" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Building trust through quality materials and exceptional service in Sadruddinpur and nearby areas.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mb-6">Our Story</h2>
            <div className="h-1 w-20 bg-orange-500 mb-8"></div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Established over 27 years ago with a vision to provide the highest quality construction materials, paints, and hardware to the people of Sadruddinpur and nearby areas, <strong>Jaiswal Hardware and Paints</strong> has grown into a trusted local institution.
              </p>
              <p>
                We understand that building a home or completing a project requires reliable materials. That's why we partner directly with top brands like Asian Paints, Berger, and leading hardware manufacturers to ensure every product on our shelves meets strict quality standards.
              </p>
              <p>
                Our team is not just here to sell; we are here to advise, guide, and support you from the foundation to the final coat of paint.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col border-l-4 border-orange-500 pl-4">
              <span className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Proudly Owned & Operated By</span>
              <span className="text-2xl font-black text-gray-900">Mr. Sanjay Jaiswal & Mr. Ranjeet Jaiswal</span>
              <span className="text-orange-600 font-bold mt-1">Sons of Mr. Arun Jaiswal</span>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">27+ Years</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Of Trust & Service</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">50 Lakh+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Happy & Repeat Customers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gray-900 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/seed/storeowner/800/1000" 
              alt="Store Owner" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase">Why Customers Trust Us</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Uncompromising Quality', desc: 'We never stock counterfeit or substandard materials. Your safety and project durability are our priorities.' },
              { title: 'Fair & Transparent Pricing', desc: 'We offer the best local prices without hidden markups. Contractors and bulk buyers receive special wholesale rates.' },
              { title: 'Expert Guidance', desc: 'Our knowledgeable staff helps you choose the right paint shade, plumbing fitting, or power tool for your specific need.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="mx-auto bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-orange-600 mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-6" />
        <h2 className="text-3xl font-black tracking-tight text-gray-900 uppercase mb-4">Visit Our Store</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sadruddinpur main road, Barabanki, UP - 225203.<br/>
          <span className="font-semibold text-gray-800 mt-2 inline-block">GSTIN:</span> 09BXBPK5290F1ZE<br/>
          Open Every Day, 8:00 AM - 8:00 PM. Online Service 24x7.
        </p>
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex bg-gray-900 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors shadow-lg"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
