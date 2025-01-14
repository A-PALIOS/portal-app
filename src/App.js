import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import PortalPage from './components/PortalPage';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<PortalPage/>} />
          <Route path="/app2" element={<div>App w</div>} />
          <Route path="/app3" element={<div>App 3</div>} />
          <Route path="/app4" element={<div>App 4</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
