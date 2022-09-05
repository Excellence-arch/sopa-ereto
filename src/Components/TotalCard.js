import React from 'react';
import EachCard from './EachCard';
import Graph from './Graph';
import donation from '../assets/donations.png';
import recievedDonations from '../assets/recieved_donations.png';

const TotalCard = () => {
  return (
    <div
      className="border rounded shadow-blue position bg-white mb-4 rounds-start rounds-end"
      style={{ marginLeft: '23px', marginRight: '23px' }}>
      <div className="row">
        <div className="col-8">
          <div className="d-flex flex-wrap flex-column flex-lg-row">
            <EachCard name={'Donations'} amount={'1,594.01 KES'} img={donation} />
            <p
              className="bord"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '1px',
                height: '100px',
                marginTop: '10px',
                marginLeft: '405px'
              }}></p>
            <p
              className="bord"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '340px',
                height: '1px',
                marginTop: '60px',
                marginLeft: '40px'
              }}></p>
            <EachCard
              name={'Recieved Donations'}
              amount={'1,636.36M KES'}
              img={recievedDonations}
            />
            <p
              className="bord"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '340px',
                height: '1px',
                marginTop: '60px',
                marginLeft: '430px'
              }}></p>
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
