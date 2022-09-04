import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import MaterialIcon from 'react-google-material-icons';
import logos from '../../assets/register.gif';
import { useDispatch, useSelector } from 'react-redux';
import { login as logins } from '../../actions/index';
import Input from '../../Components/Input';
import Password from '../../Components/Password';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}login-donor`;
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
            <p className="pt-4 text-white h2 col-10 container">
              Make everything simple by using Sopa Ereto
            </p>
            <img src={logos} alt="file" width={'300px'} className="w-100" />
          </div>
          <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
            <p className="h1 mb-2 container text-blue">Login</p>
            <p className="mb-5 text-muted" style={{ marginLeft: '28px' }}>
              Login to your account
            </p>
            {/* <p className="text-muted col-7 fonts" style={{ marginLeft: '50px' }}>
              Thank you for getting back to Sopa Ereto, let&rsquo;s access the best recommendations
              for you
            </p> */}
            {error ? <div className="text-danger alert alert-danger">{error}</div> : null}
            <Input
              placeholder={'Email'}
              handleChange={(e) => setEmail(e.target.value)}
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
              &nbsp;Remember me
            </span>
            <p className="text-danger fonts" style={{ marginLeft: '320px', marginTop: '-17px' }}>
              Forgot Password?
            </p>
            {/* </div> */}

            <button
              className="btn btn-pink w-70 my-2 mt-5 center rounded shadow"
              onClick={(e) => login(e)}>
              {isloading ? <span className="spinner-border"></span> : 'Login'}
            </button>

            <div className="mx-auto row">
              <p style={{ marginLeft: '80px', fontSize: '14' }} className="text-muted">
                {' '}
                Don&rsquo;t have an account?&nbsp;
                <Link to="/admin/register" className="text-danger text-decoration-none">
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
