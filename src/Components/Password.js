import React from 'react';
import MaterialIcon from 'react-google-material-icons';

// eslint-disable-next-line react/prop-types
const Password = ({ password, handleChange, showPwd, clicked }) => {
  //   const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="input-group my-3 w-75">
      <input
        type={showPwd ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        className="form-control border-0 checks check-weight"
        placeholder="Password"
      />
      <span className="input-group-text cursor-pointer border-0" onClick={clicked}>
        <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
      </span>
    </div>
  );
};

export default Password;
