class SearchView {
  _parentElement = document.querySelector('.search');

  _getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clear();
    return query;
  }
  _clear() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  onSearchHandler(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
