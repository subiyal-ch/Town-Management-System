import React, { useState, useEffect } from "react";
import axios from "axios"; // For making HTTP requests
import TownFormHandler from "../components/TownFormHandler"; // Import the TownFormHandler component

const Towns = () => {
  const [error, setError] = useState(null); // Track error state
  const [success, setSuccess] = useState(false); // Track success state
  const [isFormVisible, setIsFormVisible] = useState(false); // Track visibility of the form
  const [towns, setTowns] = useState([]); // Store fetched towns data

  // Fetch towns data from the backend
  const fetchTowns = async () => {
    try {
      const response = await axios.get("https://api.example.com/towns");
      setTowns(response.data); // Store the fetched towns in the state
    } catch (error) {
      setError("Failed to fetch towns. Please try again later.");
    }
  };

  // Use useEffect to fetch towns on component mount
  useEffect(() => {
    fetchTowns();
  }, []);

  // Handle adding new town and updating the list
  const handleAddTown = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility when "Add Town" button is clicked
  };

  return (
    <div className="pt-16 h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Town Management</h1>

        {/* Button to show the form */}
        <div className="text-center mb-6">
          <button
            onClick={handleAddTown}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold"
          >
            {isFormVisible ? "Cancel" : "Add Town"}
          </button>
        </div>

        {/* Show form only if isFormVisible is true */}
        {isFormVisible && (
          <TownFormHandler
            setError={setError}
            setSuccess={setSuccess}
            fetchTowns={fetchTowns} // Pass fetchTowns to re-fetch towns after adding
          />
        )}

        {/* Success and Error messages */}
        {success && (
          <p className="text-green-500 text-center mb-4">
            Town added successfully!
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Display the list of towns */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center mb-4">
            List of Towns
          </h2>
          {towns.length === 0 ? (
            <p className="text-center text-gray-500">No towns available.</p>
          ) : (
            <div className="space-y-4">
              {towns.map((town) => (
                <div
                  key={town.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold">{town.name}</h3>
                  <p className="text-gray-700">Plot Count: {town.plotCount}</p>
                  <p className="text-gray-700">Location: {town.location}</p>
                  {/* Add any other details about the town */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Towns;
