import { fetchImages } from './js/pixabay.js';
import { renderGallery, showError } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.search-form');
let lightbox;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchQuery = form.elements.query.value.trim();

  if (!searchQuery) {
    showError('Please enter a search query!');
    return;
  }

  try {
    const images = await fetchImages(searchQuery);

//     if (!images) {
//       showError('Sorry, there are no images matching your search query. Please try again!');
//       return;
//     }

//     renderGallery(images);

//   } catch (error) {
//     showError('An error occurred while fetching images.');
//   }
// });
if (lightbox) {
    lightbox.refresh(); // Якщо вже існує екземпляр, оновлюємо його
  } else {
    lightbox = new SimpleLightbox('.gallery a'); // Створюємо новий екземпляр
  }

} catch (error) {
  showError('An error occurred while fetching images.');
}
});
