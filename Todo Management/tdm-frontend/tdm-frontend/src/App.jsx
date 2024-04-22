import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListTodo from './components/ListTodo';
import Todo from './components//Todo';
import Header from './components/Header';
import Footer from './components/Footer';
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
      </Routes> 
      <Footer />

    </div>
  );
}

export default App;
