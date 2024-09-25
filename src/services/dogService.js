import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758';

export const fetchDogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.record;
  } catch (error) {
    console.error('Error fetching dogs:', error);
    return [];
  }
};