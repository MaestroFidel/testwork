// render-functions.js

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Функція для рендерингу галереї з картками зображень
export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';  // Очищуємо попередні результати

    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('gallery-card');

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imgElement.classList.add('gallery-image');

        const info = document.createElement('div');
        info.classList.add('gallery-info');

        info.innerHTML = `
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
        `;

        card.appendChild(imgElement);
        card.appendChild(info);
        gallery.appendChild(card);
    });
}

// Функція для показу повідомлень про помилки
export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

// Функція для повідомлення про відсутність результатів
export function showNoResultsMessage() {
    iziToast.warning({
        title: 'Warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}
