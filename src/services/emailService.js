import axios from 'axios';

const sendEmail = async (formData) => {
  try {
    return await axios.post(`${process.env.REACT_APP_API_URL}/api/send-email`, formData);
  } catch (error) {
    throw error;
  }
};

export default {
  sendEmail
};