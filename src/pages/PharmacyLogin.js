import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const PharmacyLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Pharmacy Portal
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to manage your pharmacy inventory
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <AuthForm mode="login" />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/pharmacy/register" className="font-medium text-blue-600 hover:text-blue-500">
              Register your pharmacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PharmacyLogin; 