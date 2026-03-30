import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Copy, CheckCircle2, Smartphone, Star, Camera } from 'lucide-react';

export default function ScanQR() {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Setting a custom domain placeholder as requested. 
    // When you deploy to your actual domain, you can change this back to window.location.origin
    setUrl('https://jais-hardware.com');
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Jaiswal Hardware & Paints',
          text: 'Check out Jaiswal Hardware & Paints for all your building and painting needs!',
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Share Our Website
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan the QR code below or share the link with your friends, family, and contractors.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12 flex flex-col items-center">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100 mb-8">
              {url ? (
                <QRCodeSVG 
                  value={url} 
                  size={250}
                  level="H"
                  includeMargin={true}
                  className="w-full h-auto max-w-[250px]"
                />
              ) : (
                <div className="w-[250px] h-[250px] bg-gray-100 animate-pulse rounded-lg"></div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Scan to Visit
            </h2>
            <p className="text-gray-500 text-center mb-8 flex items-center justify-center">
              <Smartphone className="w-5 h-5 mr-2 text-orange-500" />
              Point your phone camera at the QR code
            </p>

            <div className="w-full max-w-md">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-2 mb-6">
                <input 
                  type="text" 
                  value={url} 
                  readOnly 
                  className="bg-transparent border-none outline-none flex-1 text-gray-600 px-3 truncate"
                />
                <button 
                  onClick={handleCopy}
                  className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded border border-gray-200 transition-colors flex items-center"
                  title="Copy Link"
                >
                  {copied ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-bold uppercase tracking-wide transition-colors"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </div>

          </div>
          
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="font-medium">Jaiswal Hardware & Paints</p>
            <p className="text-gray-400 text-sm mt-1">Your trusted partner for building materials</p>
          </div>
        </div>

        {/* Review & Photos Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center flex flex-col h-full">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8 text-orange-500 fill-current" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
              Rate Your Experience
            </h2>
            <p className="text-gray-600 mb-8 flex-grow">
              Your feedback helps us improve and helps others find the best hardware and paint store in Sadruddinpur, Barabanki. We would love to hear from you!
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Jaiswal+Hardware+and+Paints+Sadruddinpur+Barabanki" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded font-bold uppercase tracking-wide transition-colors shadow-lg w-full"
            >
              <Star className="w-5 h-5 mr-2 fill-current" />
              Leave a Google Review
            </a>
          </div>

          {/* Share Photos Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center flex flex-col h-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
              Share Project Photos
            </h2>
            <p className="text-gray-600 mb-8 flex-grow">
              Did you recently complete a project using our paints, tiles, or hardware? Share your photos with us on WhatsApp so we can feature your beautiful work!
            </p>
            <a 
              href="https://wa.me/918081250035?text=Hi!%20I%20would%20like%20to%20share%20some%20photos%20of%20my%20project%20using%20materials%20from%20Jaiswal%20Hardware." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded font-bold uppercase tracking-wide transition-colors shadow-lg w-full"
            >
              <Camera className="w-5 h-5 mr-2" />
              Share Photos on WA
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
