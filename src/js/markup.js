import imageCard from '../template/image-card.hbs';
import refs from './refs';
// import { info, error, success, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function updateMarkup(images) {
  console.log(images);
  const markup = imageCard(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
