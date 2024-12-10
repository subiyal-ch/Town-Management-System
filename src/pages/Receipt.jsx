// Receipt.jsx
import React, { useState } from "react";
import mainImage from "../assets/main.png";
import ReceiptFormHandler from "../components/ReceiptFormHandler"; // Import the new form handler component

const Receipt = () => {
  const [error, setError] = useState(null); // Track error state
  const [success, setSuccess] = useState(false); // Track success state

  return (
    <div
      className="pt-16 h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Receipt Form</h1>
        {success && (
          <p className="text-green-500 text-center mb-4">
            Form submitted successfully!
          </p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <ReceiptFormHandler setError={setError} setSuccess={setSuccess} />
      </div>
    </div>
  );
};

export default Receipt;
