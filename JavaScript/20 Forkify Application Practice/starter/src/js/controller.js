import * as model from './model';
import paginationView from './views/paginationView';
import recipeView from './views/recipeView';
import resultView from './views/resultView';
import searchView from './views/searchView';

const controlRecipe = async function () {
  try {
    // Get the id:
    const id = window.location.hash.slice(1);
    if (!id) return;
    // Render the spinner:
    recipeView._loadSpinner();
    // Get the data :
    await model.loadRecipes(id);

    // Render the data:

    recipeView._render(model.state.recipe);
  } catch (err) {
    recipeView._renderError();
  }
};

const controlSearchRecipes = async () => {
  try {
    // Getting the query:
    const query = searchView._getQuery();
    console.log(query);
    // Render Spinner:
    resultView._loadSpinner();
    // Load Data:
    await model.getSearchResults(query);

    console.log(model.state.search.results);

    // Render the data:
    // resultView._render(model.state.search.results);

    resultView._render(model.getResultPerPage());

    // Render Pagination:
    paginationView._render(model.state.search);
  } catch (err) {
    resultView._renderError();
  }
};

const init = () => {
  recipeView.onclickHandler(controlRecipe);
  searchView.onSearchHandler(controlSearchRecipes);
};
init();
