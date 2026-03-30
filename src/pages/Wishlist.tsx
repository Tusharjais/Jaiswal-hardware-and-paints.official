import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black tracking-tight uppercase mb-4 flex items-center justify-center">
            <Heart className="mr-3 h-8 w-8 text-orange-500 fill-orange-500" />
            My Wishlist
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            View and manage the products you've saved for later.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center max-w-2xl mx-auto">
            <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any products to your wishlist yet. Explore our catalog to find what you need.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-orange-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-orange-700 transition-colors shadow-md"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow relative flex flex-col">
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">{product.brand}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-6 flex-grow">Best for: {product.uses}</p>

                    <a
                      href={`https://wa.me/918081250035?text=I want to know the price of ${product.name} (${product.brand})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 py-2.5 rounded font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors mt-auto"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Ask Price
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
