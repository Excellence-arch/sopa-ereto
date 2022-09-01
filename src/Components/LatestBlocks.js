import React from 'react';
import { useSelector } from 'react-redux';

const LatestBlocks = () => {
  const data = useSelector((state) => state.latestReducer.blocks);
  return (
    <div className="col-lg-5 col-12 mx-auto">
      <p className="my-2">Latest Blocks</p>
      <table className="table">
        {data.map((val, i) => (
          <tr key={i} className="p-1">
            <td>
              <img src={val.picture} alt={'Picture'} width="40px" className="rounded-circle" />
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
