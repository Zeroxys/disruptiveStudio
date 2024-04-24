import React, { useState, useEffect } from 'react';
import apiFetch from '../../utils/apiFetch';

function Home({ token }) {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Función para obtener todas las categorías
  const getCategories = async () => {
    try {
      const res = await apiFetch('GET', 'http://localhost:3001/api/v1/categories', null, token);
      setCategories(res);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para crear una nueva categoría
  const createCategory = async () => {
    try {
      await apiFetch('POST', 'http://localhost:3001/api/v1/categories', { name: newCategoryName }, token);
      // Después de crear la categoría, actualiza la lista de categorías
      getCategories();
      // Limpia el campo de entrada de nombre de categoría
      setNewCategoryName('');
    } catch (error) {
      console.error(error);
    }
  };

  // Función para eliminar una categoría por su ID
  const deleteCategory = async (categoryId) => {
    try {
      await apiFetch('DELETE', `http://localhost:3001/api/v1/categories/${categoryId}`, null, token);
      // Después de eliminar la categoría, actualiza la lista de categorías
      getCategories();
    } catch (error) {
      console.error(error);
    }
  };

  // Función para filtrar las categorías por término de búsqueda
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Obtener las categorías cuando el componente se monte
    getCategories();
  }, []); // La dependencia vacía [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Categorías</h1>
        {/* Campo de búsqueda */}
        <input
          type="text"
          placeholder="Buscar categoría"
          className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Lista de categorías */}
        <ul className="mt-4">
          {filteredCategories.map((category) => (
            <li key={category.id} className="flex justify-between items-center border-b border-gray-400 py-2">
              <span>{category.name}</span>
              <button onClick={() => deleteCategory(category.id)} className="text-red-500 font-medium">Eliminar</button>
            </li>
          ))}
        </ul>
        {/* Campo para crear una nueva categoría */}
        <div className="flex">
          <input
            type="text"
            placeholder="Nombre de la nueva categoría"
            className="flex-1 mr-2 border-gray-300 rounded-md p-2"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button onClick={createCategory} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Crear categoría</button>
        </div>
      </div>
    // </div>
  );
}

export default Home;
