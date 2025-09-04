import axios from './axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  message: string;
  user: User;
}

export const registerUser = async (data: { name: string; email: string; password: string; birthdate: string; gender: string; country: string; tel: string }) => {
  return axios.post(`/users/register`, data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return axios.post<LoginResponse>(`/users/login`, data);
};

export const getVideos = async () => {
  return axios.get(`/videos`);
};

export const getTexts = async () => {
  return axios.get(`/texts`);
};

export const getAudios = async () => {
  return axios.get(`/audios`);
};

export const processPayment = async (data: any) => {
  return axios.post(`/payments/pay`, data);
};
