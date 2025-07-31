'use client';

import Image from "next/image";
import { useState } from "react";
import {
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const countries = [
    { code: "de", name: "Germany", flag: "/assets/Layout1/Image/flags/DE@2x.png" },
    { code: "fr", name: "France", flag: "/assets/Layout1/Image/flags/AE@2x.png" },
    { code: "us", name: "United States", flag: "/assets/Layout1/Image/flags/CN@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/DK@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/FR@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/GB@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/IT@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/RU@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/US@2x.png" },
    { code: "sa", name: "Saudi Arabia", flag: "/assets/Layout1/Image/flags/icon.png" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="w-full border-b">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-600 font-bold text-lg">
          <div className="bg-blue-500 p-1 rounded-md">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
          <span>Brand</span>
        </div>

        {/* Search */}
        <div className="flex flex-1 max-w-2xl mx-6 border border-blue-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-sm outline-none"
          />
          <select className="border-l px-3 text-sm text-gray-600 outline-none">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <button className="bg-blue-500 text-white px-4 text-sm">Search</button>
        </div>

        {/* Icon Buttons */}
        <div className="flex items-center gap-6 text-xs text-gray-600">
          {[
            { icon: User, label: "Profile" },
            { icon: MessageSquare, label: "Message" },
            { icon: Heart, label: "Orders" },
            { icon: ShoppingCart, label: "My cart" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center hover:text-blue-600 transition"
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{label}</span>
            </button>
          ))}

          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-6 py-2 text-sm max-w-7xl mx-auto">
        {/* Left Nav Items */}
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-1">
            <Menu className="w-4 h-4" />
            <span>All category</span>
          </div>
          <span>Hot offers</span>
          <span>Gift boxes</span>
          <span>Projects</span>
          <span>Menu item</span>
          <span>Help ▾</span>
        </div>

        {/* Language (Disabled) */}
        {/* Language and Ship To */}
        <div className="flex items-center gap-6 text-sm text-gray-700 relative">
        {/* Language Selector */}
        <span className="hover:text-blue-600 cursor-pointer">
            English, USD ▾
        </span>

        {/* Ship To Dropdown */}
        <div className="relative">
            <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 hover:text-blue-600 transition"
            >
            <Image
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                width={20}
                height={15}
                className="rounded-sm"
            />
            <ChevronDown className="w-4 h-4" />
            </button>

            {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow rounded z-50">
                {countries.map((country) => (
                <div
                    key={country.code}
                    onClick={() => {
                    setSelectedCountry(country);
                    setShowDropdown(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    <Image
                    src={country.flag}
                    alt={country.name}
                    width={20}
                    height={15}
                    className="rounded-sm"
                    />
                    <span>{country.name}</span>
                </div>
                ))}
            </div>
            )}
        </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
