import {
	GET_ALL_RECIPES,
	GET_RECIPE_BY_NAME,
	GET_RECIPE_DETAIL,
} from '../constants';

const initialState = {
	recipe: [],
	allRecipes: [],
	recipesDetail: [],
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_RECIPES:
			return { ...state, allRecipes: payload, recipe: payload };

		case GET_RECIPE_BY_NAME:
			return { ...state, recipe: payload || [] };

		case GET_RECIPE_DETAIL:
			return { ...state, recipesDetail: payload };

		default:
			return { ...state };
	}
}

export default rootReducer;
