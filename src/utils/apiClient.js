// src/utils/apiClient.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8000/api" : "https://companizer-api.onrender.com/api",
  withCredentials: false,
});

// Attach JWT token automatically if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
