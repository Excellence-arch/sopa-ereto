import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, getLandOwners as getland } from '../../actions';
import Table from '../../Components/Table';
import UserManagement from '../../Components/UserManagement';
import AdminDarkNav from '../../Layouts/AdminDarkNav';

const Dashboard = () => {
  const url = `${useSelector((state) => state.urlReducer.diam)}/mcs2`;
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [dataset, setDataset] = useState('rangers');
  const [validated, setValidated] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getRangers = () => {
    axios
      .get(`${url}/all-Rangers`)
      .then((res) => {
        setIsloading(false);
        setError(false);
        setData(res.data.data);
        dispatch(getDetails(res.data.data));
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

  const getValidatedRangers = () => {
    axios
      .get(`${url}/viewAll-Rangers`)
      .then((res) => {
        setIsloading(false);
        setError(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

  const getValidatedLandOwners = () => {
    axios
      .get(`${url}/viewAll-landOwners`)
      .then((res) => {
        setIsloading(false);
        setError(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    if (dataset == 'rangers' && validated == true) {
      getRangers();
    } else if (dataset == 'rangers' && validated == false) {
      getValidatedRangers();
    } else if (dataset == 'landowners' && validated == true) {
      getLandOwners();
    } else if (dataset == 'landowners' && validated == false) {
      getValidatedLandOwners();
    }
  }, [dataset, validated]);

  const getLandOwners = () => {
    setIsloading(true);
    axios
      .get(`${url}/all-landOwners`)
      .then((res) => {
        setIsloading(false);
        setData(res.data.data);
        dispatch(getland(res.data.value));
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
      <div className="container">
        <nav className="nav nav-pills flex-column flex-sm-row bg-white col-11">
          <span
            className={
              dataset == 'rangers'
                ? `flex-sm-fill text-sm-center nav-link cursor-pointer`
                : `flex-sm-fill text-sm-center nav-link cursor-pointer`
            }
            onClick={() => setDataset('rangers')}>
            Rangers
          </span>

          <span
            onClick={() => setDataset('landowners')}
            className={
              dataset == 'landowners'
                ? `flex-sm-fill text-sm-center nav-link cursor-pointer`
                : `flex-sm-fill text-sm-center nav-link cursor-pointer`
            }>
            Land Owners
          </span>
        </nav>
        <div className="d-flex">
          <nav className="nav nav-pills flex-column flex-sm-row col-6">
            <span
              className={
                dataset == 'rangers' && validated == true
                  ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
                  : `flex-sm-fill text-sm-center nav-link cursor-pointer`
              }
              onClick={() => {
                setDataset('rangers');
                setValidated(true);
              }}>
              Validated
            </span>
            <span
              onClick={() => {
                setDataset('rangers');
                setValidated(false);
              }}
              className={
                dataset == 'rangers' && validated == false
                  ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
                  : `flex-sm-fill text-sm-center nav-link cursor-pointer`
              }>
              Not Validated
            </span>
          </nav>
          <nav className="nav nav-pills flex-column flex-sm-row col-6">
            <span
              className={
                dataset == 'landowners' && validated == true
                  ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
                  : `flex-sm-fill text-sm-center nav-link cursor-pointer`
              }
              onClick={() => {
                setDataset('landowners');
                setValidated(true);
              }}>
              Validated
            </span>
            <span
              onClick={() => {
                setDataset('landowners');
                setValidated(false);
              }}
              className={
                dataset == 'landowners' && validated == false
                  ? `flex-sm-fill text-sm-center nav-link cursor-pointer active`
                  : `flex-sm-fill text-sm-center nav-link cursor-pointer`
              }>
              Not Validated
            </span>
          </nav>
        </div>

        {error && <div className="text-danger alert-danger alert text-center fs-2">{error}</div>}
        <div>
          {isloading ? (
            <div className="text-center">
              <span
                className="spinner-grow text-success bg-success"
                style={{ width: '10rem', height: '10rem' }}></span>
            </div>
          ) : (
            <Table allUsers={data} dataset={dataset} validated={validated} />
          )}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Dashboard;
