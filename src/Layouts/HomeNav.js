import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import MaterialIcon from 'react-google-material-icons';
import logo from '../assets/logo.png';
import '../assets/Styles/Navbar.css';

const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3" to="/" title="NevBank">
            <img src={logo} width="40px" className="rounds-start rounds-end" />{' '}
            <span className="text-muted" style={{ fontSize: '15', fontWeight: '500' }}>
              <span className="text-blue">Sopa-</span>
              <span className="text-danger">Ereto</span>
            </span>
          </Link>
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/transactions">
                Transactions
              </Link>
            </li>
          </ul>
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
          <div
            className="collapse navbar-collapse"
            id="navbarScroll"
            style={{ float: 'right !important' }}>
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}></ul>
            {/* <span className="text-muted me-5 border-end pe-3 ps-3 border-start"> */}
            <button
              className="btn btn-outline-dark me-5"
              onClick={() => navigate('/donor/payment')}>
              Donate Now!
            </button>
            {/* <span style={{ position: 'absolute', paddingLeft: '3px' }}>
                <MaterialIcon icon="account_circle" />
              </span>
              <Link
                to="/accounts/login"
                className="text-decoration-none text-muted ms-5"
                style={{ fontSize: '15' }}
                title="Sign in">
                {'Sign in'}
              </Link> */}
            {/* </span> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
