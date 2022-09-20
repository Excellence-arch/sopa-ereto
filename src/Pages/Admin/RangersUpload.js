import React, { useState } from 'react';
import AdminAdd from '../../Layouts/AdminAdd';

const RangersUpload = () => {
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
    <div>
      <AdminAdd />
      <form className="row g-3 ms-5">
        <div className="mt-4">
          <p className="h3">Add User</p>
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">First Name</label>
          <input
            type="text"
            placeholder={'Enter your first name'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Middle Name</label>
          <input
            type="text"
            placeholder={'Enter your first name'}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Last Name</label>
          <input
            type="text"
            placeholder={'Enter your first name'}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Date of birth</label>
          <input
            type="text"
            placeholder={'Enter your date of birth'}
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Conservancy</label>
          <input
            type="text"
            placeholder={'Enter your Conservancy'}
            value={conservancy}
            onChange={(e) => setConservancy(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Size of your land(Acres)</label>
          <input
            type="text"
            placeholder={'Enter the size of your land in acres'}
            value={landAcreSize}
            onChange={(e) => setLandAcreSize(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Address</label>
          <input
            type="text"
            placeholder={'Enter your address'}
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Gender</label>
          <input
            type="text"
            placeholder={'Enter your gender'}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Account Number</label>
          <input
            type="text"
            placeholder={'Enter your Account Number'}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Active</label>
          <input
            type="text"
            placeholder={'Enter your active status'}
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="col-md-4">
          <label className="fonts text-blue">Phone Number</label>
          <input
            type="text"
            placeholder={'Enter your Phone number'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2"
          />
        </div>
        <div className="text-center" style={{ marginLeft: '-70px' }}>
          <button className="btn new-color text-white mb-3">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default RangersUpload;
