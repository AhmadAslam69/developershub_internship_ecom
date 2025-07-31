import { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const productImages = [
  '/placeholder.svg',
  '/placeholder.svg', 
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg'
];

const relatedProducts = [
  { id: 1, name: 'Magma Roma & DiGio', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' },
  { id: 2, name: 'Apple Watch Series 6 Original', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' },
  { id: 3, name: 'Magma Roma & DiGio', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' },
  { id: 4, name: 'Nexam Jeans & DiGio', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' },
  { id: 5, name: 'Magma Roma & DiGio Original', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' },
  { id: 6, name: 'Nexam Roma & DiGio', price: 349.00, originalPrice: 390.00, image: '/placeholder.svg' }
];

const youMayLike = [
  { id: 1, name: 'Men Blazer Sets Tuxedo Vests', price: 356.00, originalPrice: 399.00, image: '/placeholder.svg' },
  { id: 2, name: 'Men Shirt Sleeve Polo Comfort', price: 356.00, originalPrice: 399.00, image: '/placeholder.svg' },
  { id: 3, name: 'New Summer Mens Casual T-Shirts', price: 356.00, originalPrice: 399.00, image: '/placeholder.svg' }
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            Home &gt; Offerings &gt; Mens wear &gt; Summer clothing
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="border-4 border-pink-500 rounded-lg p-4 bg-white">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-pink-500' : 'border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">SELLING PRICE</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {renderStars(4)}
                </div>
                <span className="text-sm text-gray-600">4.0 (134 reviews)</span>
                <span className="text-sm text-blue-600">114 sold</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-red-600">$68.00</span>
                <span className="text-xl text-gray-500 line-through">$90.00</span>
                <span className="text-xl font-bold text-gray-900">$78.00</span>
                <span className="text-sm text-gray-600">50-100 pcs</span>
              </div>
            </div>

            {/* Store Info */}
            <div className="bg-white rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Sweater</h3>
                  <p className="text-sm text-gray-600">Quality Trading LLC</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Germany, Berlin</div>
                  <div className="text-sm text-green-600">✓ Verified seller</div>
                  <div className="text-sm text-gray-600">✓ Worldwide shipping</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Send inquiry
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50">
                  Sellers profile
                </button>
              </div>
              
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-full mt-2 flex items-center justify-center gap-2 text-gray-600 hover:text-red-500"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                Save for later
              </button>
            </div>

            {/* Product Details Table */}
            <div className="bg-white rounded-lg p-4 border">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand:</span>
                  <span className="font-medium">Negotiable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Classic, knitted</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium">Plastic material</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Model size:</span>
                  <span className="font-medium">Medium size</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customization:</span>
                  <span className="font-medium">Customized logo and design, custom packages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protection:</span>
                  <span className="font-medium">Refund Policy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty:</span>
                  <span className="font-medium">2 years full warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b">
            <div className="flex">
              {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-3 font-medium ${
                    activeTab === tab.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mt-6">
                  <div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Model:</span>
                        <span className="font-medium">#8786557</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span className="font-medium">Classic, modern</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certificate:</span>
                        <span className="font-medium">ISO-898921252</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">34mm x 450mm x 19mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Memory:</span>
                        <span className="font-medium">36GB RAM</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>✓ Some great feature name here</li>
                        <li>✓ Lorem ipsum dolor sit amet, consectetur</li>
                        <li>✓ Duis aute irure dolor in reprehenderit</li>
                        <li>✓ Some great feature name here</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* You may like */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">You may like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {youMayLike.map((product) => (
              <div key={product.id} className="bg-white rounded-lg p-4 border hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg p-3 border hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h4>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">Super discount on more than 100 USD</h3>
              <p className="text-blue-100">Have you ever finally just write dummy info</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
