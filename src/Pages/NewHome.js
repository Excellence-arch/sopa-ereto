import React from 'react';
import NavBar from '../Layouts/NavBar';
import MaterialIcon from 'react-google-material-icons';
import Graph from '../Components/Graph';

const NewHome = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="h-25 w-100 colors">
        <div className="input-group py-5 w-50 container">
          <input type="search" placeholder="Search by ID" className="form-control" />
          <span className="input-group-text cursor-pointer colors text-white">
            <MaterialIcon icon="search" />
          </span>
        </div>
      </div>
      <Graph />
    </div>
  );
};

export default NewHome;
