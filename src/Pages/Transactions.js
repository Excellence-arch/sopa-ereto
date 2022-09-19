import React from 'react';
import Donate from '../Components/Donate';
import QuickTransactions from '../Components/QuickTransactions';
import DarkNav from '../Layouts/DarkNav';
import PaymentHistory from './../Components/PaymentHistory';

const Transactions = () => {
  return (
    <div className="row">
      <DarkNav />
      <div className="col-7">
        <QuickTransactions />
        <PaymentHistory />
      </div>
      <div className="col-4">
        <Donate />
      </div>
    </div>
  );
};

export default Transactions;
