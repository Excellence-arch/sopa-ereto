import React from 'react';
import { useSelector } from 'react-redux';

const LatestBlocks = () => {
  const data = useSelector((state) => state.latestReducer.blocks);
  return (
    <div className="col-lg-5 col-12 mx-auto bg-white p-3 rounds-start rounds-end border">
      <p className="my-2 border-bottom">Latest Blocks</p>
      <table className="table">
        {data.map((val, i) => (
          <tr key={i} className="p-1 border-bottom">
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
