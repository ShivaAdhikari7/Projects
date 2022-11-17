import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resutlView';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import resutlView from './views/resutlView';
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  try {
    // Loading the spinner
    recipeView.loadSpinner();

    // Update results view to mark selected search result:
    resultView.update(model.getResultPerPage());
    // Getting the data:
    await model.loadRecipes(id);
    const { recipe } = model.state;

    // Rendering Recipes:
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchRecipes = async function () {
  // Loading the Spinner:
  resultView.loadSpinner();

  // Getting the query:
  const query = searchView.getQuery();
  if (!query) return;

  // Getting the data:
  await model.getSearchResults(query);

  // Rendering the data:
  resultView.render(model.getResultPerPage());

  // Rendering the pagination:

  paginationView.render(model.state.search);
};

const controlPagination = function (goto) {
  // Rendering the data:
  resutlView.render(model.getResultPerPage(goto));

  // Rendering the pagination:
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the servings:
  model.updateServings(newServings);

  // Render the view again:
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookMark(model.state.recipe);
  } else {
    model.deleteBook(model.state.recipe.id);
  }

  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookMark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchRecipes);
  paginationView.addhandlerClick(controlPagination);
};
init();
