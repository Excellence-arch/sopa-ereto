import React from 'react';
import { useSelector } from 'react-redux';

const QuickTransactions = () => {
  const data = useSelector((state) => state.transactionReducer.quickTransactions);
  return (
    <div>
      <p>Quick Transaction</p>
      <div className="d-flex container">
        <div className="borders">Manual</div>
        {data.map((val, i) => (
          <div key={i} className="borders mx-2">
            <img src={val.img} width="40px" className="border-circle text-center" />
            <p>{val.name}</p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default QuickTransactions;
