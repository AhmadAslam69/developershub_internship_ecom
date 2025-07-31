import { useState } from 'react';
import { ChevronLeft, Shield, Headphones, Truck, Minus, Plus } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Material: Plastic",
    seller: "Best factory LLC",
    price: 78.99,
    originalPrice: null,
    quantity: 3,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "T-shirts with multiple colors, for men and lady", 
    size: "medium",
    color: "blue",
    material: "Material: Plastic",
    seller: "Best factory LLC",
    price: 39.00,
    originalPrice: null,
    quantity: 3,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "T-shirts with multiple colors, for men and lady",
    size: "medium", 
    color: "blue",
    material: "Material: Plastic",
    seller: "Best Market",
    price: 170.50,
    originalPrice: null,
    quantity: 1,
    image: "/placeholder.svg"
  }
];

const savedItems = [
  {
    id: 1,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 99.50,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "GoPro HERO4 4K Action Camera - Black", 
    price: 99.50,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 99.50,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "GoPro HERO4 4K Action Camera - Black",
    price: 99.50,
    image: "/placeholder.svg"
  }
];

export default function ShoppingCart() {
  const [items, setItems] = useState(cartItems);
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 60.00;
  const tax = 14.00;
  const total = subtotal - discount + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">My cart ({items.length})</h1>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Size: {item.size}, Color: {item.color}, {item.material}</div>
                        <div>Seller: {item.seller}</div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-3">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 text-sm hover:underline"
                        >
                          Remove
                        </button>
                        
                        <button className="text-blue-600 text-sm hover:underline">
                          Save for later
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-lg font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </div>
                      
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 min-w-[3rem] text-center">
                          Qty: {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Shop */}
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ChevronLeft className="w-4 h-4" />
              Back to shop
            </button>

            {/* Remove All */}
            <button className="text-blue-600 text-sm hover:underline">
              Remove all
            </button>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Shield className="w-5 h-5" />
                <div>
                  <div className="font-medium">Secure payment</div>
                  <div className="text-sm">Have you ever, finally just write</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Headphones className="w-5 h-5" />
                <div>
                  <div className="font-medium">Customer support</div>
                  <div className="text-sm">Have you ever, finally just write</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5" />
                <div>
                  <div className="font-medium">Free delivery</div>
                  <div className="text-sm">Have you ever, finally just write</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-gray-600 mb-3">Have a coupon?</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  Apply
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium text-green-600">+ ${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">
                Checkout
              </button>
              
              {/* Payment Icons */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-5 bg-red-500 rounded"></div>
                <div className="w-8 h-5 bg-blue-600 rounded"></div>
                <div className="w-8 h-5 bg-gray-800 rounded"></div>
                <div className="w-8 h-5 bg-yellow-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Saved for Later */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Saved for later</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {savedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">
                  {item.name}
                </h3>
                <div className="text-lg font-bold text-gray-900 mb-3">
                  ${item.price.toFixed(2)}
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-blue-600 text-sm hover:text-blue-700">
                  <Plus className="w-4 h-4" />
                  Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
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
