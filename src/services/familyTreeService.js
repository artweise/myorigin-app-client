import axios from '../config/axios.config';

export const getAllFamilyTrees = async () => {
  try {
    const res = await axios.get('/familytrees');
    if (res.status === 200) return res.data;
    // Handle other potential success scenarios if needed
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 404) {
      // Handle 404 error (resource not found)
      console.log('Family trees not found');
      // You can show a message to the user, redirect them, or take other appropriate actions
    } else {
      // Handle other types of errors
      console.error('An error occurred while fetching family trees:', error);
      // You can show a generic error message to the user or take other appropriate actions
    }
    // Throw the error to propagate it to the caller if needed
    throw error;
  }
};

export const createFamilyTree = async (data) => {
  const res = await axios.post('/familytree', data);
  if (res.status === 200) return res.data;
};

export const getFamilyTreeById = async (familyTreeId) => {
  const res = await axios.get(`/familytrees/${familyTreeId}`);
  if (res.status === 200) return res.data;
};
