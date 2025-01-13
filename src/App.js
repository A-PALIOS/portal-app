import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import PortalPage from './components/PortalPage';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<PortalPage />} />
          <Route path="/app1" element={<div>App 1</div>} />
          <Route path="/app2" element={<div>App 2</div>} />
          <Route path="/app3" element={<div>App 3</div>} />
          <Route path="/app4" element={<div>App 4</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
