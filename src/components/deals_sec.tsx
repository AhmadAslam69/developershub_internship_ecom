'use client';

import Image from "next/image";
import { useEffect, useState } from "react";




const products = [
  {
    name: "Smart watches",
    discount: "-25%",
    image: "/Image/tech/8.jpg",
  },
  {
    name: "Laptops",
    discount: "-15%",
    image: "/Image/tech/7.jpg",
  },
  {
    name: "GoPro cameras",
    discount: "-40%",
    image: "/Image/tech/3.jpg",
  },
  {
    name: "Headphones",
    discount: "-25%",
    image: "/Image/tech/9.jpg",
  },
  {
    name: "Canon cameras",
    discount: "-25%",
    image: "/Image/tech/6.jpg",
  },
];

// ✅ Fixed: Declare endTime ONCE
const endTime = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 days from now

const getTimeRemaining = (endTime: Date) => {
  const total = endTime.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const DealsSection = () => {
    const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endTime));

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(endTime);
      setTimeLeft(remaining);

      if (remaining.total <= 0) clearInterval(timer); // stop timer if expired
    }, 1000);

    return () => clearInterval(timer); // clean up
  }, []);

  if (!isClient) return null;

  return (
    <div className="bg-white mt-6 rounded-md shadow p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-black font-semibold text-lg">Deals and offers</h2>
          <p className="text-sm text-gray-500">Hygiene equipments</p>
        </div>

        {/* Timer */}
        <div className="flex gap-2 text-center text-xs text-white">
          <div className="bg-gray-700 px-2 py-1 rounded w-[50px]">
            <p className="font-bold">{String(timeLeft.days).padStart(2, "0")}</p>
            <p>Days</p>
          </div>
          <div className="bg-gray-700 px-2 py-1 rounded w-[50px]">
            <p className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</p>
            <p>Hour</p>
          </div>
          <div className="bg-gray-700 px-2 py-1 rounded w-[50px]">
            <p className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</p>
            <p>Min</p>
          </div>
          <div className="bg-gray-700 px-2 py-1 rounded w-[50px]">
            <p className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</p>
            <p>Sec</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="text-black border rounded-md p-3 flex flex-col items-center justify-between"
          >
            <div className="w-24 h-24 relative mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-center">{product.name}</p>
            <div className="text-xs mt-2 bg-red-100 text-red-600 px-3 py-1 rounded-full">
              {product.discount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
