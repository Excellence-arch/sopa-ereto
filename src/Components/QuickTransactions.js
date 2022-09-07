import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from 'react-google-material-icons';
import { useNavigate } from 'react-router';

const QuickTransactions = () => {
  const data = useSelector((state) => state.transactionReducer.quickTransactions);
  const [i, setI] = useState(0);
  const navigate = useNavigate();

  const previous = () => {
    setI(i - 1);
  };

  const next = () => {
    setI(i + 1);
  };

  return (
    <div>
      <p>Quick Transaction</p>
      <div className="d-flex container">
        <button
          className="btn control bg-light mx-2"
          onClick={previous}
          disabled={i - 1 < 0 ? true : false}>
          <MaterialIcon icon="arrow_back_ios" />
        </button>
        <div className="borders" onClick={() => navigate('/users/payment')}>
          Manual
        </div>
        <div key={i} className="borders mx-2">
          <img src={data[i].img} width="40px" className="rounded-circle text-center" />
          <p className="my-3">{data[i].name}</p>
        </div>
        <div key={i + 1} className="borders mx-2">
          <img src={data[i + 1].img} width="40px" className="rounded-circle text-center" />
          <p className="my-3">{data[i + 1].name}</p>
        </div>
        <div key={i + 2} className="borders mx-2">
          <img src={data[i + 2].img} width="40px" className="rounded-circle text-center" />
          <p className="my-3">{data[i + 2].name}</p>
        </div>
        <div key={i + 3} className="borders mx-2">
          <img src={data[i + 3].img} width="40px" className="rounded-circle text-center" />
          <p className="my-3">{data[i + 3].name}</p>
        </div>
        <button
          className="btn control mx-2"
          onClick={next}
          disabled={i + 4 >= data.length ? true : false}>
          <MaterialIcon icon="arrow_forward_ios" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransactions;
