import React from 'react';
import MaterialIcon from 'react-google-material-icons';

// eslint-disable-next-line react/prop-types
const Password = ({ password, handleChange, showPwd, clicked }) => {
  //   const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="input-group mb-3 w-75">
      <input
        type={showPwd ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        className="form-control border-0 checks check-weight"
        placeholder="Enter your password"
      />
      <span className="input-group-text cursor-pointer border-0" onClick={clicked}>
        <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
      </span>
    </div>
  );
};

export default Password;
