import React from 'react';

// eslint-disable-next-line react/prop-types
const LatestBlocks = ({ data }) => {
  return (
    <div className="col-lg-5 col-12 mx-auto">
      <table className="table table-bordered">
        <tr>
          <td colSpan={3}>Latest Transactions</td>
        </tr>
        {/* eslint-disable-next-line react/prop-types */}
        {data.map((val, i) => (
          <tr key={i} className="p-4">
            <td>
              <img src={val.picture} alt={'Picture'} width="50px" className="rounded-circle" />
            </td>
            <td>{val.id}</td>
            <td>{val.amount} KES</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LatestBlocks;
