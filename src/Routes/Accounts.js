import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import CreatePassword from '../Pages/CreatePassword';
import Login from '../Pages/Login';
import PageNotFound from '../Pages/PageNotFound';
import Register from '../Pages/Register';
import VerifyEmail from '../Pages/VerifyEmail';

const Accounts = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="/accounts/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="create-password" element={<CreatePassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Accounts;
