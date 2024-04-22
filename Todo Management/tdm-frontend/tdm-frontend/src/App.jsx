import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListTodo from './components/ListTodo';
import Todo from './components//Todo';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/add-todo" element={<Todo />} />
        <Route path='/edit-todo/:id' element={<Todo />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
