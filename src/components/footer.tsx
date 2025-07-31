'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10 text-sm text-gray-600">
      {/* Top Grid: Brand + Links + App */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-6 gap-4 items-start">

  {/* Brand (spans 2 cols) */}
  <div className="md:col-span-2">
    <div className="flex items-center gap-2 mb-2">
      <Image
        src="/assets/Layout/Brand/logo-colored.png"
        alt="Brand"
        width={128}
        height={158}
      />
    </div>
    <p className="text-gray-500 mb-4">
      Best information about the company goes here but now lorem ipsum is
    </p>
    <div className="flex gap-4 text-gray-400 mb-4">
      <Facebook size={18} className="hover:text-blue-600 cursor-pointer" />
      <Twitter size={18} className="hover:text-sky-400 cursor-pointer" />
      <Linkedin size={18} className="hover:text-blue-700 cursor-pointer" />
      <Instagram size={18} className="hover:text-pink-500 cursor-pointer" />
      <Youtube size={18} className="hover:text-red-500 cursor-pointer" />
    </div>
  </div>

  {/* About (narrower) */}
        <div className="w-[120px]">
            <h4 className="font-semibold text-gray-800 mb-2">About</h4>
            <ul className="space-y-1 text-gray-500">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
            </ul>
        </div>

        {/* Partnership (narrower) */}
        <div className="w-[120px]">
            <h4 className="font-semibold text-gray-800 mb-2">Partnership</h4>
            <ul className="space-y-1 text-gray-500">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
            </ul>
        </div>

        {/* Info */}
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">Information</h4>
            <ul className="space-y-1 text-gray-500">
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
            </ul>
        </div>

        {/* For Users */}
        <div>
            <h4 className="font-semibold text-gray-800 mb-2">For users</h4>
            <ul className="space-y-1 text-gray-500">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
            </ul>
        </div>

        {/* Get App */}
        <div className="min-w-fit">
            <h4 className="font-semibold text-gray-800 mb-2">Get app</h4>
            <div className="flex flex-col gap-2">
            <Image
                src="/assets/Layout/Misc/Group.png"
                alt="App Store"
                width={130}
                height={40}
            />
            <Image
                src="/assets/Layout/Misc/market-button.png"
                alt="Google Play"
                width={130}
                height={40}
            />
            </div>
        </div>
        </div>


      {/* Bottom Footer */}
      <div className="border-t px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p>© 2023 Ecommerce.</p>
        <div className="flex items-center gap-1 mt-2 sm:mt-0">
          <Image
            src="/assets/Layout1/Image/flags/US@2x.png"
            alt="US Flag"
            width={20}
            height={14}
          />
          <span>English</span>
          <svg className="w-3 h-3 ml-1 text-gray-400" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
