import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <img src="../imelo.png" alt="IMELO" className="h-16 w-auto" />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Bienvenue sur IMELO</h1>
        <p className="text-center text-gray-600 mb-12">Découvrez un univers musical communautaire unique.</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={navigateToSignup}
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            S'inscrire avec Google
          </button>
          <button
            onClick={navigateToLogin}
            className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Connexion avec Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
