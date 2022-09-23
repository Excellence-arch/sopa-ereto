import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions';
// import { useSelector } from 'react-redux';
// import AdminNav from '../../Layouts/AdminNav';
import Table from '../../Components/Table';
import UserManagement from '../../Components/UserManagement';
import AdminDarkNav from '../../Layouts/AdminDarkNav';

const Dashboard = () => {
  const url = `${useSelector((state) => state.urlReducer.baseUrl)}`;
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsloading(false);
        dispatch(getDetails(res.data));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  });
  // const name = useSelector((state) => state.adminReducer.name);
  // const pix = useSelector((state) => state.adminReducer.pix);
  return (
    <div className="bg-pays">
      <AdminDarkNav />
      {isloading && (
        <div className="text-center mt-5">
          <span className="spinner-grow" style={{ width: '10rem', height: '10rem' }}></span>
        </div>
      )}
      {error && <div className="text-danger alert-danger alert text-center fs-2">{error}</div>}
      {!error && !isloading && (
        <div>
          <UserManagement />
          <Table />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
