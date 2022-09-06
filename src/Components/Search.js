import React from 'react';
import '../assets/Styles/search.css';

const Search = () => {
  return (
    <div>
      <div className="d-flex searches">
        <input type="text" className="form-control" placeholder={`Search User`} />
        <button className="btn btn-warning mx-3 py-2" style={{ width: '120px' }}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default Search;
