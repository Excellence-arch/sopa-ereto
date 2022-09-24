import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router';
import PageNotFound from '../Pages/PageNotFound';
import Payment from '../Pages/Payment';
import Reviews from '../Pages/Reviews';
import Success from '../Pages/Success';
import Transactions from '../Pages/Transactions';

const User = () => {
  const status = useSelector((state) => state.onlineReducer.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === false) {
      navigate('/accounts/login');
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="" element={<Transactions />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Success />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default User;
