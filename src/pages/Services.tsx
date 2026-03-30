import { Link } from 'react-router-dom';
import { PaintBucket, Truck, ShieldCheck, Wrench, ArrowRight, ArrowDownCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PaintBucket className="h-12 w-12 text-orange-500" />,
      title: "Paint Color Consultation",
      desc: "Not sure which shade matches your vision? Our experts use advanced color matching tools and shade cards from Asian Paints, Berger, and Nerolac to help you select the perfect interior or exterior paint.",
      cta: "Ask for Shade Card"
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-500" />,
      title: "Bulk Supply & Delivery",
      desc: "For contractors and large projects, we offer special wholesale pricing and reliable site delivery across Barabanki. Get your cement, pipes, and bulk paint delivered directly to your construction site.",
      cta: "Get Bulk Quote"
    },
    {
      icon: <ArrowDownCircle className="h-12 w-12 text-orange-500" />,
      title: "Borewell Drilling Services",
      desc: "We provide professional borewell drilling services for homes, farms, and commercial sites. Please note: Our borewell machines are strictly for providing drilling services and are not available for sale.",
      cta: "Book Borewell Service"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-orange-500" />,
      title: "Waterproofing Solutions",
      desc: "Protect your home from leaks and dampness. We provide expert consultation and supply top-grade waterproofing chemicals, roof coatings, and sealants from trusted brands like Dr. Fixit and Asian Paints SmartCare.",
      cta: "Consult Expert"
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-500" />,
      title: "Hardware & Tool Guidance",
      desc: "Choosing the right tool or fitting is crucial for safety and durability. We guide you in selecting the correct power tools, door hardware, plumbing valves, and electrical wires for your specific requirement.",
      cta: "Find Tools"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beyond selling products, we provide expert guidance and support to ensure your construction or renovation project is a success.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8 bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{service.title}</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
              
              <a 
                href="https://wa.me/918081250035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 font-bold uppercase tracking-wide hover:text-orange-700 transition-colors group"
              >
                {service.cta} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-orange-600 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Are you a Contractor or Builder?</h2>
          <p className="text-orange-100 text-lg mb-10">
            Register with us to receive exclusive bulk discounts, priority delivery, and dedicated account management for all your project needs.
          </p>
          <Link 
            to="/quote"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request Contractor Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
