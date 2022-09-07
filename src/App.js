import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NewHome from './Pages/NewHome';
import User from './Routes/User';
import PageNotFound from './Pages/PageNotFound';
import Admin from './Routes/Admin';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<NewHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
