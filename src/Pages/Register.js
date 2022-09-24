import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logos from '../assets/register.gif';
// import { useSelector } from 'react-redux';
import Input from '../Components/Input';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState();
  const [showPwd, setShowPwd] = useState(false);
  const [typeOf, setTypeOf] = useState('');
  const [disable, setDisable] = useState(true);
  const [confPassword, setConfPassword] = useState();
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const url = `${useSelector(
  //   (state) => state.urlReducer.baseUrl
  // )}-diam.herokuapp.com/mcs2/Add-Donor`;
  // const url = `https://7ccf-105-55-203-144.in.ngrok.io/mcs2/add-donor`;
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2/add-donor`;

  // const handleRole = (e) => {
  //   setRole(e.target.value);
  //   if (e.target.value == 'donor') setValid(false);
  //   else setValid(true);
  // };

  const handleEmailChange = (e) => {
    let re = /^\S+@\S+\.\S+$/;
    setEmail(e.target.value);
    let pass = e.target.value;
    if (!re.test(pass)) {
      setUserError('Invalid email address');
    } else {
      setUserError(false);
    }
  };

  useEffect(() => {
    if (isloading || userError) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });

  const register = (e) => {
    e.preventDefault();
    if (email == '' || password == '' || confPassword == '') {
      setUserError('All Fields are required');
    } else {
      if (password !== confPassword) {
        setUserError('Passwords did not match');
      } else {
        setIsloading(true);
        setError(false);
        const details = {
          email,
          typeOf,
          // lastName: '',
          // firstName: '',
          // phone: '',
          // idNumber: '',
          _id: password
        };
        axios
          .post(url, details)
          .then((res) => {
            setIsloading(false);
            if (res.data.status == 'SE200') {
              dispatch(login(res.data.data));
              navigate('/accounts/bio-data');
            }
          })
          .catch((err) => {
            setIsloading(false);
            setError(err.message);
            setDisable(false);
            // console.log(err.message);
          });
      }
    }
  };
  return (
    <div className="container-fluid bg-pays w-100 h-100">
      <div className="row">
        <div className="col-12 col-lg-4 new-color full-height">
          <h4 className="h2 text-white container mt-5">
            Make your donation secure with Sopa-Ereto
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
          {userError ? <div className="text-danger alert alert-danger">{userError}</div> : null}

          <div className="w-75">
            <label className="fonts text-blue">Email</label>
            <Input placeholder={'Email'} value={email} handleChange={(e) => handleEmailChange(e)} />
            <label className="fonts text-blue">Phrase</label>
            <br />

            <div className="input-group w-75">
              <input
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control border-0 checks check-weight"
                placeholder="Set your phrase"
              />
              <span
                className="input-group-text cursor-pointer border-0"
                onClick={() => setShowPwd(!showPwd)}>
                <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
              </span>
            </div>
            <p className="text-danger" style={{ fontSize: '10px', marginLeft: '140px' }}>
              Your phrase is a unique keyword special to you alone
            </p>
            <label className="fonts text-blue">Confirm Your phrase</label>
            <div className="input-group mb-3 w-75">
              <input
                type={showPwd ? 'text' : 'password'}
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                className="form-control border-0 checks check-weight"
                placeholder="Confirm your phrase"
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
              onChange={(e) => setTypeOf(e.target.value)}
            />
            <span className="fonts text-muted">&nbsp;Individual&nbsp;&nbsp;&nbsp;</span>
            <input
              className="radios"
              type="radio"
              name="type"
              value={'organization'}
              onChange={(e) => setTypeOf(e.target.value)}
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
            disabled={disable}
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
