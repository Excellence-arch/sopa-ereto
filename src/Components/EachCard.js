import React from 'react';
import '../assets/Styles/EachCard.css';

// eslint-disable-next-line react/prop-types
const EachCard = ({ name, amount, img }) => {
  return (
    <div className="col-6 border-bottom border-end container ps-5 pt-3 p-4">
      <div className="d-flex">
        <div className="position-absolute" style={{ marginTop: '5px' }}>
          <img src={img} alt={name} width="25px" />
        </div>
        <div className="ms-5">
          <p className="font-change" style={{ marginBottom: '0' }}>
            {name}
          </p>
          <p style={{ marginTop: '0' }}>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default EachCard;
