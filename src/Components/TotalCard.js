import React from 'react';
import EachCard from './EachCard';
import Graph from './Graph';
import donation from '../assets/donate.png';

const TotalCard = () => {
  return (
    <div className="col-12 container border rounded shadow-sm position bg-white mb-4">
      <div className="row">
        <div className="col-8">
          <div className="d-flex flex-wrap flex-column flex-lg-row">
            <EachCard name={'Donations'} amount={'1,594.01 KES'} img={donation} />
            <EachCard name={'Recieved Donations'} amount={'1,636.36M KES'} />
            <EachCard name={'Beneficiaries'} amount={'191,594'} />
            <EachCard name={'Paid Beneficiaries'} amount={'11,736'} />
          </div>
        </div>
        <div className="col-4">
          <Graph />
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
