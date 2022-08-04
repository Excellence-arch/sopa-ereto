import React from 'react';
import BankCard from '../Components/BankCard.js';
import DefineStandingOrders from '../Components/DefineStandingOrders.js';
import MainAccount from '../Components/MainAccount.js';
import NavBar from "../Layouts/NavBar";
import santander from "../assets/san-logo.webp";
import city from "../assets/Citi.svg.png";
import deutsche from "../assets/Deutsche.png";
import credit from "../assets/Credit_Agricole.svg.png"

const Home = () => {
  return (
    <>
      <section className='container'>
        <NavBar />
        <div className='d-flex mt-3 flex-column flex-lg-row'>
          <MainAccount />
          <DefineStandingOrders />
        </div>
        <div className='mt-4 d-flex flex-column flex-lg-row'>
          <BankCard name="Santander" no="88****9448" img={santander} amount="12.220" cents="650" />
          <BankCard name="CityBank" no="45****8854" img={city} amount="25.070" cents="55" />
          <BankCard name="Deutsche&nbsp;Bank" no="67****6821" img={deutsche} amount="570" cents="00" />
          <BankCard name="Credit&nbsp;Agricole" no="55****7655" img={credit} amount="2.680" cents="50" />
        </div>
      </section>
    </>
  )
}

export default Home;