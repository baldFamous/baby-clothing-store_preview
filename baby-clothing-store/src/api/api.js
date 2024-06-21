import axios from 'axios';

const API_URL = 'https://baby-clothing-storepreview-production.up.railway.app/';

// Función para obtener productos
export const fetchProducts = async (filters) => {
  try {
    const query = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}/api/products/?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Función para iniciar sesión y obtener el token JWT
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/token/`, credentials);
    if (response.data.access) {
      localStorage.setItem('token', response.data.access);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Función para crear un producto (requiere autenticación)
export const createProduct = async (product) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/api/products/`, product, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};
