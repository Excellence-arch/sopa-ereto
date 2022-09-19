import React from 'react';
// import { useSelector } from 'react-redux';
// import AdminNav from '../../Layouts/AdminNav';
import Table from '../../Components/Table';
import UserManagement from '../../Components/UserManagement';
import AdminDarkNav from '../../Layouts/AdminDarkNav';

const Dashboard = () => {
  // const name = useSelector((state) => state.adminReducer.name);
  // const pix = useSelector((state) => state.adminReducer.pix);
  return (
    <div className="bg-pays w-100 h-100">
      <AdminDarkNav />
      <UserManagement />
      <Table />
    </div>
  );
};

export default Dashboard;
