const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipes = async function () {
  const res = await fetch(
    'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`${data.message}(${res.status})`);
  }

  let { recipe } = data.data;
  console.log(recipe);
  recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };

  // Rendering Recipes:
};
showRecipes();
