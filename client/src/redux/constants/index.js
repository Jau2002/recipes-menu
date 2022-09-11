const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME';

const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';

const selectRecipes = (state) => state.recipe;

const selectDetails = (state) => state.recipesDetail;

export {
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
	selectRecipes,
	selectDetails,
};
