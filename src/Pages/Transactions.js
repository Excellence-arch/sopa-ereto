import React from 'react';
import QuickTransactions from '../Components/QuickTransactions';
import Nav from '../Layouts/Nav';
import PaymentHistory from './PaymentHistory';

const Transactions = () => {
  return (
    <div className="bg-pays">
      <Nav />
      <QuickTransactions />
      <PaymentHistory />
    </div>
  );
};

export default Transactions;
