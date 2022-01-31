import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const galleryEl = document.querySelector('.gallery');

function createImageCards (galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
          return `<a class='gallery__item' href='${original}'>
                       <img
                       class='gallery__image'
                       src='${preview}' 
                       alt='${description}'>
                    </a>`;
    })
      .join('');
}

galleryEl.insertAdjacentHTML('beforeend', createImageCards(galleryItems));

console.log(galleryEl);

    const lightbox = new SimpleLightbox('.gallery a', {
        'captionType': 'atr',
        'captionsData': 'alt',
        'captionPosition': 'bottom',
        'captionDelay': 250,

    });

