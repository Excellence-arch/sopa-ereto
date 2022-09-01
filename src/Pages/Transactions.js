import React from 'react';
import QuickTransactions from '../Components/QuickTransactions';
import Nav from '../Layouts/Nav';
import PaymentHistory from './PaymentHistory';

const Transactions = () => {
  return (
    <div className="bg-pays h-100 w-100">
      <Nav />
      <QuickTransactions />
      <PaymentHistory />
    </div>
  );
};

export default Transactions;
