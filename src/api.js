import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

// Add token to headers if logged in
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // JWT token
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
