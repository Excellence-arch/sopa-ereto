import React from 'react';
import NavBar from '../Layouts/NavBar';
import MaterialIcon from 'react-google-material-icons';
import TotalCard from '../Components/TotalCard';
import LatestTransactions from '../Components/LatestTransactions';
import { useSelector } from 'react-redux';
import LatestBlocks from '../Components/LatestBlocks';
import Graph from '../Components/Graph';
import '../assets/Styles/Home.css';
import DarkNav from '../Layouts/DarkNav';

const AllTransaction = () => {
  const status = useSelector((state) => state.onlineReducer.status);
  return (
    <div className="bg-pays">
      {status == true ? <DarkNav /> : <NavBar />}
      <div className="height w-100 bg-pa container-fluid">
        <div className="input-group ms-3 pt-5 pb-3 w-50 w-lg-50 rounds">
          <input
            type="search"
            placeholder="Search by ID"
            className="form-control bg-pays border-0 rounds-start"
          />
          <span className="input-group-text cursor-pointer new-color text-white rounds-end">
            <MaterialIcon icon="search" />
          </span>
        </div>
        <p
          className="bgs py-2 rounded px-3 ms-3 fw-light"
          style={{
            maxWidth: 'max-content',
            marginTop: '-5px'
          }}>
          <span className="text-blue fw-light">Sponsored</span> by your love for giving and your
          passion for{' '}
          <span className="text-success" style={{ fontSize: '19', textTransform: 'uppercas' }}>
            wildlife
          </span>
        </p>
      </div>
      <div className="d-flex flex-lg-row flex-column-reverse">
        <TotalCard />
        <Graph />
      </div>
      <div className="d-flex flex-column flex-lg-row">
        <LatestBlocks />
        <LatestTransactions />
      </div>
    </div>
  );
};

export default AllTransaction;
