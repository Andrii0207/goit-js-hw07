import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(
      item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
  </a>
</div>`,
    )
    .join('');
}

const createGalleryItem = galleryMarkup(galleryItems);
galleryEl.innerHTML = createGalleryItem;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return console.log("It's not a picture, click on the picture");
  }
  const originalSizeImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`<div class="modal">
        <img src="${originalSizeImg}"/>
    </div>`);
  instance.show();

  window.addEventListener('keydown', onCloseModal);

  function onCloseModal(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
