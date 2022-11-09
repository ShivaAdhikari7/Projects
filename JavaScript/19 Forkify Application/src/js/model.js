import { API_URL } from './config.js';
import { getJson } from './helper.js';

export const state = {
  recipe: {},
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
    };
  } catch (err) {
    console.error(err);
  }
};
