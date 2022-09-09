import React from 'react';
import { Link } from 'react-router-dom';
// import MaterialIcon from 'react-google-material-icons';
import logo from '../assets/NevBank.png';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../actions/index';
import '../assets/Styles/Navbar.css';

// eslint-disable-next-line react/prop-types
const Nav = ({ name, pix }) => {
  //   const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-pays colorss">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="NevBank">
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
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* <ul
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
            {/* </ul> */}
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
            <p className="profile">
              <img src={pix} alt={name} width="40px" className="rounded-circle" />
              <Link
                to="/"
                className="text-decoration-none text-white ms-2 me-5"
                title={name}
                style={{ fontSize: '14' }}>
                {name}
              </Link>
            </p>

            {/* <p
              className="text-decoration-none text-dark cursor-pointer mt-3"
              title="logout?"
              onClick={() => dispatch(logout({ status: false, id: '' }))}>
              {' '}
              <MaterialIcon icon="logout" />{' '}
            </p> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
