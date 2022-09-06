import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Rows from './Rows';

const Table = () => {
  const allUsers = useSelector((state) => state.allUsersReducer.users);
  const [i, setI] = useState(0);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(true);

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
  return (
    <div className="container col-12 mt-5">
      <table className="bg-white table rounds-start rounds-end">
        <thead>
          <tr>
            <td className="p-3">
              <input type={'checkbox'} />
            </td>
            <td>Name</td>
            <td>User Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <Rows
            name={allUsers[i].name}
            img={allUsers[i].img}
            email={allUsers[i].email}
            role={allUsers[i].role}
          />
          <Rows
            name={allUsers[i + 1].name}
            img={allUsers[i + 1].img}
            email={allUsers[i + 1].email}
            role={allUsers[i + 1].role}
          />
          <Rows
            name={allUsers[i + 2].name}
            img={allUsers[i + 2].img}
            email={allUsers[i + 2].email}
            role={allUsers[i + 2].role}
          />
          <Rows
            name={allUsers[i + 3].name}
            img={allUsers[i + 3].img}
            email={allUsers[i + 3].email}
            role={allUsers[i + 3].role}
          />
          <Rows
            name={allUsers[i + 4].name}
            img={allUsers[i + 4].img}
            email={allUsers[i + 4].email}
            role={allUsers[i + 4].role}
          />
          <Rows
            name={allUsers[i + 5].name}
            img={allUsers[i + 5].img}
            email={allUsers[i + 5].email}
            role={allUsers[i + 5].role}
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
