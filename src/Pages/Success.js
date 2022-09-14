import React from 'react';
// import success from '../assets/success1.gif';
import success2 from '../assets/success2.gif';
// import NewNav from '../Layouts/NewNav';

const Success = () => {
  return (
    <div className="colorss h-100 p-5">
      {/* <NewNav /> */}
      <div className="text-center">
        <div
          className="bg-white p-4 rounds-start rounds-end"
          style={{ width: 'fit-content', marginLeft: '380px' }}>
          <img src={success2} className="bg-image" width={'400px'} />
          <p className="text-muted fw-bold fs-3" style={{ marginTop: '-50px' }}>
            Donation sent
          </p>
          <p className="text-muted">
            You&rsquo;ll recieve an Nft badge as an expression of our gratitude for this donation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
