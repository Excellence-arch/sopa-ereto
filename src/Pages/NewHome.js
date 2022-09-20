import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import HomeNav from '../Layouts/HomeNav';
import map from '../assets/map.png';

const NewHome = () => {
  return (
    <div className="africa">
      <div className="glassmorphisms h-100">
        <HomeNav />
        {/* <div className="landing">
        <p className="fw-bold text-center pt-4">
          <span className="text-blue fs-1">SOPA-</span>
          <span className="text-danger fs-1">ERETO</span>
        </p>
      </div> */}
        <div className="container d-flex flex-lg-row">
          <div className="pt-5 mt-5">
            <p
              className="animate__animated animate__backInDown text-white col-lg-7 col-12 mb-4"
              style={{ fontSize: '50px', lineHeight: '50px', fontFamily: 'Aref Ruqaa Ink, serif' }}>
              A world where no child&nbsp; life is torn apart by war
            </p>
            <p className="animate__animated animate__backInUp col-lg-6 col-12">
              Every five seconds one child dies in Africa due to malnutrition and related diseases,
              and you can help
            </p>
            <div>
              <button className="btn btn-dark">Donate Now</button>
              <button className="btn btn-outline-dark mx-2">
                Discover <FaArrowDown />
              </button>
            </div>
          </div>
          <div>
            <img src={map} alt="African Map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
