// TownFormHandler.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const TownFormHandler = ({ setError, setSuccess }) => {
  const [formData, setFormData] = useState({
    townName: "",
    plotCount: "",
    totalPlots: "",
  });

  const [towns, setTowns] = useState([]); // To store retrieved towns
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch towns from the backend when the component mounts
  useEffect(() => {
    const fetchTowns = async () => {
      try {
        const response = await axios.get("https://api.example.com/towns");
        if (response.status === 200) {
          setTowns(response.data); // Store the retrieved towns in state
        }
      } catch (error) {
        setError("Error fetching town data. Please try again.");
      }
    };

    fetchTowns();
  }, [setError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://api.example.com/towns", // Backend URL for submitting town data
        formData
      );
      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          townName: "",
          plotCount: "",
          totalPlots: "",
        });
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Towns List */}
      <div>
        <h2 className="text-xl font-bold">Towns List</h2>
        <ul className="space-y-2 mt-4">
          {towns.length > 0 ? (
            towns.map((town) => (
              <li key={town.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                <p className="font-semibold">{town.name}</p>
                <p>Total Plots: {town.totalPlots}</p>
                <p>Plot Count: {town.plotCount}</p>
              </li>
            ))
          ) : (
            <p>No towns available</p>
          )}
        </ul>
      </div>

      {/* Town Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-gray-700 font-semibold">Town Name</label>
          <input
            type="text"
            name="townName"
            value={formData.townName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter town name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Plot Count</label>
          <input
            type="number"
            name="plotCount"
            value={formData.plotCount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of plots"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Total Plots</label>
          <input
            type="number"
            name="totalPlots"
            value={formData.totalPlots}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter total number of plots"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TownFormHandler;
