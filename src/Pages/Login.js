import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import MaterialIcon from 'react-google-material-icons';
import logos from '../assets/register.gif';
import { useDispatch, useSelector } from 'react-redux';
import { login as logins } from '../actions/index';
import Input from '../Components/Input';
import Password from '../Components/Password';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userError, setUserError] = useState(false);
  // const url = `https://7ccf-105-55-203-144.in.ngrok.io/mcs2/login-donor`;
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2/login-donor`;
  // const url = `${baseUrl}api/login`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isloading || userError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

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

  const login = (e) => {
    e.preventDefault();
    setError(false);
    setIsloading(true);
    if (email == '' || password == '') {
      setIsloading(false);
      setError('All fields are required');
    } else {
      axios
        .post(url, { email, _id: password })
        .then((res) => {
          setIsloading(false);
          if (res.data.status !== 'SE200') {
            setError(res.data.error);
          } else {
            dispatch(logins(res.data.data));
            navigate('/donor');
          }
        })
        .catch((err) => {
          setIsloading(false);
          setError(err.message);
        });
      // console.log(email, password);
    }
  };
  return (
    <div className="bg-pays w-100 h-100">
      <div className="row mx-auto">
        <div className="col-12 row">
          <div className="col-12 col-lg-4 new-color full-height">
            <p className="pt-4 text-white h2 col-10 container">
              Make your donation secure by using Sopa-Ereto{' '}
            </p>
            <img src={logos} alt="file" width={'300px'} className="w-100" />
          </div>
          <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
            <p className="h1 mb-2 container text-blue" style={{ marginLeft: '-15px' }}>
              Login
            </p>
            <p className="mb-5 text-muted" style={{ marginLeft: '5px' }}>
              Login to your account
            </p>
            {/* <p className="text-muted col-7 fonts" style={{ marginLeft: '50px' }}>
              Thank you for getting back to Sopa Ereto, let&rsquo;s access the best recommendations
              for you
            </p> */}
            {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
            {userError ? <div className="text-danger alert alert-danger">{userError}</div> : null}
            <Input
              placeholder={'Enter your email'}
              handleChange={(e) => handleEmailChange(e)}
              value={email}
            />
            {/* <div className="input-group my-3 w-75"> */}
            <Password
              password={password}
              handleChange={(e) => setPassword(e.target.value)}
              showPwd={showPwd}
              clicked={() => setShowPwd(!showPwd)}
            />
            {/* <div> */}
            <input
              type={'checkbox'}
              className="check-color position-absolute"
              style={{ marginTop: '3px' }}
            />
            <span className="text-dark fonts" style={{ marginLeft: '12px' }}>
              <span className="text-muted">&nbsp;Remember me</span>
            </span>
            <p className="text-danger fonts" style={{ marginLeft: '320px', marginTop: '-17px' }}>
              Forgot Password?
            </p>
            {/* </div> */}

            <button
              className="btn btn-pink w-70 my-2 mt-5 center rounded shadow"
              disabled={disabled}
              onClick={(e) => login(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Login'}
            </button>

            <div className="mx-auto row">
              <p style={{ marginLeft: '80px', fontSize: '14' }} className="text-muted">
                {' '}
                <span className="text-muted fw-light">Don&rsquo;t have an account?&nbsp;</span>
                <Link to="/accounts/register" className="text-danger fw-bold text-decoration-none">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
