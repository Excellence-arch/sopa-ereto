import React from 'react';
import '../assets/Styles/search.css';
import MaterialIcon from 'react-google-material-icons';

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
        <button className="btn btn-danger mx-3 my-2" style={{ width: '190px' }}>
          Add Beneficiary
        </button>
      </div>
    </div>
  );
};

export default Search;
