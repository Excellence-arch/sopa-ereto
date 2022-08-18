import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const url = '';
  const navigate = useNavigate();

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
    <div className="colors w-100 h-100 container-fluid">
      <div className="row">
        <div className="col-12 col-lg-7  mx-auto mt-5">
          <form className="container">
            <p className="display-4 text-center">Login</p>
            {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
            <input
              type="text"
              className="form-control w-100 my-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control w-100 my-3"
              placeholder="Password"
            />
            <input type="checkbox" onChange={() => setShowPwd(!showPwd)} /> Show Password
            <button className="btn btn-secondary w-100 my-3" onClick={(e) => login(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Login'}
            </button>
            <p>
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
