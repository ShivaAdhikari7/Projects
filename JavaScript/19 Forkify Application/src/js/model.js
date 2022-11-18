import { API_URL, RES_PER_PAGE } from './config.js';
import { getJson } from './helper.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipes = async function (id) {
  try {
    const data = await getJson(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
    };
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

export const getSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJson(`${API_URL}?search=${query}`);

    const { recipes } = data.data;

    state.search.results = recipes.map(recipe => {
      return {
        id: recipe.id,
        image: recipe.image_url,
        title: recipe.title,
        publisher: recipe.publisher,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getResultPerPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookMark = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookMark = function (recipe) {
  state.bookmarks.push(recipe);

  if (state.recipe.id === recipe.id) state.recipe.bookmarked = true;
  persistBookMark();
};

export const deleteBook = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);

  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookMark();
};

const init = () => {
  const storage = localStorage.getItem('bookmarks');

  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
