// src/utils/api.js
import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

export const submitReceipt = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit-receipt`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting receipt:", error);
    throw error;
  }
};

export const submitTown = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit-town`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting town:", error);
    throw error;
  }
};

export const fetchTowns = async () => {
  try {
    const response = await axios.get(`${API_URL}/towns`);
    return response.data;
  } catch (error) {
    console.error("Error fetching towns:", error);
    throw error;
  }
};
