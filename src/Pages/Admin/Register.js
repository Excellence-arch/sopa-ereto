import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import MaterialIcon from 'react-google-material-icons';
import logos from '../../assets/register.gif';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Components/Input';
import Password from '../../Components/Password';
import { useEffect } from 'react';
import { loginAdmin } from '../../actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userError, setUserError] = useState(false);
  const [name, setName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2/create-admin`;

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

  const register = (e) => {
    e.preventDefault();
    setIsloading(true);
    setError(false);
    const details = { email, _id: password, conservancy: name, accountNumber };
    axios
      .post(url, details)
      .then((res) => {
        if (res.data.status !== 'SE200') {
          setIsloading(false);
          setError(res.data.error);
        } else {
          setIsloading(false);
          dispatch(loginAdmin(res.data.data));
          navigate('/admin');
        }
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
        // console.log(err.message);
      });
  };
  return (
    <div className="container-fluid bg-pays">
      <div className="row">
        <div className="col-12 col-lg-4 new-color full-height">
          <h4 className="h2 text-white container mt-5">
            A few clicks away from creating your Lottery Display
          </h4>
          <img src={logos} alt="file" width={'400px'} className="w-100" />
        </div>
        <form className="col-12 col-lg-7 px-5 mt-5" style={{ marginLeft: '70px' }}>
          <p className="h1 fw-bold text-blue">Register</p>
          {/* <p className="">Manage all your lottery efficiently</p> */}
          <p className="col-8 text-muted mb-5" style={{ fontSize: '12' }}>
            Let&rsquo;s get you all set up so you can verify your personal account and begin setting
            up your profile
          </p>
          {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
          <div className="w-75">
            <label className="fonts text-blue">Conservancy</label>
            <Input
              placeholder={'Enter conservancy name'}
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <label className="fonts text-blue">Account Number</label>
            <Input
              placeholder={`Enter the conservancy's account number`}
              value={accountNumber}
              handleChange={(e) => setAccountNumber(e.target.value)}
            />
            <label className="fonts text-blue">Conservancy Email</label>
            <Input
              placeholder={'abc@yahoo.com'}
              value={email}
              handleChange={(e) => handleEmailChange(e)}
            />
            <label className="fonts text-blue">Password</label>
            <Password
              password={password}
              handleChange={(e) => setPassword(e.target.value)}
              showPwd={showPwd}
              clicked={() => setShowPwd(!showPwd)}
            />
          </div>
          <button
            className="btn btn-pink px-4 mt-5 mb-2 shadow"
            disabled={disabled}
            onClick={(e) => register(e)}>
            {isloading ? <span className="spinner-border"></span> : 'Create Account'}
          </button>
          <p style={{ fontSize: '14' }}>
            <span className="text-muted fw-light">Already have an account?</span>{' '}
            <Link to="/admin/login" className="text-danger text-decoration-none fw-bold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
