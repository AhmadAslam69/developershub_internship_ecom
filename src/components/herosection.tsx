import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      {/* Main white container with all 3 sections */}
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow p-6 flex flex-col lg:flex-row gap-4">
        
        {/* Left Sidebar */}
        <div className="text-black lg:w-1/5 w-full">
          <ul className="space-y-2 text-sm font-medium">
            {[
              "Automobiles",
              "Clothes and wear",
              "Home interiors",
              "Computer and tech",
              "Tools, equipments",
              "Sports and outdoor",
              "Animal and pets",
              "Machinery tools",
              "More category",
            ].map((item, index) => {
              const path = 
                item === "Computer and tech"
                  ? "/comp_tech"
                  : "#"; // default fallback for now

              return (
                <li key={item}>
                  <Link
                    href={path}
                    className={`block px-3 py-2 rounded cursor-pointer ${
                      index === 0 ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hero Banner */}
        <div className="w-full lg:w-3/5 h-[420px] relative rounded-md overflow-hidden bg-[#a6e3da]">
          <Image
            src="/assets/Image/backgrounds/Banner-board-800x420-2.png"
            alt="electronics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-center z-10">
            <h2 className="text-lg text-black">Latest trending</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Electronic items
            </h1>
            <div className="mt-4">
              <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded shadow hover:opacity-90 transition">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/5 w-full flex flex-col gap-3 text-sm">
        <div className="bg-blue-100 p-4 rounded text-center w-full">
          {/* User Icon */}
          <div className="flex justify-center mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Greeting Text */}
          <p className="text-sm font-bold text-black">Hi, user</p>
          <p className="text-sm text-gray-600 mb-3">let’s get started</p>

          {/* Buttons */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1.5 px-4 rounded w-full mb-2">
            Join now
          </button>
          <button className="border border-blue-500 text-blue-500 text-sm py-1.5 px-4 rounded w-full hover:bg-blue-50">
            Log in
          </button>
        </div>

          <div className="bg-orange-400 text-white p-3 rounded shadow text-center">
            Get US $10 off with a new supplier
          </div>

          <div className="bg-teal-300 text-white p-3 rounded shadow text-center">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
