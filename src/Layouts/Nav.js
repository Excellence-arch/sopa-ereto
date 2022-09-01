import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logo from '../assets/NevBank.png';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/index';
import '../assets/Styles/Navbar.css';

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-pays">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="NevBank">
            <img src={logo} /> Sopa-Ereto
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
                <Link className="nav-link" to="/users">
                  Transactions
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Cards
                </Link>
              </li> */}
            </ul>
            <ul className="navbar-nav me-5">
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
            </ul>
            <Link
              to="/"
              className="text-decoration-none text-dark ms-5 me-5"
              title="Dorothy Watkins">
              Dorothy Watkins
            </Link>
            <p
              className="text-decoration-none text-dark cursor-pointer mt-3"
              title="logout?"
              onClick={() => dispatch(logout({ status: false, id: '' }))}>
              {' '}
              <MaterialIcon icon="logout" />{' '}
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
