import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PharmacyDashboard from '../components/PharmacyDashboard';

const PharmacyProfile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user) {
      navigate('/pharmacy/login');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {user.pharmacyName}
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <PharmacyDashboard />
      </main>
    </div>
  );
};

export default PharmacyProfile; 