import View from './View.js';
import icons from '../../img/icons.svg';

class ResultView extends View {
  _parentElem = document.querySelector('.results');
  _message = `Sorry no any search result found`;

  _generateMarkup() {
    return this._data.map(this.generateMarkupPreview).join('');
  }
  generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
    <a class="preview__link ${
      result.id === id ? `preview__link--active` : ''
    }" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
  }
}
export default new ResultView();
