import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import HomeNav from '../Layouts/HomeNav';
// import map from '../assets/map.png';

const NewHome = () => {
  return (
    <div>
      <HomeNav />
      {/* <div className="landing">
        <p className="fw-bold text-center pt-4">
          <span className="text-blue fs-1">SOPA-</span>
          <span className="text-danger fs-1">ERETO</span>
        </p>
      </div> */}
      <div className="container mt-5 pt-5">
        <div>
          <p
            className="animate__animated animate__backInDown text-dark col-lg-4 col-12 mb-4"
            style={{ fontSize: '50px', lineHeight: '50px', fontFamily: 'Aref Ruqaa Ink, serif' }}>
            A world where no child&nbsp; life is torn apart by war
          </p>
          <p className="animate__animated animate__backInUp col-lg-3 col-12">
            Every five seconds one child dies in Africa due to malnutrition and related diseases,
            and you can help
          </p>
        </div>
        <div>
          <button className="btn btn-dark">Donate Now</button>
          <button className="btn">
            Discover <FaArrowDown />
          </button>
        </div>
      </div>

      {/* <div>
        <img className="africa" src={map} alt={'African map'} />
      </div> */}
      {/* <p className="africa fs-1">sjsaoiji</p> */}
    </div>
  );
};

export default NewHome;
