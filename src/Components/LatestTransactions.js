import React from 'react';
import MaterialIcon from 'react-google-material-icons';

// eslint-disable-next-line react/prop-types, no-unused-vars
const LatestTransactions = ({ data }) => {
  return (
    <div className="mx-auto col-12 col-lg-6">
      <div>
        <p>
          {' '}
          <span>Latest Transactions</span>
          <span className="float-end btn colors text-white">View onchain</span>
        </p>
        <div>
          <table className="table table-bordered mt-5">
            {/* {data.map((val, ind) => (
              <tr key={ind} className="p-4">
                <td className="fw-bold p-3">{val.day}</td>
                <td className="text-secondary">{val.acc_no}</td>
                <td className="">{val.phone_no}</td>
                <td className="">{val.name}</td>
                <td className="fw-bold">{val.amount}</td>
              </tr>
            ))} */}
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
