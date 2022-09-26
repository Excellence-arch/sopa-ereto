import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

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
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [leaseFee, setLeaseFee] = useState();
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2/add-landOwner`;
  const navigate = useNavigate();

  const addLandOwner = (e) => {
    setIsloading(true);
    e.preventDefault();
    const details = {
      firstName,
      lastName,
      middleName,
      dob: dateOfBirth,
      address: userAddress,
      gender,
      accountNumber,
      acreSize: landAcreSize,
      conservancy,
      leaseFee,
      phone,
      isActive
    };
    axios
      .post(url, details)
      .then((res) => {
        console.log(res);
        setIsloading(false);
        if (res.data.status == 'SE200') {
          navigate('/admin');
        } else {
          if (res.data.status == 302) {
            setError(res.data.data);
          } else {
            setError(res.data.data);
          }
        }
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };
  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-12 col-lg-4 new-color">
          {/* <p className="ms-5 mt-4 text-dark">Step 2/2: Bio Data</p> */}
          <div className="" style={{ marginTop: '150px', marginLeft: '50px' }}>
            <p className="h2 text-white" style={{ marginBottom: '100px' }}>
              Bio-Data for Land Owner
            </p>
          </div>
        </div>
        <form className="col-12 col-lg-8 bg-massai ps-5">
          <div className="mb-4 mt-4">
            <p className="h3">Input Personal details</p>
          </div>
          {error && <div className="alert alert-danger text-danger text-center">{error}</div>}
          <label className="fonts text-blue">First Name</label>
          <input
            type="text"
            placeholder={'Enter first name'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control w-75 mb-3 check-weight py-2 inputs"
          />
          <label className="fonts text-blue">Middle Name</label>
          <input
            type="text"
            placeholder={'Enter middle name'}
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className="form-control w-75 mb-3 check-weight inputs py-2"
          />
          <label className="fonts text-blue">Last Name</label>
          <input
            type="text"
            placeholder={'Enter last name'}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control w-75 mb-3 inputs check-weight py-2"
          />

          <label className="fonts text-blue">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="form-control w-75 mb-3 inputs check-weight py-2"
          />

          <label className="fonts text-blue">Conservancy</label>
          <input
            type="text"
            placeholder={'Enter Conservancy'}
            value={conservancy}
            onChange={(e) => setConservancy(e.target.value)}
            className="form-control w-75 mb-3 inputs check-weight py-2"
          />

          <label className="fonts text-blue">Size of land(Acres)</label>
          <input
            type="text"
            placeholder={'Enter the size of land in acres'}
            value={landAcreSize}
            onChange={(e) => setLandAcreSize(e.target.value)}
            className="form-control w-75 mb-3 inputs check-weight py-2"
          />

          <label className="fonts text-blue">Address</label>
          <input
            type="text"
            placeholder={'Enter Address'}
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="form-control w-75 inputs mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Gender</label>
          <br />
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="form-control w-75 mb-3 inputs check-weight py-2">
            <option defaultValue={'Male'} selected disabled>
              Select Gender
            </option>
            <option value={'Male'}>Male</option>
            <option value={'Female'}>Female</option>
          </select>

          <label className="fonts text-blue">Account Number</label>
          <input
            type="text"
            placeholder={'Enter Account Number'}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="form-control w-75 inputs mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Active</label>
          <br />
          <select
            onChange={(e) => setIsActive(e.target.value)}
            value={isActive}
            className="form-control inputs w-75 mb-3 check-weight py-2">
            <option defaultValue={false} selected disabled>
              Select active status
            </option>
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>

          <label className="fonts text-blue">Phone Number</label>
          <input
            type="text"
            placeholder={'Enter Phone Number'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control inputs w-75 mb-3 check-weight py-2"
          />

          <label className="fonts text-blue">Lease fee</label>
          <input
            type="text"
            placeholder={'Enter Lease Fee'}
            value={leaseFee}
            onChange={(e) => setLeaseFee(e.target.value)}
            className="form-control inputs w-75 mb-3 check-weight py-2"
          />

          <div className="text-center">
            {/* <span className="nav-link">Choose to be anonymous</span> */}
            <button className="btn new-color text-white mb-3" onClick={(e) => addLandOwner(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordUpload;
