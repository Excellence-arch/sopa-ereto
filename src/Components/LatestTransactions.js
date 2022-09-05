/* eslint-disable react/prop-types */
import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import { useSelector } from 'react-redux';

const LatestTransactions = () => {
  const data = useSelector((state) => state.latestReducer.transactions);
  return (
    <div className="col-12 col-lg-5 mx-auto border rounds-start rounds-end p-3 bg-white">
      <div className="">
        <p className="border-bottom">
          <span className="position-relative mt-2">Latest Transactions</span>
          <span className="float-end text-blue" style={{ marginTop: '-6px' }}>
            View all
          </span>
        </p>
        <div>
          <table className="table mt-4">
            {data.map((val, ind) => (
              <tr key={ind} className="p-4 border-bottom">
                <td className="fw-bold p-3">{val.day}</td>
                <td className="text-secondary">{val.acc_no}</td>
                <td className="">{val.phone_no}</td>
                <td className="">{val.name}</td>
                <td className="fw-bold">{val.amount}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={5} className="fw-bold text-center p-3">
                See more{' '}
                <span className="btn colors">
                  <MaterialIcon icon="arrow_forward" />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
