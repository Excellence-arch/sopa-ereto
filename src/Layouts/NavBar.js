import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from 'react-google-material-icons';
import logo from "../assets/NevBank.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} /> NevBank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">My Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Transactions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Investments</a>
        </li>
      </ul>
      <ul className="navbar-nav me-5">
        <li className="nav-item mx-2">
          <Link to='/' className='text-dark'><MaterialIcon icon="settings" /> </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to='/' className='text-dark'><MaterialIcon icon="mail" /> </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to='/' className='text-dark'><MaterialIcon icon="notifications" /> </Link>
        </li>
      </ul>
      <Link to="/" className="text-decoration-none text-dark ms-5 me-5">Dorothy Watkins</Link>
      <Link to="/" className='text-decoration-none text-dark'>Logout</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar;