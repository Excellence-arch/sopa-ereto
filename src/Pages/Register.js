import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [valid, setValid] = useState(true);
  const [role, setRole] = useState('');
  const url = '';

  const handleRole = (e) => {
    setRole(e.target.value);
    if (e.target.value == 'donor') setValid(false);
    else setValid(true);
  };

  const register = (e) => {
    if (email == '' || password == '' || (valid == true && name == ''))
      setError('All Fields are required');
    else {
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
    }
  };
  return (
    <div className="colors w-100 h-100 container-fluid">
      <div className="row">
        <form className="col-12 col-lg-7 mx-auto mt-5">
          <p className="text-center display-4">Register</p>
          {error ? <div className="text-danger alert alert-danger">{error}</div> : null}

          <input
            required
            type="text"
            className="form-control w-100 my-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type="text"
            className="form-control w-100 my-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select className="custom-select" onChange={(e) => handleRole(e)} value={role}>
            <option value="" selected disabled hidden>
              Choose your role
            </option>
            <option value={'donor'}>Donor</option>
            <option value={'tour operator'}>Tour Operator</option>
          </select>

          <input
            required={valid}
            type="text"
            className="form-control w-100 my-3"
            placeholder="Firstname and Lastname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className="btn btn-secondary w-100 my-3 shadow" onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Register'}
          </button>
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
