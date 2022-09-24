import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '../assets/avatar.png';

const PaymentHistory = () => {
  const data = useSelector((state) => state.transactionReducer.recentActivities);
  return (
    <div className="mt-5">
      <p className="fs-2 text-center">Beneficiaries</p>
      <div className="row starts col-8 bg-pays p-3 rounds-start rounds-end">
        <p className="col-4 text-dark">Recent Activity</p>
        <p className="btn text-danger" style={{ marginTop: '-39px', marginLeft: '230px' }}>
          Show All
        </p>
      </div>
      <table
        className="col-8 starts bg-pays rounds-start rounds-end"
        style={{ marginTop: '-10px' }}>
        {data.map((val, i) => (
          <tr key={i}>
            <div>
              <p className="fw-bold ms-4" style={{ marginTop: '27px' }}>
                Today
              </p>
            </div>
            <td>
              <p style={{ marginLeft: '-100px' }}>
                <img src={avatar} width="50px" className="rounded-circle my-3 ms-3" />
              </p>
            </td>
            <td>
              {val.name} <br />{' '}
              <span className={val.state == 'sent' ? 'text-success ms-4' : 'text-warning ms-4'}>
                {val.state}
              </span>{' '}
            </td>
            <td>
              <p
                className="bg-light p-3 rounded"
                style={{
                  position: 'absolute',
                  width: 'fit-content',
                  marginLeft: '-70px',
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
