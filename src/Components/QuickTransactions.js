import React from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from 'react-google-material-icons';

const QuickTransactions = () => {
  const data = useSelector((state) => state.transactionReducer.quickTransactions);
  let i = 0;
  return (
    <div>
      <p>Quick Transaction</p>
      <div className="d-flex container">
        <button className="btn">
          <MaterialIcon icon="less_than" />
        </button>
        <div className="borders">Manual</div>
        <div key={i} className="borders mx-2">
          <img src={data[i].img} width="40px" className="border-circle text-center" />
          <p className="my-3">{data[i].name}</p>
        </div>
        <div key={i + 1} className="borders mx-2">
          <img src={data[i + 1].img} width="40px" className="border-circle text-center" />
          <p className="my-3">{data[i + 1].name}</p>
        </div>
        <div key={i + 2} className="borders mx-2">
          <img src={data[i + 2].img} width="40px" className="border-circle text-center" />
          <p className="my-3">{data[i + 2].name}</p>
        </div>
        <div key={i + 2} className="borders mx-2">
          <img src={data[i + 2].img} width="40px" className="border-circle text-center" />
          <p className="my-3">{data[i + 3].name}</p>
        </div>
        <button className="btn">
          <MaterialIcon icon="greater_than" />
        </button>
      </div>
    </div>
  );
};

export default QuickTransactions;
