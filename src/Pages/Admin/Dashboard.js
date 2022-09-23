import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
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
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getRangers = () => {
    axios
      .get(`${url}/all-Rangers`)
      .then((res) => {
        setIsloading(false);
        setError(false);
        setData(res.data.data);
        dispatch(actions.getDetails(res.data.data));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    if (dataset == 'rangers') {
      getRangers();
    } else {
      getLandOwners();
    }
  }, [dataset]);

  const getLandOwners = () => {
    setIsloading(true);
    axios
      .get(`${url}/all-landOwners`)
      .then((res) => {
        setIsloading(false);
        setData(res.data.data);
        dispatch(actions.getLandOwners(res.data.value));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

  return (
    <div className="bg-pays height-and-width">
      <AdminDarkNav />
      <UserManagement />
      <nav className="nav nav-pills flex-column flex-sm-row">
        <span
          className={
            dataset == 'rangers'
              ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
              : `flex-sm-fill text-sm-center nav-link cursor-pointer`
          }
          onClick={() => setDataset('rangers')}>
          Rangers
        </span>
        <span
          onClick={() => setDataset('landowners')}
          className={
            dataset == 'landowners'
              ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
              : `flex-sm-fill text-sm-center nav-link cursor-pointer`
          }>
          Land Owners
        </span>
      </nav>
      {error && <div className="text-danger alert-danger alert text-center fs-2">{error}</div>}

      {/* {!error && !isloading && ( */}
      <div>
        {/* <div className="row">
            <p className="cursor-pointer mx-auto" onClick={() => setDataset('rangers')}>
              Rangers
            </p>
            <p
              className="mx-auto cursor-pointer"
              onClick={() => {
                getLandOwners;
                setDataset('landowners');
              }}>
              Land Owners
            </p> */}
        {/* </div> */}
        {isloading ? (
          <div className="text-center">
            <span
              className="spinner-grow text-success bg-success"
              style={{ width: '10rem', height: '10rem' }}></span>
          </div>
        ) : (
          <Table allUsers={data} dataset={dataset} />
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Dashboard;
