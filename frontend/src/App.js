import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import Donatorloginpage from './pages/Donatorloginpage';
import ReceiverLoginPage from './pages/ReceiverLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donator" element={<Donatorloginpage  />} />
        <Route path="/receiver" element={<ReceiverLoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
