import { useState } from 'react';
import { Heart, Grid3X3, List, ChevronLeft, ChevronRight, Star } from 'lucide-react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const products = [
  {
    id: 1,
    name: "Canon Oneus EOS 2000, Black 50x zoom",
    price: 998.00,
    originalPrice: 1199.00,
    rating: 4.5,
    reviews: 134,
    image: "/placeholder.svg",
    freeShipping: true,
    featured: true
  },
  {
    id: 2,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 998.00,
    rating: 4.0,
    reviews: 104,
    image: "/placeholder.svg",
    freeShipping: true
  },
  {
    id: 3,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 998.00,
    rating: 4.0,
    reviews: 104,
    image: "/placeholder.svg",
    freeShipping: true
  },
  {
    id: 4,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 998.00,
    rating: 4.0,
    reviews: 104,
    image: "/placeholder.svg",
    freeShipping: true
  },
  {
    id: 5,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 998.00,
    originalPrice: 1199.00,
    rating: 4.0,
    reviews: 104,
    image: "/placeholder.svg",
    freeShipping: true
  },
  {
    id: 6,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 998.00,
    rating: 4.0,
    reviews: 104,
    image: "/placeholder.svg",
    freeShipping: true
  }
];

const brands = ['Samsung', 'Apple', 'BlackBerry', 'HTC', 'Razor', 'Lenovo'];
const features = ['Metallic', 'Plastic cover', 'USB Port', 'Super power', 'Large Memory'];

const ComputerAndTech = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [condition, setCondition] = useState('any');
  const [rating, setRating] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Mobile accessories');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            Home &gt; Offerings &gt; Mobile accessories &gt; Samsum cashing
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Category */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => handleCategoryClick('Mobile accessories')}
                  className={`block w-full text-left font-medium transition-colors hover:text-blue-700 ${
                    selectedCategory === 'Mobile accessories' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Mobile accessories
                </button>
                <button 
                  onClick={() => handleCategoryClick('Electronics')}
                  className={`block w-full text-left ml-4 transition-colors hover:text-blue-600 ${
                    selectedCategory === 'Electronics' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Electronics
                </button>
                <button 
                  onClick={() => handleCategoryClick('Computers')}
                  className={`block w-full text-left ml-4 transition-colors hover:text-blue-600 ${
                    selectedCategory === 'Computers' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Computers
                </button>
                <button 
                  onClick={() => handleCategoryClick('Smartphones')}
                  className={`block w-full text-left ml-4 transition-colors hover:text-blue-600 ${
                    selectedCategory === 'Smartphones' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Smartphones
                </button>
                <button 
                  onClick={() => handleCategoryClick('Kitchen')}
                  className={`block w-full text-left ml-4 transition-colors hover:text-blue-600 ${
                    selectedCategory === 'Kitchen' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Kitchen
                </button>
                <button 
                  onClick={() => handleCategoryClick('Automobiles')}
                  className={`block w-full text-left ml-4 transition-colors hover:text-blue-600 ${
                    selectedCategory === 'Automobiles' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  Automobiles
                </button>
                <button className="text-blue-600 text-xs hover:text-blue-700 transition-colors">
                  See all
                </button>
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{brand}</span>
                  </label>
                ))}
                <div className="text-blue-600 text-xs mt-2">See all</div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <div className="space-y-2">
                {features.map((feature) => (
                  <label key={feature} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureChange(feature)}
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </label>
                ))}
                <div className="text-blue-600 text-xs mt-2">See all</div>
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Price range</h3>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({...prev, min: e.target.value}))}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({...prev, max: e.target.value}))}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <button className="w-full bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700">
                Apply
              </button>
            </div>

            {/* Condition */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Condition</h3>
              <div className="space-y-2">
                {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond) => (
                  <label key={cond} className="flex items-center text-sm">
                    <input
                      type="radio"
                      name="condition"
                      value={cond.toLowerCase()}
                      checked={condition === cond.toLowerCase()}
                      onChange={(e) => setCondition(e.target.value)}
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{cond}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Ratings</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label key={stars} className="flex items-center text-sm">
                    <input
                      type="radio"
                      name="rating"
                      value={stars.toString()}
                      checked={rating === stars.toString()}
                      onChange={(e) => setRating(e.target.value)}
                      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div className="flex">
                      {Array.from({ length: stars }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      {Array.from({ length: 5 - stars }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">12,911 items</span> in <span className="font-medium">Mobile accessory</span>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" />
                    Verified only
                  </label>
                  <span className="text-sm text-gray-600">Featured</span>
                  <div className="flex border rounded">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg p-4 hover:shadow-md transition-shadow ${
                    product.featured ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  <div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row gap-4'}`}>
                    <div className={`relative ${viewMode === 'grid' ? 'mb-3' : 'w-32 h-32 flex-shrink-0'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`rounded-lg object-cover ${
                          viewMode === 'grid' ? 'w-full h-48' : 'w-full h-full'
                        }`}
                      />
                      <button 
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 transition-colors ${
                            favorites.includes(product.id) 
                              ? 'text-red-500 fill-red-500' 
                              : 'text-gray-400 hover:text-red-400'
                          }`} 
                        />
                      </button>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} · {product.reviews} orders
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      
                      {product.freeShipping && (
                        <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                          Free Shipping
                        </span>
                      )}
                      
                      <p className="text-sm text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua
                      </p>
                      
                      <button className="text-blue-600 text-sm hover:underline mt-1">
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white rounded-lg p-4 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Show 10</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">2</button>
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">3</button>
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">4</button>
                  <span className="text-gray-400">...</span>
                  <button className="p-2 text-gray-600 hover:text-gray-800">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
export default ComputerAndTech;