import React from 'react';

// eslint-disable-next-line react/prop-types
const Rows = ({ i, img, name, email, role }) => {
  return (
    // <div>
    <tr key={i} className="border-bottom">
      <td className="px-3">
        <input type={'checkbox'} style={{ marginTop: '14px' }} />
      </td>
      <td>
        <div className="d-flex">
          <p>
            <img src={img} alt={name} width="40px" className="rounded-circle" />
          </p>
          <p className="mt-3 ms-2" style={{ fontWeight: '450' }}>
            {name}
          </p>
        </div>
        <p style={{ marginLeft: '47px', marginTop: '-26px' }} className="text-muted fw-light">
          {email}
        </p>
      </td>
      <td>
        {' '}
        <p
          className={
            role == 'Tour Operator'
              ? 'bg-warning rounded-pill p-2 mt-3'
              : 'bg-success rounded-pill p-2 mt-3'
          }
          style={{ maxWidth: 'max-content' }}>
          {role}
        </p>
      </td>
      <td>
        <p className="mt-3">
          <button className="btn btn-light rounded-pill text-muted mx-2">Disable</button>
          <button className="btn btn-light rounded-pill text-muted mx-2">Edit</button>
        </p>
      </td>
    </tr>
  );
};

export default Rows;
