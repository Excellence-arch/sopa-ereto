import React from 'react';
import '../assets/Styles/search.css';
import MaterialIcon from 'react-google-material-icons';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className="mb-3 ms-lg-auto mt-3">
      <div className="d-flex searches">
        <input
          type="text"
          className="form-control input border-0 my-2"
          placeholder={`Search Beneficiary`}
        />
        <span style={{ marginLeft: '-30px', marginTop: '10px' }}>
          <MaterialIcon icon="search" />
        </span>
        {/* <button className="btn btn-danger mx-3 my-2" style={{ width: '190px' }}>
          Add Beneficiary
        </button> */}
        {/* <li className="nav-item dropdown"> */}
        <a
          className="dropdown-toggle btn btn-danger mx-3 my-2 shadow"
          style={{ width: '190px' }}
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          Add Beneficiary
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="dropdown-item" to="/admin/upload-record">
              Land Owner
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin/ranger-upload">
              Ranger
            </Link>
          </li>
        </ul>
        {/* </li> */}
      </div>
    </div>
  );
};

export default Search;
