import React from 'react';
import { useNavigate } from 'react-router';
import gift from '../assets/gift.png';

const Graph = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer bg-pays glassmorphism imgss margins rounds-start rounds-end bg-images"
      onClick={() => navigate('/accounts/login')}
      style={{ height: '110px' }}>
      {/* <img
        src={animals}
        className="rounds-start rounds-end"
        style={{ marginLeft: '-9px', width: '89px', height: 'inherit' }}
      /> */}
      <img src={gift} alt="gift" width="89px" />
      <span className="">
        <span className="fw-bold fs-3 mb-0 ms-3" style={{ color: 'rgb(210,105,30)' }}>
          Donate to the Massai
        </span>{' '}
        <p
          className=""
          style={{ color: 'rgb(0, 137, 138)', marginTop: '-35px', marginLeft: '104px' }}>
          Help the Massai people with your donation
        </p>
      </span>
    </div>
  );
};

export default Graph;
