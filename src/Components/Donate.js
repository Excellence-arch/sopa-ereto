import React from 'react';
import Lion from '../assets/MasaiLion.jpg';

const Donate = () => {
  return (
    <div className="bg-dark" style={{ position: 'sticky' }}>
      <div className="text-center mt-5 pt-5">
        <img src={Lion} alt="Massai Lion" width={'100px'} />
      </div>
      <div className="text-center mt-3 pb-5">
        <button className="btn btn-danger">SUBSCRIBE TO THE E-NEWS</button>
        <p className="text-white">Search This Site</p>
        <input type={'text'} placeholder="Enter Keyword then press Enter" />
        <br />
        <button className="btn btn-danger mt-3">Donate Now &#10084;</button>
      </div>
    </div>
  );
};

export default Donate;
