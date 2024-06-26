import axios from "axios";

const REST_API_BASE_AUTH_URL = "http://localhost:8080/api/auth";

export const login = (loginDto) => axios.post(REST_API_BASE_AUTH_URL + "/login", loginDto);

export const storeTokenAndRole = (accessToken, tokenType = 'Bearer', role) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("tokenType", tokenType);
  localStorage.setItem("userRole", role);
};

export const storeUserDetails = (name, username, email) => {
  localStorage.setItem("name", name);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  const tokenType = localStorage.getItem("tokenType");
  return token ? `${tokenType} ${token}` : null;
};

export const getUserRole = () => {
  return localStorage.getItem("userRole");
};


export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("userRole");
};



export const getUserDetails = () => {
  return {
    name: localStorage.getItem("name"),
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email")
  };
};
