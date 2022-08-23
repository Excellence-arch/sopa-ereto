import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [valid, setValid] = useState(true);
  const [role, setRole] = useState('');
  const [type, setType] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const url = 'https://sopa-ereto.herokuapp.com/api/register';

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
      const details = { email, password, role, type };
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
    <div className="container">
      <div className="row mt-5 rounded-lg p-5 shadow-lg">
        <div className="col-0 col-lg-6 colors">
          <img src="" alt="file" />
        </div>
        <form className="col-12 col-lg-6">
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
          <div className="input-group my-3">
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
            <span className="input-group-text cursor-pointer" onClick={() => setShowPwd(!showPwd)}>
              <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
            </span>
          </div>
          <p className="mb-0">Role??</p>
          <input type="radio" name={role} value={'donor'} onChange={(e) => handleRole(e)} />
          &nbsp;Donor&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name={role} value={'tour operator'} onChange={(e) => handleRole(e)} />
          &nbsp;Tour Operator
          <br />
          <div className={role == 'tour operator' ? 'd-block' : 'd-none'}>
            <input
              required={valid}
              type="text"
              className="form-control w-100 my-3"
              placeholder="Firstname and Lastname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={role == 'donor' ? 'd-block' : 'd-none'}>
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
            className="btn btn-pink w-100 my-3 shadow"
            disabled={isloading ? true : false}
            onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Create Account'}
          </button>
          <p className="text-center">
            Have an account?{' '}
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
