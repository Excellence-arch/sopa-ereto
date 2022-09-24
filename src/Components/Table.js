/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Rows from './Rows';
// eslint-disable-next-line react/prop-types
const Table = ({ allUsers, dataset }) => {
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (allUsers.length == 0) {
      setMessage('There are no beneficiaries yet');
    } else {
      setMessage(false);
    }
  });

  const profile = (id) => {
    if (dataset == 'rangers') {
      navigate(`/admin/profile/r${id}`);
    } else {
      navigate(`/admin/profile/l${id}`);
    }
  };
  return (
    <div className="col-12 col-lg-11 mt-5">
      {message && <div className="alert alert-success text-success">{message}</div>}
      <table className="bg-white table rounds-start rounds-end">
        <tr className="border-bottom">
          <td className="p-3">
            <input type={'checkbox'} />
          </td>
          <td>
            <span className="name">Name</span>
          </td>
          <td>
            <span className="action">Actions</span>
          </td>
        </tr>
        <tbody>
          {allUsers.map((val, i) => (
            <Rows
              key={i}
              name={val.firstName + ' ' + val.lastName}
              phone={val.phone}
              isActive={val.isActive}
              click={() => profile(i)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
