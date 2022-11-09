import * as model from './model.js';
import recipeView from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
    console.log(err);
  }
};

window.addEventListener('load', controlRecipes);
window.addEventListener('hashchange', controlRecipes);
