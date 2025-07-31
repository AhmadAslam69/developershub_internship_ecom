'use client';

import Image from 'next/image';

const QuoteRequestCard = () => {
  return (
    <div className="relative w-full rounded-md overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Image/backgrounds/group982.png" // <-- Change this to your actual image path
        alt="Warehouse background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black bg-opacity-30 w-full h-full p-6 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Text Content */}
        <div className="text-white max-w-md">
          <h2 className="text-2xl font-semibold leading-tight mb-3">
            An easy way to send <br /> requests to all suppliers
          </h2>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Form Card */}
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
          <h3 className="text-gray-800 font-semibold text-lg mb-4">Send quote to suppliers</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type more details"
              className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Quantity"
                className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Liters</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm w-full transition"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestCard;
