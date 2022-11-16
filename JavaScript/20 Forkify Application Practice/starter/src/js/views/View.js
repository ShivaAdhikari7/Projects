import icons from '../../img/icons.svg';
export class View {
  _data;
  _render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _loadSpinner() {
    const markup = ` <div class="spinner">
                          <svg>
                          <use href="${icons}#icon-loader"></use>
                          </svg>
                      </div>
      
  `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _renderError(message = this._errorMessage) {
    const markup = ` <div class="error">
                          <div>
                          <svg>
                              <use href="${icons}#icon-alert-triangle"></use>
                          </svg>
                          </div>
                          <p>${message}</p>
                      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _renderSuccess(message = this._successMessage) {
    const markup = `<div class="message">
                          <div>
                              <svg>
                              <use href="${icons}#icon-smile"></use>
                              </svg>
                          </div>
                          <p>${message}</p>
                      </div>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
