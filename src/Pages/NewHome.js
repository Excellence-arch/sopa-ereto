import React from 'react';
import NavBar from '../Layouts/NavBar';
import MaterialIcon from 'react-google-material-icons';
import TotalCard from '../Components/TotalCard';

const NewHome = () => {
  return (
    <div className="">
      <NavBar />
      <div className="height w-100 colors container-fluid">
        <div className="input-group py-5 w-50 container">
          <input type="search" placeholder="Search by ID" className="form-control" />
          <span className="input-group-text cursor-pointer colors text-white">
            <MaterialIcon icon="search" />
          </span>
        </div>
      </div>
      <TotalCard />
    </div>
  );
};

export default NewHome;
