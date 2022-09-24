import React from 'react';
import lock from '../assets/lock.png';
import { FaLock, FaPen } from 'react-icons/fa';
import img from '../assets/avatar.png';

// eslint-disable-next-line react/prop-types
const Rows = ({ i, name, phone, click, isActive }) => {
  return (
    // <div>
    <tr key={i} className="border-bottom cursor-pointer" onClick={click}>
      <td className="px-3">
        <input type={'checkbox'} style={{ marginTop: '14px' }} />
      </td>
      <td>
        <div className="d-flex">
          <p>
            <img src={img} alt={name} width="40px" className="rounded-circle mt-2" />
          </p>
          <p className="ms-2 text-dark" style={{ fontWeight: '450', marginTop: '12px' }}>
            {name}{' '}
            <span>
              <img src={lock} alt={'linked'} width="10px" />
            </span>
          </p>
        </div>
        <p style={{ marginLeft: '47px', marginTop: '-32px' }} className="text-muted fw-light">
          {phone}
        </p>
      </td>
      <td>
        {' '}
        <p
          className={
            isActive
              ? 'bg-green rounded-pill py-1 mt-3 text-white showRole'
              : 'bg-dark rounded-pill text-dark py-1 mt-3 showRole'
          }
          style={{ maxWidth: `max-content`, paddingLeft: '7px', paddingRight: '7px' }}>
          {isActive ? 'Active' : 'Not Active'}
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
