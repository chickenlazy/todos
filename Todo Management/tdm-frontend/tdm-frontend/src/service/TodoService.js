import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_BASE_TODO_URL = "http://localhost:8080/api/todos";

axios.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});



export const listTodos = () => axios.get(REST_API_BASE_TODO_URL);

export const createTodo = (todo) => axios.post(REST_API_BASE_TODO_URL, todo);

export const getTodo = (todoId) => axios.get(`${REST_API_BASE_TODO_URL}/${todoId}`);

export const updateTodo = (todoId, todo) => axios.put(`${REST_API_BASE_TODO_URL}/${todoId}`, todo);

export const deleteTodo = (todoId) => axios.delete(`${REST_API_BASE_TODO_URL}/${todoId}`);

export const completeTodo = (todoId) => axios.patch(`${REST_API_BASE_TODO_URL}/${todoId}/complete`);

export const incompleteTodo = (todoId) => axios.patch(`${REST_API_BASE_TODO_URL}/${todoId}/incomplete`);
