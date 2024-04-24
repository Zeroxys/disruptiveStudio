import React, { useState } from 'react';
import apiFetch from '../../../utils/apiFetch';

function RegistrationForm({ onRegister }) {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch('POST', 'http://localhost:3001/api/v1/register', registrationData);
      onRegister(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-4">Registrarse</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-white">Nombre de usuario</label>
        <input type="text" id="username" name="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-black text-black" value={registrationData.username} onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-black text-black" value={registrationData.email} onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
        <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-black text-black" value={registrationData.password} onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-white">Rol</label>
        <select  onChange={(e) => setRegistrationData({ ...registrationData, role: e.target.value })} id="role" name="role" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black" >
          <option value="admin">Admin</option>
          <option value="lector">Lector</option>
          <option value="creador">Creador</option>
        </select>
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarse</button>
    </form>
  );
}

export default RegistrationForm;
