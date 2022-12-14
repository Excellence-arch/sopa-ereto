import React, { useState } from 'react';
import axios from 'axios';
import AdminAdd from '../../Layouts/AdminAdd';
import imgs from '../../assets/africa.png';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const RangersUpload = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [conservancy, setConservancy] = useState();
  const [salary, setSalary] = useState();
  const [userAddress, setUserAddress] = useState();
  const [gender, setGender] = useState();
  const [accountNumber, setAccountNumber] = useState();
  // const [isActive, setIsActive] = useState();
  const [phone, setPhone] = useState();
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2/add-Ranger`;

  const addRanger = (e) => {
    setIsloading(true);
    setError(false);
    e.preventDefault();
    const details = {
      firstName,
      lastName,
      middleName,
      dob: dateOfBirth,
      address: userAddress,
      gender,
      accountNumber,
      salary,
      conservancy,
      phoneNumber: phone
      // isActive
    };
    axios
      .post(url, details)
      .then((res) => {
        setIsloading(false);
        console.log(res.data);
        if (res.data.status == 'SE200') {
          navigate('/admin');
        } else {
          setError(res.data.data);
        }
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };
  return (
    <div>
      <AdminAdd />
      <div className="d-flex flex-column flex-lg-row-reverse">
        <div className="col-12 col-lg-4 new-color shadow-blue hh-100">
          <img alt="Image" src={imgs} width={'300px'} className="ms-4" /> <br />
          <div className="text-center">
            <button
              className="btn btn-warning text-white text-center mt-4 mb-5 px-5"
              onClick={(e) => addRanger(e)}>
              {isloading ? <span className="spinner-border"></span> : 'continue'}
            </button>
          </div>
        </div>
        <form className="row ms-5 col-8">
          <div className="mt-4">
            <p className="h3">Add Ranger</p>
          </div>
          {error && (
            <div
              className="text-danger text-center alert alert-danger"
              style={{ marginLeft: '-10px' }}>
              {error}
            </div>
          )}
          <div className="col-md-6">
            <label className="fonts text-blue">First Name</label>
            <input
              type="text"
              placeholder={'Enter your first name'}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Middle Name</label>
            <input
              type="text"
              placeholder={'Enter your first name'}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Last Name</label>
            <input
              type="text"
              placeholder={'Enter your first name'}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          {/* <div className="col-md-6">
            <label className="fonts text-blue">Date of birth</label>
            <input
              type="date"
              placeholder={'Enter your date of birth'}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div> */}
          <div className="col-md-6">
            <label className="fonts text-blue">Conservancy</label>
            <input
              type="text"
              placeholder={'Enter rangers Conservancy'}
              value={conservancy}
              onChange={(e) => setConservancy(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Salary</label>
            <input
              type="text"
              placeholder={`Enter the ranger's salary`}
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Address</label>
            <input
              type="text"
              placeholder={'Enter your address'}
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Date of birth</label>
            <input
              type="date"
              placeholder={`Enter the ranger's salary`}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          <div className="col-md-6">
            <label className="fonts text-blue">Gender</label>
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
          </div>
          {/* <div className="col-md-6">
            <label className="fonts text-blue">Gender</label>
            <br />
            <select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="form-control w-75 mb-3 check-weight py-2">
              <option defaultValue={'Male'} selected disabled>
                Select Gender
              </option>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
            </select>
          </div> */}
          <div className="col-md-6">
            <label className="fonts text-blue">Account Number</label>
            <input
              type="text"
              placeholder={'Enter your Account Number'}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          {/* <div className="col-md-6">
            <label className="fonts text-blue">Active</label>
            <br />
            <select
              onChange={(e) => setIsActive(e.target.value)}
              value={isActive}
              className="form-control w-75 mb-3 check-weight py-2">
              <option defaultValue={false} selected disabled>
                Select active status
              </option>
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </div> */}
          <div className="col-md-6">
            <label className="fonts text-blue">Phone Number</label>
            <input
              type="text"
              placeholder={'Enter your Phone number'}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control w-75 mb-3 check-weight py-2"
            />
          </div>
          {/* <div className="text-center" style={{ marginLeft: '-70px' }}>
            <button className="btn new-color text-white mb-3">Continue</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default RangersUpload;
