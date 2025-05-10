import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Medicine search
export const searchMedicines = async (query) => {
  try {
    const response = await api.get(`/medicines/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Search failed:', error);
    throw error;
  }
};

// Pharmacy inventory
export const getPharmacyInventory = async (pharmacyId) => {
  try {
    const response = await api.get(`/pharmacy/${pharmacyId}/inventory`);
    return response.data;
  } catch (error) {
    console.error('Failed to get inventory:', error);
    throw error;
  }
};

export const addMedicineToInventory = async (medicineData) => {
  try {
    const response = await api.post('/pharmacy/inventory', medicineData);
    return response.data;
  } catch (error) {
    console.error('Failed to add medicine:', error);
    throw error;
  }
};

export const updateInventory = async (pharmacyId, medicineId, stock) => {
  try {
    const response = await api.put(`/pharmacy/${pharmacyId}/inventory/${medicineId}`, {
      stock
    });
    return response.data;
  } catch (error) {
    console.error('Failed to update inventory:', error);
    throw error;
  }
};

export default api; 