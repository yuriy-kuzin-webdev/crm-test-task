import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<div />} />
          <Route path="/user" element={<div />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
