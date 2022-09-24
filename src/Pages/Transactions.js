import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Donate from '../Components/Donate';
// import QuickTransactions from '../Components/QuickTransactions';
import DarkNav from '../Layouts/DarkNav';
import PaymentHistory from './../Components/PaymentHistory';

const Transactions = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.onlineReducer.status);
  useEffect(() => {
    if (status == false) {
      navigate('/accounts/login');
    }
  }, []);
  return (
    <div className="row">
      <DarkNav />
      <div className="col-lg-7 col-12">
        {/* <QuickTransactions /> */}
        <PaymentHistory />
      </div>
      <div className="col-lg-4 col-12 ms-5">
        <Donate />
      </div>
    </div>
  );
};

export default Transactions;
