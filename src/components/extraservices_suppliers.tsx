'use client';

import Image from 'next/image';
import {
  Search,
  FileText,
  Send,
  ShieldCheck
} from 'lucide-react';

// Services with correct image key
const services = [
  {
    title: "Source from Industry Hubs",
    image: "/assets/Image/backgrounds/Maskgroup.png",
    icon: <Search size={20} />,
  },
  {
    title: "Customize Your Products",
    image: "/assets/Image/backgrounds/Maskgroup1.png",
    icon: <FileText size={20} />,
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    image: "/assets/Image/backgrounds/image106.png", // FIXED TYPO HERE
    icon: <Send size={20} />,
  },
  {
    title: "Product monitoring and inspection",
    image: "/assets/Image/backgrounds/image107.png",
    icon: <ShieldCheck size={20} />,
  },
];

// All supplier flags are images now
const suppliers = [
  { name: "Arabic Emirates", domain: "shopname.ae", flag: "/assets/Layout1/Image/flags/AE@2x.png" },
  { name: "Australia", domain: "shopname.ae", flag: "/assets/Layout1/Image/flags/icon.png" },
  { name: "United States", domain: "shopname.ae", flag: "/assets/Layout1/Image/flags/US@2x.png" },
  { name: "Russia", domain: "shopname.ru", flag: "/assets/Layout1/Image/flags/RU@2x.png" },
  { name: "Italy", domain: "shopname.it", flag: "/assets/Layout1/Image/flags/IT@2x.png" },
  { name: "Denmark", domain: "denmark.com.dk", flag: "/assets/Layout1/Image/flags/DK@2x.png" },
  { name: "France", domain: "shopname.com.fr", flag: "/assets/Layout1/Image/flags/FR@2x.png" },
  { name: "China", domain: "shopname.ae", flag: "/assets/Layout1/Image/flags/CN@2x.png" },
  { name: "Great Britain", domain: "shopname.co.uk", flag: "/assets/Layout1/Image/flags/GB@2x.png" },
];

const ExtraServices = () => {
  return (
    <div className="mt-10 space-y-10">
      {/* Extra Services Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Our extra services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative rounded-md overflow-hidden shadow-sm bg-white transition-transform transform hover:scale-105 group cursor-pointer"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover brightness-100 group-hover:brightness-105 transition duration-300"
                />
              </div>
              <div className="absolute bottom-7 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow text-gray-700 z-10">
                {service.icon}
              </div>
              <div className="p-3 text-sm font-medium text-gray-800 z-10 relative">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers by Region */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Suppliers by region</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 text-sm">
          {suppliers.map((supplier, i) => (
            <div key={i}>
              <div className="text-black flex items-center gap-2 font-medium">
                <Image
                  src={supplier.flag}
                  alt={supplier.name}
                  width={24}
                  height={16}
                  className="object-contain"
                />
                <span>{supplier.name}</span>
              </div>
              <p className="text-xs text-gray-500">{supplier.domain}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
