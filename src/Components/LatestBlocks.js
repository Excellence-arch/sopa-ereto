import React from 'react';
import { useSelector } from 'react-redux';
import done from '../assets/done.png';

const LatestBlocks = () => {
  const data = useSelector((state) => state.latestReducer.blocks);
  return (
    <div className="size bg-white p-3 rounds-start rounds-end border ms-3 me-4">
      <p className="my-2 mb-4">Rangers</p>
      <p className="shift mt-2" style={{ marginLeft: '490px' }}>
        <button className="btn btn-light text-danger">{'<'}</button>{' '}
        <span className="btn btn-light">1</span>{' '}
        <button className="btn btn-light text-danger">{'>'}</button>
      </p>
      <div className="">
        {data.map((val, i) => (
          <div key={i} className="">
            <td className="fw-bold pe-3">Today</td>
            <td className="ms-2 me-5">
              <img
                src={val.picture}
                alt={'Picture'}
                width="40px"
                className="rounds-start rounds-end"
              />
            </td>
            <p className=""></p>
            <span className="moves text-muted fw-light">
              <span className="">ID:</span> <span className="text-blue">{val.id}</span>
            </span>
            <span className="recieved fw-light text-muted">
              {' '}
              Recieved <img src={done} width={'10px'} />
            </span>
            <span className="amounts p-2" style={{ fontWeight: '200' }}>
              {val.amount} KES
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlocks;
