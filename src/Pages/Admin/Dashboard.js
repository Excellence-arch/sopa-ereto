import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const name = useSelector((state) => state.adminReducer.name);
  const pix = useSelector((state) => state.adminReducer.pix);
  return (
    <div>
      <div className="bg-dark text-white" style={{ position: 'sticky' }}>
        <span>Sopa-Ereto</span>
        <p style={{ position: 'relative' }} className="d-inline">
          <span>
            <img src={pix} alt={name} className="rounded-circle" width="60px" />
          </span>
          <span>{name}</span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
