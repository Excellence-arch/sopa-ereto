import React from 'react';
// import success from '../assets/success1.gif';
import success2 from '../assets/success2.gif';
import NewNav from '../Layouts/NewNav';

const Success = () => {
  return (
    <div className="">
      <NewNav />
      <div className="text-center">
        <img src={success2} className="bg-image" width={'400px'} />
        <p className="text-muted fw-bold fs-3" style={{ marginTop: '-50px' }}>
          Donation Successful
        </p>
        <p className="text-muted">Thank you for your donation.</p>
      </div>
    </div>
  );
};

export default Success;
