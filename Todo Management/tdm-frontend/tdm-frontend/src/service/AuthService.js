// src/service/AuthService.js
import axios from "axios";

const REST_API_BASE_AUTH_URL = "http://localhost:8080/api/auth";

export const login = (loginDto) => axios.post(REST_API_BASE_AUTH_URL + "/login", loginDto);

export const storeTokenAndRole = (accessToken, tokenType = 'Bearer', role) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("tokenType", tokenType);
  localStorage.setItem("userRole", role); // Lưu trữ vai trò người dùng
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  const tokenType = localStorage.getItem("tokenType");
  return token ? `${tokenType} ${token}` : null;
};

export const getUserRole = () => {
  return localStorage.getItem("userRole");
};

// src/service/AuthService.js
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("userRole");
};
