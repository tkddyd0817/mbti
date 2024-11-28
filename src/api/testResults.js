import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTestResults = async () => {
  const response = await axios.get(`${API_URL}`);
  console.log(response.data);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(
    `${API_URL}`,
    resultData
  );
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("Error updating test result visibility:", error);
    throw error;
  }
};
