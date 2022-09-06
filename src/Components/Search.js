import React from 'react';
import '../assets/Styles/search.css';

const Search = () => {
  return (
    <div className="mb-3">
      <div className="d-flex searches">
        <input type="text" className="form-control input" placeholder={`Search User`} />
        <button className="btn btn-danger mx-3" style={{ width: '120px' }}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default Search;
