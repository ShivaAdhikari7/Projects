import { API_URL, RES_PER_PAGE } from './config';
import { getJsonData } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultPerPage: RES_PER_PAGE,
  },
};

export const loadRecipes = async id => {
  try {
    const data = await getJsonData(`${API_URL}${id}`);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const getSearchResults = async function (query) {
  try {
    state.search.query = query;
    const { data } = await getJsonData(`${API_URL}?search=${query}`);
    state.search.results = data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        title: rec.title,
        publisher: rec.publisher,
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getResultPerPage = (page = state.search.page) => {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;

  return state.search.results.slice(start, end);
};
