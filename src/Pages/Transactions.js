import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Donate from '../Components/Donate';
// import QuickTransactions from '../Components/QuickTransactions';
import DarkNav from '../Layouts/DarkNav';
import PaymentHistory from './../Components/PaymentHistory';
import { useState } from 'react';
const Transactions = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.onlineReducer.status);
  const url = `${useSelector((state) => state.urlReducer.payment)}/mcs2`;
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (status == false) {
      navigate('/accounts/login');
    }
  }, []);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsloading(false);
        setError(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  }, []);
  useEffect(() => {
    if (data.length == 0) {
      setIsloading(false);
      setMessage('No transaction histories yet');
    }
  });
  return (
    <div className="row">
      <DarkNav />
      {error && <div className="alert alert-danger text-danger text-center fs-2">{error}</div>}
      {isloading ? (
        <span className="spinner-border"></span>
      ) : (
        <div>
          {message && <div className="alert alert-success text-success">{message}</div>}
          <div className="row">
            <div className="col-lg-7 col-12">
              <PaymentHistory />
            </div>
            <div className="col-lg-4 col-12 ms-5 mt-5">
              <Donate />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
