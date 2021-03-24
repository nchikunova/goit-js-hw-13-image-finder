import './styles.css';
import imageCard from './template/image-card.hbs';
import apiService from './js/apiService';
import refs from './js/refs';
import lightBox from './js/modal';
import { info, error, success, alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.query.value;
  if (apiService.query === '') {
    return alert({
      text: 'Please, enter your search query!',
      delay: 2000,
    });
  }

  document.body.style.height = '';
  refs.gallery.innerHTML = '';
  refs.form.reset();
  apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.fetchImages().then(images => {
    createMarkup(images);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  refs.loadMoreBtn.classList.add('is-hidden');
  const height = refs.gallery.scrollHeight + 100;
  document.body.style.height = document.body.scrollHeight + 780 + 'px';

  apiService.fetchImages().then(images => {
    createMarkup(images);
    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  });
});

function createMarkup(data) {
  const markup = imageCard(data);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
