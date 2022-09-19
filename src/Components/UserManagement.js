import React from 'react';
import Search from './Search';

const UserManagement = () => {
  return (
    <div style={{ marginLeft: '50px' }}>
      <div className="">
        <p className="text-blue h3 mt-4">User Access Management</p>
        <Search />
      </div>
    </div>
  );
};

export default UserManagement;
