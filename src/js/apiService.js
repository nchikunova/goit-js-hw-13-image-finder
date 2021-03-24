const apiKey = '20819091-08c8bb3eae10a910768ed4869';

export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    return fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${this.query}&image_type=photo&page=${this.page}&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  incrementPage() {
    this.page += 1;
  },
};
