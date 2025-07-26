import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export const registerUser = async (data: { name: string; email: string; password: string; birthdate: string; gender: string; country: string }) => {
  return axios.post(`${API_BASE}/users/register`, data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return axios.post(`${API_BASE}/users/login`, data);
};

export const getVideos = async () => {
  return axios.get(`${API_BASE}/videos`);
};

export const getTexts = async () => {
  return axios.get(`${API_BASE}/texts`);
};

export const getAudios = async () => {
  return axios.get(`${API_BASE}/audios`);
};

export const processPayment = async (data: any) => {
  return axios.post(`${API_BASE}/payments/pay`, data);
};
