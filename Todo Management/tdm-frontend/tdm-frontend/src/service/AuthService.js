import axios from "axios";

const REST_API_BASE_AUTH_URL = "http://localhost:8080/api/auth";

export const registerDto = (registerDto) => axios.post(REST_API_BASE_AUTH_URL + "/register", registerDto);
export const login = (loginDto) => axios.post(REST_API_BASE_AUTH_URL + "/login", loginDto);

export const storeToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");






