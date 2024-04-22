import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ListEmployee from './components/ListEmployee';
import Employee from './components/Employee';
import ListDepartment from './components/ListDepartment';
import Department from './components/Department';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ListEmployee />} />
        <Route path='/employees' element={<ListEmployee />} />
        <Route path='/add-employee' element={<Employee />} />
        <Route path='/edit-employee/:id' element={<Employee />} />
        
        <Route path='/departments' element={<ListDepartment />} />
        <Route path='/add-department' element={<Department />} />
        <Route path='/edit-department/:id' element={<Department />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
