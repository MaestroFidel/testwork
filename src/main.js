// main.js

import { fetchImages } from './js/pixabay.js';
import { renderGallery, showError, showNoResultsMessage } from './js/render-functions.js';

document.querySelector('.search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const query = event.currentTarget.elements.searchQuery.value.trim();
    
    if (query === '') {
        showError('Search query cannot be empty!');
        return;
    }

    try {
        const images = await fetchImages(query);
        renderGallery(images);
    } catch (error) {
        if (error.message === "No images found") {
            showNoResultsMessage();
        } else {
            showError('Something went wrong. Please try again later.');
        }
    }
});


