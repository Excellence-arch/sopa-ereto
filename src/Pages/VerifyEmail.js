import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const VerifyEmail = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="row">
        <div className="col-12 col-lg-4 bg-pays full-height">
          <p className="ms-5 mt-4 text-ash">Step 1/2: Email verification</p>
          <div className="" style={{ marginTop: '150px', marginLeft: '50px' }}>
            <p className="h2 text-blue">Please confirm</p>
            <p className="h2 text-blue">the validity of your</p>
            <p className="h2 text-blue">email address</p>
          </div>
        </div>
        <form className="col-12 col-lg-6 mx-5 mt-5 pt-5 w-50 ms-6">
          <div className="mb-5 mt-4">
            <p className="h3">Check your email </p>
            <p className="h3">For an OTP code</p>
          </div>

          <label className="fonts text-dark">Your OTP</label>
          <input
            className="form-control"
            placeholder="15687"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="fonts text-blue">
            Didn&rsquo;t recieve an email?{' '}
            <span className="text-danger">Please check your spam folder</span>
          </p>
          {/* <p className="fonts text-blue">or try to resend the email</p> */}
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

export default VerifyEmail;
