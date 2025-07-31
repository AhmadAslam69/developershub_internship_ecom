'use client';

import Image from 'next/image';

const recommendedItems = [
  {
    name: "T-shirts with multiple colors, for men",
    price: "$10.30",
    image: "/Image/cloth/1.jpg",
  },
  {
    name: "Jeans shorts for men blue color",
    price: "$10.30",
    image: "/Image/cloth/3.jpg",
  },
  {
    name: "Brown winter coat medium size",
    price: "$12.50",
    image: "/Image/cloth/7.jpg",
  },
  {
    name: "Jeans bag for travel for men",
    price: "$34.00",
    image: "/Image/cloth/5.jpg",
  },
  {
    name: "Leather wallet",
    price: "$99.00",
    image: "/Image/cloth/4.jpg",
  },
  {
    name: "Canon camera black, 100x zoom",
    price: "$9.99",
    image: "/Image/tech/9.jpg",
  },
  {
    name: "Headset for gaming with mic",
    price: "$8.99",
    image: "/Image/tech/9.jpg",
  },
  {
    name: "Smartwatch silver color modern",
    price: "$10.30",
    image: "/Image/cloth/5.jpg",
  },
  {
    name: "Blue wallet for men leather metarial",
    price: "$10.30",
    image: "/Image/tech/5.jpg",
  },
  {
    name: "Jeans bag for travel for men",
    price: "$80.95",
    image: "/Image/tech/10.jpg",
  },
];

const RecommendedItems = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recommendedItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm p-4 hover:shadow-md transition cursor-pointer"
          >
            <div className="relative w-full aspect-square mb-3">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-gray-800">{item.price}</p>
            <p className="text-xs text-gray-500 mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
