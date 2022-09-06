import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const allUsers = useSelector((state) => state.allUsersReducer.users);
  const [i, setI] = useState(0);
  return (
    <div>
      <table className="bg-white">
        <thead>
          <tr>
            <td>
              <input type={'checkbox'} />
            </td>
            <td>Name</td>
            <td>User Role</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr key={i}>
            <td>
              <input type={'checkbox'} />
            </td>
            <td>
              <img src={allUsers[i].img} alt={allUsers[i].name} />
            </td>
            <td>
              <p>{allUsers[i].name}</p>
              <p>{allUsers[i].email}</p>
            </td>
            <td>{allUsers[i].role}</td>
          </tr>
        </tbody>
      </table>
      <button>Previous</button>
      <button onClick={() => setI(i + 7)}>Next</button>
    </div>
  );
};

export default Table;
