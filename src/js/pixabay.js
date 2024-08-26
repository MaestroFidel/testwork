const API_KEY = '45481518-557ec69fe97012c17356df52c';  // Вкажіть свій ключ

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    if (data.hits.length === 0) {
      return null;  // Якщо зображення не знайдені
    }

    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
