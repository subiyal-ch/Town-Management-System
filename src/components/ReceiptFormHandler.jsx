// ReceiptFormHandler.jsx
import React, { useState } from "react";
import axios from "axios";

const ReceiptFormHandler = ({ setError, setSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    address: "",
    phone: "",
    plotNo: "",
    townName: "",
    amount: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://api.example.com/receipts", // Your backend URL
        formData
      );
      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          fatherName: "",
          cnic: "",
          address: "",
          phone: "",
          plotNo: "",
          townName: "",
          amount: "",
        });
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Name",
          "FatherName",
          "CNIC",
          "Address",
          "Phone",
          "PlotNo",
          "TownName",
          "Amount",
        ].map((field, index) => (
          <div key={index}>
            <label className="block text-gray-700 font-semibold">{field}</label>
            <input
              type={field === "amount" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter ${field}`}
              required
            />
          </div>
        ))}
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
  );
};

export default ReceiptFormHandler;
