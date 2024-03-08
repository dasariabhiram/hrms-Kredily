
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from the useAuth hook
    logout();

    // Redirect to the login page after successful logout
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Logout</h2>
        <p className="text-gray-300">
          Are you sure you want to logout?{' '}
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
        <p className="mt-2 text-sm text-gray-300">
          Not sure? <Link to="/" className="text-blue-400 hover:underline">Go back</Link>
        </p>
      </div>
    </div>
  );
};

export default Logout;
