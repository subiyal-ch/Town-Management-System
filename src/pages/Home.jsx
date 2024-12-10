import React, { useState } from "react";
import mainImage from "../assets/main.png";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`You searched for: ${searchQuery}`);
  };

  return (
    <div
      className="pt-16 h-screen bg-cover bg-center relative flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      {/* Amazing Real Estate Text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-md">
        Discover Your Dream Property
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center drop-shadow-md">
        Search for the best plots, houses, and apartments in your desired
        location.
      </p>

      {/* Centered Search Bar */}
      <div className="flex items-center bg-white rounded-lg shadow-lg px-4 py-3 w-4/5 max-w-lg">
        <input
          type="text"
          placeholder="Enter Customer CNIC....."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 text-gray-700 border-0 focus:outline-none rounded-l-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
