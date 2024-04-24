import React, { useState } from 'react';
import RegistrationForm from './components/forms/registerForm/RegisterForm';
import LoginForm from './components/forms/loginForm/LoginForm';
import Home from './components/home/Home';

function Login() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = (userData) => {
    if(userData.token) {
      setIsLoggedIn(true);
      setToken(userData.token)
    }
  };

  const handleRegister = (userData) => {
    console.log('Usuario registrado:', userData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Gestión de archivos multimedia</h1>
        <div>
          {isLoggedIn ? (
            <Home token={token}/>
          ) : showRegistrationForm ? (
            <>
              <RegistrationForm onRegister={handleRegister} />
              <div className="mt-4">
                <button onClick={() => setShowRegistrationForm(!showRegistrationForm)} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {showRegistrationForm ? 'Iniciar sesión' : 'Registrarse'}
                </button>
              </div>
            </>
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <div className="mt-4">
                <button onClick={() => setShowRegistrationForm(!showRegistrationForm)} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {showRegistrationForm ? 'Iniciar sesión' : 'Registrarse'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
