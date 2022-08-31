import React from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="form-control w-75 my-3 border-0 checks check-weight py-2"
    />
  );
};

export default Input;
