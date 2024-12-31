import axios from "axios";

// Get the base URL from the environment variable
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5000';

// API function to submit the contact form data
export const submitContactForm = async ({ name, email, phoneNumber, message }) => {
    try {
      console.log({ name, email, phoneNumber, message });
      const response = await axios.post(`${BASE_URL}/api/v1/leads/`, {
        name,
        email,
        phoneNumber,
        message,
      });
  
      return response;
    } catch (error) {
      console.error("Error in API call:", error);
      throw error; // Re-throw the error for the calling function to handle
    }
  };
  
