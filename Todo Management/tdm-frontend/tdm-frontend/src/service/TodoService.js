import axios from "axios";

const REST_API_BASE_TODO_URL = "http://localhost:8080/api/todos";

// Lấy danh sách tất cả Todos
export const listTodos = () => axios.get(REST_API_BASE_TODO_URL);

// Tạo một Todo mới
export const createTodo = (todo) => axios.post(REST_API_BASE_TODO_URL, todo);

// Lấy thông tin của một Todo theo ID
export const getTodo = (todoId) => axios.get(`${REST_API_BASE_TODO_URL}/${todoId}`);

// Cập nhật thông tin của một Todo
export const updateTodo = (todoId, todo) => axios.put(`${REST_API_BASE_TODO_URL}/${todoId}`, todo);

// Xóa một Todo
export const deleteTodo = (todoId) => axios.delete(`${REST_API_BASE_TODO_URL}/${todoId}`);

// Đánh dấu một Todo là hoàn thành
export const completeTodo = (todoId) => axios.patch(`${REST_API_BASE_TODO_URL}/${todoId}/complete`);

// Đánh dấu một Todo là chưa hoàn thành
export const incompleteTodo = (todoId) => axios.patch(`${REST_API_BASE_TODO_URL}/${todoId}/incomplete`);
