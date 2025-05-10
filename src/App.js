import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PharmacyLogin from './pages/PharmacyLogin';
import PharmacyRegister from './pages/PharmacyRegister';
import PharmacyProfile from './pages/PharmacyProfile';
import Home from './pages/Home';
import './styles/main.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pharmacy/login" element={<PharmacyLogin />} />
            <Route path="/pharmacy/register" element={<PharmacyRegister />} />
            <Route path="/pharmacy/profile" element={<PharmacyProfile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 