import React from 'react';
import NavBar from '../Layouts/NavBar';
import MaterialIcon from 'react-google-material-icons';
import TotalCard from '../Components/TotalCard';
import LatestTransactions from '../Components/LatestTransactions';
import LatestBlocks from '../Components/LatestBlocks';
import pics from '../assets/Deutsche.png';

const NewHome = () => {
  const test = [
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    },
    {
      picture: pics,
      id: 193892,
      amount: 723890
    }
  ];
  const all = [
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    },
    {
      day: 'Today',
      acc_no: '2194071585',
      phone_no: '08135654346',
      name: 'Michael Oladipupo',
      amount: '-15.00 $'
    }
  ];
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
      <div className="d-flex flex-column flex-lg-row">
        <LatestBlocks data={test} />
        <LatestTransactions data={all} />
      </div>
    </div>
  );
};

export default NewHome;
