/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Rows from './Rows';
// eslint-disable-next-line react/prop-types
const Table = ({ allUsers, dataset }) => {
  // const [i, setI] = useState(0);
  // const [disableNext, setDisableNext] = useState(false);
  // const [disablePrevious, setDisablePrevious] = useState(true);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (allUsers.length == 0) {
      setMessage('There are no beneficiaries yet');
    }
  });

  // const next = () => {
  //   if (i % 7 > 0) {
  //     setI(i + 6);
  //   } else {
  //     setDisableNext(true);
  //   }
  // };
  // const previous = () => {
  //   if (i == 0) {
  //     setDisablePrevious(true);
  //   } else {
  //     setI(i - 6);
  //   }
  // };

  const profile = (id) => {
    if (dataset == 'rangers') {
      navigate(`/admin/profile/r${id}`);
    } else {
      navigate(`/admin/profile/l${id}`);
    }
  };
  return (
    <div className="col-12 col-lg-11 mt-5" style={{ marginLeft: '50px' }}>
      {message && <div className="alert alert-success text-success">{message}</div>}
      <table className="bg-white table rounds-start rounds-end">
        {/* <thead className="border-bottom"> */}
        <tr className="border-bottom">
          <td className="p-3">
            <input type={'checkbox'} />
          </td>
          <td>
            <span className="name">Name</span>
          </td>
          <td>
            {' '}
            <span className="role">Beneficiary Status</span>
          </td>
          <td>
            <span className="action">Actions</span>
          </td>
        </tr>
        {/* </thead> */}
        <tbody>
          {allUsers.map((val, i) => (
            <Rows
              key={i}
              name={val.firstName + ' ' + val.lastName}
              phone={val.phone}
              gender={val.gender}
              click={() => profile(val.idNumber)}
            />
          ))}
        </tbody>
      </table>
      {/* <button onClick={previous} disabled={disablePrevious} className="btn">
        Previous
      </button>
      <button onClick={next} disabled={disableNext} className="btn">
        Next
      </button> */}
    </div>
  );
};

export default Table;
