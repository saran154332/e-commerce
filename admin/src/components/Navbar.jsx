import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-3 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Trend<span className="text-pink-600">Cart</span>
        </h1>
      </div>

      <button
        onClick={() => setToken('')}
        className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full text-sm transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
