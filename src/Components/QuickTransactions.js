import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from 'react-google-material-icons';
import { useNavigate } from 'react-router';
import Card from './Card';
// import manualPay from '../assets/pay.png';

const QuickTransactions = () => {
  const data = useSelector((state) => state.transactionReducer.quickTransactions);
  const [i, setI] = useState(0);
  const navigate = useNavigate();

  const previous = () => {
    setI(i - 1);
    navigate();
  };

  const next = () => {
    setI(i + 1);
  };

  return (
    <div>
      <p className="fs-3 fw-bold text-blue text-center my-4">Quick Transaction</p>
      <div className="d-flex container cards-start">
        <button
          className="btn bg-light mx-2"
          onClick={previous}
          disabled={i - 1 < 0 ? true : false}>
          <MaterialIcon icon="arrow_back_ios" />
        </button>
        {/* <div className="mx-2 bg-light" onClick={() => navigate('/users/payment')}>
          <img
            src={manualPay}
            alt="Pay Manually"
            width="71px"
            className="rounds-start rounds-end text-center m-3"
          />
          Manual
        </div> */}
        <Card name={data[i].name} i={i} img={data[i].img} />
        <Card name={data[i + 1].name} i={i + 1} img={data[i + 1].img} />
        <Card name={data[i + 2].name} i={i + 2} img={data[i + 2].img} />
        <Card name={data[i + 3].name} i={i + 3} img={data[i + 3].img} />
        <Card name={data[i + 4].name} i={i + 4} img={data[i + 4].img} />
        <button className="btn mx-2" onClick={next} disabled={i + 4 >= data.length ? true : false}>
          <MaterialIcon icon="arrow_forward_ios" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransactions;
