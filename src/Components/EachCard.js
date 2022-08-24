import React from 'react';

// eslint-disable-next-line react/prop-types
const EachCard = ({ name, amount }) => {
  return (
    <div className="col-6 border-bottom border-end container ps-5">
      <div>
        <p className="text-secondary">{name}</p>
        <p className="fw-bold">{amount}</p>
      </div>
    </div>
  );
};

export default EachCard;
