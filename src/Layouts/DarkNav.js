import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logo from '../assets/logo.png';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/index';
import '../assets/Styles/Navbar.css';

const DarkNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="NevBank">
            <img src={logo} width="40px" className="rounds-start rounds-end" />{' '}
            <span className="text-muted" style={{ fontSize: '15', fontWeight: '500' }}>
              <span className="text-blue">Sopa-</span>
              <span className="text-danger">Ereto</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transactions">
                  Transactions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donor/reviews">
                  Reviews
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Cards
                </Link>
              </li> */}
            </ul>

            <p
              className="text-decoration-none text-dark cursor-pointer mt-3"
              title="logout?"
              onClick={() => {
                navigate('/accounts/login');
                dispatch(logout({ status: false, id: '' }));
              }}>
              {' '}
              <MaterialIcon icon="logout" />{' '}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DarkNav;
