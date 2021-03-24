import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

const { gallery } = refs;

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
      <img width="900" height="600" src=${event.target.dataset.largeUrl} alt=""/>
      <button type="button" class="closeModalBtn"></button>
    </div>
`);
  instance.show();

  function onClose(event) {
    if (event.target.nodeName === 'BUTTON' || event.code === 'Escape') {
      instance.close();
    }

    window.removeEventListener('keydown', onClose);
  }

  const closeModalBtnRef = document.querySelector('.closeModalBtn');
  closeModalBtnRef.addEventListener('click', onClose);
  window.addEventListener('keydown', onClose);
}

export default onGalleryClick;
