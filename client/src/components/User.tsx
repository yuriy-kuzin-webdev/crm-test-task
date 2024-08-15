import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const User: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (userContext) {
      userContext.logout();
      navigate('/login');
    }
  };

  if (!userContext?.user) {
    return <div>Please log in to see user information.</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {userContext.user.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
