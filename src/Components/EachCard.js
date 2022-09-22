import React from 'react';
import '../assets/Styles/EachCard.css';

// eslint-disable-next-line react/prop-types
const EachCard = ({ name, amount, img }) => {
  // function BlueLargeIcon() {
  //   return (
  //     <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
  //       {' '}
  //       <div>
  //         {' '}
  //         <FaBeer />{' '}
  //       </div>{' '}
  //     </IconContext.Provider>
  //   );
  // }
  return (
    <div className={`col-5 container ps-5 pt-2 px-2`}>
      <div className="d-flex">
        <div style={{ marginTop: '5px' }}>
          <img src={img} alt={name} width="25px" className="text-blue" />
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
