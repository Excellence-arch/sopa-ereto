import React from 'react';
import NavBar from '../Layouts/NavBar';
import MaterialIcon from 'react-google-material-icons';
import TotalCard from '../Components/TotalCard';
import LatestTransactions from '../Components/LatestTransactions';
import LatestBlocks from '../Components/LatestBlocks';
import { useSelector } from 'react-redux';
import Nav from '../Layouts/Nav';
import '../assets/Styles/Home.css';

const NewHome = () => {
  const status = useSelector((state) => state.onlineReducer.status);
  return (
    <div className="bg-pays">
      {status == true ? <Nav /> : <NavBar />}
      <div className="height w-100 new-color container-fluid">
        <div className="input-group py-5 w-100 w-lg-50 container">
          <input
            type="search"
            placeholder="Search by ID"
            className="form-control bg-pays border-0"
          />
          <span className="input-group-text cursor-pointer new-color text-white">
            <MaterialIcon icon="search" />
          </span>
        </div>
      </div>
      <TotalCard />
      <div className="d-flex flex-column flex-lg-row">
        <LatestBlocks />
        <LatestTransactions />
      </div>
    </div>
  );
};

export default NewHome;
