import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import Dashboard from '../Pages/Admin/Dashboard';
import Login from '../Pages/Admin/Login';
import RecordUpload from '../Pages/Admin/RecordUpload';
import Register from '../Pages/Admin/Register';
import PageNotFound from '../Pages/PageNotFound';

const Admin = () => {
  const status = useSelector((state) => state.adminReducer.status);
  return (
    <div>
      <Routes>
        <Route path="" element={status ? <Dashboard /> : <Navigate to="/admin/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-record" element={<RecordUpload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Admin;
