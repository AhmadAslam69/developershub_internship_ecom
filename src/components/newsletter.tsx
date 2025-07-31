'use client';

import { Mail } from 'lucide-react';

const NewsletterSubscription = () => {
  return (
    <div className="bg-gray-100 py-10 text-center">
      <h2 className="text-lg font-semibold text-gray-800">
        Subscribe on our newsletter
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4 flex justify-center items-center gap-2 max-w-md mx-auto"
      >
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail size={16} />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
