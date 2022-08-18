import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const url = '';

  const register = (e) => {
    setIsloading(true);
    setError(false);
    e.preventDefault();
    const details = { email, password };
    axios
      .post(url, details)
      .then((res) => {
        setIsloading(false);
        console.log(res);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
        console.log(err.message);
      });
  };
  return (
    <div className="colors w-100 h-100 container-fluid">
      <div className="row">
        <form className="col-12 col-lg-7 mx-auto mt-5">
          <p className="text-center display-4">Register</p>
          {error ? <div className="text-danger alert alert-danger">{error}</div> : null}

          <input
            type="text"
            className="form-control w-100 my-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="form-control w-100 my-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-secondary w-100 my-3 shadow" onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Register'}
          </button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
