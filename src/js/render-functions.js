// render-functions.js

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Ініціалізація SimpleLightbox
let lightbox;

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';  // Очищуємо попередні результати

    images.forEach(image => {
        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.classList.add('gallery-link');
        link.setAttribute('data-lightbox', 'gallery');

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imgElement.classList.add('gallery-image');

        const card = document.createElement('div');
        card.classList.add('gallery-card');

        const info = document.createElement('div');
        info.classList.add('gallery-info');

        info.innerHTML = `
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
        `;

        link.appendChild(imgElement);
        card.appendChild(link);
        card.appendChild(info);
        gallery.appendChild(card);
    });

    // Ініціалізуємо або оновлюємо SimpleLightbox
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    } else {
        lightbox.refresh();
    }
}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function showNoResultsMessage() {
    iziToast.warning({
        title: 'Warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}
