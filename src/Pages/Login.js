import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logos from '../assets/register.gif';
import { useDispatch, useSelector } from 'react-redux';
import { login as logins } from '../actions/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}api/login`;
  // const url = `${baseUrl}api/login`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    setError(false);
    setIsloading(true);
    if (email == '' || password == '') {
      setIsloading(false);
      setError('All fields are required');
    } else {
      axios
        .post(url, { email, password })
        .then((res) => {
          isloading(false);
          console.log(res);
          dispatch(logins({ status: true, id: res.id }));
          if (res.data.status == false) {
            setError(res.data.message);
          } else {
            navigate('/home');
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
            <p className="pt-4 text-white display-6 col-10 container">
              Make everything simple by using Sopa Ereto
            </p>
            <img src={logos} alt="file" width={'300px'} className="w-100" />
          </div>
          <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
            <p className="h3 mb-3 container">Login</p>
            <p className="fw-bold">Login to your account</p>
            <p className="text-muted col-7 fonts">
              Thank you for getting back to Sopa Ereto, let&rsquo;s access the best recommendations
              for you
            </p>
            {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
            <input
              type="text"
              className="form-control w-75 my-3 border-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="input-group my-3 w-75">
              <input
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control border-0"
                placeholder="Password"
              />
              <span
                className="input-group-text cursor-pointer border-0"
                onClick={() => setShowPwd(!showPwd)}>
                <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
              </span>
            </div>
            <div>
              <input type={'checkbox'} />
              <span className="text-muted">&nbsp;Remember me</span>
              <p className="text-danger" style={{ marginLeft: '340px', marginTop: '-20px' }}>
                Reset Password
              </p>
            </div>

            <button className="btn btn-pink w-75 my-2" onClick={(e) => login(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Login'}
            </button>
            <div className="mx-auto row">
              <p style={{ marginLeft: '190px' }}>
                <Link to="/register" className="text-danger text-decoration-none">
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
