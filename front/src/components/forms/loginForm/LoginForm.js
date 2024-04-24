import React, { useState } from 'react';
import apiFetch from '../../../utils/apiFetch';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch('POST', 'http://localhost:3001/api/v1/login', { email, password });
      onLogin(res); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-4">Iniciar sesión</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
        <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Iniciar sesión</button>
    </form>
  );
}


export default LoginForm;
