import { View } from './View';
import icons from '../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No results found';

  _generateMarkup() {
    return this._data
      .map(recipe => {
        return ` <li class="preview">
                    <a class="preview__link preview__link--active" href="#${recipe.id}">
                      <figure class="preview__fig">
                        <img src="${recipe.image}" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__title">${recipe.title}</h4>
                        <p class="preview__publisher">${recipe.publisher}</p>
                        <div class="preview__user-generated">
                          <svg>
                            <use href="${icons}#icon-user"></use>
                          </svg>
                        </div>
                      </div>
                    </a>
                </li>`;
      })
      .join('');
  }
  _generateMarkupPerview = recipe => {};
}
export default new ResultView();
