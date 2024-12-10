import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              Chaudhary Developers
            </div>
            <div className="block sm:ml-6">
              <div className="flex justify-end space-x-4">
                {/* Links to Home, Towns, and Receipt */}
                <Link
                  to="/home"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Home
                </Link>
                <Link
                  to="/towns"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Towns
                </Link>
                <Link
                  to="/receipt"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
