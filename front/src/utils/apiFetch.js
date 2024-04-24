async function apiFetch(method = 'GET', endpoint, body = null, token = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
  };

  console.log(await JSON.stringify(body))

  if (body) {
    options.body = await JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, options);

    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error.message);
    throw error;
  }
}

export default apiFetch
