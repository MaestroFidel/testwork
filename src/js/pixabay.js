

export async function fetchImages(query) {
  const API_KEY = '45481518-557ec69fe97012c17356df52c';
  const BASE_URL = 'https://pixabay.com/api/';
  
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.hits.length === 0) {
          throw new Error("No images found");
      }
      
      return data.hits;
  } catch (error) {
      throw error;
  }
}
