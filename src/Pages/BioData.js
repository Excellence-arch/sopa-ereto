import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

const BioData = () => {
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  // const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-12 col-lg-4 bg-pays full-height">
          <p className="ms-5 mt-4 text-dark">Step 2/2: Bio Data</p>
          <div className="" style={{ marginTop: '150px', marginLeft: '50px' }}>
            <p className="h2" style={{ marginBottom: '100px' }}>
              Bio-Data
            </p>
            {/* <p className="text-ash mb-0 mt-4">Must contain an uppercase letter</p>
            <p className="text-ash mb-0">Must contain a lowercase letter</p>
            <p className="text-ash mb-0">Must contain a number</p>
            <p className="text-ash mb-0">Must contain a special character</p> */}
            <button className="btn btn-pink mt-2">Skip</button>
          </div>
        </div>
        <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
          <div className="mb-5 mt-4">
            <p className="h3">Let&rsquo;s meet you</p>
          </div>
          <label className="fonts text-blue">Name</label>
          <input
            type="text"
            placeholder={'Enter your name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <label className="fonts text-blue">Address</label>
          <input
            type="text"
            placeholder={'Enter your Address'}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <label className="fonts text-blue">Phone Number</label>
          <input
            type="text"
            placeholder={'Enter your Phone Number'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <label className="fonts text-blue">Country</label>
          <input
            type="text"
            placeholder={'Enter your Location'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <div className="" style={{ marginTop: '190px' }}>
            {/* <span className="nav-link">Choose to be anonymous</span> */}
            <button className="btn new-color text-white" style={{ marginLeft: '490px' }}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BioData;
