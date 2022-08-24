import React from 'react';
import './style.css';
import Home from './Pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NewHome from './Pages/NewHome';
import Transactions from './Pages/Transactions';

export default function App() {
  const baseUrl = 'https://sopa-ereto.herokuapp.com/';
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<NewHome />} />
        <Route path="/login" element={<Login baseUrl={baseUrl} />} />
        <Route path="/register" element={<Register baseUrl={baseUrl} />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
