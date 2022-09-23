import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions';
// import { useSelector } from 'react-redux';
// import AdminNav from '../../Layouts/AdminNav';
import Table from '../../Components/Table';
import UserManagement from '../../Components/UserManagement';
import AdminDarkNav from '../../Layouts/AdminDarkNav';

const Dashboard = () => {
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2`;
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [dataset, setDataset] = useState('rangers');
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${url}/all-Rangers`)
      .then((res) => {
        setIsloading(false);
        dispatch(actions.getDetails(res.data.value));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  }, []);
  const getLandOwners = () => {
    setIsloading(true);
    axios
      .get(`${url}/all-landOwners`)
      .then((res) => {
        setIsloading(false);
        dispatch(actions.getLandOwners(res.data.value));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

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
          <div className="row">
            <p className="mx-auto cursor-pointer col-6" onClick={() => setDataset('rangers')}>
              Rangers
            </p>
            <p
              className="mx-auto cursor-pointer col-6"
              onClick={() => {
                getLandOwners;
                setDataset('landowners');
              }}>
              Land Owners
            </p>
          </div>
          <Table dataset={dataset} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
