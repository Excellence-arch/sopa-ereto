import React from 'react';
import { useState } from 'react';

const RecordUpload = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [conservancy, setConservancy] = useState();
  const [landAcreSize, setLandAcreSize] = useState();
  const [userAddress, setUserAddress] = useState();
  const [gender, setGender] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [isActive, setIsActive] = useState();
  const [phone, setPhone] = useState();
  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-12 col-lg-4 bg-pays">
          <p className="ms-5 mt-4 text-dark">Step 2/2: Bio Data</p>
          <div className="" style={{ marginTop: '150px', marginLeft: '50px' }}>
            <p className="h2" style={{ marginBottom: '100px' }}>
              Bio-Data
            </p>
          </div>
        </div>
        <form className="col-12 col-lg-8 bg-massai">
          <div className="mb-5 mt-4">
            <p className="h3">Let&rsquo;s meet you</p>
          </div>
          <label className="fonts text-blue">First Name</label>
          <input
            type="text"
            placeholder={'Enter your first name'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <label className="fonts text-blue">Middle Name</label>
          <input
            type="text"
            placeholder={'Enter your middle name'}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
          <label className="fonts text-blue">Last Name</label>
          <input
            type="text"
            placeholder={'Enter your last name'}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Date of Birth</label>
          <input
            type="text"
            placeholder={'Enter your Date of birth'}
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Conservancy</label>
          <input
            type="text"
            placeholder={'Enter your Conservancy'}
            value={conservancy}
            onChange={(e) => setConservancy(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Size of your land(Acres)</label>
          <input
            type="text"
            placeholder={'Enter the suze of your land in acres'}
            value={landAcreSize}
            onChange={(e) => setLandAcreSize(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Address</label>
          <input
            type="text"
            placeholder={'Enter your Address'}
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Gender</label>
          <input
            type="text"
            placeholder={'Enter your gender'}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Account Number</label>
          <input
            type="text"
            placeholder={'Enter your Account Number'}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Active</label>
          <input
            type="text"
            placeholder={'Enter your Active Status'}
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
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

          <div className="">
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

export default RecordUpload;
