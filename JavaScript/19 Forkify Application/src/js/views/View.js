import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElem.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElem.innerHTML = '';
  }
  loadSpinner() {
    const markup = `<div class="spinner">
      <svg>
        <use href="${icons}.svg#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElem.insertAdjacentHTML('afterbegin', markup);
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
    window.addEventListener('hashchange', handler);
  }

  renderError(message = this._message) {
    const markup = `<div class="error">
                          <div>
                            <svg>
                              <use href="${icons}.svg#icon-alert-triangle"></use>
                            </svg>
                          </div>
                          <p>${message}</p>
                        </div> `;
    this._clear();
    this._parentElem.insertAdjacentHTML('afterbegin', markup);
  }

  renderSuccess(success) {
    const markup = `  <div class="message">
                              <div>
                                <svg>
                                  <use href="${icons}.svg#icon-smile"></use>
                                </svg>
                              </div>
                              <p>${success}</p>
                            </div>
  `;
  }
}
