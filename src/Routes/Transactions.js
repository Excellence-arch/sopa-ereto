import React from 'react';
import { Routes, Route } from 'react-router';
import AllTransactions from '../Pages/AllTransactions';
import DonationsHistory from '../Pages/DonationsHistory';
import PageNotFound from '../Pages/PageNotFound';
import PaymentHistory from '../Pages/PaymentHistory';

const Transactions = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<AllTransactions />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="donation-history" element={<DonationsHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Transactions;
