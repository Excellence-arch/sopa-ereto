import React from 'react';
import { useSelector } from 'react-redux';

const PaymentHistory = () => {
  const data = useSelector((state) => state.transactionReducer.recentActivities);
  return (
    <div className="mt-4">
      <div className="row mx-auto col-8">
        <p className="col-4">Recent Activity</p>
        <p className="btn btn-light col-4">Show All</p>
      </div>
      <table className="rable col-8 mx-auto">
        {data.map((val, i) => (
          <tr key={i}>
            <td>
              <img src={val.img} width="60px" className="rounded-circle" />
            </td>
            <td>
              {val.name} <br /> <span>{val.state}</span>{' '}
            </td>
            <td>{val.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PaymentHistory;
