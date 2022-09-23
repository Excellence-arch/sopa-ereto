import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Rows from './Rows';

const Table = () => {
  const allUsers = useSelector((state) => state.allUsersReducer.users);
  const [i, setI] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (allUsers.length == 0) {
      setMessage('There are no beneficiaries yet');
    }
  });

  const next = () => {
    if (i % 7 > 0) {
      setI(i + 6);
    } else {
      setDisableNext(true);
    }
  };
  const previous = () => {
    if (i == 0) {
      setDisablePrevious(true);
    } else {
      setI(i - 6);
    }
  };

  const profile = (id) => {
    navigate(`/admin/profile/${id}`);
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
          <Rows
            name={allUsers[i].name}
            img={allUsers[i].img}
            email={allUsers[i].email}
            role={allUsers[i].role}
            click={() => profile(i)}
          />
          <Rows
            name={allUsers[i + 1].name}
            img={allUsers[i + 1].img}
            email={allUsers[i + 1].email}
            role={allUsers[i + 1].role}
            click={() => profile(i + 1)}
          />
          <Rows
            name={allUsers[i + 2].name}
            img={allUsers[i + 2].img}
            email={allUsers[i + 2].email}
            role={allUsers[i + 2].role}
            click={() => profile(i + 2)}
          />
          <Rows
            name={allUsers[i + 3].name}
            img={allUsers[i + 3].img}
            email={allUsers[i + 3].email}
            role={allUsers[i + 3].role}
            click={() => profile(i + 3)}
          />
          <Rows
            name={allUsers[i + 4].name}
            img={allUsers[i + 4].img}
            email={allUsers[i + 4].email}
            role={allUsers[i + 4].role}
            click={() => profile(i + 4)}
          />
          <Rows
            name={allUsers[i + 5].name}
            img={allUsers[i + 5].img}
            email={allUsers[i + 5].email}
            role={allUsers[i + 5].role}
            click={() => profile(i + 5)}
          />
        </tbody>
      </table>
      <button onClick={previous} disabled={disablePrevious} className="btn">
        Previous
      </button>
      <button onClick={next} disabled={disableNext} className="btn">
        Next
      </button>
    </div>
  );
};

export default Table;
