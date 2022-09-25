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

// function galleryMarkup(galleryItems) {
//   return galleryItems.reduce(
//     (acc, { original, preview, description }) =>
//       acc +
//       `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`,
//     '',
//   );
// }

const createGalleryItem = galleryMarkup(galleryItems);
galleryEl.innerHTML = createGalleryItem;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  //   if (!evt.target.classList.contains('gallery__image')) {
  //     return console.log("It's not a picture");
  //   }
  const originalSizeImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalSizeImg}"/>`);
  instance.show();

  window.addEventListener('keydown', onCloseModal);

  function onCloseModal(evt) {
    if (evt.code !== 'Escape') {
      return console.log("It's not Escape key");
    }
    instance.close();
  }
}
