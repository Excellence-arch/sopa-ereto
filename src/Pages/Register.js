import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logos from '../assets/register.gif';
import { useSelector } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  // const [name, setName] = useState('');
  // const [valid, setValid] = useState(true);
  // const [role, setRole] = useState('');
  const [type, setType] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}api/register`;
  // const url = `${baseUrl}api/register`;

  // const handleRole = (e) => {
  //   setRole(e.target.value);
  //   if (e.target.value == 'donor') setValid(false);
  //   else setValid(true);
  // };

  const register = (e) => {
    e.preventDefault();
    if (email == '' || password == '' || type == '') setError('All Fields are required');
    else {
      setIsloading(true);
      setError(false);
      const details = { email, password, type };
      axios
        .post(url, details)
        .then((res) => {
          setIsloading(false);
          console.log(res);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err.message);
          // console.log(err.message);
        });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-4 new-color full-height">
          <h4 className="display-6 text-white container mt-5">
            A few clicks away from creating your Lottery Display
          </h4>
          <img src={logos} alt="file" width={'400px'} className="w-100" />
        </div>
        <form className="col-12 col-lg-8 px-5 ">
          <p className="display-5">Register</p>
          <p className="fw-bold">Manage all your lottery efficiently</p>
          <p className="col-8 text-muted">
            Let&rsquo;s get you all set up so you can verify your personal account and begin setting
            up your profile
          </p>
          {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
          <label>Email</label>
          <input
            required
            type="text"
            className="form-control w-100 my-3"
            // placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <div className="input-group my-3">
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              // placeholder="Password"
            />
            <span className="input-group-text cursor-pointer" onClick={() => setShowPwd(!showPwd)}>
              <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
            </span>
          </div>
          <div>
            <p>Type of Donor</p>
            <input
              type="radio"
              name="type"
              value={'individual'}
              onChange={(e) => setType(e.target.value)}
            />
            &nbsp;Individual&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="type"
              value={'organization'}
              onChange={(e) => setType(e.target.value)}
            />
            &nbsp;Organization
          </div>
          {/* <select className="custom-select" onChange={(e) => handleRole(e)} value={role}>
            <option value="" selected disabled hidden>
              Choose status
            </option>
            <option value={'donor'}>Donor</option>
            <option value={'tour operator'}>Tour Operator</option>
          </select> */}
          <button
            className="btn btn-pink px-4 my-3 shadow"
            disabled={isloading ? true : false}
            onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Create Account'}
          </button>
          <p className="">
            Already have an account?{' '}
            <Link to="/login" className="text-danger text-decoration-none">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
