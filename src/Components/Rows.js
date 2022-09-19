import React from 'react';
import lock from '../assets/lock.png';
import { FaLock, FaPen } from 'react-icons/fa';

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
            <img src={img} alt={name} width="40px" className="rounded-circle mt-2" />
          </p>
          <p className="ms-2" style={{ fontWeight: '450', marginTop: '12px' }}>
            {name}{' '}
            <span>
              <img src={lock} alt={'linked'} width="10px" />
            </span>
          </p>
        </div>
        <p style={{ marginLeft: '47px', marginTop: '-32px' }} className="text-muted fw-light">
          {email}
        </p>
      </td>
      <td>
        {' '}
        <p
          className={
            role == 'Ranger'
              ? 'bg-yellow rounded-pill p-2 mt-3 showRole'
              : 'bg-green rounded-pill p-2 mt-3 showRole'
          }
          style={{ maxWidth: `max-content` }}>
          {role}
        </p>
      </td>
      <td>
        <p className="mt-3 showAction">
          <button className="btn btn-light rounded-pill text-muted mx-2">
            {' '}
            <span>
              <FaLock className="text-muted me-1" style={{ marginTop: '-4px' }} />
            </span>{' '}
            Disable
          </button>
          <button className="btn btn-light rounded-pill text-muted mx-2">
            <span>
              <FaPen className="me-1" style={{ marginTop: '-4px' }} />
            </span>
            Edit
          </button>
        </p>
      </td>
    </tr>
  );
};

export default Rows;
