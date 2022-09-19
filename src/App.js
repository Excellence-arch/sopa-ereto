import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import AllTransaction from './Pages/AllTransaction';
import User from './Routes/Donor';
import PageNotFound from './Pages/PageNotFound';
import Admin from './Routes/Admin';
import Accounts from './Routes/Accounts';
import NewHome from './Pages/NewHome';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<AllTransaction />} />
        <Route path="/accounts/*" element={<Accounts />} />
        <Route path="/donor/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
