'use client';

import Image from "next/image";

const categories = [
  {
    title: "Home and outdoor",
   
    image: "/assets/Image/backgrounds/Group969.png", // adjust path
    items: [
      { name: "Soft chairs", price: 19, image: "/Image/interior/1.jpg" },
      { name: "Sofa & chair", price: 19, image: "/Image/interior/6.jpg" },
      { name: "Kitchen dishes", price: 19, image: "/Image/interior/3.jpg" },
      { name: "Smart watches", price: 19, image: "/Image/interior/5.jpg" },
      { name: "Kitchen mixer", price: 100, image: "/Image/interior/9.jpg" },
      { name: "Blenders", price: 39, image: "/Image/interior/8.jpg" },
      { name: "Home appliance", price: 19, image: "/Image/interior/7.jpg" },
      { name: "Coffee maker", price: 10, image: "/Image/interior/4.jpg" },
    ],
  },
  {
    title: "Consumer electronics and gadgets",
    
    image: "/assets/Image/backgrounds/image98.png",
    items: [
      { name: "Smart watches", price: 19, image: "/Image/tech/8.jpg" },
      { name: "Cameras", price: 89, image: "/Image/tech/6.jpg" },
      { name: "Headphones", price: 10, image: "/Image/tech/9.jpg" },
      { name: "Smart watches", price: 90, image: "/Image/tech/8.jpg" },
      { name: "Gaming set", price: 35, image: "/Image/tech/5.jpg" },
      { name: "Laptops & PC", price: 340, image: "/Image/tech/7.jpg" },
      { name: "Smartphones", price: 19, image: "/Image/tech/1.jpg" },
      { name: "Electric kettle", price: 240, image: "/Image/tech/10.jpg" },
    ],
  },
];

const CategorySection = () => {
  return (

    <div className="grid gap-6 ">
      {categories.map((section) => (
        <div key={section.title} className="grid grid-cols-5 bg-white rounded-md shadow">
          {/* Left Side Banner */}
          <div className="col-span-1 relative p-4 flex flex-col justify-between overflow-hidden min-h-[200px]">
            <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover opacity-200"
            />
            <div className="relative z-10">
                <h3 className="font-semibold text-lg text-gray-800">{section.title}</h3>
                <button className="mt-4 bg-white px-4 py-2 text-sm text-gray-700 rounded border hover:bg-gray-50 transition w-fit">
                Source now
                </button>
            </div>
            </div>


          {/* Category Items Grid */}
          <div className="col-span-4 grid grid-cols-4 gap-px bg-gray-100">
            {section.items.map((item) => (
              <div key={item.name} className="bg-white p-3 flex flex-col items-center text-center gap-2">
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">From USD {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
