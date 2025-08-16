import axiosLib from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const axios = axiosLib.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor: attach token if present
axios.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('f88_token');
    if (token && config.headers) {
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    // ignore
  }
  return config;
});

// Response interceptor: simple global error handling
axios.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // optional: clear token and redirect to login
      try {
        localStorage.removeItem('f88_token');
        // window.location.href = '/login'; // don't force redirect here, handle in app flow
      } catch (e) {}
    }
    return Promise.reject(error);
  }
);

export default axios;
