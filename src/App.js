import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/join'
          element={<Register />}
        />
        <Route 
          path='/login'
          element={<Login />}
        />
        <Route 
          path='/poet-board'
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
