const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME';

const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';

const POST_RECIPE = 'POST_RECIPE';

const GET_ALL_DIETS = 'GET_ALL_DIETS';

const selectRecipes = (state) => state.recipe;

const selectDetails = (state) => state.recipesDetail;

const selectDiets = (state) => state.diets;

const selectAllRecipes = (state) => state.allRecipes;

export {
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
	POST_RECIPE,
	GET_ALL_DIETS,
	selectRecipes,
	selectDetails,
	selectDiets,
	selectAllRecipes,
};
