import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';

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
            <p className="display-4 container">Login</p>
            <p className="text-disabled text-center">Hi there! Nice to see you again.</p>
            {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
            <input
              type="text"
              className="form-control w-100 my-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="input-group my-3">
              <input
                type={showPwd ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
              <span
                className="input-group-text cursor-pointer"
                onClick={() => setShowPwd(!showPwd)}>
                <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
              </span>
            </div>
            <button className="btn btn-secondary w-100 my-3" onClick={(e) => login(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Login'}
            </button>
            <div className="mx-auto row">
              <p className="text-disabled col-10">Forgot Password?</p>
              <p className="col-2">
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
