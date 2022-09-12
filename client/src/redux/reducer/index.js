import {
	GET_ALL_DIETS,
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
	POST_RECIPE,
} from '../constants';

const initialState = {
	recipe: [],
	allRecipes: [],
	recipesDetail: [],
	diets: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_RECIPES:
			return { ...state, allRecipes: payload, recipe: payload };

		case GET_RECIPE_BY_NAME:
			return { ...state, recipe: payload || [] };

		case GET_RECIPE_DETAIL:
			return { ...state, recipesDetail: payload };

		case POST_RECIPE:
			return { ...state };

		case GET_ALL_DIETS:
			return { ...state, diets: payload };

		default:
			return { ...state };
	}
}

export default rootReducer;
