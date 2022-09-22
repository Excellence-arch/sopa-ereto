import React from 'react';
import Search from './Search';

const UserManagement = () => {
  return (
    <div style={{ marginLeft: '50px' }} className="container">
      <div className="d-flex flex-column flex-lg-row">
        <p className="text-blue h3 mt-4 me-auto">Beneficiary Identity Management</p>
        <Search />
      </div>
    </div>
  );
};

export default UserManagement;
