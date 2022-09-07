import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MaterialIcon from 'react-google-material-icons';

const CreatePassword = () => {
  const [password, setPassword] = useState();
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-12 col-lg-4 bg-pays full-height">
          <p className="ms-5 mt-4">Step 2/2: password creation</p>
          <div className="" style={{ marginTop: '150px', marginLeft: '50px' }}>
            <p className="h2">Password recommendations</p>
            <p className="text-ash mb-0 mt-4">Must contain an uppercase letter</p>
            <p className="text-ash mb-0">Must contain a lowercase letter</p>
            <p className="text-ash mb-0">Must contain a number</p>
            <p className="text-ash mb-0">Must contain a special character</p>
          </div>
        </div>
        <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
          <div className="mb-5 mt-4">
            <p className="h3">Create a password</p>
          </div>

          <label className="fonts text-blue">Your Password</label>
          <div className="input-group mb-3 w-75">
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control check-weight"
              placeholder="Enter your password"
            />
            <span className="input-group-text cursor-pointer" onClick={() => setShowPwd(!showPwd)}>
              <MaterialIcon icon={showPwd ? 'visibility_off' : 'visibility'} />
            </span>
          </div>
          <p className="fonts text-blue">
            Don&rsquo;t recieve an email? Please check your spam folder
          </p>
          <p className="fonts text-blue">or try to resend the email</p>
          <div className="" style={{ marginTop: '190px' }}>
            <button
              className="btn border"
              onClick={() => {
                navigate('/accounts/login');
              }}>
              Back
            </button>
            <button className="btn new-color text-white" style={{ marginLeft: '490px' }}>
              Resend Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
