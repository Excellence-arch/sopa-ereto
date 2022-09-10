import React from 'react';
import { useSelector } from 'react-redux';

const PaymentHistory = () => {
  const data = useSelector((state) => state.transactionReducer.recentActivities);
  return (
    <div className="mt-5">
      <div className="row mx-auto col-8 bg-pays p-3 rounds-start rounds-end">
        <p className="col-4">Recent Activity</p>
        <p className="btn" style={{ marginTop: '-39px', marginLeft: '350px' }}>
          Show All
        </p>
      </div>
      <table
        className="col-8 mx-auto bg-pays rounds-start rounds-end"
        style={{ marginTop: '-10px' }}>
        {data.map((val, i) => (
          <tr key={i}>
            <div>
              <p className="fw-bold ms-4" style={{ marginTop: '25px' }}>
                Today
              </p>
            </div>
            <td>
              <p style={{ marginLeft: '-220px' }}>
                <img src={val.img} width="50px" className="rounded-circle my-3 ms-3" />
              </p>
            </td>
            <td>
              {val.name} <br /> <span className="text-muted ms-4">{val.state}</span>{' '}
            </td>
            <td>
              <p
                className="bg-light p-3 rounded"
                style={{
                  position: 'absolute',
                  width: 'fit-content',
                  marginLeft: '-100px',
                  marginTop: '-30px'
                }}>
                {val.amount}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PaymentHistory;
