import React, { useState } from 'react';
import Input from '../../Components/Input';
import Password from '../../Components/Password';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div>
      <form
        className="col-12 col-lg-7"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <p className="h2">Login</p>
        <Input placeholder={'email'} value={email} handleChange={(e) => setEmail(e.target.value)} />
        <Password
          password={password}
          handleChange={(e) => setPassword(e.target.value)}
          showPwd={showPwd}
          clicked={() => setShowPwd(!showPwd)}
        />
      </form>
    </div>
  );
};

export default Login;
