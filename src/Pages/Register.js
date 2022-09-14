import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logos from '../assets/register.gif';
import { useSelector } from 'react-redux';
import Input from '../Components/Input';
import Password from '../Components/Password';

const Register = () => {
  const [email, setEmail] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState();
  const [showPwd, setShowPwd] = useState(false);
  const [type, setType] = useState('');
  const [confPassword, setConfPassword] = useState();
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}register-donor`;
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
      const details = { email, type };
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
    <div className="container-fluid bg-pays w-100 h-100">
      <div className="row">
        <div className="col-12 col-lg-4 new-color full-height">
          <h4 className="h2 text-white container mt-5">
            A few clicks away from creating your Lottery Display
          </h4>
          <img src={logos} alt="file" width={'400px'} className="w-100" />
        </div>
        <form className="col-12 col-lg-7 px-5 mt-4" style={{ marginLeft: '70px' }}>
          <p className="h1 fw-bold text-blue">Register</p>
          {/* <p className="">Manage all your lottery efficiently</p> */}
          <p className="col-8 text-muted mb-5" style={{ fontSize: '12' }}>
            Let&rsquo;s get you all set up so you can verify your personal account and begin setting
            up your profile
          </p>
          {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
          <div className="w-75">
            <label className="fonts text-blue">Email</label>
            <Input
              placeholder={'Email'}
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <label className="fonts text-blue">Password</label>
            <Password
              password={password}
              handleChange={(e) => setPassword(e.target.password)}
              showPwd={showPwd}
              clicked={() => setShowPwd(!showPwd)}
            />
            <label className="fonts text-blue">Confirm Password</label>
            <div className="input-group mb-3 w-75">
              <input
                type={showPwd ? 'text' : 'password'}
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                className="form-control border-0 checks check-weight"
                placeholder="Confirm your password"
              />
              <span
                className="input-group-text cursor-pointer border-0"
                onClick={() => setShowPwd(!showPwd)}>
                <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
              </span>
            </div>
            {/* <div className="input-group mb-3 w-75">
              <input
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control check-weight"
                placeholder="Enter your password"
              />
              <span
                className="input-group-text cursor-pointer"
                onClick={() => setShowPwd(!showPwd)}>
                <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
              </span>
            </div> */}
          </div>

          <div>
            <p className="fonts text-blue" style={{ marginBottom: '0' }}>
              Type of Donor
            </p>
            <input
              className="radios"
              checked
              type="radio"
              name="type"
              value={'individual'}
              onChange={(e) => setType(e.target.value)}
            />
            <span className="fonts text-muted">&nbsp;Individual&nbsp;&nbsp;&nbsp;</span>
            <input
              className="radios"
              type="radio"
              name="type"
              value={'organization'}
              onChange={(e) => setType(e.target.value)}
            />
            <span className="fonts text-muted">&nbsp;Organization</span>
          </div>
          {/* <select className="custom-select" onChange={(e) => handleRole(e)} value={role}>
            <option value="" selected disabled hidden>
              Choose status
            </option>
            <option value={'donor'}>Donor</option>
            <option value={'tour operator'}>Tour Operator</option>
          </select> */}
          <button
            className="btn btn-pink px-4 mt-5 mb-2 shadow"
            disabled={isloading ? true : false}
            onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Get Started'}
          </button>
          <p className="text-muted fw-light" style={{ fontSize: '14' }}>
            <span>Already have an account?</span>{' '}
            <Link to="/accounts/login" className="text-danger text-decoration-none fw-bold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
