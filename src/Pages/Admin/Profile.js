// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import AdminDarkNav from '../../Layouts/AdminDarkNav';
import img from '../../assets/avatar.png';
// import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Profile = () => {
  let { id } = useParams();
  const [url, setUrl] = useState([]);
  const me = useSelector((state) => state.allUsersReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (id[0] == 'r') {
      setUrl(me.rangers[id.slice(1)]);
      // console.log(me.rangers[id.slice(1)]);
    } else {
      setUrl(me.landOwners[id.slice(1)]);
    }
  }, []);
  useEffect(() => {
    if (me.rangers.length == 0 || id.slice(1) >= me.rangers.length) {
      navigate('/admin');
    }
  });
  return (
    <div>
      <AdminDarkNav />
      {/* {error && <div className="alert alert-danger text-danger text-center fs-2">{error}</div>}
      {isloading ? ( */}
      {/* <div className="text-center mt-5">
        <span className="spinner-border" style={{ width: '10rem', height: '10rem' }}></span>
      </div> */}
      {/* ) : (
        found && ( */}
      <p className="btn btn-light rounded-circle p-3 ms-5 mt-4" onClick={() => navigate('/admin')}>
        <FaArrowLeft />{' '}
      </p>
      <div className="container d-flex flex-column flex-lg-row mt-4">
        <div className="col-lg-4 col-12">
          <div className="text-center">
            <img src={img} alt="Profile Picture" className="rounded-circle" width={'200px'} />
            <p className="fs-3 text-dark">{`${url.firstName} ${url.middleName} ${url.lastName}`}</p>
            <p>ID: {url.idNumber}</p>
          </div>
        </div>
        <div className="col-lg-8 col-12 text-center">
          {/* <div className="row">
            <p className="col">Position: </p>
            <p className="col">{id[0] == 'r' ? 'Ranger' : 'Land Owner'}</p>
          </div> */}
          <p className="mb-3">
            <span className="fw-bold">Position:</span> {id[0] == 'r' ? 'Ranger' : 'Land Owner'}
          </p>
          <p className="mb-3">
            <span className="fw-bold">Phone:</span> {url.phone}
          </p>
          <p className="mb-3">
            <span className="fw-bold">Account Number:</span> {url.accountNumber}
          </p>
          <p className="mb-3">
            <span className="fw-bold">Date of birth:</span> {url.dateOfBirth}
          </p>
          <p className="mb-3">
            <span className="fw-bold">Gender:</span> {url.gender}
          </p>
          <p className="mb-3">
            <span className="fw-bold">Address:</span> {url.userAddress}
          </p>
        </div>
      </div>
      {/* )
      )} */}
    </div>
  );
};

export default Profile;
