import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logo from '../assets/NevBank.png';
import '../assets/Styles/Navbar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-pays">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3" to="/" title="NevBank">
            <img src={logo} />{' '}
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
          <div
            className="collapse navbar-collapse"
            id="navbarScroll"
            style={{ float: 'right !important' }}>
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ '--bs-scroll-height': '100px' }}>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Cards
                </a>
              </li> */}
            </ul>
            {/* <li className="nav-item"> */}
            <Link
              className="nav-link text-muted"
              aria-current="page"
              to="/"
              style={{ fontSize: '15' }}>
              Home
            </Link>
            {/* </li> */}
            {/* <li className="nav-item"> */}
            <Link className="nav-link text-muted me-5" to="/donor" style={{ fontSize: '15' }}>
              Transactions
            </Link>
            {/* </li> */}
            {/* <ul className="navbar-nav me-5">
              <li className="nav-item mx-2">
                <Link to="/" className="text-dark" title="settings">
                  <MaterialIcon icon="settings" />{' '}
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/" className="text-dark" title="mail">
                  <MaterialIcon icon="mail" />{' '}
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/" className="text-dark" title="notifications">
                  <MaterialIcon icon="notifications" />{' '}
                </Link>
              </li>
            </ul> */}
            {/* <Link
              to="/"
              className="text-decoration-none text-dark ms-5 me-5"
              title="Dorothy Watkins">
              Dorothy Watkins
            </Link> */}
            <span className="text-muted me-5 border-end pe-3 ps-3 border-start">
              <span style={{ position: 'absolute', paddingLeft: '3px' }}>
                <MaterialIcon icon="account_circle" />
              </span>
              <Link
                to="/accounts/login"
                className="text-decoration-none text-muted ms-5"
                style={{ fontSize: '15' }}
                title="Sign in">
                {'Sign in'}
                {/* <MaterialIcon icon="login" />{' '} */}
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
