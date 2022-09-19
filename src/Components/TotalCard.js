import React from 'react';
import EachCard from './EachCard';
import donation from '../assets/donations.png';
import beneficiary from '../assets/beneficiary.png';
import paidBeneficiary from '../assets/paid beneficiary.png';
import recievedDonations from '../assets/recieved_donations.png';

const TotalCard = () => {
  return (
    <div
      className="border rounded shadow-blue position col-7 bg-white mb-4 rounds-start rounds-end"
      style={{ marginLeft: '23px', marginRight: '23px' }}>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-wrap flex-column flex-lg-row">
            <EachCard name={'Donations'} amount={'1,594.01 KES'} img={donation} />
            <p
              className="bord bg-ash"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '1px',
                height: '80px',
                marginTop: '10px',
                marginLeft: '380px'
              }}></p>
            <p
              className="bord bg-ash"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '320px',
                height: '1px',
                marginTop: '51px',
                marginLeft: '40px'
              }}></p>
            <EachCard
              name={'Recieved Donations'}
              amount={'1,636.36M KES'}
              img={recievedDonations}
            />
            <p
              className="bord bg-ash"
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                width: '320px',
                height: '1px',
                marginTop: '51px',
                marginLeft: '400px'
              }}></p>
            <EachCard name={'Beneficiaries'} amount={'191,594'} img={beneficiary} />
            <EachCard name={'Paid Beneficiaries'} amount={'11,736'} img={paidBeneficiary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
