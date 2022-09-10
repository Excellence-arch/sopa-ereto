import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ name, img, i }) => {
  return (
    <div key={i} className="borders mx-2 my-card">
      <img src={img} width="71px" className="rounds-start rounds-end text-center m-3" />
      <p className="px-3 ms-2">{name}</p>
    </div>
  );
};

export default Card;
