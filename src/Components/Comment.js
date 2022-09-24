/* eslint-disable react/prop-types */
import React from 'react';
import avatar from '../assets/avatar.png';

const Comment = ({ message, name, key }) => {
  return (
    <div key={key}>
      <div className="d-flex">
        <div>
          <img src={avatar} alt="profile picture" width={'30px'} className="rounded-circle" />
        </div>
        <div className="ms-2">
          <p className="fw-bold text-dark" style={{ marginTop: '3px', fontSize: '10px' }}>
            {name}
          </p>
          <p style={{ marginTop: '-15px' }}>
            {message.length > 23 ? `${message.slice(0, 23)}...` : message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
