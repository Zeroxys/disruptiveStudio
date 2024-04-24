import React, { useState, useEffect } from 'react';
import apiFetch from '../../utils/apiFetch';

function Home({ token }) {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newTopicName, setNewTopicName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [permitImages, setPermitImages] = useState(false);
  const [permitVideos, setPermitVideos] = useState(false);
  const [permitTexts, setPermitTexts] = useState(false);

  const getCategories = async () => {
    try {
      const res = await apiFetch('GET', 'http://localhost:3001/api/v1/categories', null, token);
      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createCategory = async () => {
    try {
      const categoryData = {
        name: newCategoryName,
        permitImages,
        permitVideos,
        permitTexts,
        topics: [{ name: newTopicName }]  // Asegúrate de que el backend puede manejar esto
      };
      await apiFetch('POST', 'http://localhost:3001/api/v1/categories', categoryData, token);
      getCategories();
      setNewCategoryName('');
      setNewTopicName('');
      setPermitImages(false);
      setPermitVideos(false);
      setPermitTexts(false);
    } catch (error) {
      console.error(error);
    }
  };
  

  const deleteCategory = async (categoryId) => {
    try {
      await apiFetch('DELETE', `http://localhost:3001/api/v1/categories/${categoryId}`, null, token);
      getCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCategories = categories?.filter((category) => {
    console.log(category)
    return category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  });

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="max-w-md w-full space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Categorías</h1>
      <input
        type="text"
        placeholder="Buscar categoría"
        className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 text-black mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="mb-4">
        {filteredCategories.map((category) => (
          <li key={category.id} className="flex justify-between items-center border-b border-gray-400 py-2">
            <span>{category.name}</span>
            <button onClick={() => deleteCategory(category.id)} className="text-red-500 font-medium">Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-3 text-black">Añadir nueva categoría</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <input
            type="text"
            placeholder="Nombre de la categoría"
            className="flex-1 border-gray-300 rounded-md p-2 text-black"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre de la temática"
            className="flex-1 border-gray-300 rounded-md p-2 text-black"
            value={newTopicName}
            onChange={(e) => setNewTopicName(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={permitImages}
              onChange={() => setPermitImages(!permitImages)}
            />
            <p className='text-black'>Imágenes</p>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={permitVideos}
              onChange={() => setPermitVideos(!permitVideos)}
            />
            <p className='text-black'>Vídeos</p>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={permitTexts}
              onChange={() => setPermitTexts(!permitTexts)}
            />
            <p className='text-black'>Textos</p>
          </label>
        </div>
        <button onClick={createCategory} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Crear categoría
        </button>
      </div>
    </div>
  );
  
}

export default Home;
