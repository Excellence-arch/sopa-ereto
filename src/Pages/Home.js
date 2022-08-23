import React from 'react';
// import BankCard from '../Components/BankCard.js';
import DefineStandingOrders from '../Components/DefineStandingOrders.js';
import MainAccount from '../Components/MainAccount.js';
import NavBar from '../Layouts/NavBar';
// import santander from '../assets/san-logo.webp';
// import city from '../assets/Citi.svg.png';
// import deutsche from '../assets/Deutsche.png';
// import credit from '../assets/Credit_Agricole.svg.png';
import AllExpenses from '../Components/AllExpenses.js';
import LatestTransactions from '../Components/LatestTransactions.js';

const Home = () => {
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
    <>
      <section className="container">
        <NavBar />
        <div className="d-flex mt-3 flex-column flex-lg-row">
          <MainAccount />
          <DefineStandingOrders />
        </div>
        <div className="my-4">
          <input type="text" placeholder="Search here" className="form-control my-3 w-100" />
        </div>
        {/* <div className='mt-4 d-flex flex-column flex-lg-row'>
          <BankCard name="Santander" no="88****9448" img={santander} amount="12.220" cents="650" />
          <BankCard name="CityBank" no="45****8854" img={city} amount="25.070" cents="55" />
          <BankCard name="Deutsche&nbsp;Bank" no="67****6821" img={deutsche} amount="570" cents="00" />
          <BankCard name="Credit&nbsp;Agricole" no="55****7655" img={credit} amount="2.680" cents="50" />
        </div> */}
        <div className="mt-4 row">
          <LatestTransactions data={all} />
          <AllExpenses />
        </div>
      </section>
    </>
  );
};

export default Home;

// Hello;
