import React from 'react';
import { Routes, Route } from 'react-router';
import AllTransactions from '../Pages/AllTransactions';
import DonationsHistory from '../Pages/DonationsHistory';
import PaymentHistory from '../Pages/PaymentHistory';

const Transactions = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<AllTransactions />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="donation-history" element={<DonationsHistory />} />
        <Route path="*" element={<h4>Page Not Found</h4>} />
      </Routes>
    </div>
  );
};

export default Transactions;
