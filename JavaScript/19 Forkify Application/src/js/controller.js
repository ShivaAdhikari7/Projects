import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resutlView';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
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

    // Getting the data:
    await model.loadRecipes(id);
    const { recipe } = model.state;

    // Rendering Recipes:
    recipeView.render(model.state.recipe);
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
  resultView.render(model.getResultPerPage(2));

  // Rendering the pagination:

  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchRecipes);
};
init();
