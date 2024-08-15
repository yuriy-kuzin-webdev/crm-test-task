import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.login({ username });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
