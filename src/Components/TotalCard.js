import React from 'react';
import EachCard from './EachCard';
import Graph from './Graph';

const TotalCard = () => {
  return (
    <div className="col-12 container border rounded shadow-sm position bg-white">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <EachCard name={'Donations'} amount={'1,594.01 KES'} />
            <EachCard name={'Disbursed'} amount={'1,636.36M KES'} />
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
