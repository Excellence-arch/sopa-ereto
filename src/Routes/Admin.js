import React from 'react';
import { Routes, Route } from 'react-router';
import Login from '../Pages/Admin/Login';
import NewHome from '../Pages/NewHome';
import PageNotFound from '../Pages/PageNotFound';

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<NewHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Admin;
