// src/services/dogService.js
import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b/6731d700acd3cb34a8a66a4e';
const MASTER_KEY = "$2a$10$Ak8PmSt3H8tmQUhk2n5gs.yhOd9c9gXRax30RRTwuw6KnWJH.Lke2";

export const fetchDogs = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Master-Key': MASTER_KEY,
        'Content-Type': 'application/json',
        'X-Bin-Meta': false
      }
    });

    if (!response.data.record.dogs) {
      console.error('No dogs data found in response');
      return [];
    }

    return response.data.record.dogs;

  } catch (error) {
    console.error('Error fetching dogs:', error);
    if (error.response) {
      console.log('Error details:', error.response.data);
      console.log('Error status:', error.response.status);
    }
    return [];
  }
};