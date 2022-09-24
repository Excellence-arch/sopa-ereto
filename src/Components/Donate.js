import React from 'react';
import Lion from '../assets/MasaiLion.jpg';

const Donate = () => {
  return (
    <div className="bg-dark px-5 mt-5 py-5 rounds-start rounds-end" style={{ width: '300px' }}>
      <div className="text-center mt-5 pt-5">
        <img src={Lion} alt="Massai Lion" width={'100px'} />
      </div>
      <div className="text-center mt-3 pb-5">
        <button className="btn btn-danger px-4">VIEW TOURISM GALLERY</button>
        <p className="text-white">Search This Site</p>
        <input type={'text'} placeholder="Enter Keyword then press Enter" className="p-2 px-4" />
        <br />
        <button className="btn btn-danger mt-3">Donate Now &#10084;</button>
      </div>
    </div>
  );
};

export default Donate;
