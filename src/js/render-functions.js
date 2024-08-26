export function renderGallery(images) {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';  // Очищення галереї перед новим відображенням
  
    const galleryMarkup = images.map(image => {
      return `
        <div class="gallery-item">
          <a href="${image.largeImageURL}" target="_blank" rel="noopener noreferrer">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes:</strong> ${image.likes}</p>
            <p><strong>Views:</strong> ${image.views}</p>
            <p><strong>Comments:</strong> ${image.comments}</p>
            <p><strong>Downloads:</strong> ${image.downloads}</p>
          </div>
        </div>
      `;
    }).join('');
    
  
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  }
  export function showError(message) {
    iziToast.error({
      title: 'Error',
      message: message,
    });
  }
  
  