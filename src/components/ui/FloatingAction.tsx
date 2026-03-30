import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingAction() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a 
        href="tel:+918081250035"
        className="bg-orange-600 text-white p-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
      
      <a 
        href="https://wa.me/918081250035"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center group relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
