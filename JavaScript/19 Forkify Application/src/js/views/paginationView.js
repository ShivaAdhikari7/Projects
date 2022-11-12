import View from './View.js';
import icons from '../../img/icons.svg';
class PaginationView extends View {
  _parentElem = document.querySelector('.pagination');

  addhandlerClick(handler) {
    this._parentElem.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }
  generateNextButton(currentPage) {
    return `<button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
                    <span>Page ${currentPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}.svg#icon-arrow-right"></use>
                    </svg>
              </button>`;
  }

  generatePerviousButton(currentPage) {
    return `<button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}.svg#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>`;
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    //If there are one page and other:
    if (currentPage == 1 && numPages > 1) {
      return this.generateNextButton(currentPage);
    }

    // If we are in other page:
    if (currentPage < numPages) {
      return ` ${this.generatePerviousButton(
        currentPage
      )}${this.generateNextButton(currentPage)}
               
                 `;
    }

    // If we are in last page:
    if (currentPage === numPages && numPages > 1) {
      return this.generatePerviousButton(currentPage);
    }

    // Only one page:
    return '';
  }
}

export default new PaginationView();
