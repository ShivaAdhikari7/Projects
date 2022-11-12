import View from './View.js';
class PaginationView extends View {
  _parentElem = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    //If there are one page and other:
    if (this._data.page == 1 && numPages > 1) {
      return 'First page with other pages';
    }

    // If we are in other page:
    if (this._data.page < numPages) {
      return 'Other Page';
    }

    // If we are in last page:
    if (this._data.page === numPages && numPages > 1) {
      return 'last Page';
    }

    // Only one page:
    return 'Single Page';
  }
}

export default new PaginationView();
